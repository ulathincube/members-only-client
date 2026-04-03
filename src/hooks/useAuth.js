import { useContext } from 'react';
import { AuthContext } from '../context/Contexts';

function useAuth() {
  const { user, onUserChange, onUserLogout } = useContext(AuthContext);

  return { user, onUserChange, onUserLogout };
}

export default useAuth;
