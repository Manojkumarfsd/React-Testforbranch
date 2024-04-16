import React from 'react'
import { Link } from 'react-router-dom';

function Note({notes}){


return(
  
   <div><h1>Note components</h1>
      
      <ul>
         {
            notes.map(note=>{
               return <li key={note.id}><Link to={`/Note/${node.id}`}>{note.content}</Link></li>
            })
         }
      
      </ul>
      </div>
   
)
}
export default Note;