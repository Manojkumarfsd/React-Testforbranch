import React, { useState } from 'react';
function Button({text,click}){

  return(
    <button onClick={click}>{text}</button>
  )


}
function Display({count}){
  return(
    <div>
    {count}
    </div>
  )
}

function App(){
  const [count,setcount]=useState(0);

  let handleplus=()=>{
    setcount(count+1);
  }
let handlezero=()=>{
  setcount(0)
}
let handleminus=()=>{
  setcount(count-1)
}
  return(
    <div>
      <Display count={count}/>
      <Button text='plus' click={handleplus}/>
      <Button text='zero' click={handlezero}/>
      <Button text='minus' click={handleminus}/>
    </div>
  )
}

export default App;