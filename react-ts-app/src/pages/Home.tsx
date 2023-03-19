import React from "react";
import { Cards } from "../components/Cards/Cards";
import { Header } from "../components/Header/Header";
import SearchBar from "../components/Search/Search";

export class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Header />
        <h1>Books</h1>
        <SearchBar />
        <Cards />
      </>
    );
  }
}
