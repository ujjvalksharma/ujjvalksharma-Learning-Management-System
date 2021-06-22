import React, {useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import widgetService from "../../../services/widget-service";
import ListWidget from './list-widget';
import ImageWidget from './image-widget';
const WidgetList = ({

        widgets=[],
        createWidget, 
        findWidgetsForTopic,
         deleteWidget, 
         updateWidget,

}) => {
    const {topicId} = useParams()
    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])
    
    return(
        <>
       <i className="fa fa-plus fa-2x webdev-position-right edit webdev-theme-blue" onClick={()=> createWidget(topicId)}></i>
       <br />
       <br />
       <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li key={widget.id} className="list-group-item">
                            {
                                widget.type === "HEADING" &&<HeadingWidget widget={widget} 
                                deleteWidget={deleteWidget} updateWidget={updateWidget} key={widget.id}/>

                               
                            }
                            {
                                widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget} 
                                deleteWidget={deleteWidget} updateWidget={updateWidget} key={widget.id} />
                            
                            }
                              {
                                widget.type === "LIST" && <ListWidget widget={widget} 
                                deleteWidget={deleteWidget} updateWidget={updateWidget} key={widget.id} />
                            
                            }
                             {
                                widget.type === "IMAGE" && <ImageWidget widget={widget} 
                                deleteWidget={deleteWidget} updateWidget={updateWidget} key={widget.id} />
                            
                            }
                        </li>
                      
                    )
                }
                  < br />
            </ul>

        </>
    )
}



const stpm = (state) => ({
    widgets: state.widgetReducer.widgets,
    widgetLength: state.widgetReducer.widgets.length
 })
 const dtpm = (dispatch) => ({
    createWidget: (topicId) => { 
      widgetService.createWidget(topicId, {title: 'New Widget'})
              .then(
                 widget => {
                 dispatch({type: "CREATE_WIDGET", widget: widget})
                 }
                 )
         
     },
     updateWidget: (newItem) => {
        widgetService.updateWidget(newItem.id, newItem)
             .then(status => dispatch({type: "UPDATE_WIDGET", updateWidget: newItem}))
     },
     deleteWidget: (widgetToDelete) => {
        widgetService.deleteWidget(widgetToDelete.id)
             .then(status => dispatch({type: "DELETE_WIDGET", widgetToDelete: widgetToDelete}))
     },
     findWidgetsForTopic: (topicId) => {
        
        widgetService.findWidgetsForTopic(topicId)
             .then(widgets => {
             dispatch({
                 type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                 widgets: widgets  
         })
         
     }
         )
   
     }
 })
 
 const pm = connect(stpm, dtpm)
 
 export default pm(WidgetList)