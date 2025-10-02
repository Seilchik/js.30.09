import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
      text: ""
      
    };
  }

  increment = () => {
    if (this.state.count < 1000) {
      const num = prompt("Напиши число для умножения");
      if (num !== null) {
        const result = this.state.count * Number(num);
        this.setState({ count: result });
      }
    }
  };

  decrement = () => {
    if (this.state.count > 0) {
      const num = prompt("Напиши число для деления");
      if (num !== null) {
        const result = this.state.count / Number(num);
        this.setState({ count: result });
      }
    }
  };

  handel = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>My Component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <br />

        <h3>{this.state.text}</h3>
        <input
          onChange={this.handel}
          type="text"
          value={this.state.text}
        />
      </div>
    );
  }
}

export default MyComponent