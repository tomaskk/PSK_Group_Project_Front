import LDUserData from '../LDUserData.js';

const initialState = {
  users: [],
  filteredUsers: [],
  sortedUsers: [],
  currentSort: '',
  typedName: '',
  typedTopic: '',
  nameDirection: true,
  surnameDirection: true,
  activityDirection: true,
  hoursDirection: true,

  travelsList: [],
  employeeTravel: []
};

export const LDReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT':
      if (action.property === 'firstName') {
        return {
          ...state,
          filteredUsers: action.payload,
          sortedUsers: action.sorted,
          nameDirection: !state.nameDirection,
          currentSort: action.property
        };
      }
      if (action.property === 'lastName')
        return {
          ...state,
          filteredUsers: action.payload,
          sortedUsers: action.sorted,
          surnameDirection: !state.surnameDirection,
          currentSort: action.property
        };
      if (action.property === 'available')
        return {
          ...state,
          filteredUsers: action.payload,
          sortedUsers: action.sorted,
          activityDirection: !state.activityDirection,
          currentSort: action.property
        };
      if (action.property === 'hours')
        return {
          ...state,
          filteredUsers: action.payload,
          sortedUsers: action.sorted,
          hoursDirection: !state.hoursDirection,
          currentSort: action.property
        };

    case 'FILTER':
      return { ...state, filteredUsers: action.payload };

    case 'STORE_FILTER':
      if (action.property === 'firstName')
        return { ...state, typedName: action.typed };
      if (action.property === 'lastName')
        return { ...state, typedTopic: action.typed };

    case 'USERS_LOAD_ALL':
      return{
        ...state,
        filteredUsers: action.payload,
        sortedUsers: action.payload,
        users: action.payload
      };

    case 'TRAVELS_LOAD_ALL':
      return{
        ...state,
        travelsList: action.payload
      };

    case 'EMPLOYEE_TRAVEL_LOAD_ALL':
      return{
        ...state,
        employeeTravel: action.payload
      };

    default:
      return state;
  }
};
