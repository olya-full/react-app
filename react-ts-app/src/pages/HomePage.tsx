import React from "react";
import { Cards } from "../components/Cards/Cards";
import { SearchElem } from "../components/Search/Search";
import { ISearchResult } from "../types/types";
import { useGetRecentPicsQuery } from "../components/Store/PhotoApi";
import { Loader } from "../components/Utils/Loader/Loader";

export const Home = () => {
  const [searchResults, setSearchResults] = React.useState<ISearchResult[]>([]);
  const {data = [], isLoading} = useGetRecentPicsQuery();

  const renderSeachResults = (newResult: ISearchResult[]) => {
    setSearchResults([...newResult]);
  };

  return (
    <>
      <h1>Picture Search</h1>
      <SearchElem renderResults={renderSeachResults} />
      {isLoading && <Loader />}
      {searchResults && <Cards images={data} />}
    </>
  );
};
