import React from 'react'
import UserRepoCard from './UserRepoCard'
import './Gitrepos.css'

function UserRepoProfile(props) {
  return (
    <div className='github-cards'>

{props.repos.map(item =>
    <UserRepoCard repoData={item}/>
    )}
   
</div>
  )
}

export default UserRepoProfile