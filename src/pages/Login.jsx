import Button from 'components/button/Button'
import Input from 'components/input/Input'
import { AuthContext } from 'context'
import React, { useContext } from 'react'

export default function Login() {
  let {isAuth, setIsAuth} = useContext(AuthContext);

  function login(e) {
    e.preventDefault()
    setIsAuth(true);

    localStorage.setItem('auth', 'true');
  }
  return (
    <div>
        <h1>login</h1>
        <form onSubmit={login}>
            <Input placeholder='login'/>
            <Input placeholder='password'/>
            <Button>login</Button>
        </form>
    </div>
  )
}
