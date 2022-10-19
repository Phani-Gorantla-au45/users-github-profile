import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import UserRepos from '../Pages/UserRepos';

function UserCard(props) {
  const [showRepo, setShowRepo] = useState(false)

  function userProfile(){
    setShowRepo(true);
  }

  function fetchUserRepo(){
    console.log(props.user.avatar_url)
  }
  return (
    <div>
       
          <Link to={`/repo/${props.user.login}`}>
          <img src={props.user.avatar_url}>
          </img> 
          </Link>
          
       
    </div>
  )
}

export default UserCard