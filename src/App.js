import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 50,
    };
  }

  handleClick = (value) => {
    const size = this.state.size + value;
    if (size < 0) {
      return;
    }
    this.setState({
      size,
    });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            className="change-size"
            style={{
              height: this.state.size,
              width: this.state.size,
            }}
          >
Hello World!

          </div>
          <button onClick={() => this.handleClick(10)}> + </button>
          <button onClick={() => this.handleClick(-10)}> - </button>
        </header>
      </div>
    );
  }
}

export default App;
