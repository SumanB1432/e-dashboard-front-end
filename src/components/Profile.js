import React from 'react'

function Profile() {
    let auth = localStorage.getItem('user')
    auth = JSON.parse(auth)
    // console.warn(auth.name)
    let data = auth.name.split(' ');
    // console.warn(data)
  return (
    <div className='profile'>
        <h2 className='profile-logo'>{  data[0][0]}.{data[1][0] }</h2>
        <h1 className='profile-welcome'>Welcome!</h1>
        <h3 className='profile-name'>{auth.name}</h3>
    </div>
  )
}

export default Profile