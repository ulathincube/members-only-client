import Form from '../components/Form';
import Header from '../components/Header';
import Notification from '../components/Notification';

function RegisterPage() {
  return (
    <>
      <Header />
      <Form type='register' />
      <Notification />
    </>
  );
}

export default RegisterPage;
