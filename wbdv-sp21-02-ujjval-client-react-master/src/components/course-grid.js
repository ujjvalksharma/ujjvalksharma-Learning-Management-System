import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import '../styles/course-grid.style.client.css';

function CourseGrid(
  {courses,
    updateCourse,
    deleteCourse
  }
  ) {
return (
  <div className="display-off">
< br />
 
<ul className='d-none d-lg-block webdev-item-inline'> 
<li className="webdev-item-position-left">Recent Documents</li> 
<li className="webdev-item-position-centre">Owned By me <i className="fa fa-caret-down"></i></li>
<li className="webdev-item-position-right">
<i className="fa fa-folder webdev-distance-list-item"> </i> 
          <i className="fa fa-sort-alpha-asc webdev-distance-list-item"> </i> 
          <Link to="/courses/table"> 
            <i className="fa fa-th"> </i> 
          </Link>
  </li> 
</ul> 


<ul className='d-lg-none webdev-item-inline'>  
<li className="webdev-item-position-right">
<i className="fa fa-folder webdev-distance-list-item"> </i> 
          <i className="fa fa-sort-alpha-asc webdev-distance-list-item"> </i> 
          <Link to="/courses/table"> 
            <i className="fa fa-th"> </i> 
          </Link>
  </li> 
</ul> 
      <Link to="/courses/table">
        {/*<i className="fa fa-list fa-2x float-right"></i> */}
      </Link>
   {/*<h2>Course Grid {courses.length}</h2> */}  
   <div className="container">
    <div className="row">
    {
      courses.map(course =>
        <CourseCard 
        course={course}
        updateCourse={updateCourse}
        deleteCourse={deleteCourse}
        title={course.title}
        />
      )
    }
    </div>
    </div>
  </div>);
}
export default CourseGrid
