
import { meLogout, meLogin, me } from "./../api/auth";
import {  ON_LOGIN, ON_LOGOUT, USER_FETCH } from "./../actions/actions.constants";
import { meLoginAction } from "./../actions/auth.action";

import {
  call,
  put,
  
  takeEvery,
  all,
} from "@redux-saga/core/effects";

import { AnyAction } from "redux";

import { meFetchAction } from "../actions/auth.action";
import { LS_AUTH_TOKEN } from "../api/base";


function* login(action: AnyAction): Generator<any> {
    
  const res: any = yield call(meLogin, action.payload);
  localStorage.setItem(LS_AUTH_TOKEN, res.data.token);
  yield put(meLoginAction(res.data.user));
  
}

function* logout(): Generator<any> {
  
  yield call(meLogout);
  
}


function* userFetch(): Generator<any> {
    const user: any = yield call(me);
    yield put(meFetchAction(user));
}


export function* watchAuth() {
  
  yield all([takeEvery(ON_LOGIN, login), takeEvery(ON_LOGOUT, logout),  takeEvery(USER_FETCH,userFetch)]);
}
