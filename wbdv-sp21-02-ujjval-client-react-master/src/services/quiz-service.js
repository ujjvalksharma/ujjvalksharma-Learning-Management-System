const QUIZ_URL = "https://ujjval-node-quiz.herokuapp.com/api/quizzes"


export const findAllQuizzes = () =>
    fetch(`${QUIZ_URL}`)
        .then(response => response.json());

        
        export const findQuestionsForQuiz = (quizId) =>
    fetch(`${QUIZ_URL}/${quizId}/questions`)
        .then(response => response.json());

        export const updateQuestion=(question)=> 
        fetch("https://ujjval-node-quiz.herokuapp.com/api/question",{
            method:"PUT",
            body:JSON.stringify(question),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response=> response.json())

const api = {
    findAllQuizzes, findQuestionsForQuiz,updateQuestion
}

export default api;