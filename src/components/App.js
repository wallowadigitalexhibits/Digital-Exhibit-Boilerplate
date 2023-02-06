import React, { Component } from 'react'
import './App.css'
import "../fonts/Raleway-Medium.ttf"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        data: [],
        data_loaded: false
    };
  }

  componentDidMount() {
      fetch('json/db.json', {mode: 'cors'})
        .then(res => res.json())
        .then(data => this.setState({ data: data,
                                      data_loaded: true }))
  }

  /************/
  /** Render **/
  /************/

  render() {

    return (
      <div className="app">
        <h1>Hello, World</h1>
        <p>Body text.</p>
        { this.state.data_loaded
          ? <p>{ this.state.data['test_string'] }</p>
          : null }
      </div>
    );
  }
}

export default App;
