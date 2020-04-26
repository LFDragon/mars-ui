import request from '../util/request';

export default {
    namespace: 'roomreport',
    state: {
        data: [],
        rooms: []
    },
    effects: {
        *queryRoomReport(_, sagaEffects) {
            const { call, put } = sagaEffects;
            const { payload } = _;
            const endPointURI = '/rooms/' + payload[0] + '/status/report' + payload[1];
        
            const reportData = yield call(request, endPointURI);
            yield put({ type: 'refreshStatus', payload: reportData });
        },
        *queryRoomList(_, sagaEffects) {
            const { call, put } = sagaEffects;
            const endPointURI = '/rooms/status';
        
            const roomData = yield call(request, endPointURI);
            yield put({ type: 'refreshRooms', payload: roomData });
        }
    },
    reducers: {
        refreshStatus(state, { payload: reportData }) {
            return {...state, data: reportData};
        },
        refreshRooms(state, { payload: roomData }) {
            var sortedData = roomData.reduce(function (acc, obj) {
                let key = obj.room.name;
                if (key) {
                    acc[key] = obj;
                }
                return acc
              }, {})
            return {...state, rooms: sortedData};
        }
    },

};