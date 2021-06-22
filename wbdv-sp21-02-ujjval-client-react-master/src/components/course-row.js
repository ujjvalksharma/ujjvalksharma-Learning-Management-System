import React, {useState} from 'react'
import {Link} from "react-router-dom";
import '../styles/course-grid.style.client.css';
import '../styles/course-editor.style.client.css';
const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title, 
        owner
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
      <tr>
        <td>
            {
                !editing &&
                <Link to={ {pathname: `/courses/table/edit/${course._id}`,
                state: { 
                    testval:"Hello"
                }}} >
                    {title}
                </Link>
                
            }
            {
                editing &&
                <input
                    onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
            }
        </td>
        <td className='webdev-sm-screen-display-off'>{owner}</td>
        <td className='webdev-md-screen-display-off'>{lastModified}</td>
        <td>
            <i onClick={() => deleteCourse(course)} className="fa fa-trash webdev-distance-list-item webdev-theme-red  fa-lg"></i>
            {!editing && <i onClick={() => setEditing(true)} className="fa fa-edit webdev-theme-blue fa-lg"></i>}
            {editing && <i onClick={() => saveTitle()} className="fa fa-check webdev-theme-green  fa-lg"></i>}
        </td>
        <td className='webdev-sm-screen-display-off'>
            <Link
       to={`/courses/${course._id}/quizzes`}>
      Quizzes
    </Link></td>
        

      </tr>
  )
}
export default CourseRow
