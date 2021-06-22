import React,{useEffect,useState} from 'react'
import quizService from '../../services/quiz-service'
import Quiz from './quiz'
const ListOfQuiz=()=>{


    const [Quizzes, setQuizzes] = useState([])

useEffect(()=>{
  //  quizService.findAllQuizzes()
    quizService.findAllQuizzes().then(data=>setQuizzes(data))

},[])


    return (

        <>
            <br />
        {Quizzes.map(quiz=>{
           return(
               <>
           <Quiz quiz={quiz} />
           <br />
           </>) 
        })}
        </>
    )
}

export default ListOfQuiz;