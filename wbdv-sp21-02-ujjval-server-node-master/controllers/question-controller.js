const questionService= require("../services/questions-service")

module.exports = (app) => { 

    const findQuestionsForQuiz = (req, res) => { 
        const quizId = req.params['quizId']
        const questions
            = questionService.findQuestionsForQuiz(quizId)
            .then(questions=>res.send(questions))
       // .json(questions)
    }
    
    app.get("/api/quizzes/:quizId/questions", 
        findQuestionsForQuiz)

        app.put("/api/question", 
        (req, res)=>{
            questionService.updateQuestion(req.body)
            .then(question=>res.send(question))
        })
  
        

}
