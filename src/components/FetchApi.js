import React, { useEffect, useState } from 'react'
import UserProfiles from './UserProfiles'

function FetchApi() {
    const [userData, setUserData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users')
        .then((response)=> response.json())
        .then((data)=>setUserData(data))
        
        
    })
  return (
    <div>
        <UserProfiles data={userData} />
    </div>
  )
}

export default FetchApi