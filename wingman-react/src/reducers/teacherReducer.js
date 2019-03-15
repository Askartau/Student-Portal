import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const teachers = (state =[], action) => {
    switch(action.type) {
        case actionTypes.ACTION_GET_TEACHERS_FOR_FACULTIES_SUCCESS:
            return action.teachers;
        case actionTypes.ACTION_GET_TEACHERS_FOR_FACULTIES_FAILED:
            return [];
        default:
            return state;
    }
}   

const teacherReducer = combineReducers({
    teachers
});

export default teacherReducer;