import React from "react";
import { Cards } from "../components/Cards/Cards";
import { SearchElem } from "../components/Search/Search";
import { ISearchResult } from "../types/types";

export const Home = () => {
  const [searchResults, setSearchResults] = React.useState<ISearchResult[]>([]);

  const renderSeachResults = (newResult: ISearchResult[]) => {
    setSearchResults([...newResult]);
  };

  return (
    <>
      <h1>Picture Search</h1>
      <SearchElem renderResults={renderSeachResults} />
      {searchResults && <Cards images={searchResults} />}
    </>
  );
};
