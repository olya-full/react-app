import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Cards } from "./Cards";

describe("Cards on the main page", () => {
  it("Renders a picture in the card info", () => {
    const mockSearch = [
      {
        id: "123456",
        title: "SomeTitle",
        imageUrl: "https://live.staticflickr.com/65535/52800573126_f91a479fd6.jpg",
        date: "1395660658",
        author: "Some Author",
        location: "Berlin",
      },
    ];
    const { container } = render(<Cards images={mockSearch} />);
    const cards = container.getElementsByClassName("card");
    expect(cards.length).toBe(mockSearch.length);
    expect(screen.getAllByRole("img")).toBeVisible;
  });

  it("Doesn't have a date if there is no date", () => {
    const mockSearchNoDate = [
      {
        id: "123456",
        title: "SomeTitle",
        imageUrl: "https://live.staticflickr.com/65535/52800573126_f91a479fd6.jpg",
        author: "Some Author",
        location: "Berlin",
      },
    ];

    render(<Cards images={mockSearchNoDate} />);
    expect(screen.findByText("Picture taken on")).toBeUndefined;
  });

  it("Shows default title if there is empty title", () => {
    const mockSearchNoTitle = [
      {
        id: "123456",
        title: "",
        imageUrl: "https://live.staticflickr.com/65535/52800573126_f91a479fd6.jpg",
        author: "Some Author",
        location: "Berlin",
      },
    ];
    render(<Cards images={mockSearchNoTitle} />);
    expect(screen.getByText("Unnamed Picture")).toBeDefined;
  });
});
