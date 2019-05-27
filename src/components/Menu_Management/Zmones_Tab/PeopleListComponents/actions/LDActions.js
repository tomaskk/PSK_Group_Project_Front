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

//-- management -> get available users
export const loadUsersFromAPI = () => dispatch => {

  axios.get(ServerHostName + '/api/Employees')
  .then(response => {
      let users = response.data;

      //console.log(users);
      dispatch(loadData(users, 'USERS_LOAD_ALL'))
  })
}

//-- management -> get available travels
export const loadTravelsFromAPI = () => dispatch => {

  axios.get(ServerHostName + '/api/Travels')
  .then(response => {
      let travels = response.data;

      //console.log(travels);
      dispatch(loadData(travels, 'TRAVELS_LOAD_ALL'))
  })
}

//-- get employee_travel records
export const loadEmployeeTravelFromAPI = () => dispatch => {

  axios.get(ServerHostName + '/api/EmployeeTravel')
  .then(response => {
      let travels = response.data;

      //console.log(travels);
      dispatch(loadData(travels, 'EMPLOYEE_TRAVEL_LOAD_ALL'))
  })
}

//-- get records of apartments 
export const loadApartmentsFromAPI = () => dispatch => {

  axios.get(ServerHostName + '/api/Apartments')
  .then(response => {
      let data = response.data;

      //console.log(data);
      dispatch(loadData(data, 'APARTMENTS_LOAD_ALL'))
  })
}
