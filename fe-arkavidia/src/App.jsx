import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import Chat from "./components/pages/chat/Chat";
import NotificationPage from "./components/pages/notifications/NotificationPage";
import JobSearch from "./components/pages/home/jobs/JobSearch";
import LoginPage from "./components/pages/auth/LoginPage";
import SignUpPage from "./components/pages/auth/SignUpPage";
import ProfilePage from "./components/profile/ProfilePage";
import PostPage from "./components/pages/feeds/PostPage";

function App() {
  return (
    <>
      <Router>
        <main className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-500">
          {/* Navbar Section */}
          <Navbar />

          {/* Routing */}
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/findJobs" element={<JobSearch />} />
            <Route path="/profile:/username" element={<ProfilePage />} />
            <Route path="/feeds" element={<PostPage/>} />
          </Routes>

          {/* Footer Section */}
          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;
