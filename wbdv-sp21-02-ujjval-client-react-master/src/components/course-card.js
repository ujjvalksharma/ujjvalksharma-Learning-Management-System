import React,{useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({
  
  deleteCourse,
  updateCourse,
  course,
  title
  
}) => {
  
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

  const saveTitle = () => {
      setEditing(false)
      const newCourse = {
          ...course,
          title: newTitle
      }
      updateCourse(newCourse)
  }

  return (
  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6"> 
    <div className="card">
      <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
      <div className="card-body">
       {
                !editing &&
                <h5>{title}</h5>
                    
            }
            {
                editing &&
                <input
                    onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
            }

        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
          <img src={``}/> 
        <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">
        {title}
        </Link> 
        <i onClick={() => deleteCourse(course)} className="fa fa-trash webdev-distance-list-item webdev-theme-red  fa-lg"></i>
            {!editing && <i onClick={() => setEditing(true)} className="fa fa-edit webdev-theme-blue fa-lg"></i>}
            {editing && <i onClick={() => saveTitle()} className="fa fa-check webdev-theme-green  fa-lg"></i>}
      </div>
    </div>
  </div>)
}

export default CourseCard
