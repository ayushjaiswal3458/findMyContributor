
import { LoginRequest } from "../api/auth";
import { User } from "../models/User";

import { ME_FETCH, ME_LOGIN, ON_LOGIN, ON_LOGOUT, USER_FETCH } from "./actions.constants";


 export const meFetchAction = (u: User) => ({
    type:ME_FETCH, payload: u
});

 export const meLoginAction =   (u: User) => ({
    type:ME_LOGIN, payload: u
});
export const onLoginAction = (data:LoginRequest) => ({
    type:ON_LOGIN,payload:data
})

export const onLogoutAction = () => ({
    type:ON_LOGOUT
});

export const userFetchAction = () => ({
    type:USER_FETCH
})