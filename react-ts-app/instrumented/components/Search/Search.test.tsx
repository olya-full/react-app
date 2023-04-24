import { render } from "@testing-library/react";
import { describe, expect } from "vitest";

import { Home } from "../../pages/HomePage";
import { Provider } from "react-redux";
import { store } from "../Store/Store";

describe("Search page", () => {
  it("Renders the cards upon flickr.photos.getRecent get request", async () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(await getAllByRole("img")).toBeVisible;
  });
});
