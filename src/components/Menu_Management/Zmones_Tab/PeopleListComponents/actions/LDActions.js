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

//-- management -> available users
export function loadData(data) {
  return {
      type: 'USERS_LOAD_ALL',
      payload: data
  }
}

export const loadDataFromAPI = () => dispatch => {

  axios.get(ServerHostName + '/api/Employees')
  .then(response => {
      let users = response.data;

      console.log(users);
      dispatch(loadData(users))
  })
}
