import { useEffect } from "react";
import "./Loader.css";

interface ILoaderProps {
  loaderFunc?: () => void;
}

export const Loader = (props: ILoaderProps) => {
  useEffect(() => {
    props.loaderFunc && props.loaderFunc();
  });

  return (
    <div className="loader-container">
      <img src={"./load.gif"} />
      <div className="loader-text">Loading</div>
    </div>
  );
};
