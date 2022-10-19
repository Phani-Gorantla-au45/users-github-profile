import React from 'react'
import { Link } from 'react-router-dom';
import './UserCard.css'
import { FaHandSparkles } from 'react-icons/fa';

import { BsHandIndexThumb } from 'react-icons/bs';

function UserCard(props) {

  return (
    <div className='card container'>
       
          <Link to={`/repo/${props.user.login}`}>
          <img alt="" src={props.user.avatar_url}>
        
          </img> 
          
          </Link>
          <div className='userIntro'>
          <p>1 - Hi, <FaHandSparkles color="#ffcc00" size='15px' /> I'm @{props.user.login}</p>
          <p>2 - <BsHandIndexThumb color="black"/> Click on my profile to view my repo's..</p>
          </div>
          
       
    </div>
  )
}

export default UserCard