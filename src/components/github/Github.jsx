/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import GithubUser from './GithubUser'
const API_URL = 'https://api.github.com/users/'

const Github = () => {
  const { username } = useParams()
  const [userData, setUserData] = useState(null)
  const [userFollowers, setUserFollowers] = useState([])
  const [userRepos, setUserRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = (e) => {
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
      <Link to='/'>Go Back </Link>

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
