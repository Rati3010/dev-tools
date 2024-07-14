export const ADD_REQUEST = 'ADD_REQUEST';
export const SET_FILTER = 'SET_FILTER';

export const addRequest = (request) => ({
    type: ADD_REQUEST,
    payload: request
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter
});
