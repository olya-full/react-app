import React, { ChangeEvent } from "react";
import { IEmptyProps, IInputValue } from "../../types/types";
import "./Search.css";

export default class SearchBar extends React.Component<IEmptyProps, IInputValue> {
  constructor(props: IEmptyProps) {
    super(props);
    this.state = {
      inputValue: this.displaySearchValue(),
    };
  }

  displaySearchValue() {
    const storageItem = localStorage.getItem("bestSearchValue");

    if (storageItem !== null) {
      return storageItem;
    } else {
      return "";
    }
  }

  componentWillUnmount(): void {
    localStorage.setItem("bestSearchValue", this.state.inputValue);
  }

  updateInputValue(event: ChangeEvent): void {
    const currentTarget = event.target as HTMLInputElement;
    const currentValue = currentTarget.value;

    this.setState({
      inputValue: currentValue,
    });
  }

  render(): React.ReactNode {
    return (
      <input
        type="search"
        className="home-search"
        placeholder="🔎︎"
        value={this.state.inputValue}
        onChange={(event) => this.updateInputValue(event)}
      />
    );
  }
}
