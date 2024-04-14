import React, { useState } from 'react'
import Home from './components/Home'
import Note from './components/Note'
import Users from'./components/Users'

function App() {
    const[page,setpage]=useState('home')
    let toPage= (page)=>(event)=>{
        event.preventDefault();
        setpage(page);
    };

    const style={padding:5}

    const content =()=>{
    if(page==='home'){
        return<Home/>
    } else if
       (page==='note') {
        return <Note/>
       } else {
        page ==='users'
        return <Users/>
       }
    };

    
  return (


    <div>
        <a href=''onClick={toPage('home')} style={style}>Home</a>
        <a href=''onClick={toPage('note')} style={style} >Note</a>
        <a href=''onClick={toPage('users')}style={style}>Users</a>
        <div>
            
        </div>
        {content()}
    </div>
  )
}


export default App;

