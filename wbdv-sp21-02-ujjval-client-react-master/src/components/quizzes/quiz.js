import React from 'react'
import {Link} from 'react-router-dom'
const Quiz=({quiz})=>{
    return (<>
    <div className="row">
  <div className="col-8">{quiz.title}</div>
  <div className="col-2">
      <Link to={`./quizzes/${quiz._id}`}>
   
      <button type="button" className="btn btn-primary">start</button>
      </Link> 
</div>
<div className="col-2">
      <Link to={`./quizzes/${quiz._id}/attempts`}>
   
   <button type="button" className="btn btn-primary">View Attempts</button>
   </Link> 
      </div>
      
</div>
    </>)
}

export default Quiz;