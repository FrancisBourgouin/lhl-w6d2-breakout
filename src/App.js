import React from 'react';
import logo from './logo.svg';
import './App.css';


function SuperFormThingy(props){
  return <form onSubmit={props.handleFormSubmit}>
            <input type="text" name="randomField" placeholder="something" value={props.title} onChange={props.handleInputTyping}/>
            <input type="submit" value="SUBMISSION" />
          </form>
}

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      title:"No title",
      direction:"initial"
    }

  }

  componentDidMount(){
    this.setState({title:"Hello"})
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.randomField.value)
    let direction = this.state.direction === 'initial' ? 'reverse' : 'initial'
    this.setState({ title: event.target.randomField.value, direction: direction})

  }

  handleInputTyping = (event) => {
    console.log(event.target.value.length)
    if(event.target.value.length <= 50){
      let direction = this.state.direction === 'initial' ? 'reverse' : 'initial'
      this.setState({ title: event.target.value, direction: direction })
    }
  }
  render(){

    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.title}</h1>
          <img style={{animationDirection: this.state.direction}}src={logo} className="App-logo" alt="logo" />          
        </header>
        <SuperFormThingy handleFormSubmit={this.handleFormSubmit} handleInputTyping={this.handleInputTyping} title={this.state.title  }/>
        {/* <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="randomField" placeholder="something" value={this.state.title} onChange={this.handleInputTyping}/>
          <input type="submit" value="SUBMISSION" />
        </form> */}
      </div>
    );
  }
}

export default App;
