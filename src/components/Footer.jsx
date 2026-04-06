import { Link } from 'react-router';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <Link className={styles.logo} to='/'>
          Members Only
        </Link>
      </div>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} to='/messages'>
              Chats
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
