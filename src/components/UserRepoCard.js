import React from 'react';
import './Gitrepos.css'

function UserRepoCard(props) {
  
  const dateForm = new Date(props.repoData.updated_at)
  

  const year = dateForm.getFullYear()
  // const month = dateForm.getMonth();
  const options = { month: 'short'};
const month = new Intl.DateTimeFormat('en-US', options).format(dateForm);


  const day = dateForm.getDate();
  console.log(year)
  return (
    <div className='github-card'>

        <a href={`https://github.com/${props.repoData.full_name}`}><h3>{props.repoData.name}</h3></a>
        <p>{props.repoData.private? <h4>Private</h4>:<h4>Public</h4>}</p>
        <p>{props.repoData.description}</p>
        <p>{`Updated On ${month} ${day},${year}`}</p>
        </div>

  )
}

export default UserRepoCard