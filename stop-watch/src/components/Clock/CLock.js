import React, { Component } from 'react';
import './clock.scss'

class CLock extends Component {
    render() {
        return (
            <div>
                <div className="Clock">
                    <h1><span className="minutes">{this.props.minutesOut}</span>:
                        <span className="seconds">{this.props.secondsOut}</span>.
                        <span className="milliseconds">{this.props.millisecondsOut}</span>
                    </h1>
                </div>
            </div>
        );
    }
}

export default CLock;
