export const getTeachersForFaculty = () => {
    fetch(
        'https://localhost:8000/faculties/<:id>/teachers/',
        {
            method: 'GET'
        }
    )
}