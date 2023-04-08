import { ReactNode } from "react";
import "./Modal.css";

interface IModalProps {
  children: ReactNode;
  modalFunc?: () => void;
}

export const Modal = ({ children, modalFunc }: IModalProps) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.target);
    event.stopPropagation();
    modalFunc && modalFunc();
  };

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        handleClick(event);
      }}
      className="modal-outer-container"
    >
      <div className="modal-inner-container">
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
