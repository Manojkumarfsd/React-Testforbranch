const Hello=()=>{
  return(
    <div>
      <p>hello my namr </p>
    </div>
  )
}
const App=()=>{
const now = new Date;
const a=20;
const b=25;
  return(
    <div>
      <p>hello world</p>
      <Hello/>
      <p>numner {a} plus {b} ={a+b}</p><Hello/>
      <h1>finally I wrote my first code in react I am a {now.toString()}Stock developer</h1><Hello/>
    </div>
  
  )
}
export default App;