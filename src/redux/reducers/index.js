import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    requests: requestReducer,
    filter: filterReducer
});

export default rootReducer;
