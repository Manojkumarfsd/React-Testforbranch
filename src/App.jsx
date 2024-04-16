import React from 'react'
import ChildComponent from './components/ChildComponent';

function App() {
  const message = 'hello child'; 
  return (
    <div>
      <h1>Parent component</h1>
      <ChildComponent message={message}/>  

    </div>
  )
}

export default App