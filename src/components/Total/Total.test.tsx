import React from "react";
import { render, cleanup } from "@testing-library/react";
import Total from "./index";

afterEach(cleanup);

it("renders profile", () => {
  const { asFragment } = render(
    <Total
      tasks={[{ id: 2, text: "Go shopping", completed: false, priority: 3 }]}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it("renders correct totals", () => {
  const { getByText } = render(
    <Total
      tasks={[
        { id: 2, text: "Go shopping", completed: true, priority: 3 },
        { id: 3, text: "Walk the dog", completed: false, priority: 1 }
      ]}
    />
  );

  expect(getByText("Total Tasks: 2")).toBeInTheDocument();
  expect(getByText("Tasks Completed: 1")).toBeInTheDocument();
});
