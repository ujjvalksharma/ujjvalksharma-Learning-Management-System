import React,{useEffect,useState} from 'react'
import { useParams} from "react-router-dom";
import QuizService from '../../../services/quiz-service'
const Attempts=()=>{

    const {quizId}=useParams();
const [questions,setQuestions]=useState([])

useEffect(()=>{
    QuizService.findQuestionsForQuiz(quizId)
    .then(data=>setQuestions(data))
},[quizId])

    return(
        <>
        <div className="container">
        <br />
            <br />
            <h3>Your previous attempts for quiz Id: {quizId}</h3>
            <br />
            <br />
       {
           questions.map(question=><>
           <h5><u><b>Question: {question.title}</b></u></h5>
           <ul className="list-group">
           {
               question.attempts.map(attempt=> <>
               <li className="list-group-item">{attempt}  {attempt===question.correct
                 ? <i className="fa fa-check" aria-hidden="true" style={{color:'#5cb85c'}}></i>:
                  <i className="fa fa-times" aria-hidden="true" style={{color:'#d9534f'}}></i>} 
                 </li>
               </>)
           }
</ul>
           </>)
       }
        </div>
        </>
    )
}

export default Attempts;