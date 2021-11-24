import { User } from './../models/User';
import { FETCH_ONE_USER, FETCH_ONE_USER_COMPLETED, FETCH_ONE_USER_ERROR, SELECT_USERID, FETCH_USERS, FETCH_PEOPLE } from './actions.constants';







export const selectId = (id:number) => (
    {type:SELECT_USERID,payload: id}
);
export const fetchOneUser = (id:number) => (
    {type:FETCH_ONE_USER , payload: id}
);

export const fetchOneUserCompleted = (User:User) => (
    {type:FETCH_ONE_USER_COMPLETED, payload:User}
);

export const fetchOneUserError = (id:number, msg:string) => ({
    type:FETCH_ONE_USER_ERROR,payload:{id,msg}
});

export const fetchUsersAction = (usersById:{[userId:number] : User}) => ({
    type:FETCH_USERS , payload:usersById
});

export const fetchPeople = () => ({
    type:FETCH_PEOPLE
})

