import React from 'react'

function GrandChildCoponent({message}) {
  return (
    <div>GrandChildCoponent
      <div><h1 style={{color:'red'}}>{message}</h1></div>
    </div>
  )
}

export default GrandChildCoponent