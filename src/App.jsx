import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Breadcrumb from "./Components/Breadcrumb";
import Directory from "./Components/Directory";
import Footer from "./Components/Footer";
import StudentProfile from "./Pages/StudentProfile";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Reports from "./Pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-light min-vh-100 d-flex flex-column">
        <Navbar />
        <div className="container my-3 flex-grow-1">
          <Breadcrumb />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Directory />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/student/:id" element={<StudentProfile />} />
          </Routes>

        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;