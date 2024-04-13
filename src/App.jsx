import React, { useState } from 'react';
function App(){
  const [counter,setcounter]=useState(0);
  setTimeout(()=>{
    setcounter(counter+1)
  },1000)
  return(
    <div>
      {counter}
    </div>
  )
}
export default App;