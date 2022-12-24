import { Component } from "react";
import "./styles.css";
import Dice from "./Dice";
class App extends Component {
  state = {
    lastKey: null
  };

  onKeypress = (event) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    window.addEventListener("keypress", this.onKeypress);
  }

  render() {
    let number1 = "Dice.one",
      number2 = "Dice.two",
      number3 = "Dice.three";
    if (this.state.lastKey === " ") {
      number1 = Math.floor(Math.random() * 6) + 1; //returns random number between [1-6]
      number2 = Math.floor(Math.random() * 6) + 1; //returns random number between [1-6]
      number3 = Math.floor(Math.random() * 6) + 1; //returns random number between [1-6]
    }
    return (
      <div className="App">
        <Dice number={number1} />
        <Dice number={number2} />
        <Dice number={number3} />
      </div>
    );
  }
}
export default App;
