import { Navigate, Outlet } from "react-router-dom";

export const PrivateGuard = () => {
  const token = localStorage.getItem("token")
  // const authenticated = false;

  return token ? <Outlet /> : <Navigate to="/login" replace /> 
}

// Replace hace que sustituya toda la ruta por /login. Sin el replace lo que haría sería añadir /login a la ruta que ya tenemos