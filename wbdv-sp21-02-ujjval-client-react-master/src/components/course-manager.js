import React from 'react'
import {Link, Route,Switch,BrowserRouter} from "react-router-dom";
import CourseEditor from './course-editor/course-editor';
import CourseHoc from './course-hoc';
import Quiz from './quizzes/listOfQuiz';
import Questions from './quizzes/questions/listOfQuestions'
import Attempts from './quizzes/attempts'
export default class CourseManager
  extends React.Component {

  render() {
    return(
      <div>
             <BrowserRouter>
            <Switch>
          <Route path="/courses/:layout/edit/:courseId" exact component={CourseEditor}/>
          <Route path="/courses/:layout/edit/:courseId/modules/:moduleId" exact component={CourseEditor}/>
          <Route path="/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId" exact component={CourseEditor}/>
          <Route path="/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId" exact component={CourseEditor}/>
          <Route path="/courses/:courseId/quizzes/:quizId" exact component={Questions}/> 
          <Route path="/courses/:courseId/quizzes/:quizId/attempts" exact component={Attempts}/>
          <Route path="/courses/:courseId/quizzes" exact component={Quiz}/>
          <Route path="/courses/editor" exact component={CourseEditor}/>
           <Route path="/courses" component={CourseHoc}/>
   </Switch>
   </BrowserRouter>
      </div>


      
    )
  }
}
// export default CourseManager