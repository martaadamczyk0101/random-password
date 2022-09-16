import React from 'react'

function Navbar() {
  return (
    <div className='navbar-div'>
        <img src={require('./img/lock.png')} alt="locker-logo" width="50" height="50"></img>
        <h1>RANDOM PASSWORD GENERATOR</h1>
    </div>
  )
}

export default Navbar