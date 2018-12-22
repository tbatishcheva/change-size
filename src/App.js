import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heightsize: 50,
      widthsize: 150,
    };
  }

  handleClickbig = () => {
    const { heightsize, widthsize } = this.state;
    this.setState({
      heightsize: heightsize + 10,
      widthsize: widthsize + 10,
    });
  };

  handleClicksmall = () => {
    const { heightsize, widthsize } = this.state;
    this.setState({
      heightsize: heightsize - 10,
      widthsize: widthsize - 10,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            className="change-size"
            style={{
              height: this.state.heightsize,
              width: this.state.widthsize,
            }}
          >
Hello World!

          </div>
          <button onClick={this.handleClickbig}> + </button>
          <button onClick={this.handleClicksmall}> - </button>
        </header>
      </div>
    );
  }
}

export default App;
