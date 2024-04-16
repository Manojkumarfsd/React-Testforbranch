import React from 'react'
import { useParams } from 'react-router-dom';

function Notes({notes}) {
  const id= useParams().noteid;
  const note = notes.find(n=>{n.id===Number(id)});
  return (
    <div>Notes
        <h1>Notes</h1>
        <h2>{note.content}</h2>
        <ul>
            
        </ul>
    </div>
  )
}

export default Notes