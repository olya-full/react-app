import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { WrappedApp, App } from "./App";

describe("Basic App", () => {
  it("Renders Home", () => {
    render(<WrappedApp />);
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Books");
  });

  it("Renders About Us if on About Us page", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
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
        <App />
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
