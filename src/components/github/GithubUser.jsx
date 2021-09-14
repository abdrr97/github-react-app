/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Followers from './Followers'
import Repository from './Repository'
import User from './User'
import GitHubCalendar from 'react-github-calendar'

const GithubUser = (props) => {
  const { userData, userFollowers, userRepos } = props

  return (
    <>
      {userData && <User userData={userData} />}
      {userFollowers.length > 0 && <Followers userFollowers={userFollowers} />}
      {userData && <GitHubCalendar username={userData?.login} />}
      {userRepos.length > 0 && <Repository userRepos={userRepos} />}
    </>
  )
}

export default GithubUser
