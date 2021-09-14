import React from 'react'

const Followers = (props) => {
  const { userFollowers } = props
  return (
    <>
      <section>
        <h2>Followers</h2>
        <section className='list-group' style={{ maxHeight: '150px', overflowY: 'scroll' }}>
          {userFollowers.map((follower) => {
            return (
              <article className='d-flex list-group-item' key={follower.id}>
                <img width='30' src={follower.avatar_url} alt='' />
                <a href={follower.html_url} target='_blank' rel='noreferrer'>
                  {follower.login}
                </a>
              </article>
            )
          })}
        </section>
      </section>
    </>
  )
}

export default Followers
