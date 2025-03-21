import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RecruiterRoute = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData && userData.role === "recruiter") {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};

export default RecruiterRoute;
