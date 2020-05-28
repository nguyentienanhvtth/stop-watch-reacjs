import React, { Component } from 'react';
import './laps.scss'


const liArr = [];
for(let i = 0; i< 15 ; i++){
    liArr.push(<li key={i} ></li>)
}


class Laps extends Component {
    render() {
        const {lapsArr} = this.props;
        return (
            <div className="laps">
                <div className="laps-box">
                    <div className="laps-list">
                        <ul className="line">
                            {
                                liArr
                            }
                        </ul>
                        <ul className="list">
                        {
                            lapsArr.map((item, index) => {
                                return(
                                    <li key={index} >
                                        <div className="list-left">
                                            <span>Vòng {index + 1}</span>
                                        </div>
                                        <div className="list-right">
                                            <span className="minutes">{item.minutesOut2}</span>:
                                            <span className="seconds">{item.secondsOut2}</span>.
                                            <span className="milliseconds">{item.millisecondsOut2}</span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Laps;
