import { combineReducers, compose, createStore } from 'redux';

import { LDReducer } from '../components/Menu_Management/Zmones_Tab/PeopleListComponents/reducers/LDReducer';
import userProfileReducer from '../components/UserProfile/UserProfileComponents/reducers/userProfileReducer';
import selfProfileReducer from '../components/SelfProfile/reducers/selfProfileReducer';

const rootReducer = combineReducers({
  LDReducer,
  userProfileReducer,
  selfProfileReducer
});

const defaultState = {};
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(rootReducer, defaultState, enhancers);
