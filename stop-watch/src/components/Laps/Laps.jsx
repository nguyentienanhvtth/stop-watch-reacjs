import React, { Component } from 'react';
import {LapComponent, LapsBox, LapsList, UlLine,
    UlList,ListLapRender, ListLeft, ListRight
} from './lapsStyle'

const liArr = [];
for(let i = 0; i< 6 ; i++){
    liArr.push(<ListLapRender key={i}></ListLapRender>)
}


class Laps extends Component {
  render() {
    const {lapsArr} = this.props;
    return (
      <LapComponent>
        <LapsBox>
            <LapsList>
                <UlLine>
                    {
                        liArr
                    }
                </UlLine>
                <UlList>
                    {
                        lapsArr.map((item, index) => (
                        <ListLapRender key={index}>
                          <ListLeft>
                            <span>Vòng {index + 1}</span>
                          </ListLeft>
                          <ListRight>
                            <span className="minutes">{item.minutesOut2}</span>:
                            <span className="seconds">{item.secondsOut2}</span>.
                            <span className="milliseconds">{item.millisecondsOut2}</span>
                          </ListRight>
                        </ListLapRender>
                        ))
                    }
                </UlList>
            </LapsList>
        </LapsBox>
      </LapComponent>
        
    );
  }
}

export default Laps;
