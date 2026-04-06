import Form from '../components/Form';
import { Link, Navigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import Header from '../components/Header';
import styles from './LoginPage.module.css';
import Notification from '../components/Notification';
import Footer from '../components/Footer';

function LoginPage() {
  const { user } = useAuth();

  const loggedInUser = user.user;

  if (loggedInUser) {
    const { membership_status } = loggedInUser;

    if (membership_status === 'unverified') return <Navigate to='/verify' />;
    if (membership_status === 'verified') return <Navigate to='/messages' />;
  } else
    return (
      <>
        <Header />
        <Form type='login' />
        <Notification />
        <Link className={styles.link} to='/register'>
          No account? Register here!
        </Link>
        <Footer />
      </>
    );
}

export default LoginPage;
