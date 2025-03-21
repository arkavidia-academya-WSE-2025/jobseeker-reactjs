import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import Chat from "./components/pages/chat/Chat";
import NotificationPage from "./components/pages/notifications/NotificationPage";
import JobSearch from "./components/pages/home/jobs/JobSearch";
import JobPostingForm from "./components/jobs/JobPosting/JobPostingForm";
import LoginPage from "./components/pages/auth/LoginPage";
import SignUpPage from "./components/pages/auth/SignUpPage";
import Profile from "./components/pages/home/sections/profile/Profile";
import EditProfile from "./components/pages/home/sections/profile/EditProfile";
import ApplicationsPage from "./components/pages/application/ApplicationsPage";
import Dashboard from "./components/pages/dashboard/Dashboard";
import PrivateRoute from "./components/context/PrivateRoute";
import RecruiterRoute from "./components/context/RecruiterRoute";
import ChatJobSeeker from "./components/pages/chat/ChatJobSeeker";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout = ["/login", "/register"].includes(location.pathname);
  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <main className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-500">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/editProfile" element={<EditProfile />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/chatJob" element={<ChatJobSeeker />} />
              <Route path="/notification" element={<NotificationPage />} />
              <Route path="/findJobs" element={<JobSearch />} />
              <Route path="/feeds" element={<Dashboard />} />
              <Route element={<RecruiterRoute />}>
                <Route path="/jobPosting" element={<JobPostingForm />} />
                <Route path="/applications" element={<ApplicationsPage />} />
              </Route>
            </Route>
          </Routes>
        </main>
      </Layout>
    </Router>
  );
}

export default App;
