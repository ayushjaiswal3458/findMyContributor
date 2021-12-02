import axios from "axios";
import { User } from "../models/User";
import { BASE_URL, LS_AUTH_TOKEN } from "./base";

export interface LoginRequest {
    email: string;
    password: string;
}
export interface LoginResponse {
    data: {
        is_2fa_enabled: boolean;
    };
    token: string;
    user: User;
}





export const meLogin = (data: LoginRequest) => {
    const url = BASE_URL + "/login";
    
    // return fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // }).then(
    //     (response) => {
    //         response.json().then((data) => console.log("Response in json format", data));

    //         return response;
    //     }
    // );
    return axios.post < LoginResponse > (url, data).then((response) => {
        
        
        return response;


    });
};

export const meLogout = () => {
    localStorage.removeItem(LS_AUTH_TOKEN);
}

interface MeResponse {
    data : User ;
}

export const me = () => {
    const url = BASE_URL + "/me";
    
    return axios.get<MeResponse>(url).then(response => response.data.data);
}
export const meUpdate = (data:any) => {
    const url = BASE_URL + "/me";
    return axios.put(url, data).then((response) => {
        console.log(response)
    return response});
}

