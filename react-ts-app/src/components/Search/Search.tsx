import React, { ChangeEvent } from "react";
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

  const searchPhotoReq = async (text: string) => {
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

  const adaptResposeToCards = async (func: (param?: string) => IPhotosResponseJson) => {
    console.log("adapting");
    const adaptedResult: ISearchResult[] = [];
    await func().then((data) => {
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

  const handleSubmit = (text: string) => {
    const newSearch = [
      {
        id: "123456",
        title: "SomeTitle",
        imageUrl:
          "https://sun9-8.userapi.com/impg/3flHO-BUQcdXG1hclYqaO6qQyQ3WjOPUEWJepw/0yf_I_4ODCE.jpg?size=130x87&quality=96&sign=d1f08d5b30fba524b3c6922e38b3e64a&c_uniq_tag=LYlKW0-Hk8jJNvyZh7q7CxjX-xTzaJToZa8LT3yhzjM&type=album",
        date: 1395660658,
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
