import React from 'react';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import './index.css';

const HomePage = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/Register'));
const LoginPage = lazy(() => import('./pages/Login'));
const CategoriesPage = lazy(() => import('./pages/Category'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/yummy-app/" element={<HomePage />} />
      <Route 
      path="/yummy-app/registration" 
      element={
        <RestrictedRoute redirectTo="/yummy-app/categories" component={<RegisterPage />} />
      } 
      />
      <Route 
      path="/yummy-app/signin" 
      element={
      <RestrictedRoute redirectTo="/yummy-app/categories" component={<LoginPage />} />
    } 
    />
    <Route 
    path="/yummy-app/categories"
    element={
      <PrivateRoute redirectTo="/yummy-app/signin" component={<CategoriesPage />} />
    }
    />
    </Routes> 
    </Suspense>
  );
};
