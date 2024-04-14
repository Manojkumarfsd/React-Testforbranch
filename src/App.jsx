import React from 'react'
import Home from './components/Home'
import Note from './components/Note'
import Users from './components/Users'
import {Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  let style={color:'red', padding:5}
  return (
    <div>
<Router>
  <div>
    <Link to='/Home'style={style}>Home</Link>
    <Link to='/Note'style={style}>Note</Link>
    <Link to='/Users'style={style}>Users</Link>


  </div>
  <Routes>

    <Route path='/Home' element={<Home/>}/>
    <Route path='/Note' element={<Note/>}/>
    <Route path='/Users' element={<Users/>}/>


  </Routes>
</Router>



    </div>
  )
}

export default App;