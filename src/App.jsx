import {Component} from 'react'

class Hello extends Component{
  
  render(){
    const {name}=this.props;
    return (
      <div>hello my name is {name} </div>
    )
  }
}
class App extends Component{
  render(){
    return(
      <div>
        hellow world 2
        <Hello name={"manoj"}/>
      </div>
    )

  }
}
export default App;