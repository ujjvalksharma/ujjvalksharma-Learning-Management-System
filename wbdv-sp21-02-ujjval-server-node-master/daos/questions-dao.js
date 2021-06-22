const QuestionsModel=require('../models/questions/questions-model')

const findAllQuestions=()=> QuestionsModel.find()
const findQuestionById=(questionId)=>QuestionsModel.findById(questionId)
const findQuestionsForQuiz = (qzid) => QuestionsModel.find({quizId:qzid})
const updateQuestion=(question) =>QuestionsModel.updateOne({_id:question._id},question)
module.exports = { findAllQuestions, findQuestionById, 
                   findQuestionsForQuiz,updateQuestion }
 