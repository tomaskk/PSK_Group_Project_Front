import * as constants from '../actions/switchTabs.js';

// -- currentTab -> for routing;
// --    self    -> temporary/fake user data for testing purposes
const initialState = {
  currentTab: 'personal_info',
  // self: {
  photo: 'https://www.w3schools.com/howto/img_avatar.png',
  name: 'Bart',
  surname: 'Simpson',
  email: 'email@random.devb.com',
  city: 'Vilnius',
  masterAt: [
    { subject: 'Python', stars: 3 },
    { subject: 'Spring Boot', stars: 2 },
    { subject: 'React Native', stars: 1 }
  ],
  wantsToLearn: [
    { subject: 'AngularJS', comment: "I'm really interested in Angular!" },
    { subject: '.NET', comment: "I'm really interested in .NET!" }
  ]
  // }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SWITCH_TAB:
      return {
        ...state,
        currentTab: action.tab
      };

    case constants.UPDATE_PHOTO:
      return {
        ...state,
        photo: action.newString
      };

    case constants.UPDATE_NAME:
      return {
        ...state,
        name: action.newString
      };

    case constants.UPDATE_SURNAME:
      return {
        ...state,
        surname: action.newString
      };

    case constants.UPDATE_EMAIL:
      return {
        ...state,
        email: action.newString
      };

    case constants.UPDATE_CITY:
      return {
        ...state,
        city: action.newString
      };

    case constants.UPDATE_MASTER_AT:
      return {
        ...state,
        masterAt: action.newObj
      };

    case constants.UPDATE_WANTS_TO_LEARN:
      return {
        ...state,
        wantsToLearn: action.newObj
      };

    default:
      return state;
  }
};
