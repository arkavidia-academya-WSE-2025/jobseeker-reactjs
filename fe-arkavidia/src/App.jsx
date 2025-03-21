import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import Chat from "./components/pages/chat/Chat";
import NotificationPage from "./components/pages/notifications/NotificationPage";
import JobSearch from "./components/pages/home/jobs/JobSearch";
import JobPostingForm from "./components/jobs/JobPosting/JobPostingForm";
import JobApplicantsList from "./components/jobs/JobApplicants/JobApplicantsList";
import LoginPage from "./components/pages/auth/LoginPage";
import SignUpPage from "./components/pages/auth/SignUpPage";
import Profile from "./components/pages/home/sections/profile/Profile";
import EditProfile from "./components/pages/home/sections/profile/EditProfile";
import PrivateRoute from "./components/context/PrivateRoute";
import RecruiterRoute from "./components/context/RecruiterRoute";

function App() {
  return (
    <Router>
      <main className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/findJobs" element={<JobSearch />} />
            <Route path="/jobApplicants" element={<JobApplicantsList />} />
            <Route element={<RecruiterRoute />}>
              <Route path="/jobPosting" element={<JobPostingForm />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
