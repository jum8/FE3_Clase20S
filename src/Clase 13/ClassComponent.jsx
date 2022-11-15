import { Component } from "react";

export default class ClassComponent extends Component {
  constructor(){
    super()
    this.state = {
      name: 'Maxi',
      count: 0
    }
    console.log('Se ejecuta el constructor')
  }
  componentDidMount() {
    console.log('Se montó el componente de clase')
    setTimeout(() => {
      this.setState({name: 'Flor'})
    }, 2000)
  }
  componentDidUpdate(){
    console.log('El componente de clase se actualizó')
  }
  componentWillUnmount() {
    console.log('El componente de clase se desmontó')
  }


    render() {
      console.log('Se ejecutó el render')
      return <>
        <h1>Class component</h1>
        <h3>{this.state.name}</h3>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Sumar al contador</button>
      </>
    }
}