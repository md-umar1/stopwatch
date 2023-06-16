import React, { Component } from "react";
import './App.css'

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: props.duration,
      time: props.duration,
      isRunning: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  startTimer = () => {
    if (this.state.isRunning) return;

    this.setState({ isRunning: true });

    this.timerInterval = setInterval(() => {
      if (this.state.time > 0) {
        this.setState((prevState) => ({ time: prevState.time - 1 }));
      } else {
        clearInterval(this.timerInterval);
        this.setState({ isRunning: false });
        alert("Timer completed!");
      }
    }, 1000);
  };

  stopTimer = () => {
    if (!this.state.isRunning) return;

    clearInterval(this.timerInterval);
    this.setState({ isRunning: false });
  };

  resetTimer = () => {
    clearInterval(this.timerInterval);
    this.setState({ time: this.state.duration, isRunning: false });
  };

  render() {
    const { time, isRunning } = this.state;

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
      <div>
        <h1 className="txt1">Timer</h1>
        <div className="time">
          <p>
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </p>
          <button
            onClick={this.startTimer}
            disabled={isRunning}
            style={{ color: "blue" }}
          >
            Start
          </button>
          <button
            onClick={this.stopTimer}
            disabled={!isRunning}
            style={{ color: "blue" }}
          >
            Stop
          </button>
          <button onClick={this.resetTimer} style={{ color: "blue" }}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      isRunning: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  startStopwatch = () => {
    if (this.state.isRunning) return;

    this.setState({ isRunning: true });

    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  };

  stopStopwatch = () => {
    if (!this.state.isRunning) return;

    clearInterval(this.timerInterval);
    this.setState({ isRunning: false });
  };

  resetStopwatch = () => {
    clearInterval(this.timerInterval);
    this.setState({ time: 0, isRunning: false });
  };

  render() {
    const { time, isRunning } = this.state;

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
      <div>
        <h1 className="txtsw">StopWatch</h1>
        <div className="sw">
          <p>
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </p>
          <button
            onClick={this.startStopwatch}
            disabled={isRunning}
            style={{ color: "red" }}
          >
            Start
          </button>
          <button
            onClick={this.stopStopwatch}
            disabled={!isRunning}
            style={{ color: "red" }}
          >
            Stop
          </button>
          <button onClick={this.resetStopwatch} 
          style={{ color: "red" }}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}


const App = () => {
  return (
    <div>
      <Timer duration={360}/>
      <Stopwatch />
    </div>
  );
};

export default App;
