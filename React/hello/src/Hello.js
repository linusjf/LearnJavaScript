import React from 'react'

class HelloWorld extends React.Component {
  render() {
return <h1>Hello, World!</h1>
 }
}

class Hello extends React.Component {
  constructor(props){
 super(props);
 let firstName = this.props.name.split(" ")[0];
 this.state = {
 name: firstName
 }
  }
  
  render() {
 return <h1>Hello, {this.state.name}!</h1>
 }
}

export {HelloWorld,Hello}
