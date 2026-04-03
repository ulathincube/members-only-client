import styles from './Hero.module.css';
import { Link } from 'react-router';
import useAuth from '../hooks/useAuth';
import Title from './Title';

function Hero() {
  const { user } = useAuth();

  const authenticatedUser = user.user;
  const urlLink = authenticatedUser ? '/messages' : '/login';

  return (
    <section className={styles.hero}>
      <Title title='Welcome to Members Only!' level={1} />
      <Link className={styles.action} to={urlLink}>
        Chat With Members
      </Link>
    </section>
  );
}

export default Hero;
