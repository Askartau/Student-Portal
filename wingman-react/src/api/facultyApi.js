export const getFaculties = () => {
    fetch(
        'https://localhost:8000/faculties/',
        {
            method: 'GET'
        }
    )
}