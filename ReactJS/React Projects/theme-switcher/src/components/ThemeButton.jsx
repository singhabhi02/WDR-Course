import React from 'react'

function ThemeButton({theme , setTheme}) {
    function toggleTheme(){
        setTheme(theme === "light"? "dark":"light") //togglebutton to change the theme
    }
  return (
    <button onClick={toggleTheme}>Switch to {theme === "light" ? "dark" : "light" } Mode</button>
  )
};

export default ThemeButton
