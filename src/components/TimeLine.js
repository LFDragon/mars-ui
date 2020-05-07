import React, { Component } from 'react';
import moment from 'moment';
import SecDate from './TimeLineSecDate';
import Sec from './TimeLineSec';
import styles from '../css/General.less';

const wrapperTimeLine = {
    display: 'flex',
    border: '1px solid lightgrey',
    backgroundColor: 'white',
    height: '50px'
};
const wrapperDate = {
    display: 'flex',
    height: '20px'
};
const wrapper = {
    marginTop: '15px',
    overflowX: 'auto'
};

// const SCALEBYDAY = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
const SCALEBYDAY = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];
const DAYSEC = 86400;

class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getCustomScale(from, to) {
        var scaleArray = [];
        while(to.diff(from, 'days') >= 1) {
            scaleArray.push(from.format('MM/DD'));
            from = from.add(1, 'day');
        }
        return scaleArray;
    }

    render() {
        var dataArray = [];
        var dateWidth = null;
        var timeItem = null;
        var totalSec = null;
        var endingTS = null;
        var startingTS = null;
        var endingTS = null;
        var minWidth = {minWidth: '580px'};

        //Set scale
        switch(this.props.range) {
            case "byDay":
                startingTS = moment(this.props.date + "T08:00:00");
                endingTS = moment(this.props.date + "T24:00:00");
                timeItem = SCALEBYDAY;
                dateWidth = 100 / timeItem.length;
                totalSec = DAYSEC * 2/3;
                minWidth = {minWidth: '580px'};
                break;
            case "byMonth":
                startingTS = moment(this.props.fromDate + "T00:00:00");
                endingTS = moment(this.props.toDate + "T24:00:00");
                timeItem = Array.from({length: startingTS.daysInMonth()}, (v, k) => k+1);
                dateWidth = 100 / timeItem.length;
                totalSec = DAYSEC * startingTS.daysInMonth();
                minWidth = {minWidth: '640px'};
                break;
            case "custom":
                startingTS = moment(this.props.cusFromDate + "T00:00:00");
                endingTS = moment(this.props.cusToDate + "T24:00:00");
                timeItem = this.getCustomScale(moment(this.props.cusFromDate + "T00:00:00"), moment(this.props.cusToDate + "T24:00:00"));
                dateWidth = 100 / timeItem.length;
                totalSec = DAYSEC * endingTS.diff(startingTS, 'days');
                minWidth = endingTS.diff(startingTS, 'days') > 15 ? {minWidth: '1000px'} : minWidth;
                break;
        }
            
        //Set data
        var nextSecType = 'UNKNOWN';
        var nextSecStartTime = startingTS;
        for (let i in this.props.data) {
            var newSec = {};
            var timeStamp = moment(this.props.data[i]['updateTimestamp']);
            newSec['status'] = nextSecType;
            nextSecType = this.props.data[i]['status'];
            
            //skip data earlier than 8am
            if (timeStamp.diff(nextSecStartTime, 'seconds') < 0) continue;

            newSec['width'] = timeStamp.diff(nextSecStartTime, 'seconds') / totalSec * 100;
            newSec['start'] = nextSecStartTime.format("YYYY-MM-DD HH:mm:ss");
            nextSecStartTime = timeStamp;
            newSec['end'] = nextSecStartTime.format("YYYY-MM-DD HH:mm:ss");
            newSec['detail'] = 'N/A';
            dataArray.push(newSec);

            if (i == this.props.data.length - 1) {
                newSec = {};
                timeStamp = endingTS;
                newSec['status'] = nextSecType;
                newSec['width'] = timeStamp.diff(nextSecStartTime, 'seconds') / totalSec * 100;
                newSec['start'] = nextSecStartTime.format("YYYY-MM-DD HH:mm:ss");
                newSec['end'] = timeStamp.format("YYYY-MM-DD HH:mm:ss");
                newSec['detail'] = 'N/A';
                dataArray.push(newSec);
            }
        }

        return (
            <div>
                <div className={styles['my-desc-legend']}>
                    <div className={styles['my-desc-legend-row']}><div className={styles['my-desc-legend-square']} style={{backgroundColor: 'lightgreen'}}></div>
                    - Available
                    </div>
                    <div className={styles['my-desc-legend-row']}><div className={styles['my-desc-legend-square']} style={{backgroundColor: 'lightpink'}}></div>
                    - In use
                    </div>
                    <div className={styles['my-desc-legend-row']}><div className={styles['my-desc-legend-square']} style={{backgroundColor: 'lightgrey'}}></div>
                    - Unknown
                    </div>
                </div>
                <div style={wrapper}>
                    <div style={{...wrapperTimeLine, ...minWidth}}>
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
                    <div style={{...wrapperDate, ...minWidth}}>
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