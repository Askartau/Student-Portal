import * as actionTypes from '../constants/actionTypes';
import * as facultyApi from '../api/facultyApi';

export const getFaculties = () => {

    dispatch({
        type: actionTypes.ACTION_GET_FACULTIES_STARTED
    })

    facultyApi.getFaculties().then(
        response.text().then(
            value => {
                const faculties = JSON.parse(value)
                dispatch({
                    type: actionTypes.ACTION_GET_FACULTIES_SUCCESS,
                    faculties
                })
            }
        )
    )
}