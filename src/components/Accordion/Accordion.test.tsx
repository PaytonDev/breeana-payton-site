import React from "react";
import { render } from "@testing-library/react";
import { Accordion } from "./Accordion";

describe("Accordion renders", () => {
  it("renders the component", () => {
    const { getByTestId } = render(<Accordion />);
    const component = getByTestId("my-component");
    expect(component).toBeInTheDocument();
  });
});
