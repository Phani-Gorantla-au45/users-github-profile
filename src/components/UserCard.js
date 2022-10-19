import React from 'react'

function UserCard(props) {
  return (
    <div>
        <img src={props.user.avatar_url}></img>
        <h3>{props.user.login}</h3>
        <a href={props.user.html_url}>GitHub Profile</a>
    </div>
  )
}

export default UserCard