import React, {useEffect, useState} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
//import WidgetList from "./course-editor/widgets/widget-list";
import TopicPills from "./topic-pills";
import WidgetList from "./widgets/widget-list";
import courseService from "../../services/course-service"

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer:topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer) 

const CourseEditor = ({history, params}) => {
    const {layout, courseId, moduleId} = useParams();

     const [course, setCourseName] = useState({})
    useEffect(()=>{
const api='https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/'+courseId
        fetch(api)
        .then(results => results.json())
        .then(data => {
            setCourseName(data)
        });

    },[courseId])


    return(
 
        <Provider store={store}>
      <h1> 
          {course.title}
          <Link to={`/courses/${layout}`}>
          <i className="fa fa-times float-right"></i>
               </Link>
      </h1>
        <div className="row">
            <div className="col-3">
                <ModuleList/>
            </div>
            <div className="col-9">
                <LessonTabs/>
                <br/>
                <TopicPills/>
                <br/>
                <WidgetList/>
            </div>
        </div>
    </Provider>)
    }
export default CourseEditor
