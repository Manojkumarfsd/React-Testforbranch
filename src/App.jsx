import React, { useEffect, useState } from 'react';
function App(){
  const[data,setdata]=useState(null);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response=>response.json())
    .then(result=>setdata(result));

  },[]);

  
  return(
    <div>

      <h1>API</h1>
      {
        data ? (
          <ul>
            {
          data.map(item=>{
           return <li key={item.id}>{item.title}</li>

          })
        }
        </ul>
        ) :(
          <p>loading...</p>
        )
      }
    </div>
  )
}
export default App;
