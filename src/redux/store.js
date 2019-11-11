import {
  createStore, combineReducers, applyMiddleware, compose
} from "redux";
import thunk from "redux-thunk";
import projectReducer from "../DSTAstaff/Project/Project.ducks";

import appReducer from "../App.ducks";

const rootReducer = combineReducers({
  projects: projectReducer,
  app: appReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
