import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Story from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Story story={{ title: "hello" }} />, div);
  unmountComponentAtNode(div);
});
