import React from "react";
import Note from "./components/Note"

function App(props){
  const {notes}=props;
  const listItem=[];

  notes.forEach((note)=>{
    listItem.push(<Note key={note.id} note={note}/>)
  });
  return(
    <div>
      {listItem}

    </div>

  )
  
}
export default App;