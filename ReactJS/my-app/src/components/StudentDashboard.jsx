import React from 'react'
import students from './studentList'
import StudentCard from './StudentCard'

function StudentDashboard() {
  return (
    <div>
      <h2>Student List</h2>

      {
        students.map((student)=>(
            <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            score={student.score}
            />
        ))
      }
    </div>
  )
}

export default StudentDashboard;
