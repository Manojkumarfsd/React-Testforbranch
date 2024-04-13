import React from 'react'


function Grandchild({parentdata}) {

  console.log(`grand child:${parentdata}`)
  return (
    <div>
      grandchild component
    </div>
  )
}

function Childcomponent({parentdata}){
  console.log(`child data: ${parentdata}`)

  return(
    <div>
          <h1>child component</h1>
          <Grandchild  parentdata={parentdata}/>
          
    </div>
  )

}

function App() {
  const parentdata="data from the parent"
  console.log(parentdata)
  return (
    <div>
      <h1>parent component</h1>
      <Childcomponent parentdata={parentdata}/>
    </div>
  )
}

export default App