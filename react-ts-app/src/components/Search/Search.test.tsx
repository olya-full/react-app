import { render } from "@testing-library/react";
import { describe, expect } from "vitest";

import { Home } from "../../pages/HomePage";

describe("Search page", () => {
  it("Renders the cards upon flickr.photos.getRecent get request", async () => {
    const { getAllByRole } = render(<Home />);
    expect(await getAllByRole("img")).toBeVisible;
  });
});
