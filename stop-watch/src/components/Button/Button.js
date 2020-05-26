import React, { Component } from 'react';
import './button.scss'

class Button extends Component {
    render() {
        return (
            <div>
                <div className="btn btn-box">
                    <div className="btn-left">
                        {
                            this.props.isLap && this.props.lapDisable && 
                            <button className="btn-lap"
                            disabled
                            >Vòng</button>
                        }
                        {
                            this.props.isLap && !this.props.lapDisable && 
                            <button className="btn-lap"
                            onClick={() => this.props.handleLap()}
                            >Vòng</button>
                        }
                        {
                            
                            this.props.isRestart && <button className="btn-restart"
                            onClick={() => this.props.handleRestart()}
                            >restart</button>
                        }
                    </div>
                    <div className="btn-right">
                    {
                        this.props.isStart && <button className="btn-start"
                            onClick={() =>  this.props.handleStart()}
                        >Start</button>
                    }
                    {
                        
                        this.props.isStop && <button className="btn-stop"
                            onClick={() => this.props.handleStop()}
                        >stop</button>
                    }
                    </div>
                    <div className="clear-fix"></div>
                </div>
            </div>
        );
    }
}

export default Button;
