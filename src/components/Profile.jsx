import React, { useContext } from 'react'
import { profileContext } from '../App';

function Profile() {
const{profilename, setprofilename}= useContext(profileContext);


    let onChangeProfileNameholder=(event)=>{
        setprofilename(event.target.value);
    }
  return (
    <div>
        <h1>Profile name :{profilename}</h1>
        <input
        value={profilename}
        onChange={onChangeProfileNameholder}
        
        
        
        />
    </div>
  )
}

export default Profile