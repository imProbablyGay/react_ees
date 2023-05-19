import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from './button/Button'
import { AuthContext } from 'context';

export default function NavBar() {
  let {isAuth, setIsAuth} = useContext(AuthContext);

  function logout() {
    setIsAuth(false)
    localStorage.removeItem('auth');
  }

  return (
    <div className='navbar'>
        <div className='navbar__links'>
          <Link to='/about'>about</Link>
        </div>
        <div className='navbar__links'>
          <Link to='/posts'>posts</Link>
        </div>
        <div className='navbar__links'>
          <Link to='/login'>login</Link>
        </div>
        <div className='navbar__links'>
          <Button onClick={logout}>logout</Button>
        </div>  
      </div>
  )
}
