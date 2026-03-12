import { Link } from "react-router-dom";

const courses =  [
    {id: 1, name: "React Course"},
    {id: 2, name: "Data Science"},
    {id: 3, name: "Java Course"},
    {id: 4, name: "Python Course"},
    {id: 5, name: "Machine Learning"}
]

console.log(courses);

function Courses(){
    return(
        <div>
            <h2>Courses</h2>
            {courses.map(course =>(
                <div key={course.id}>
                    <Link to={`/course/${course.id}`}><p>{course.id}</p>{course.name}</Link>
                </div> 
            ))}
        </div>
    )
}

export default Courses;