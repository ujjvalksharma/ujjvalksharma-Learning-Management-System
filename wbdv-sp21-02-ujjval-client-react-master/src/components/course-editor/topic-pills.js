import topicService from "../../services/topic-service";
import React, {useEffect}  from 'react'
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import EditableItem from "../editable-item";
import '../../styles/course-editor.style.client.css';
const TopicPills = (
{
    topics=[],
    createTopic, 
    findTopicsForLesson,
    deleteTopic, 
    updateTopic
}
)=>{

    const {layout, courseId, moduleId,lessonId,topicId} = useParams();

     useEffect(() => {
        findTopicsForLesson(lessonId)
        }
     , [lessonId])

    return(
        <div> 
            {/* <h2>Topic for lesson Id: {lessonId} with length {topics.length}</h2>*/}
        
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                    <li className="nav-item">

                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}
                            item={topic}
                            active={topic._id===topicId}
                            />
                        
                    </li>
                )
                }
           <li className="nav-item">
           <div className="nav-link">
                <i onClick={() => createTopic(lessonId)} className="fa fa-plus fa-2x webdev-theme-blue"></i>
                </div>
            </li>
        </ul>
    </div>
    )
}

const stpm = (state) => ({
    topics: state.topicReducer.topics
 })
 const dtpm = (dispatch) => ({
     
     createTopic: (lessonId) => { 
        topicService.createTopic(lessonId, {title: 'New Topic'})
             .then(
                topic => {
                 dispatch({type: "CREATE_TOPIC", topic: topic})
                 }
                 )
         
     },
     updateTopic: (newItem) => {
         topicService.updateTopic(newItem._id, newItem)
             .then(status => dispatch({type: "UPDATE_TOPIC", updateTopic: newItem}))
     },
     deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
             .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
     },
     findTopicsForLesson: (lessonId) => {
       topicService.findTopicsForLesson(lessonId)
             .then(topics => {
             dispatch({
                 type: "FIND_TOPIC_FOR_LESSON",
                 topics: topics  
         })
     }
         )
   
     }
 })


const pm = connect(stpm, dtpm)

export default pm(TopicPills)

