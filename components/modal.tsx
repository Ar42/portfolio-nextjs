import { CrossIcon } from "./Icons/icons";

interface ModalINT {
  isModalOpen: boolean;
  setIsModalOpen: Function;
  containerClassName?: string;
  title?: string;
  message: string;
  messageClassName?: string;
}

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  containerClassName,
  title,
  message,
  messageClassName,
}: ModalINT) => {
  const handleModalOpenClose = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      {isModalOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-gray-400 bg-opacity-90">
          <div
            className={`absolute top-0 bottom-0 left-0 right-0 z-20 w-11/12 p-4 mx-auto mt-10 text-black bg-white rounded-md lg:w-1/3 h-max ${containerClassName}`}
          >
            <div className="flex items-center justify-between mb-4">
              <h2>{title && title}</h2>
              <button onClick={handleModalOpenClose}>
                <CrossIcon stroke="#000" />
              </button>
            </div>

            <p className={`${messageClassName}`}>{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
