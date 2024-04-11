import React from "react";
import Note from "./components/Note"

function App(props){
  const {notes}=props;
  return(
  <div>
    <h1>App</h1>
    <ul>{
      notes.map((note)=>{
        return <Note key={note.id}not={note}/>
      }
    )
    }
    </ul>
  </div>
  )
}
export default App;