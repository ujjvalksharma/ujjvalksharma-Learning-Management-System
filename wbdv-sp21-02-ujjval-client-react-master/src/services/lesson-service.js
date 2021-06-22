const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/001092993/modules"
const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/001092993/lessons"

export const createLesson = (moduleId, lesson) =>
     fetch(`${MODULES_URL}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json()); 
        


export const updateLesson = (LessonId, lesson) =>
    fetch(`${LESSON_URL}/${LessonId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
        .then(response =>{
          return  response.json()
        });

export const deleteLesson = (LessonId) =>
    fetch(`${LESSON_URL}/${LessonId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

const api = {
    createLesson, findLessonsForModule, deleteLesson, updateLesson
}

export default api;