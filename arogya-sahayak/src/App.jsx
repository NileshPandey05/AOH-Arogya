import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { VideoRoom } from "./components/VideoRoom";
import Home from "./pages/Herosection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
 import Signin from "./pages/Signin";
import BloodBank from "./components/BloodBank";
// import ChatBot from "./pages/ChatBot";
import { StateProvider } from "./context/StateProvider";
import reducer from "./context/reducer";
import { initialState } from "./context/initialState";
 import Register from "./pages/Register";
import Footer from "./pages/Footer";
import Department from "./pages/Department";
import Reviews from "./pages/Reviews";
import Blogs from "./pages/Blogs";
import AllPages from "./pages/AllPages";
import "./App.css";
import Profile from "./pages/Profile";
import { dataLoader } from "./utils/firebaseFunctions";
import BookSlot from "./pages/BookSlot";
import DoctorProfile from "./pages/DoctorProfile";
import Pricingplans from "./pages/Pricingplans";
import Gallery from "./pages/Gallery";
import Timetable from './pages/Timetable';
import DoctorRegister from "./pages/DoctorRegister";
import NewSignUp from "./pages/NewSignUp";
import SearchPatient from "./pages/SearchPatient";
import Departmentdetails from "./pages/Departmentdetails";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">

      <Navbar />
      

      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors />} /> 
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/allpages" element={<AllPages />} />
          {/* <Route path="/ChatBot" element={<ChatBot />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/videocall" element={<VideoRoom />} />
          <Route path="/bloodbank" element={<BloodBank />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookslots/:docID" element={<BookSlot />} />
          <Route path="/department" element={<Department />} />
          <Route path="/departmentdetails" element={<Departmentdetails />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/doctors/:docID" element={<DoctorProfile />} />
          <Route path="/pricingplans" element={<Pricingplans />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/doctorRegister" element={<DoctorRegister />} />
          <Route path="/newsignup" element={<NewSignUp />} />
          <Route path="/search" element={<SearchPatient />} />
        </Routes>
      </main>
    

      <Footer />
    </div>
  );
}

export default App;
