import styles from './Header.module.css';
import useAuth from '../hooks/useAuth';
import Button from './Button';
import { Link } from 'react-router';

function Header() {
  const { user, onUserLogout } = useAuth();

  const authenticatedUser = user.user;

  return (
    <header className={styles.header}>
      <div>
        <Link to='/' className={styles.logo} href='/'>
          Members Only
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to='/' className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={styles.link}
              to={authenticatedUser ? '/messages' : '/login'}
            >
              {authenticatedUser ? 'Chat' : 'Log In'}
            </Link>
          </li>
          {authenticatedUser && (
            <li className={styles.item}>
              <Button onClick={onUserLogout} type='button'>
                Log Out
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
