import { takeEvery } from '@redux-saga/core/effects';

import {  FETCH_PEOPLE, FETCH_ONE_USER } from './../actions/actions.constants';

import { fetchUsersAction,  fetchOneUserCompleted } from './../actions/Users.actions';

import { fetchUsers as fetchUsersAPI, fetchOneUser as fetchOneUserAPI } from './../api/user';
import { call ,put,all } from '@redux-saga/core/effects';
import { AnyAction } from "redux";



function* fetchUsers(action: AnyAction): Generator<any> {
    const users:any = yield call(fetchUsersAPI);
    yield put(fetchUsersAction(users));
}

function* fetchUser(action:AnyAction): Generator<any> {
    const res:any = yield call(fetchOneUserAPI,action.payload);
    yield put(fetchOneUserCompleted(res.data.data));
    
}

export function* watchUsers() {
    yield all([takeEvery(FETCH_PEOPLE,fetchUsers),takeEvery(FETCH_ONE_USER,fetchUser)]);
} 