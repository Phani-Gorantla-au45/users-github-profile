import React from 'react'
import UserCard from './UserCard'

function UserProfiles(props) {
  return (
    <div>
        {props.data.map(item =>
            <UserCard key={item.id} user={item} />
            )}
    </div>
    
  )
}

export default UserProfiles