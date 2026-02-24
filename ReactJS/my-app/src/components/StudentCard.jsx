import React from 'react'

function StudentCard({name , course , score}) {
  return (
    <div style={{border: "1px solid gray", margin: "10px", padding:"10px"}}>
      <h3>{name}</h3>
      <p>Course : {course}</p>
      <p>Score: {score}</p>
    </div>
  )
}

export default StudentCard
