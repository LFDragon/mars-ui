import React, { Component } from 'react';
import moment from 'moment';
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

const SCALEBYDAY = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];

class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var dataArray = [];
        var dateWidth = null;
        var timeItem = null;
        if (this.props.range == "day") {
            //Set scale
            timeItem = SCALEBYDAY;
            dateWidth = 100 / timeItem.length;

            //Set data
            var nextSecType = 'UNKNOWN';
            console.log(this.props.dateFrom + "T00:00:00");
            var nextSecStartTime = moment(this.props.dateFrom + "T00:00:00");
            for (let i in this.props.data) {
                var newSec = {};
                var timeStamp = moment(this.props.data[i]['updateTimestamp']);
                newSec['status'] = nextSecType;
                nextSecType = this.props.data[i]['status'];
                newSec['width'] = timeStamp.diff(nextSecStartTime, 'seconds') / 86400 * 100;
                newSec['start'] = nextSecStartTime.format("YYYY-MM-DD HH:mm:ss");
                nextSecStartTime = timeStamp;
                newSec['end'] = nextSecStartTime.format("YYYY-MM-DD HH:mm:ss");
                newSec['detail'] = 'N/A';
                dataArray.push(newSec);

                if (i == this.props.data.length - 1) {
                    newSec = {};
                    timeStamp = moment(this.props.dateFrom + "T24:00:00");
                    newSec['status'] = nextSecType;
                    newSec['width'] = timeStamp.diff(nextSecStartTime, 'seconds') / 86400 * 100;
                    newSec['start'] = nextSecStartTime.format("YYYY-MM-DD HH:mm:ss");
                    newSec['end'] = timeStamp.format("YYYY-MM-DD HH:mm:ss");
                    newSec['detail'] = 'N/A';
                    dataArray.push(newSec);
                }
            }
        }

        return (
            <div style={{ margin: '0 0 0 30px' }}>
                <p>Time line:</p>
                <div style={wrapper}>
                    <div style={wrapperTimeLine}>
                        {dataArray.map((value, index) => {
                            return <Sec
                                    width={value.width}
                                    data={{
                                        status: value.status,
                                        start: value.start,
                                        end: value.end,
                                        detail: value.detail
                                    }}
                                />
                        })}
                    </div>
                    <div style={wrapperDate}>
                        {
                            timeItem.map(function (item) {
                                return <SecDate width={dateWidth}>{item}</SecDate>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default TimeLine;