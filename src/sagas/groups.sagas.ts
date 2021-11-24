import { fetchUsersAction } from './../actions/Users.actions';
import {
  FETCH_ONE_GROUP,
  GROUPS_QUERY_CHANGED,
} from "../actions/actions.constants";
import {
  call,
  put,
  takeLatest,
  delay,
  takeEvery,
  all,
} from "@redux-saga/core/effects";
import { fetchGroups as fetchGroupsAPI, fetchOneGroup } from "../api/groups";
import { AnyAction } from "redux";
import {
  fetchOneGroupCompleted,
  fetchOneGroupError,
  queryCompletedAction,
} from "../actions/groups.action";
import { normalize } from "normalizr";
import { groupSchema } from "../models/schemas";

function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(1000);
  
  const groupRes: any = yield call(fetchGroupsAPI, {
    query: action.payload,
    status: "all-groups",
  });
  const data = normalize(groupRes.data.data,[groupSchema]);
  
  yield put(queryCompletedAction(action.payload, data.entities.groups as any));
  yield put(fetchUsersAction(data.entities.users as any));
}

function* fetchOne(action: AnyAction): Generator<any> {
  try {
    
    const groupRes: any = yield call(fetchOneGroup, action.payload);
    
    const data = normalize(groupRes.data.data , groupSchema);
  
    
    yield put(fetchOneGroupCompleted(data.entities.groups as any));
    
    yield put(fetchUsersAction(data.entities.users as any));
  } catch (e) {
    const error = e.response?.data?.message || "Some error occured";

    yield put(fetchOneGroupError(action.payload, error));
  }
}

export function* watchGroupQuerychanged() {
  yield all([
    takeLatest(GROUPS_QUERY_CHANGED, fetchGroups),
    takeEvery(FETCH_ONE_GROUP, fetchOne),
  ]);
}
