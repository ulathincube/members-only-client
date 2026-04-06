import Header from '../components/Header';
import { Link } from 'react-router';
import Footer from '../components/Footer';

function NotFoundPage() {
  return (
    <>
      <Header />
      <h1>Unable to find this resource!</h1>
      <Link to='/'>Go to Home</Link>
      <Footer />
    </>
  );
}

export default NotFoundPage;
