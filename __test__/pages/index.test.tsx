import React from "react";
import { render } from "../testUtils";
import Index from "pages/index";

describe("Loading component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Index />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
