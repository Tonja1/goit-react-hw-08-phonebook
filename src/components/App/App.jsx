import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './AppStyled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PublicRoute } from '../PublicRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { PrivateRoute } from 'components/PrivateRoute';
import { useAuth } from '../../hooks/useAuts';

const Home = lazy(() => import('../pages/HomePage'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        {!isRefreshing && (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/register"
              element={<PublicRoute component={<Register />} />}
            />
            <Route
              path="/login"
              element={
                <PublicRoute component={<Login />} redirectTo={'/contacts'} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={<Contacts />} redirectTo={'/login'} />
              }
            />
          </Routes>
        )}
      </Suspense>

      <ToastContainer
        font-size="15px"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};