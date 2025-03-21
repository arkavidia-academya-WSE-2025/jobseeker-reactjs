import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Router>
        <main className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-500">
          {/* Navbar Section */}
          <Navbar />

          {/* Routing */}
          <Routes>
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/findJobs" element={<JobSearch />} />
            <Route path="/jobPosting" element={<JobPostingForm />} />
            <Route path="/jobApplicants" element={<JobApplicantsList />} />
          </Routes>

          {/* Footer Section */}
          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;
