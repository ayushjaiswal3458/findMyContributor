import { User } from './../models/User';
import axios from 'axios';

import { BASE_URL } from './base';
export interface UserRequest {
    __type:"listAll";
    
}

export interface UsersResponse {
    data:User[];
}

export interface UserRequestByid{
    id:number;
}

export interface UserOneResponse {
    User:User;
}
export const fetchUsers = () => {
    const url =BASE_URL + "/people";
    return axios.get<UsersResponse>(url).then((res) => res.data.data);
}
export const fetchOneUser = (id:number) => {
    const url = BASE_URL + "/people/" + id;
    return axios.get<UsersResponse>(url)
}