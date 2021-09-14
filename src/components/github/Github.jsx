import React, { useEffect, useState } from 'react'
import GithubUser from './GithubUser'
const API_URL = 'https://api.github.com/users/'

const Github = () => {
  const [username, setUsername] = useState('bradtraversy')
  const [userData, setUserData] = useState(null)
  const [userFollowers, setUserFollowers] = useState([])
  const [userRepos, setUserRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    submit()
  }, [])

  const submit = (e) => {
    if (e) e.preventDefault()
    setLoading(true)
    setUserFollowers([])
    setUserRepos([])
    setUserData(null)

    fetch(API_URL + username)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else if (res.status === 404) {
          setError('User Not Found')
        } else {
          setError('There is an Error ')
        }
        setLoading(false)
      })
      .then((data) => {
        if (data) {
          setUserData(data)

          // fetching github user followers
          fetch(data.followers_url)
            .then((res) => res.json())
            .then((data) => {
              setUserFollowers(data)
            })

          // fetching github user repository
          fetch(data.repos_url)
            .then((res) => res.json())
            .then((data) => {
              setUserRepos(data)
              setLoading(false)
            })
        }
      })
      .catch(() => {
        setLoading(false)
      })
  }
  return (
    <>
      <h1 className='display-5'> Github User Search </h1>

      <form className='my-5' onSubmit={(e) => submit(e)}>
        <input
          className='mt-5 form-control'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type='text'
        />
        <small className='text-muted'>
          press <strong>Enter</strong> to search
        </small>
      </form>

      {error && <div className='alert alert-danger'>{error}</div>}

      <main className='text-center'>
        {loading ? (
          <div style={{ width: '400px', height: '400px' }} className='spinner-border' />
        ) : (
          <GithubUser userData={userData} userFollowers={userFollowers} userRepos={userRepos} />
        )}
      </main>
    </>
  )
}

export default Github
