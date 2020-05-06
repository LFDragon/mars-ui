import request from '../util/request';
import {prefix} from '../util/const.js';

export default {
    namespace: 'meetingroom',
    state: {
        data: [],
    },
    effects: {
        *queryRoomStatus(_, sagaEffects) {
            const { call, put } = sagaEffects;
            const endPointURI = prefix + '/floors';
        
            const roomData = yield call(request, endPointURI);
            yield put({ type: 'refreshStatus', payload: roomData });
        }
    },
    reducers: {
        refreshStatus(state, { payload: roomData }) {
            return {
                data: roomData
            };
        }
    },

};