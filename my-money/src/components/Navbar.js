import { Link } from 'react-router-dom'
import { useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hook/useAuthContext'
// styles
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <div className={styles.navbar}>
      <ul>
        <li children={styles.title}>myMoney</li>
        {!user && (
        <>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </>
        )}
        {user && (
        <>
          <li>Hello, {user.displayName}</li>
          <li>
            <button className='btn' onClick={logout}>Logout</button>
          </li>
        </>
        )}
      </ul>
    </div>
  )
}
