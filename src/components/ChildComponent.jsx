import React,{useContext} from 'react'
import {MessageContext} from '../App';

function ChildComponent() {
    const message = useContext(MessageContext)
    
  return (
    <div>
        <h1><b>ChildComponent </b></h1>
        <p>message from the parrent component:{message}</p>
        
        <h2><b></b></h2> 
    


    </div>

  )
}

export default ChildComponent;