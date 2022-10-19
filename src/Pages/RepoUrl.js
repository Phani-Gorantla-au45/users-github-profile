import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserRepoProfile from '../components/UserRepoProfile'

function RepoUrl() {

   const [userRepo, setUserRepo] = useState([])
    let { repourl } = useParams()

    useEffect(()=>{
        fetch(`https://api.github.com/users/${repourl}/repos`)
        .then(response => response.json())
        .then(json => setUserRepo(json))
    })
  return (
    <UserRepoProfile repos={userRepo} />
  )
}

export default RepoUrl