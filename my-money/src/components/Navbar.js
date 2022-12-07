import { Link } from 'react-router-dom'

// styles
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li children={styles.title}>myMoney</li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </div>
  )
}
