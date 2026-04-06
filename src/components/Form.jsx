import { useState, useRef } from 'react';
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';
import Button from './Button';
import styles from './Form.module.css';
import userServices from '../services/user';
import authServices from '../services/auth';
import { useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import useError from '../hooks/useError';
import Notification from './Notification';
import Title from './Title';
import useNotification from '../hooks/useNotification';

function Toggle({ onToggle, show }) {
  return (
    <Button className={styles.toggle} onClick={onToggle}>
      {show ? <EyeClosedIcon /> : <EyeOpenIcon />}
    </Button>
  );
}

function Register({ onToggle, show }) {
  const passwordRef = useRef();

  const navigate = useNavigate();

  const { onUpdateNotification } = useNotification();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const [showPassword, setShowPassword] = useState(false);

  const formSubmitHandler = async event => {
    event.preventDefault();

    if (password !== confirmPassword) return;

    await userServices.createUser({
      firstName,
      lastName,
      email,
      password,
    });

    onUpdateNotification('User has been created!');

    // console.log(createdUser);
    navigate('/login');
  };

  // const togglePassword = () => setShowPassword(!showPassword);

  return (
    <form className={styles.register} onSubmit={formSubmitHandler}>
      <Title
        className={styles.caption}
        title='Register a New Account'
        level={2}
      />
      <div className={styles.group}>
        <label className={styles.label} htmlFor='firstName'>
          FirstName
        </label>
        <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='FirstName'
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor='lastName'>
          LastName
        </label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          placeholder='LastName'
          value={lastName}
          onChange={({ target }) => setLastName(target.value)}
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor='email'>
          Email Address
        </label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email Address'
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <div className={`${styles.group} ${styles.password}`}>
        <label className={styles.label} htmlFor='password'>
          Password
        </label>
        <input
          ref={passwordRef}
          type={show ? 'text' : 'password'}
          name='password'
          id='password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Toggle onToggle={onToggle} show={show} />

        {/* {showPassword ? <input type='text' /> : <input type='password' />} */}
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor='confirm-password'>
          Confirm Password
        </label>
        <input
          type='password'
          id='confirm-password'
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
        />
      </div>
      <div className={styles.action}>
        <Button type='submit'>Register</Button>
      </div>
    </form>
  );
}

function Login({ onToggle, show }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { onUpdateNotification } = useNotification();
  const navigate = useNavigate();

  const { onUserChange } = useAuth();

  const { error, onErrorChange } = useError();

  const formSubmitHandler = async event => {
    event.preventDefault();
    try {
      if (!email || !password) return;
      const loggedInUser = await authServices.login(email, password);

      if (loggedInUser) {
        onUpdateNotification('You just logged in!');
        const userData = { user: loggedInUser, authenticated: true };
        window.localStorage.setItem('user', JSON.stringify(userData));
        onUserChange(userData);
        return navigate('/messages');
      }
    } catch (error) {
      onUpdateNotification('Incorrect username or password');
      onErrorChange(error.response.data.error);
      setTimeout(() => {
        onErrorChange(null);
      }, 3000);
    }
  };

  return (
    <form className={styles.login} onSubmit={formSubmitHandler}>
      <Title title='Log In' level={2} />
      <div className={styles.group}>
        <label className={styles.label} htmlFor='email'>
          Email Address
        </label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email Address'
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <div className={`${styles.group} ${styles.password}`}>
        <label className={styles.label} htmlFor='password'>
          Password
        </label>
        <input
          type={show ? 'text' : 'password'}
          name='password'
          id='password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Toggle onToggle={onToggle} show={show} />
      </div>
      <div className={styles.action}>
        <Button type='submit'>Log In</Button>
      </div>
      {/* <h2>{error}</h2> */}
    </form>
  );
}

function Form({ type = 'register' }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <section className={styles.parent}>
      {type === 'register' ? (
        <Register onToggle={togglePassword} show={showPassword} />
      ) : (
        <Login onToggle={togglePassword} show={showPassword} />
      )}
    </section>
  );
}

export default Form;
