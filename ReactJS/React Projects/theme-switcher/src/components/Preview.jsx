import React from 'react'

function Preview({theme}) {
  return (
    <div style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px solid gray"
    }}>
      <h3>Preview section</h3>
      <p>Theme applied: {theme}</p>
    </div>
  )
}

export default Preview
