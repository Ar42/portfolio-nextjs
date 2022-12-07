import { ChangeEvent, useState } from "react";
const initialData = {
  name: "",
  email: "",
  message: "",
};

const Message = () => {
  const [data, setData] = useState(initialData);

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
  };

  return (
    <>
      <h2 className="text-base font-bold mb-4">Get in touch</h2>

      <div className="bg-gray-200p-4 rounded-md">
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleInputChange}
          className="block border-b border-black w-full mb-6 placeholder-gray-600 outline-none"
          placeholder="Enter your name"
        />

        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className="block border-b border-black w-full mb-6 placeholder-gray-600 outline-none"
        />

        <textarea
          name="message"
          value={data.message}
          onChange={handleInputChange}
          placeholder="write something..."
          className="block border border-black w-full mb-6 placeholder-gray-600 outline-none"
        ></textarea>

        <button
          className="bg-green-500 text-white px-2 py-0.5"
          onClick={onSubmit}
        >
          submit
        </button>
      </div>
    </>
  );
};

export default Message;
