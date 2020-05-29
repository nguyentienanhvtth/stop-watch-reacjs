import React, { Component } from 'react';
import './App.scss';
import Clock from './components/Clock/Clock';
import Buttons from './components/Buttons/Buttons';
import Laps from './components/Laps/Laps';
import { AppBox, IphoneBg } from './appStyle'


var myClock;

class App extends Component {
  constructor(){
    super();
    this.state = {
      lapDisable: true,
      isLap: true, isRestart: false, isStart: true, isStop: false,
      //Main Clock
      milliseconds: 0, seconds: 0, minutes: 0,
      millisecondsOut: '00', secondsOut: '00', minutesOut: '00',
      //Lap Clock
      milliseconds2: 0, seconds2: 0, minutes2: 0,
      millisecondsOut2: '00', secondsOut2: '00', minutesOut2: '00',
      lapArr: [],
    }
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.timeUp = this.timeUp.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.handleLap = this.handleLap.bind(this);
    this.addLap = this.addLap.bind(this);
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
      milliseconds: 0, seconds: 0, minutes: 0,
      millisecondsOut: '00', secondsOut: '00', minutesOut: '00',
      milliseconds2: 0, seconds2: 0, minutes2: 0,
      millisecondsOut2: '00', secondsOut2: '00', minutesOut2: '00',
      lapArr: [],
    })
  }

  handleLap(){
    this.setState({
      milliseconds2: 0, seconds2: 0, minutes2: 0,
      millisecondsOut2: '00', secondsOut2: '00', minutesOut2: '00',
      lapArr: this.addLap(),
    },console.log(this.state.lapArr))
  }

  addLap(){
    const{
      millisecondsOut2,secondsOut2,minutesOut2,lapArr
    } = this.state;
    const arr = lapArr;
    arr.push({ millisecondsOut2,secondsOut2,minutesOut2})
    return arr;
  }

  timeUp(){
    const{
      milliseconds,seconds,minutes,
      milliseconds2,seconds2,minutes2,
    } = this.state;
    this.setState({
      millisecondsOut: this.convertTimeOut(milliseconds),
      secondsOut: this.convertTimeOut(seconds),
      minutesOut: this.convertTimeOut(minutes),
      millisecondsOut2: this.convertTimeOut(milliseconds2),
      secondsOut2: this.convertTimeOut(seconds2),
      minutesOut2: this.convertTimeOut(minutes2),
      milliseconds: milliseconds + 1,
      milliseconds2: milliseconds2 + 1,
    })
    if(milliseconds === 100){
      this.setState({
        milliseconds: 0,
        seconds: seconds + 1,
      })
    }
    if(milliseconds2 === 100){
      this.setState({
        milliseconds2: 0,
        seconds2: seconds2 + 1,
      })
    }
    if(seconds === 60){
      this.setState({
        seconds: 0,
        minutes: minutes + 1,
      })
    }
    if(seconds2 === 60){
      this.setState({
        seconds2: 0,
        minutes2: minutes2 + 1,
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
      <AppBox>
        <IphoneBg>
        <Clock
        millisecondsOut = {this.state.millisecondsOut}
        secondsOut = {this.state.secondsOut}
        minutesOut = {this.state.minutesOut}
        millisecondsOut2 = {this.state.millisecondsOut2}
        secondsOut2 = {this.state.secondsOut2}
        minutesOut2 = {this.state.minutesOut2}
        ></Clock>
        <Buttons
          lapDisable = {this.state.lapDisable}
          isLap={this.state.isLap}
          isRestart={this.state.isRestart}
          isStart={this.state.isStart}
          isStop={this.state.isStop}
          handleStart = {this.handleStart}
          handleStop = {this.handleStop}
          handleRestart = {this.handleRestart}
          handleLap = {this.handleLap}
        ></Buttons>
        <Laps lapsArr = {this.state.lapArr} />
        </IphoneBg>
      </AppBox>
    );
  }
}

export default App;
