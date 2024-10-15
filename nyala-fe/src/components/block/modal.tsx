import { cn } from "ln/utils/cn";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false), 300);
    }
  }, [isOpen]);

  if (
    typeof window === "undefined" ||
    !document.getElementById("portal-root")
  ) {
    return null;
  }

  return ReactDOM.createPortal(
    showModal ? (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}>
        <div
          className={cn(
            className,
            `bg-white rounded-lg overflow-hidden transition-transform transform duration-300 ${
              isOpen ? "scale-100" : "scale-95"
            }`
          )}
          onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    ) : null,
    document.getElementById("portal-root")!
  );
};

export default Modal;
