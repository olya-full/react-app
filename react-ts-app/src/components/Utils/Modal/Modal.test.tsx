import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { Modal } from "./Modal";

describe("Modal window", () => {
  it("Modal window displays the children passed to it", () => {
    render(<Modal />);
    expect(screen.findByRole("img")).toBeVisible;
  });
});
