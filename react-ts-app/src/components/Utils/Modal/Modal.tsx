import "./Modal.css";
import { useGetOnePicQuery } from "../../Store/PhotoApi";
import { Card } from "../../Cards/Cards";
import { Loader } from "../Loader/Loader";

interface IModalProps {
  modalFunc?: () => void;
  id?: string;
}

export const Modal = ({ modalFunc, id }: IModalProps) => {
  const { data, isFetching } = useGetOnePicQuery(id || "");

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
        {isFetching && <Loader />}
        {data && <Card maxheight="unset-max-height" {...data} />}
      </div>
    </div>
  );
};
