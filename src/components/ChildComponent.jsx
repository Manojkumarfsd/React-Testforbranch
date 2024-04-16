import React from 'react'
import GrandChildComponent from './GrandChildComponent'

function ChildComponent({message}) {
    
  return (
    <div>
        <h1>ChildComponent </h1>
        <GrandChildComponent message={message}/>


    </div>

  )
}

export default ChildComponent