import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  const [username, setUsername] = useState('bradtraversy')

  return (
    <>
      <form
        className='my-5'
        onSubmit={(e) => {
          e.preventDefault()
          history.push(`/p/${username}`)
        }}
      >
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
    </>
  )
}

export default Home
