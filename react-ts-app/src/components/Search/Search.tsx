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

export const SearchElem = (props: ISearchElemProps) => {
  const apiEndpoint = "https://www.flickr.com/services/rest/?";
  const commonParams = {
    api_key: "4b621c2314e1aacd9186e7425c899a6b",
    per_page: "80",
    page: "1",
    format: "json",
    nojsoncallback: "1",
    safe_search: "1",
  };
  const [hasLoaded, setHasLoaded] = React.useState(true);
  const [inputValue, setInputValue] = React.useState(localStorage.getItem("bestSearchValue") || "");
  const inputRef = React.useRef(inputValue);

  React.useEffect(() => {
    inputRef.current = inputValue;
  }, [inputValue]);

  React.useEffect(() => {
    adaptResposeToCards(getRecentReq).then((data) => props.renderResults(data));

    return () => localStorage.setItem("bestSearchValue", inputRef.current);
  }, []);

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

  const getInfoPhotoReq = async (id: string) => {
    const searchParams: IRequestParams = structuredClone(commonParams);
    searchParams.method = "flickr.photos.getInfo";
    searchParams.photo_id = id;

    const res = await fetch(
      apiEndpoint + new URLSearchParams(JSON.parse(JSON.stringify(searchParams)))
    );
    console.log(await res.json());
  };

  const adaptResposeToCards = async (
    func: (param?: string | undefined) => IPhotosResponseJson,
    innerParam?: string | undefined
  ) => {
    console.log("adapting");
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

    console.log(adaptedResult);
    return adaptedResult;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    inputValue
      ? adaptResposeToCards(searchPhotoReq, inputValue).then((data) => props.renderResults(data))
      : adaptResposeToCards(getRecentReq).then((data) => props.renderResults(data));
  };

  const updateInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
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
  );
};
