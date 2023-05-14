import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { Div } from './HomePageStyled';

function Register() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Div>
        <RegisterForm />
      </Div>
    </HelmetProvider>
  );
}

export default Register;