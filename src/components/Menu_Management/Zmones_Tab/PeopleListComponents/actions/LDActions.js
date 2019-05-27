import axios from "axios";
import { ServerHostName } from '../../../../../constants/serverUri.js';

export function sortData(property, data, sorted) {
  return {
    type: 'SORT',
    property,
    payload: data,
    sorted
  };
}

export function filterData(data) {
  return {
    type: 'FILTER',
    payload: data
  };
}

export function storeFilter(property, typed) {
  return {
    type: 'STORE_FILTER',
    property,
    typed
  };
}

// -- dispatch action to update store
export function loadData(data, dispatchType) {
  return {
      type: dispatchType,
      payload: data
  }
}

//-- management -> available users
export const loadUsersFromAPI = () => dispatch => {

  axios.get(ServerHostName + '/api/Employees')
  .then(response => {
      let users = response.data;

      //console.log(users);
      dispatch(loadData(users, 'USERS_LOAD_ALL'))
  })
}

//-- management -> available travels
export const loadTravelsFromAPI = () => dispatch => {

  axios.get(ServerHostName + '/api/Travels')
  .then(response => {
      let travels = response.data;

      //console.log(travels);
      dispatch(loadData(travels, 'TRAVELS_LOAD_ALL'))
  })
}

//-- load employee_travel to the system
export const loadEmployeeTravelFromAPI = () => dispatch => {

  axios.get(ServerHostName + '/api/EmployeeTravel')
  .then(response => {
      let travels = response.data;

      //console.log(travels);
      dispatch(loadData(travels, 'EMPLOYEE_TRAVEL_LOAD_ALL'))
  })
}
