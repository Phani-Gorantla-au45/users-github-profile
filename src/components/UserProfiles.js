import React from 'react'
import UserCard from './UserCard'
import './UserProfiles.css'

function UserProfiles(props) {
  return (
    <div className='flex-container'>
        {props.data.map(item =>
            <UserCard key={item.id} user={item} />
            )}
    </div>
    
  )
}

export default UserProfiles