import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { Modal } from "./Modal";

describe("Modal window", () => {
  it("Modal window displays the children passed to it", () => {
    const testChildren = <div>Amazing test div</div>;
    render(<Modal>{testChildren}</Modal>);
    expect(screen.findByText("Amazing test div")).toBeVisible;
  });
});
