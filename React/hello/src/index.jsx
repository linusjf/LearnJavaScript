import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Hello, HelloWorld } from "./Hello";

ReactDOM.render(<Hello name="Billy James" />, document.getElementById("main"));
ReactDOM.render(<HelloWorld />, document.getElementById("hello"));
