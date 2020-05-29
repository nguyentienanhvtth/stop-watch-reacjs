import React, { Component } from 'react';
import {BtnBox, BtnLeft, BtnRight, BtnLap, BtnRestart, BtnStart, BtnStop, ClearFix} from './buttonStyle';

class Buttons extends Component {
  render() {
    return (
      <BtnBox>
        <BtnLeft>
        {
          this.props.isLap && this.props.lapDisable && 
          <BtnLap
          disabled
          >Vong</BtnLap>
        }
        {
          this.props.isLap && !this.props.lapDisable && 
          <BtnLap
          onClick={() => this.props.handleLap()}
          >
          Vòng
          </BtnLap>
        }
        {
            
            this.props.isRestart && 
            <BtnRestart
            onClick={() => this.props.handleRestart()}
            >
            Restart
            </BtnRestart>
        }
        </BtnLeft>
        <BtnRight>
        {
          this.props.isStart && 
          <BtnStart
          onClick={() =>  this.props.handleStart()}
          >Start</BtnStart>
        }
        {
            
          this.props.isStop && 
          <BtnStop
          onClick={() => this.props.handleStop()}
          >Stop</BtnStop>
        }
        </BtnRight>
        <ClearFix></ClearFix>
      </BtnBox>
    );
  }
}

export default Buttons;
