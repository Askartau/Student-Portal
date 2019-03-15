import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const subjects = (state =[], action) => {
    switch(action.type) {
        case actionTypes.ACTION_GET_SUBJECTS_FOR_FACULTIES_SUCCESS:
            return action.subjects;
        case actionTypes.ACTION_GET_SUBJECTS_FOR_FACULTIES_FAILED:
            return [];
        default:
            return state;
    }
}   

const subjectReducer = combineReducers({
    subjects
});

export default subjectReducer;