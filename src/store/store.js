import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { LDReducer } from '../components/Menu_Management/Zmones_Tab/PeopleListComponents/reducers/LDReducer';
import userProfileReducer from '../components/SkillsTab/UserProfileComponents/reducers/userProfileReducer';
import selfProfileReducer from '../components/SelfProfile/reducers/selfProfileReducer';

const rootReducer = combineReducers({
  LDReducer,
  userProfileReducer,
  selfProfileReducer,
});

const defaultState = {};

const middlewareEnhancer = applyMiddleware(thunk)

const enhancers = compose(
  /* global window */
  middlewareEnhancer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// v1.0 dispatch axios wont work
//export const store = createStore(rootReducer, defaultState, enhancers);
// v2.0 dispatch axios works
//export const store = createStore(
//  rootReducer,
//  applyMiddleware(thunk)
//);
// v3.0 dispatch axios + redux devTools both work :
export const store = createStore(rootReducer, defaultState, enhancers);
