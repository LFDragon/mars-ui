import request from '../util/request';
import {prefix} from '../util/const.js';

export default {
    namespace: 'allreport',
    state: {
        utilRate: 0,
        rooms: []
    },
    effects: {
        *queryRoomList(_, sagaEffects) {
            const { call, put } = sagaEffects;
            const { payload } = _;
            const endPointURI = prefix + '/location/' + payload[0] + '/report';
        
            const data = yield call(request, endPointURI);
            yield put({ type: 'refreshRooms', payload: data });
        }
    },
    reducers: {
        refreshRooms(state, { payload: data }) {
            var sortedData = data.locationDetail.rooms.reduce(function (acc, obj) {
                let key = obj.room.name;
                if (key) {
                    acc[key] = obj;
                }
                return acc
              }, {})
            return {utilRate: data.utilizeRate, rooms: sortedData};
        }
    },

};