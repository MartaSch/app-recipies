import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = ({ component: Component, redirectTo = '/yummy-app/' }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;
  
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  };
  