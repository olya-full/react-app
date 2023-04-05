import React, { ChangeEvent } from "react";
import "./Search.css";
import Button from "../Utils/Button/Button";

export const SearchBar = () => {
  const [inputValue, setInputValue] = React.useState(localStorage.getItem("bestSearchValue") || "");
  const inputRef = React.useRef(inputValue);

  React.useEffect(() => {
    inputRef.current = inputValue;
  }, [inputValue]);

  React.useEffect(
    () => () => {
      localStorage.setItem("bestSearchValue", inputRef.current);
    },
    []
  );

  const updateInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="home-search-form">
      <input
        type="search"
        className="home-search"
        placeholder="🔎︎"
        value={inputValue}
        onChange={(event) => updateInputValue(event)}
      />
      <Button buttonText="Search" buttonType="submit" />
    </form>
  );
};
