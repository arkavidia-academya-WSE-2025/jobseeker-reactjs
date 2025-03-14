import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <>
      <Router>
        <main className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-500">
          {/* Navbar Section */}
          <Navbar />

          {/* Routing */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          {/* Footer Section */}
          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;
