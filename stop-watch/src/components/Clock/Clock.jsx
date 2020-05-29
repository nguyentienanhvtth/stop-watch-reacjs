import React, { Component } from 'react';
import {ClockBox, LapsClock, ClockMain, ClockElement, ClockSmall, ClockSmallElement} from './clockStyle';

class Clock extends Component {
  render() {
    return (
      <ClockBox>
        <LapsClock>
          <ClockSmall>
            <ClockSmallElement>{this.props.minutesOut2}</ClockSmallElement>:
            <ClockSmallElement>{this.props.secondsOut2}</ClockSmallElement>.
            <ClockSmallElement>{this.props.millisecondsOut2}</ClockSmallElement>
          </ClockSmall>
        </LapsClock>
        <ClockMain>
          <ClockElement>{this.props.minutesOut}</ClockElement>:
          <ClockElement>{this.props.secondsOut}</ClockElement>.
          <ClockElement>{this.props.millisecondsOut}</ClockElement>
        </ClockMain>
      </ClockBox>
    );
  }
}

export default Clock;
