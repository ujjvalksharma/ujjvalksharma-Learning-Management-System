import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import '../styles/course-grid.style.client.css';
export default class CourseTable
  extends React.Component {

     
  constructor(props) {

    super(props);
    

  }

  render() {
    return(
      <React.Fragment>

  
        <h2>Course Table</h2>
        <table className="table">
        <thead>
      <tr>
        <th>Title</th>
        <th className='webdev-sm-screen-display-off'>Owned By</th>
        <th className='webdev-md-screen-display-off'>Last Modified Date</th>
        <th>
          <i className="fa fa-folder webdev-distance-list-item"> </i> 
          <i className="fa fa-sort-alpha-asc webdev-distance-list-item"> </i> 
          <Link to="/courses/grid"> 
            <i className="fa fa-th"> </i> 
          </Link>
        </th>
        <th className='webdev-md-screen-display-off'></th>
      </tr>
    </thead>

          <tbody>

          {
            this.props.courses.map((course, ndx) =>
              <CourseRow
                  updateCourse={this.props.updateCourse}
                deleteCourse={this.props.deleteCourse}
                key={ndx}
                course={course}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}
              />)
          }
          </tbody>
        </table>
        
      </React.Fragment>
    )
  }
}
