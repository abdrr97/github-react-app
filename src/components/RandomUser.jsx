import React, { useEffect, useState } from 'react'

const RandomUser = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async (url) => {
    setLoading(true)

    const res = await fetch(url)
    const data = await res.json()

    setUser(data.results[0])
    setLoading(false)
  }

  useEffect(() => {
    fetchData('https://randomuser.me/api')
  }, [])

  if (!loading) {
    return (
      <>
        <section className='mt-5'>
          <button
            onClick={() => fetchData('https://randomuser.me/api')}
            className='btn btn-primary'
          >
            Get Random User
          </button>
          <h1 className='display-1'>Random User</h1>

          <ul>
            <li>{user.gender} </li>
            <li>{user.name.title} </li>
            <li>{user.name.first} </li>
            <li>{user.name.last} </li>
            <li>{user.location.street.number} </li>
            <li>{user.location.street.name} </li>
            <li>{user.location.city} </li>
            <li>
              <img src={user.picture.medium} alt='' />
            </li>
          </ul>
        </section>
      </>
    )
  } else {
    return (
      <>
        <div className='spinner-border'></div>
      </>
    )
  }
}

export default RandomUser
