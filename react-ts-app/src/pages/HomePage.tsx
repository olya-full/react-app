import React from "react";
import { Cards } from "../components/Cards/Cards";
import SearchBar from "../components/Search/Search";

export class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h1>Books</h1>
        <SearchBar />
        <Cards />
      </>
    );
  }
}
