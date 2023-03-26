import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { CreatedCards } from "./CreatedCards";

describe("Cards created once Form data is submitted", () => {
  it("Contains a picture in the created card", () => {
    const testCardInfo = {
      title: "Amazing book",
      year: "February 22, 2022",
      genre: "Fantasy",
      popularity: "Extremely popular",
      cover: "https://images.gr-assets.com/books/1388184366s/1141898.jpg",
    };

    render(<CreatedCards cards={[testCardInfo]} />);
    expect(screen.getByRole("img")).toBeVisible;
  });
});
