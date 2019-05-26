import { combineReducers, compose, createStore } from 'redux';

import { LDReducer } from '../components/Menu_Management/Zmones_Tab/PeopleListComponents/reducers/LDReducer';
import userProfileReducer from '../components/SkillsTab/UserProfileComponents/reducers/userProfileReducer';
import selfProfileReducer from '../components/SelfProfile/reducers/selfProfileReducer';
import employeeTravelReducer from '../components/SelfProfile/tabs/MyTravelsTab/TravelListComponents/reducers/employeeTravelReducer';

const rootReducer = combineReducers({
  LDReducer,
  userProfileReducer,
  selfProfileReducer,
  employeeTravelReducer,
});

const defaultState = {};
const enhancers = compose(
  /* global window */
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(rootReducer, defaultState, enhancers);
