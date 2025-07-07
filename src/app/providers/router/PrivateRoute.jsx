import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthContext";
import { AppRoutes } from "../../../shared/lib/appRoutes";

export const PrivateRoute = () => {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
};
