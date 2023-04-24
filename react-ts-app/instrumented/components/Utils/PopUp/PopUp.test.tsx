import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PopUp } from "./PopUp";

describe("PopUp", () => {
  it("PopUp has the text that was passed to iy in props", () => {
    render(<PopUp popUpText="Test text" />);
    expect(screen.findByText("Test text")).toBeVisible;
  });
});
