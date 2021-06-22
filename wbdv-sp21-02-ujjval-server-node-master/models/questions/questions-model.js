const mongoose=require('mongoose')
const questionsSchema=require('./questions-schema')
const questionModel=mongoose.model(
    'QuestionsModel',
    questionsSchema
) 

module.exports=questionModel  