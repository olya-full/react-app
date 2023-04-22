import React from "react";

import { Cards } from "../components/Cards/Cards";
import { SearchElem } from "../components/Search/Search";
import { useGetSearchResultsQuery } from "../components/Store/PhotoApi";
import { Loader } from "../components/Utils/Loader/Loader";
import { useAppSelector } from "../components/Store/TypedHooks";

export const Home = () => {
  const [searchValue, setSearchValue] = React.useState<string>(
    useAppSelector((state) => state.searchValue.value)
  );
  const { data = [], isFetching } = useGetSearchResultsQuery(searchValue ? searchValue : "a");

  const setValue = (value: string) => {
    setSearchValue(value);
  };

  return (
    <>
      <h1>Picture Search</h1>
      <SearchElem setValue={setValue} />
      {isFetching && <Loader />}
      {data && <Cards images={data} />}
    </>
  );
};
