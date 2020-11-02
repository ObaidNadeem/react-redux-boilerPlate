import UserReducer from './userReducer';
import StateReducer from './stateReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
    stateReducer : StateReducer,
    userReducer : UserReducer
})

export default rootReducer;