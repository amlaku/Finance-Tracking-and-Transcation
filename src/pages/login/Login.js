import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
// styles
import styles from './Login.module.css'

export default function Login() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
  login(Email, Password)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>login</h2>
      <label>
        <span>Email:</span>
        <input 
          type="Email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={Email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="Password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={Password} 
        />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && <button className="btn" disabled>loading</button>}
      {error && <p>{error} </p>}
    </form>
  )
}