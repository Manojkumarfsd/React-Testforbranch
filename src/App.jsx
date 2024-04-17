import React, { useState } from 'react'
import Note from './components/Note'



function App(props) {
  const [notes,setNotes]=useState(props.notes)
  const [newNote, setNewnote]= useState(" ")

  const addNote=(event)=>{
    event.preventDefault();
    
    const noteobject ={
      id:notes.length+1,
      content: newNote,
      important:  Math.random()< 0.5 }

      setNotes(notes.concat(noteobject));
      setNewnote(" ");
    
  }

  const handleNoteChange =(event)=>{
    setNewnote(event.target.value)


  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes.map(note=>
          <Note key={note.id}note={note}/> 

          )}
        
      </ul>
      <form onSubmit={addNote}>
        <input  
        value={newNote}
        placeholder='a new note'
        onChange={handleNoteChange}
        />
        <button type='submit'>save</button>
      </form>

   
    </div>
  )
}

export default App;