const employeeTravels = require('../../response_example.json');
console.log();

const initialState = {
  employeeTravels: employeeTravels,
  filteredEmployeeTravels: employeeTravels,
  sortedEmployeeTravels: employeeTravels,
  currentSort: '',
  typedName: '',
  typedTopic: '',
  nameDirection: true,
  surnameDirection: true,
  activityDirection: true,
  hoursDirection: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SORT':
      if (action.property === 'name') {
        return {
          ...state,
          filteredEmployeeTravels: action.payload,
          sortedEmployeeTravels: action.sorted,
          nameDirection: !state.nameDirection,
          currentSort: action.property
        };
      }
      if (action.property === 'surname')
        return {
          ...state,
          filteredEmployeeTravels: action.payload,
          sortedEmployeeTravels: action.sorted,
          surnameDirection: !state.surnameDirection,
          currentSort: action.property
        };
      if (action.property === 'activity')
        return {
          ...state,
          filteredEmployeeTravels: action.payload,
          sortedEmployeeTravels: action.sorted,
          activityDirection: !state.activityDirection,
          currentSort: action.property
        };
      if (action.property === 'hours')
        return {
          ...state,
          filteredEmployeeTravels: action.payload,
          sortedEmployeeTravels: action.sorted,
          hoursDirection: !state.hoursDirection,
          currentSort: action.property
        };

    case 'FILTER':
      return { ...state, filteredEmployeeTravels: action.payload };

    case 'STORE_FILTER':
      if (action.property === 'name')
        return { ...state, typedName: action.typed };
      if (action.property === 'surname')
        return { ...state, typedTopic: action.typed };

    default:
      return state;
  }
};
