import * as actionTypes from '../constants/actionTypes';
import * as subjectApi from '../api/subjectApi';

export const getSubjectsForFaculty = (dispatch) => {

    dispatch({
        type: actionTypes.ACTION_GET_SUBJECTS_FOR_FACULTIES_STARTED
    })

    subjectApi.getSubjectsForFaculty().then(
        response => {
            response.text().then(
                value => {
                    const subjects = JSON.parse(value)
                    dispatch({
                        type: actionTypes.ACTION_GET_SUBJECTS_FOR_FACULTIES_SUCCESS,
                        subjects
                    })
                }
            )
        }
    )
}