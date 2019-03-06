import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { ILoginState } from './pages/login/Interfaces';
import loginReducer from './pages/login/State';

export interface IStoreShape{
  login: ILoginState
}

const rootReducer = combineReducers({
  login: loginReducer,
});

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

export default store;
