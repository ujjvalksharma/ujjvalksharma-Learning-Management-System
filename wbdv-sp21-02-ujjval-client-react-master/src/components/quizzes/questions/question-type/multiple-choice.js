import React,{useState} from 'react'
import QuizService from '../../../../services/quiz-service'
const MultipleChoice=({question,setCorrectAnswerCount})=>{

    const[currChoice,setCurrChoice]=useState()
const[currAnswer,setCurrAnswer]=useState()
const[showAnswer,setShowAnswer]=useState(false)
const [answerStatus,setAnswerStatus]=useState('none')//none,correct,incorrect
const setAnswer=(event)=>{

    setShowAnswer(true);
    setCurrAnswer(currChoice);
    if(currChoice===question.correct&&(answerStatus==='none'||answerStatus==='incorrect')){
        setCorrectAnswerCount((prevCount)=>prevCount+1)
        setAnswerStatus('correct')
    }else if(currChoice!==question.correct
        &&(answerStatus==='none'||answerStatus==='correct')){
        setAnswerStatus('incorrect')
        setCorrectAnswerCount((prevCount)=>prevCount-1<0?0:prevCount-1)
    }
    const tempQuestion=question;
    tempQuestion.attempts.push(currChoice)
    QuizService.updateQuestion(tempQuestion)
}

const setChoice=(event)=>{

    setCurrChoice(event.target.value);

}
const findColor=(choice)=>{
    if(showAnswer){
        if(question.correct===choice){
        return {background:`#5cb85c`}
        }

        if(question.correct!==choice && currAnswer===choice){
        return {background:`#d9534f`}
        }
    }
    
}

    return (
        <>
        <h1>{question.question}

         {showAnswer&&currAnswer!==''&&currAnswer!==undefined
        &&question.correct!==currAnswer
        &&<i className="fa fa-times webdev-theme-red" aria-hidden="true"></i>}
        {showAnswer&&currAnswer!==''&&currAnswer!==undefined
        &&question.correct===currAnswer
        &&<i className="fa fa-check webdev-theme-green" aria-hidden="true"></i>}

        </h1>

        <ul className="list-group">
            {question.choices.map(choice=>{
                return (
                    <>
                     <li className="list-group-item" style={findColor(choice)}>

<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={(event)=>setChoice(event)} value={choice}/>
  <label className="form-check-label" for="flexRadioDefault1" >
   {choice}
   </label>
</div>

                     </li>
</>

                     
                     )
            })}
</ul>
<br /> 
<h5>Your answer: {showAnswer&& <>{currAnswer}</>}</h5>
<br />
    <button type="button" class="btn btn-success" onClick={(event)=>setAnswer(event)}>Grade</button>
        </>
        );

}
export default MultipleChoice