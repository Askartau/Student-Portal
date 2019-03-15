export const getSubjectsForFaculty = () => {
    fetch(
        'https://localhost:8000/faculties/<:id>/subjects/',
        {
            method: 'GET'
        }
    )
}