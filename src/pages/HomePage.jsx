import { Link } from 'react-router';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
      {/* <section>
        <h1>Welcome to Members Only</h1>
        <p>To access resources please log in!</p>
        <Link to='/login'>Log In</Link>
      </section> */}
    </>
  );
}

export default HomePage;
