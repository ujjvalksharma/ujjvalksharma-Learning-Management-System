import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";
import '../styles/course-grid.style.client.css';
import '../styles/course-manager.style.client.css';
export default class CourseHoc extends React.Component {

  state = {
    courses: [
      {title:'course 1',_id:1},
      {title:'course 2',_id:2},
      {title:'course 3',_id:3}
    ],
    courseTitle:''
  }

  componentDidMount() {
    courseService.findAllCourses()
        .then(courses => this.setState({courses}))
  }

  
  updateCourse = (course) => {
    courseService.updateCourse(course._id, course)
        .then(status => {
            this.setState((prevState) => {
                let nextState = {...prevState}
                nextState.courses = prevState.courses.map(c => {
                    if(c._id === course._id) {
                        return course
                    } else {
                        return c
                    }
                })
                return nextState
            })
        })
  }

  deleteCourse = (course) => {
    courseService.deleteCourse(course._id)
        .then(status => {
          this.setState((prevState) => ({
            courses: prevState.courses.filter(c => c._id !== course._id)
          }))
        })
  }

  addCourse = (event) => {
    event.preventDefault()
    const newCourse = {
      title: this.state.courseTitle,
      owner: "me",
      lastModified: "2/10/2021"
    }
    courseService.createCourse(newCourse)
    .then(course => this.setState(
        (prevState) => ({
          ...prevState,
          courses: [
              ...prevState.courses,
              course
          ]
        })))
  }

  handleChange= (evt)=> {
    this.setState((prevState) => {
      let nextState = {...prevState}
      nextState.courseTitle = evt.target.value;
      return nextState
  })

  }

  render() {
    return(
      <div>

<nav className="navbar navbar-expand navbar-light bg-light justify-content-between">
            <div className="navbar-brand d-none d-lg-block">
            <i className="fa fa-bars" style={{marginRight:'10px'}}></i>
            Course Manager
              </div> 
           
              <div className="navbar-brand d-lg-none">
            <i className="fa fa-bars" style={{marginRight:'10px'}}></i>
              </div>

            <form className="form-inline flex-nowrap">
                <div className="input-group">
                    <input className="form-control webdev-distance-list-item" type="text" value={this.state.courseTitle} placeholder="Add Course" onChange={this.handleChange}  size="120"/>
                </div>
                <button id="PagePrev" className="btn btn-danger btn-circle btn-sm" onClick={this.addCourse} ><i className="fa fa-plus fa-2x"></i></button>
            </form> 
        </nav>

        <Route path="/courses/table" exact >
          <CourseTable
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
        </Route>
        <Route path="/courses/grid" exact={true} >
          <CourseGrid updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
        </Route>
        <button id="PagePrev" className="btn btn-danger btn-circle btn-xl webdev-floating-btn" onClick={this.addCourse} ><i className="fa fa-plus fa-2x"></i></button>
      </div>


      
    )
  }

}