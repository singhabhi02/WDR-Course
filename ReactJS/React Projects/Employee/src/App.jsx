import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [items , setItems] = useState(["HTML", "CSS"])

  const addItem = ()=>{
    setItems([ "Javascript",...items,"ReactJS"]) //spread operator
  }

  const [skills , setSills] = useState(["html","css "])
  const [newskails , setNewSkils] = useState(["js","java"])
  const allskills = [...skills , ...newskails];
  // console.log(allskills);
  console.log(items)
  return (
    <div>
      <h2>Skills</h2>

      {items.map((item,index)=>(  //mapping the items to add in certain position
        <p key={index}>{item}</p>
      ))}

      <button onClick={addItem}>Add Skill</button>
    </div>
  )
}

export default App
