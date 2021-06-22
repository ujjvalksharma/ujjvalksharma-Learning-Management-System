const WIDGET_URL = "https://sujjval-widget-server.herokuapp.com/api/widgets"
const TOPIC_URL = "https://sujjval-widget-server.herokuapp.com/api/topics"
export const createWidget = (topicId,widget) => {
    // TODO: move all server communication to widgets-service
  return  fetch(`${TOPIC_URL}/${topicId}/widgets`, { 
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    }).then(response => response.json())
}

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());


export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());


  export const findWidgetsForTopic = (topicId) =>  
 fetch(`${TOPIC_URL}/${topicId}/widgets`)
    .then(response => response.json())

    const api = {
        createWidget, findWidgetsForTopic, deleteWidget, updateWidget
    }
    
    export default api;