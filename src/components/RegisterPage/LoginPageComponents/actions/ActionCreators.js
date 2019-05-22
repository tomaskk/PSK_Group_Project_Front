import axios from "axios";
const ServerHostName = 'http://localhost:8080';
import { LOGIN_USER, GET_USER_ROLE } from '../actions/ActionTypes';

export const tryLogin = (email, password, rememberme, history, dispatch) => {
    axios
        .post(ServerHostName + "/api/Auth/login", {
            email: email,
            password: password,
            rememberme: rememberme
        })
        .then(response => {
            if (response.request.status == 204) {
                dispatch({ type: LOGIN_USER, data: true });
                getRole(history, dispatch)
            }
        })
        .catch(error => {
            document.getElementById("error").classList = "error";
            console.log(error);
        });
};

export const tryRegister = (email, password, history, dispatch) => {
    axios
        .post(ServerHostName + "/api/auth/register", {
            email: email,
            password: password
        })
        .then(() => {
            dispatch({ type: LOGIN_USER, data: true });
            history.push("/");
            document.getElementById("error").classList = "error__hidden";
        })
        .catch(error => {
            document.getElementById("error").classList = "error";
        });
};

export const getRole = (history, dispatch) => {
    axios
        .get(ServerHostName + "/api/Auth/role")
        .then(res => {
            dispatch({
                type: GET_USER_ROLE,
                userRole: res.data
            });
            history.push("/host/search");
        })
        .catch(error => {
            document.getElementById("error").classList = "error";
            console.log(error);
        });
};