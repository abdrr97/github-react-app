import React from 'react'

const User = (props) => {
  const { userData } = props
  return (
    <>
      <section className='card mb-3'>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img src={userData.avatar_url} className='img-fluid rounded-start' alt='...' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{userData.name}</h5>
              <p className='card-text'>{userData.bio}</p>
              <p className='card-text'>{userData.location}</p>
              <p className='card-text'>
                <small className='text-muted'>{userData.updated_at}</small>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className='row mt-4'>
        <div className='col-sm-3'>
          <div className='card'>
            <div className='card-body'>
              <p className='card-title'>Followers</p>
              <h5 className='card-text'>{userData.followers}</h5>
            </div>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='card'>
            <div className='card-body'>
              <p className='card-title'>Following</p>
              <h5 className='card-text'>{userData.following}</h5>
            </div>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='card'>
            <div className='card-body'>
              <p className='card-title'>Public Repos</p>
              <h5 className='card-text'>{userData.public_repos}</h5>
            </div>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='card'>
            <div className='card-body'>
              <p className='card-title'>Public Gists</p>
              <h5 className='card-text'>{userData.public_gists}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default User

// <img width='50'  alt='' />
//     <div>{userData.url}</div>
//     <div></div>
//     <div>{userData.company}</div>
//     <div>{userData.blog}</div>
//     <div>{userData.location}</div>
//     <div></div>
//     <div>{userData.hireable}</div>
//     <div></div>
//     <div>{userData.twitter_username}</div>
//     <div></div>
//     <div>{userData.public_gists}</div>
//     <div></div>
//     <div></div>
//     <div>{userData.created_at}</div>
//     <div></div>
