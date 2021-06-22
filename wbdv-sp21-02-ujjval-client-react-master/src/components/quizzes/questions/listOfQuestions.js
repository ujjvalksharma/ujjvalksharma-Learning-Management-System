import { Alert } from 'bootstrap';
import React,{useState,useEffect} from 'react'
import { useParams} from "react-router-dom";
import QuizService from '../../../services/quiz-service'
import Question from './question'

const Questions =()=>{
const {quizId}=useParams();
const [questions,setQuestions]=useState([])
const [correctAnswerCount,setCorrectAnswerCount]=useState(0);
useEffect(()=>{
    QuizService.findQuestionsForQuiz(quizId)
    .then(data=>setQuestions(data))
},[quizId])
    return (
        <>
        <br /> 
        {questions.map(question=>{
return (<Question question={question} setCorrectAnswerCount={setCorrectAnswerCount} />)

        })}
        <h1>Quiz Score: You got out {correctAnswerCount} correct of {questions.length} questions</h1>
        </>
    )
}

export default Questions;