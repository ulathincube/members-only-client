import messageServices from '../services/messages';
import Chats from '../components/Chats';
import CreateMessage from '../components/CreateMessage';
import { useQuery } from '@tanstack/react-query';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Greeting from '../components/Greeting';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Messages() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['messages'],
    queryFn: messageServices.getMessages,
    retry: 1,
  });

  if (isPending) return <Loading title='Messages' />;

  if (isError) return <Error error={error} />;

  return (
    <>
      <Header />
      <Chats chatList={data} />
      <CreateMessage />
      <Footer />
    </>
  );
}

export default Messages;
