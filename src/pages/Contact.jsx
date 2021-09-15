/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Contact = () => {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      history.push('/ffofko')
    }, 3000)
  }, [])

  return (
    <div>
      <h1>Contact</h1>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Contact
