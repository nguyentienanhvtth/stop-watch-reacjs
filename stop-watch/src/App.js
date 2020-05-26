import React, { Component } from 'react';
import './App.scss';
import Clock from './components/Clock/CLock';
import Button from './components/Button/Button';

var myClock;
class App extends Component {
  constructor(){
    super();
    this.state = {
      lapDisable: true,
      isLap: true, isRestart: false, isStart: true, isStop: false,
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      millisecondsOut: '00',
      secondsOut: '00',
      minutesOut: '00',
      lapArr: [],
    }
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.timeUp = this.timeUp.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.handleLap = this.handleLap.bind(this);
  }

  handleStart(){
  myClock = setInterval(this.timeUp, 10);
    this.setState({
      isStart: false,
      isStop: true,
      lapDisable: false,
    })
    if(this.state.milliseconds !== 0){
      this.setState({
        isRestart: false,
        isLap: true,
      })
    }
  }

  handleStop(){
    this.setState({
      isStart: true,
      isStop: false,
    })
    if(this.state.milliseconds !== 0){
      this.setState({
        isRestart: true,
        isLap: false,
      })
    }
    clearInterval(myClock);
  }

  handleRestart(){
    this.setState({
      lapDisable: true,
      isLap: true, isRestart: false, isStart: true, isStop: false,
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      millisecondsOut: '00',
      secondsOut: '00',
      minutesOut: '00',
    })
  }

  handleLap(){
    const{
      millisecondsOut,secondsOut,minutesOut,
    } = this.state;
    this.setState({
      lapArr: {millisecondsOut,secondsOut,minutesOut},
    },console.log(this.state.lapArr))
  }

  timeUp(){
    const{
      milliseconds,seconds,minutes,
    } = this.state;
    this.setState({
      millisecondsOut: this.convertTimeOut(milliseconds),
      secondsOut: this.convertTimeOut(seconds),
      minutesOut: this.convertTimeOut(minutes),
    })
    this.setState({
      milliseconds: milliseconds + 1,
    })
    if(milliseconds === 100){
      this.setState({
        milliseconds: 0,
        seconds: seconds + 1,
      })
    }
  }

  convertTimeOut(i){
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  render(){
    return (
      <div className="App">
        <div className="iphone-bg">
          <Clock
            millisecondsOut = {this.state.millisecondsOut}
            secondsOut = {this.state.secondsOut}
            minutesOut = {this.state.minutesOut}
          ></Clock>
          <Button
            lapDisable = {this.state.lapDisable}
            isLap={this.state.isLap}
            isRestart={this.state.isRestart}
            isStart={this.state.isStart}
            isStop={this.state.isStop}
            handleStart = {this.handleStart}
            handleStop = {this.handleStop}
            handleRestart = {this.handleRestart}
            handleLap = {this.handleLap}
          ></Button>
        </div>
      </div>
    );
  }
}

export default App;
