import React from 'react'

function ThemeButton({theme , setTheme}) {
    function ChangeTheme(){
        setTheme(theme === "light"? "dark":"light") //togglebutton to change the theme
    }
  return (
    <button onClick={ChangeTheme}>Switch to {theme === "light" ? "dark" : "light" } Mode</button>
  )  // Raising event in react components
};

export default ThemeButton
