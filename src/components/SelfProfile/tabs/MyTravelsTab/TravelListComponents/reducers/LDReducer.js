import LDUserData from '../LDUserData.js';

const initialState = {
  users: LDUserData.users,
  filteredUsers: LDUserData.users,
  sortedUsers: LDUserData.users,
  currentSort: '',
  typedName: '',
  typedTopic: '',
  nameDirection: true,
  surnameDirection: true,
  activityDirection: true,
  hoursDirection: true
};

export const LDReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT':
      if (action.property === 'name') {
        return {
          ...state,
          filteredUsers: action.payload,
          sortedUsers: action.sorted,
          nameDirection: !state.nameDirection,
          currentSort: action.property
        };
      }
      if (action.property === 'surname')
        return {
          ...state,
          filteredUsers: action.payload,
          sortedUsers: action.sorted,
          surnameDirection: !state.surnameDirection,
          currentSort: action.property
        };
      if (action.property === 'activity')
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
      if (action.property === 'name')
        return { ...state, typedName: action.typed };
      if (action.property === 'surname')
        return { ...state, typedTopic: action.typed };

    default:
      return state;
  }
};
