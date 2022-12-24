import React, { Component } from "react";
class Dice extends Component {
  clickHandler = (event) => {
    event.target.textContent = Math.floor(Math.random() * 6) + 1; //returns random number between [1-6]
  };
  render() {
    return <p onClick={this.clickHandler}>{this.props.number}</p>;
  }
}
export default Dice;
