import { Component } from "react";

export default class ClassComponent extends Component {
  constructor(){
    super()
    this.state = {
      name: 'Maxi',
      count: 0
    }
  }
    render() {
      return <>
        <h1>Class component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Sumar al contador</button>
        {console.log(this.state)}
      </>
    }
}