const mongoose=require('mongoose')

quizSchema=mongoose.Schema({
_id: String,
title: String,
questions:[{
    type:String, // type is mongoose keyword
    ref:'QuestionsModel'  // ref is mongoose keyword
}]
},{collection:'quizzes'})
module.exports=quizSchema 