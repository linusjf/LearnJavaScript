import React from "react";
import ReactDOM from "react-dom";

class Test extends React.Component {
  render() {
    return <p>Hello there! </p>;
  }
}
ReactDOM.render(<Test />, document.getElementById("root"));
