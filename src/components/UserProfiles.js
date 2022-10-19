import React from 'react'
import UserCard from './UserCard'

function UserProfiles(props) {
  return (
    <div>
        {props.data.map(item =>
            <UserCard user={item} />
            )}
    </div>
    
  )
}

export default UserProfiles