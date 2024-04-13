import React, { useState } from 'react'
function App(){
  const[counter,setcounter]=useState(0);
  function handlerplus(){
      setcounter(counter+1);
    };
    function handlerzero(){
      setcounter(0)
    };
    function handlerminus(){
      setcounter(counter-1);

    }

  

  return(
    <div className='mt-4 p-4'>
    <div>
      
      <button onClick={handlerplus}>plus</button>
      <button onClick={handlerzero}>zero</button>
      <button onClick={handlerminus}>minus</button>
      
    </div>
    <div className ='mt-4 p-4'>
    {counter}
    </div>

    </div>
  )
}

export default App;