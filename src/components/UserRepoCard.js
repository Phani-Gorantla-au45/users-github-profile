import React from 'react'


function UserRepoCard(props) {
  return (
    <div>
        <a href={`https://github.com/${props.repoData.full_name}`}>{props.repoData.name}</a>
    </div>
  )
}

export default UserRepoCard