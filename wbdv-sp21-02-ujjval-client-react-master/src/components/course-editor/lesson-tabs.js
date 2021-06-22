import React, {useEffect}  from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service";
const LessonTabs = (
    {
        lessons=[],
        createLesson, 
        findLessonsForModule,
         deleteLesson, 
         updateLesson,
         lessonsLength
    }) => {

    const {layout, courseId, moduleId,lessonId} = useParams();

    useEffect(() => {
         findLessonsForModule(moduleId)
    }, [moduleId])
      

        return(<div> 
       {/*<h2>Lesson Tabs length {lessonsLength}</h2> */} 
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item ">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            item={lesson}
                            active={lesson._id===lessonId}
                            />
                    </li>
                )
            }
           <li className="nav-item">
           <div className="nav-link">
                <i onClick={() => createLesson(moduleId)} className="fa fa-plus fa-2x webdev-theme-blue"></i>
                </div>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
   lessons: state.lessonReducer.lessons,
   lessonsLength: state.lessonReducer.lessons.length
})
const dtpm = (dispatch) => ({
    createLesson: (moduleId) => { 
        lessonService.createLesson(moduleId, {title: 'New Lesson'})
            .then(
                lesson => {
                dispatch({type: "CREATE_LESSON", lesson: lesson})
                }
                )
        
    },
    updateLesson: (newItem) => {
        lessonService.updateLesson(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_LESSON", updateLesson: newItem}))
    },
    deleteLesson: (lessonToDelete) => {
        lessonService.deleteLesson(lessonToDelete._id)
            .then(status => dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
    },
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => {
            //    console.log(lessons)
            dispatch({
                type: "FIND_LESSON_FOR_MODULE",
                lessons: lessons  
        })
    }
        )
  
    }
})

const pm = connect(stpm, dtpm)

export default pm(LessonTabs)

