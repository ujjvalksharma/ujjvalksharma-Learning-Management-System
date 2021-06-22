const initialState = {
    topics: [
        {title: 'Topic 1', _id: '123'},
        {title: 'Topic 2', _id: '234'},
        {title: 'Topic 3', _id: '345'}
    ]
}

const TopicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
         //   alert('I am create lesson reducer')
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "DELETE_TOPIC": 
        return {
            ...state,
            topics: state.topics.filter(topic => {
                if(topic._id !== action.topicToDelete._id) {
                    return true
                } else {
                    return false
                }
            })
        }
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if(topic._id === action.updateTopic._id) {
                        return action.updateTopic
                    } else {
                        return topic
                    }
                })
            }
            case "FIND_TOPIC_FOR_LESSON":
          //     alert('I am findLessons reducer')
            //    console.log(action.lessons)
            return {
                ...state,
                topics: action.topics
            }
        default:
            return state
    }
}

export default TopicReducer
