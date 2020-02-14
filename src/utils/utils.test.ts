import { sortTaskByText, sortTaskbyPriority } from "./index";

it("sort by Text function checks lesser", () => {
  const outputLesser = sortTaskByText({ text: "Alpha" }, { text: "Omega" });
  expect(outputLesser).toBe(-1);
});

it("sort by Text function checks greater", () => {
  const outputGreater = sortTaskByText({ text: "Omega" }, { text: "Alpha" });
  expect(outputGreater).toBe(1);
});

it("sort by Text function checks equal", () => {
  const output = sortTaskByText({ text: "Alpha" }, { text: "Alpha" });
  expect(output).toBe(0);
});

it("sort by Priority function checks lesser", () => {
  const outputLesser = sortTaskbyPriority({ priority: 1 }, { priority: 2 });
  expect(outputLesser).toBe(-1);
});

it("sort by Priority function checks greater", () => {
  const outputGreater = sortTaskbyPriority({ priority: 2 }, { priority: 1 });
  expect(outputGreater).toBe(1);
});

it("sort by Priority function checks equal", () => {
  const output = sortTaskbyPriority({ priority: 1 }, { priority: 1 });
  expect(output).toBe(0);
});
