class App extends React.Component {
  render() {
    return <h1>Hello from our app</h1>;
  }
}
var mount = document.querySelector("#app");
ReactDOM.render(<App />, mount);
