import React from "react";
import { render } from "../testUtils";
import Loading from "@src/Test";

describe("Loading component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Loading />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
