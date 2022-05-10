import {Axios} from './Axios';
function login(payload){
    return Axios.post('login',payload);
}
function signup(payload){
    return Axios.post('signup',payload);
}
export const loginServices = {
    login, 
    signup
};