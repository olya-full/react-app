interface IButtonProps {
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
}

const Button = (props: IButtonProps) => {
  return (
    <button className="button" type={props.buttonType}>
      {props.buttonText}
    </button>
  );
};

export default Button;
