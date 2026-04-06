import useAuth from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router';

function Protected() {
  const { user } = useAuth();

  const authenticatedUser = user.user;

  console.log('***PROTECTED***', authenticatedUser);

  // const { membership_status: status } = authenticatedUser;

  // console.log({ authenticatedUser, status });

  if (!authenticatedUser) return <Navigate to='/login' />;
  if (authenticatedUser.membership_status !== 'verified') {
    return <Navigate to='/verify' />;
  }

  return <Outlet />;
}

export default Protected;
