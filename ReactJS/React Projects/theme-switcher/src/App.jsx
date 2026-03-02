import { useState } from 'react'
import ThemeButton from './components/ThemeButton'
import Preview from './components/Preview'

function App() {
const[theme , setTheme] = useState("light")

  return (
    <>
    {/* Default look of the webpage */}
      <div style={{
        height: "100vh",
        padding: "20px",
        backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
        color: theme === "light"? "#000" : "#fff"
      }}>
        <h1>Theme Switcher app</h1>
        
        {/* passing the props from another component */}
        <ThemeButton theme ={theme} setTheme={setTheme}/>
        <Preview theme={theme}/>
      </div>
    </>
  )
}

export default App
