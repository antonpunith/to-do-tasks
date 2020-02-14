import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

// reducers
import reducers from "./reducers";
// App component
import App from "./App";
// styles
import "./index.css";

const store = createStore(reducers);

test("renders learn react link", () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = container.querySelector(".App");
  expect(linkElement).toBeInTheDocument();
});
