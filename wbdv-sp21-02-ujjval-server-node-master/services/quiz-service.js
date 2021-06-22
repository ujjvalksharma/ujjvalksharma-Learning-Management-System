const quizDao = require('../daos/quizzes-dao')

const findAllQuizzes = () => quizDao.findAllQuizzes()
const findQuizById = (quizId) => quizDao.findQuizById(quizId)

module.exports = { findAllQuizzes, findQuizById }