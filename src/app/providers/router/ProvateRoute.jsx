import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ isAuth }) => {
  console.log('PrivateRoute', isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/sign-in" />;
};
 