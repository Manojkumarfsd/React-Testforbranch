function Note({note}){


return(
   <li>
    {note.content }{note.important && "      star "}
   </li>
)
}
export default Note;