import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from '../LoginForm/LoginForm';
import { Div } from './HomePageStyled';

function Login() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Div>
        <LoginForm />
      </Div>
    </HelmetProvider>
  );
}

export default Login;