import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "../Store/Store";

describe("Basic App", () => {
  it("Renders Home", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Picture Search");
  });

  it("Renders About Us if on About Us page", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("About Us");
  });

  it("Renders Your Favourite Book if on Form page", () => {
    render(
      <MemoryRouter initialEntries={["/form"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Your Favourite Book");
  });

  it("Renders Not Found if invalid path", () => {
    render(
      <MemoryRouter initialEntries={["/really-bad-not-existing-route"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Not Found");
  });
});
