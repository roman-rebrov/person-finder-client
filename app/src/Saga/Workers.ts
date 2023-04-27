import { call, put, takeEvery } from 'redux-saga/effects'
import { getPerson } from '../API/api'
import { ASYNC_PERSON_GET_REQUEST, postPersonActionCreater, RequestActionType } from '../Redux/Actions'
import { Person } from '../Types/types';

function* findPersonWorker (action : RequestActionType) {
    try{

        
        const param : string = "person?name=" + action.param;
        console.log(param);

        const person : Person = yield call( getPerson, param);
        yield put(postPersonActionCreater(person));
    } catch (err) {
        yield put({type : err, })
    }
}

export function* watcher () : any {        
        yield takeEvery(ASYNC_PERSON_GET_REQUEST, findPersonWorker);
}