import { ADD_REQUEST } from '../actions/requestActions';

const initialState = [];

const requestReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REQUEST:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default requestReducer;
