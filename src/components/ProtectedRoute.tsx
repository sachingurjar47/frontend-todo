import React from "react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  //   if (!auth) {
  //     return <Navigate to="/login" />;
  //   }

  return <>{children}</>;
};

export default ProtectedRoute;
