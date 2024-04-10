import './App.css'
let Hello= (props)=>{
  
  return (
    <div>
      <h1>Hi how are you by {props.me}</h1>
    </div>
  )
}
let App=()=>{
  let name="manoj" 
  let age="25"
  return(
<div>
  <Hello me="full stack developer"/>
  <p> {name} is a full stack developer, his age is new {age} </p>
</div>

  )
}
export default App;