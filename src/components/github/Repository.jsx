import React from 'react'

const Repository = (props) => {
  const { userRepos } = props
  return (
    <>
      <section style={{ maxHeight: '500px', overflowY: 'scroll' }} className='text-start'>
        <h2>Repositories</h2>
        <section className='list-group'>
          {userRepos.map((repo) => {
            return (
              <section
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  window.open(repo.html_url, '_blank')
                }}
                className='list-group-item'
                key={repo.id}
              >
                <h4 className='fw-bold'>{repo.name}</h4>
                <div className='fw-light'>{repo.full_name}</div>
                <div>{repo.description}</div>
                <small className='text-muted'>{repo.created_at}</small>
              </section>
            )
          })}
        </section>
      </section>
    </>
  )
}

export default Repository
