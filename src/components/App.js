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
        .then(data => this.setState({ nodes: data['nodes'],
                                      data_loaded: true }))
  }

  renderItem = (node) => {
    return <div className="card"
                key={node['id']}>
             {node['id']}
             <img alt={node['title']}
                  src={"/files/" + node['id'] + "-01.jpg"} />
           </div>
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
          ? this.state.nodes.map(node => this.renderItem(node))
          : null }
      </div>
    );
  }
}

export default App;
