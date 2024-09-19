import { useAuth } from "../hooks/useAuth";
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/yummy-app/' }) => {
    const { isLoggedIn } = useAuth();
  
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  };