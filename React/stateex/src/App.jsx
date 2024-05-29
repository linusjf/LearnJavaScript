import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "React state example"
    };
  }

  toggleTitle = () => {
    if (this.state.title === "") {
      this.setState({
        title: "React state example"
      });
    } else {
      this.setState({
        title: ""
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="checkbox"
            id="showTitle"
            onClick={this.toggleTitle}
            defaultChecked
          />
          <label htmlFor="showTitle"> Show title </label>{" "}
        </div>{" "}
        <h2> {this.state.title} </h2>{" "}
      </div>
    );
  }
}

export default App;
