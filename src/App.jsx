import React from 'react'

const App=(props)=>{
const {notes}=props;
  return(
    <div>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>

    </div>
  )
}
export default App;