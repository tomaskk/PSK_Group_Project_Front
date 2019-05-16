import { LOGIN_USER, GET_USER_ROLE } from '../actions/ActionTypes';

const initialState = {
  isLoggedIn: false,
  userRole: ''
};

export const LoginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: action.data
      };
    case GET_USER_ROLE:
      return {
        ...state,
        userRole: action.userRole
      };
    default:
      return state;
  }
};
