import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import vacationRequestsReducer from '../reducers/vacationRequestsReducer';

const rootReducer = combineReducers({ vacationRequests: vacationRequestsReducer });

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
