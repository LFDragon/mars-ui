import request from '../util/request';

export default {
    namespace: 'roomreport',
    state: {
        data: [],
    },
    effects: {
        *queryRoomReport(_, sagaEffects) {
            const { call, put } = sagaEffects;
            const { payload } = _;
            const endPointURI = '/rooms/status/report' + payload;
        
            const reportData = yield call(request, endPointURI);
            yield put({ type: 'refreshStatus', payload: reportData });
        }
    },
    reducers: {
        refreshStatus(state, { payload: reportData }) {
            return {
                data: reportData
            };
        }
    },

};