import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { Modal } from "./Modal";
import { Provider } from "react-redux";
import { store } from "../../Store/Store";

describe("Modal window", () => {
  it("Modal window displays the children passed to it", () => {
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
    expect(screen.findByRole("img")).toBeVisible;
  });
});
