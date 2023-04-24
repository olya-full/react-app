import React, { ChangeEvent, FormEvent } from "react";

import "./Search.css";
import Button from "../Utils/Button/Button";
import { ISearchElemProps } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../Store/TypedHooks";
import { updateSearchValue } from "../Store/Slices/searchValueSlice";

export const SearchElem = (props: ISearchElemProps) => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = React.useState(
    useAppSelector((state) => state.searchValue.value)
  );
  const [noResults, setNoResults] = React.useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setValue(inputValue);
    dispatch(updateSearchValue(inputValue));
    setNoResults(false);
  };

  const updateInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <form className="home-search-form" onSubmit={(event) => handleSubmit(event)}>
        <input
          type="search"
          className="home-search"
          placeholder="🔎︎ Search by picture title"
          value={inputValue}
          onChange={(event) => updateInputValue(event)}
        />
        <Button buttonText="Search" buttonType="submit" />
      </form>

      {noResults && <div>Nothing is found.</div>}
    </>
  );
};
