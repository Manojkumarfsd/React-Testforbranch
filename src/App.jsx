let Hello= (props)=>{
  return (
    <div>
      <p style={{color:"red",backgroundColor:"greenyellow"}}>Hi how are you by {props.me}</p>
    </div>
  )
}
let App=()=>{
  let name="manoj" 
  let age="25"
  return(
<div>
  <Hello me="full stack developer"/>
  <p> {name} is a full stack developer, his age is {age} </p>
</div>

  )
}
export default App;