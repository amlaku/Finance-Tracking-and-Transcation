import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles
import styles from './Signup.module.css'

export default function Signup() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(Email, Password, displayName)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>sign up</h2>
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
      <label>
        <span>display name:</span>
        <input 
          type="text" 
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      { !isPending && <button className="btn">sign up</button> }
      { isPending && <button className="btn" disabled>loading</button> }
      { error && <p>{error}</p> }
    </form>
  )
}