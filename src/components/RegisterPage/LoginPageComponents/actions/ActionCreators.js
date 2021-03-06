import axios from 'axios';
import { ServerHostName } from '../../../../constants/serverUri';
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

export const tryRegister = (mail, pw, confirmPw, name, surname, history, dispatch) => {
    axios
        .post(ServerHostName + "/api/accounts/register", {
            email: mail,
            password: pw,
            confirmPassword: confirmPw,
            firstName: name,
            lastName: surname,
            profilePhoto: "https://randomuser.me/api/portraits/lego/6.jpg",
            registeredOfficeId: 1
        })
        .then(() => {
            //dispatch({ type: LOGIN_USER, data: true });
            history.push("/login");
            document.getElementById("error").classList = "error__hidden";
        })
        .catch(error => {
            alert('Failed attempt.');
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
