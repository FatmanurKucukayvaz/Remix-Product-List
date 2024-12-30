import { ModalProps } from "../types/types";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, type, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="p-4">{children}</div>
        <div className="px-4 py-2 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className={
              type == "error"
                ? "px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded transition"
                : "px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded transition"
            }
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
