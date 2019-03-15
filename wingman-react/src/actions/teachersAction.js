import * as actionTypes from '../constants/actionTypes';
import * as teacherApi from '../api/teacherApi';

export const getTeachersForFaculty = () => {

    dispatch({
        type: actionTypes.ACTION_GET_TEACHERS_FOR_FACULTIES_STARTED
    })

    teacherApi.getTeachersForFaculty().then(
        response.text().then(
            value => {
                const teachers = JSON.parse(value)
                dispatch({
                    type: actionTypes.ACTION_GET_TEACHERS_FOR_FACULTIES_SUCCESS,
                    teachers
                })
            }
        )
    )
}