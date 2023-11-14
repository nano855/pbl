import { combineReducers } from '@reduxjs/toolkit';
import myDataReducer from './myDataReducer'; // Update this path based on your actual reducer file

const rootReducer = combineReducers({
    myData: myDataReducer,
});

export default rootReducer;