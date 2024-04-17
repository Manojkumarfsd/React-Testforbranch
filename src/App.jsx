import React, { createContext, useState } from 'react'
import Profile from './components/Profile';


const profileContext= createContext();

function App() {
  const[profilename, setprofilename]= useState('');

  return (
    <div>App
      
      <profileContext.Provider value={{profilename,setprofilename}}>
        <Profile/>

      </profileContext.Provider>

    </div>
  )
}

export  {App as default, profileContext};