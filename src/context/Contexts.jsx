import { createContext } from 'react';

const AuthContext = createContext({ user: null, authenticated: false });

const NotificationContext = createContext(null);

const ErrorContext = createContext('');

export { AuthContext, ErrorContext, NotificationContext };
