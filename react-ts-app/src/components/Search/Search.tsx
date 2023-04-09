import React, { ChangeEvent, FormEvent } from "react";
import "./Search.css";
import Button from "../Utils/Button/Button";
import {
  IPhotosResponse,
  IPhotosResponseJson,
  IRequestParams,
  ISearchElemProps,
  ISearchResult,
} from "../../types/types";
import { Loader } from "../Utils/Loader/Loader";
import { apiEndpoint } from "../App/App";

export const SearchElem = (props: ISearchElemProps) => {
  const commonParams = {
    api_key: "4b621c2314e1aacd9186e7425c899a6b",
    per_page: "100",
    page: "1",
    format: "json",
    nojsoncallback: "1",
    safe_search: "1",
  };
  const [hasLoaded, setHasLoaded] = React.useState(true);
  const [inputValue, setInputValue] = React.useState(localStorage.getItem("bestSearchValue") || "");
  const [noResults, setNoResults] = React.useState(false);
  const inputRef = React.useRef(inputValue);

  React.useEffect(() => {
    inputRef.current = inputValue;
  }, [inputValue]);

  const searchPhotoReq: (text: string | undefined) => IPhotosResponseJson = async (text) => {
    const searchParams: IRequestParams = structuredClone(commonParams);
    searchParams.method = "flickr.photos.search";
    searchParams.text = text;

    const res: IPhotosResponse = await fetch(
      apiEndpoint + new URLSearchParams(JSON.parse(JSON.stringify(searchParams)))
    );
    return await res.json();
  };

  const getRecentReq = async () => {
    const searchParams: IRequestParams = structuredClone(commonParams);
    searchParams.method = "flickr.photos.getRecent";

    const res: IPhotosResponse = await fetch(
      apiEndpoint + new URLSearchParams(JSON.parse(JSON.stringify(searchParams)))
    );
    return await res.json();
  };

  const adaptResposeToCards = async (
    func: (param?: string | undefined) => IPhotosResponseJson,
    innerParam?: string | undefined
  ) => {
    const adaptedResult: ISearchResult[] = [];
    await func(innerParam).then((data) => {
      data.photos.photo.forEach((item) => {
        adaptedResult.push({
          id: item.id,
          title: item.title,
          imageUrl: `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`,
        });
      });
    });

    return adaptedResult;
  };

  React.useEffect(() => {
    setHasLoaded(false);
    adaptResposeToCards(getRecentReq).then((data) => {
      props.renderResults(data);
      setHasLoaded(true);
    });

    return () => localStorage.setItem("bestSearchValue", inputRef.current);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasLoaded(false);
    setNoResults(false);

    inputValue
      ? adaptResposeToCards(searchPhotoReq, inputValue).then((data) => {
          props.renderResults(data);
          setHasLoaded(true);

          if (!data.length) setNoResults(true);
        })
      : adaptResposeToCards(getRecentReq).then((data) => {
          props.renderResults(data);
          setHasLoaded(true);
        });
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
      {!hasLoaded && <Loader />}
      {noResults && <div>Nothing is found.</div>}
    </>
  );
};
