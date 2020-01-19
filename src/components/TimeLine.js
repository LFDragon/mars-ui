import React, { Component } from 'react';
import SecDate from './TimeLineSecDate';
import Sec from './TimeLineSec';

const wrapperTimeLine = {
    display: 'flex',
    border: '1px solid lightgrey',
    backgroundColor: 'white',
    height: '50px',
    width: '100%'
};
const wrapperDate = {
    display: 'flex',
    height: '20px'
}
const wrapper = {
    margin: '0 30px 0 0',
};

class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var dateWidth = 100/10;
        return (
            <div style={{ margin: '0 0 0 30px' }}>
                <p>Time line:</p>
                <div style={wrapper}>
                    <div style={wrapperTimeLine}>
                        <Sec
                            width={10}
                            data={{
                                status: 'AVAILABLE',
                                start: '09:00',
                                end: '10:00',
                                detail: 'N/A'
                            }}
                            />
                        <Sec
                            width={10}
                            data={{
                                status: 'OCCUPIED',
                                start: '10:00',
                                end: '11:00',
                                detail: 'MARS Daily'
                            }}
                            />
                        <Sec
                            width={5}
                            data={{
                                status: 'AVAILABLE',
                                start: '11:00',
                                end: '11:30',
                                detail: 'N/A'
                            }}
                            />
                        <Sec
                            width={10}
                            data={{
                                status: 'OCCUPIED',
                                start: '11:30',
                                end: '12:30',
                                detail: 'Sensor Test'
                            }}
                            />
                        <Sec
                            width={15}
                            data={{
                                status: 'AVAILABLE',
                                start: '12:30',
                                end: '14:00',
                                detail: 'N/A'
                            }}
                            />
                        <Sec
                            width={25}
                            data={{
                                status: 'OCCUPIED',
                                start: '14:00',
                                end: '16:30',
                                detail: 'Gateway Integration'
                            }}
                            />
                        <Sec
                            width={25}
                            data={{
                                status: 'AVAILABLE',
                                start: '16:30',
                                end: '19:00',
                                detail: 'N/A'
                            }}
                            />
                    </div>
                    <div style={wrapperDate}>
                        <SecDate width={dateWidth}>09:00</SecDate>
                        <SecDate width={dateWidth}>10:00</SecDate>
                        <SecDate width={dateWidth}>11:00</SecDate>
                        <SecDate width={dateWidth}>12:00</SecDate>
                        <SecDate width={dateWidth}>13:00</SecDate>
                        <SecDate width={dateWidth}>14:00</SecDate>
                        <SecDate width={dateWidth}>15:00</SecDate>
                        <SecDate width={dateWidth}>16:00</SecDate>
                        <SecDate width={dateWidth}>17:00</SecDate>
                        <SecDate width={dateWidth}>18:00</SecDate>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimeLine;