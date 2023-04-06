import React, { ChangeEvent } from "react";
import "./Search.css";
import Button from "../Utils/Button/Button";
import { ISearchResult } from "../../pages/HomePage";

export interface ISearchElemProps {
  renderResults: (result: ISearchResult[]) => void;
}

export const SearchElem = (props: ISearchElemProps) => {
  const apiEndpoint = "https://www.flickr.com/services/rest/";
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

  const sendSearchReq = async (text: string) => {};

  const handleSubmit = (text: string) => {
    const newSearch = [
      {
        id: "123456",
        title: "SomeTitle",
        imageUrl:
          "https://sun9-8.userapi.com/impg/3flHO-BUQcdXG1hclYqaO6qQyQ3WjOPUEWJepw/0yf_I_4ODCE.jpg?size=130x87&quality=96&sign=d1f08d5b30fba524b3c6922e38b3e64a&c_uniq_tag=LYlKW0-Hk8jJNvyZh7q7CxjX-xTzaJToZa8LT3yhzjM&type=album",
        date: new Date(1395660658),
        author: "Some Author",
        location: "Berlin",
      },
    ];

    props.renderResults(newSearch);
  };

  const updateInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="home-search-form">
      <input
        type="search"
        className="home-search"
        placeholder="🔎︎ Search by picture title"
        value={inputValue}
        onChange={(event) => updateInputValue(event)}
      />
      <Button buttonText="Search" buttonType="submit" />
    </form>
  );
};
