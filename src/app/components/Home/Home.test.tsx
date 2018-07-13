import * as React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Home from "./Home";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Home user="Default User" />, div);
  unmountComponentAtNode(div);
});
