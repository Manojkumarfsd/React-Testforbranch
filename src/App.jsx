import React, { createContext, useState } from 'react'
import ChildComponent from './components/ChildComponent';

const MessageContext= createContext();
function App() {
  const [message,setmessage] = useState('hello from App'); 
  return (
    <div>
      <h1>Parent component</h1>
      <MessageContext.Provider value={message}>
      <ChildComponent/> 
      </MessageContext.Provider> 

    </div>
  )
}

export {App as default, MessageContext} ;