import axios from "axios"

export const signin=(body)=>{
    return axios.post("http://localhost:5000/user/signin",body);
}

export const signup=(body)=>{
    return axios.post("http://localhost:5000/user/signup",body);
}