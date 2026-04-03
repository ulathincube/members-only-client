import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Messages from './pages/Messages';
import {
  AuthContext,
  ErrorContext,
  NotificationContext,
} from './context/Contexts';
import Protected from './components/Protected';
import SecretCode from './pages/SecretCode';
import authServices from './services/auth';

function App() {
  const [user, setUser] = useState({ user: null, authenticated: false });
  const [error, setError] = useState('');

  const onUserLogout = async () => {
    authServices.logout();
    window.localStorage.removeItem('user');
    onUserChange({ user: null, authenticated: false });
  };

  const [notification, setNotification] = useState('');

  const onUpdateNotification = notificationMessage => {
    setNotification(notificationMessage);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  useEffect(() => {
    const isAnyoneLoggedIn = async () => {
      if (window.localStorage.getItem('user')) {
        const loggedInUser = JSON.parse(window.localStorage.getItem('user'));
        setUser(loggedInUser);
      }
    };
    isAnyoneLoggedIn();
  }, []);

  function onUserChange(loginData) {
    setUser(loginData);
  }

  function onErrorChange(errorMessage) {
    setError(errorMessage);
  }

  return (
    <ErrorContext value={{ error, onErrorChange }}>
      <NotificationContext value={{ notification, onUpdateNotification }}>
        <AuthContext value={{ user, onUserChange, onUserLogout }}>
          <Routes>
            <Route element={<Protected />}>
              <Route path='messages' element={<Messages />} />
            </Route>
            <Route path='verify' element={<SecretCode />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </AuthContext>
      </NotificationContext>
    </ErrorContext>
  );
}

export default App;
