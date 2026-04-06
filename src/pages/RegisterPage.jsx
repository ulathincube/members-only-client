import Form from '../components/Form';
import Header from '../components/Header';
import Notification from '../components/Notification';
import { Link } from 'react-router';
import styles from './RegisterPage.module.css';
import Footer from '../components/Footer';

function RegisterPage() {
  return (
    <>
      <Header />
      <Form type='register' />
      <Notification />
      <Link className={styles.link} to='/login'>
        Have an account? Login here!
      </Link>
      <Footer />
    </>
  );
}

export default RegisterPage;
