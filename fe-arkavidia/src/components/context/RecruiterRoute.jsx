import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RecruiterRoute = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  //sementara job_seeker karena belum tau gimana fetch yang role recruiter hahahah
  if (userData && userData.role === "job_seeker") {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};

export default RecruiterRoute;
