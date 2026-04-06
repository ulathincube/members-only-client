import { useState } from 'react';
import authServices from '../services/auth';
import { useNavigate, Navigate } from 'react-router';
import Title from '../components/Title';
import styles from './SecretCode.module.css';
import Button from '../components/Button';
import Header from '../components/Header';
import Notification from '../components/Notification';
import useNotification from '../hooks/useNotification';
import useAuth from '../hooks/useAuth';
import Footer from '../components/Footer';

function SecretCode() {
  const [passphrase, setPassphrase] = useState('');
  const navigate = useNavigate();

  const { onUpdateNotification } = useNotification();
  const { user, onUserChange } = useAuth();

  const authenticatedUser = user.user;
  const onSubmitHandler = async event => {
    event.preventDefault();
    const { verified } = await authServices.verifyMember(passphrase);

    if (verified) {
      onUpdateNotification('You are now verified!');
      const verifiedUser = { ...user, membership_status: 'verified' };
      console.log({ verifiedUser, verified });
      onUserChange({ user: verifiedUser, authenticated: true });
      navigate('/messages');
    } else {
      onUpdateNotification('Incorrect Password. Try again!');
      console.log({ user });
      navigate('/verify');
    }

    // if verified ==>
  };

  if (!authenticatedUser) return <Navigate to='/login' />;

  return (
    <>
      <Header />
      <Title
        className={styles.center}
        title="What's the secret password?"
        level={2}
      />
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles.group}>
          <label className={styles.label} htmlFor='passphrase'>
            Secret Password
          </label>
          <input
            type='password'
            name='passphrase'
            id='passphrase'
            value={passphrase}
            onChange={({ target }) => setPassphrase(target.value)}
          />
        </div>
        <div className={styles.action}>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
      <Notification />
      <Footer />
    </>
  );
}

export default SecretCode;
