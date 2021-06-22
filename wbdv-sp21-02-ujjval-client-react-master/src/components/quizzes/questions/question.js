import React,{useEffect,useState} from 'react'
import  '../../../styles/course-editor.style.client.css'
import TrueFalse from './question-type/true-false'
import MultipleChoice from './question-type/multiple-choice'
const Question=({question,setCorrectAnswerCount})=>{

//alert(JSON.stringify(question))
    return (
<> 
<div className='container'>
{question.type==='MULTIPLE_CHOICE'&& <MultipleChoice question={question} setCorrectAnswerCount={setCorrectAnswerCount}/>}
{question.type==='TRUE_FALSE'&& <TrueFalse question={question} setCorrectAnswerCount={setCorrectAnswerCount}/>}
</div>

</>
    )
}

export default Question;
