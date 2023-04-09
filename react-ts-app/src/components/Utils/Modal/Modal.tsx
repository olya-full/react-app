import { ReactNode } from "react";
import "./Modal.css";

interface IModalProps {
  children: ReactNode;
  modalFunc?: () => void;
}

export const Modal = ({ children, modalFunc }: IModalProps) => {
  const handleClick = () => {
    modalFunc && modalFunc();
  };

  return (
    <div onClick={handleClick} className="modal-outer-container">
      <div onClick={(e) => e.stopPropagation()} className="modal-inner-container">
        <div className="modal-cross-container">
          <div className="modal-cross-wrap">
            <img onClick={handleClick} className="modal-cross-img" src="./cross.png" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
