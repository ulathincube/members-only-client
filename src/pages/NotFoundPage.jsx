import Header from '../components/Header';
import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <>
      <Header />
      <h1>Unable to find this resource!</h1>
      <Link to='/'>Go to Home</Link>
    </>
  );
}

export default NotFoundPage;
