import messageServices from '../services/messages';
import Chats from '../components/Chats';
import CreateMessage from '../components/CreateMessage';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Greeting from '../components/Greeting';
import { useNavigate } from 'react-router';
import Header from '../components/Header';


function Messages() {
  const { user } = useAuth();

  const navigate = useNavigate();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['messages'],
    queryFn: messageServices.getMessages,
    retry: 1,
  });

  const authenticatedUser = user.user;

  if (isPending) return <Loading title='Messages' />;

  if (isError) {
    if (error.response.status === 401) {
      window.localStorage.removeItem('user');
      return navigate('/login');
    } else return <Error error={error} />;
  }

  // error.response.status === 401

  return (
    <>
      <Header />
      <Greeting userName={authenticatedUser.firstname} />
      <Chats chatList={data} />
      <CreateMessage />
    </>
  );
}

export default Messages;
