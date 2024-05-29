import React from "react";
import ReactDOM from "react-dom";
import { WordList, UserList } from "./App";
const words = ["sky", "blue", "falcon", "wood", "cloud"];
const items = words.map((word, idx) => {
  return <li key={idx}> {word} </li>;
});

console.log(items);

ReactDOM.render(<ul> {items} </ul>, document.getElementById("root"));
ReactDOM.render(<WordList words={words} />, document.getElementById("approot"));
ReactDOM.render(<UserList />, document.getElementById("userroot"));
