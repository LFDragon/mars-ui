import request from '../util/request';

const delay = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
};

export default {
    namespace: 'meetingroom',
    state: {
        data: [],
    },
    effects: {
        *queryRoomStatus(_, sagaEffects) {
            const { call, put } = sagaEffects;
            const endPointURI = '/status/rooms';
        
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