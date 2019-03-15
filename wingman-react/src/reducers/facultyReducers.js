import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const faculties = (state =[], action) => {
    switch(action.type) {
        case actionTypes.ACTION_GET_FACULTIES_SUCCESS:
            return action.posts;
        case actionTypes.ACTION_GET_FACULTIES_FAILED:
            return [];
        default:
            return state;
    }
}   

const facultyReducer = combineReducers({
    faculties
});

export default facultyReducer;