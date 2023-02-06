import React, { Component } from 'react'
import './App.css'
import "../fonts/Raleway-Medium.ttf"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        data: []
    };
  }


  /************/
  /** Render **/
  /************/

  render() {

    return (
      <div className="app">
        <h1>Hello, World</h1>
        <p>Body text.</p>
      </div>
    );
  }
}

export default App;
