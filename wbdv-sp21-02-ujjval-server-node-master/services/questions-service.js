const QuestionDao=require('../daos/questions-dao')

const findAllQuestions = () => QuestionDao.findAllQuestions()
const findQuestionById = (questionId) => QuestionDao.findQuestionById(questionId)
const findQuestionsForQuiz = (quizId) => QuestionDao.findQuestionsForQuiz(quizId)
const updateQuestion=(question)=>QuestionDao.updateQuestion(question)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz,updateQuestion }
  