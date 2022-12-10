import { ChangeEvent, useState } from "react";
import Modal from "../../components/modal";
const initialData = {
  name: "",
  email: "",
  message: "",
};

const Message = () => {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    setData(initialData);
    setIsModalOpen(true);
  };

  return (
    <>
      <h2 className="mb-4 text-base font-bold">Get in touch</h2>

      <div className="rounded-md bg-gray-200p-4">
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleInputChange}
          className="block w-full px-1.5 py-1 mb-6 text-black placeholder-gray-600 border-b border-black rounded-sm outline-none"
          placeholder="Enter your name"
        />

        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className="block w-full px-1.5 py-1 mb-6 text-black placeholder-gray-600 border-b border-black rounded-sm outline-none"
        />

        <textarea
          name="message"
          value={data.message}
          onChange={handleInputChange}
          placeholder="write something..."
          className="block w-full px-1.5 py-1 mb-6 text-black placeholder-gray-600 border border-black rounded-sm outline-none"
        ></textarea>

        <button
          className="bg-green-1000 text-white px-2 py-0.5"
          onClick={onSubmit}
        >
          submit
        </button>
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          message="currently your message in not reaching to the author..."
          messageClassName="text-red-500"
        />
      </div>
    </>
  );
};

export default Message;
