import React, { useState } from 'react'
function App(){
  const[counter,setcounter]=useState(0);
  function handler(){
    setTimeout(() => {
      setcounter(counter+1);
    },1000 );
  }

  return(
    <div>
      
      <button onClick={handler}>click me</button>
      {counter}
    </div>
  )
}
export default App;