import React from 'react'
import UserRepoCard from './UserRepoCard'

function UserRepoProfile(props) {
  return (
    <div>
{props.repos.map(item =>
    <UserRepoCard repoData={item}/>
    )}
    </div>
  )
}

export default UserRepoProfile