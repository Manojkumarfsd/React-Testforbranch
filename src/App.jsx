import React from "react";
import Note  from './components/Note';
function App(props){
  const {notes}= props;
  const listItem=[];
  notes.forEach((note)=>{
    listItem.push(<Note key={note.id} note={note}/>)
  });
   let addnote= (event)=>{
    event.preventDefault();
    console.log(event.target.elements.note.value);

   }
   
    
  
  return(
    <div>
      <ol>
      {
       listItem
       
      }
</ol>
      <form onSubmit={addnote}>
        <input name="note"/>
        <button type="submit">submit</button>
      </form>
      
    </div>
  )
}
export default App;