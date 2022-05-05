import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authOperations, authSelectors } from './redux/auth';

import AppBarCopmonent from './components/AppBarCopmonent';
import ContainerMain from './components/ContainerMain';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { SpinnerTailSpin } from './components/Spinner/Spinner';
import { Toaster } from 'react-hot-toast';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "HomeView" */)
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "RegisterView" */)
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "LoginView" */)
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "ContactsView" */)
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <ContainerMain>
      <Toaster position="top-center" reverseOrder={false} />
      {isFetchingCurrentUser ? (
        <SpinnerTailSpin />
      ) : (
        <>
          <AppBarCopmonent />
          <Suspense fallback={<SpinnerTailSpin />}>
            <Routes>
              <Route index element={<HomeView />} />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsView />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </>
      )}
    </ContainerMain>
  );
}
