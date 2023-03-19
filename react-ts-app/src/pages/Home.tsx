import React from "react";
import { Header } from "../components/Header/Header";
import SearchBar from "../components/Search/Search";

export class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Header />
        <h1>Home</h1>
        <SearchBar />
      </>
    );
  }
}
