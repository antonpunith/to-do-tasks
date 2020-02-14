import React from "react";
import { render, cleanup } from "@testing-library/react";
import SortOrder from "./index";

afterEach(cleanup);

it("renders Total component", () => {
  const { asFragment } = render(<SortOrder sortTask={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
