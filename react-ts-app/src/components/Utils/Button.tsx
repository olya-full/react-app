import "./Button.css";
import { IButtonProps } from "../../types/types";

const Button = (props: IButtonProps) => {
  return (
    <button className="button" type={props.buttonType}>
      {props.buttonText}
    </button>
  );
};

export default Button;
