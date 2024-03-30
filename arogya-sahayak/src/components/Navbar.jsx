import React from "react";
import { TbLogout } from "react-icons/tb";
import Avatar from "../assest/avatar.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app, firestore } from "../firebase.config";
import { Link } from "react-router-dom";
import BloodBank from "../components/BloodBank";
import Department from "../pages/Department";
import DoctorProfile from "../pages/DoctorProfile";
import Pricingplans from "../pages/Pricingplans";
import Gallery from "../pages/Gallery";
import TimeTable from "../pages/Timetable";
//  import Home from "../pages/ChatBot";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { ref } from "firebase/storage";
import { fetchRegisteredData } from "../utils/firebaseFunctions";
import DropDown from "../images/drop.svg";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisibles, setDropdownVisibles] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const toggleDropdownq = () => {
    setDropdownVisibles(!isDropdownVisibles);
  };
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 bg-white w-screen p-3 px-4 md:p-6 md:px-16 bg-primary shadow-md">
      {/* Desktop & Tablet*/}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={""} className="flex items-center gap-2">
          <p className="text-headingColor text-3xl font-bold relative">
            Arogya Sahayak
          </p>
        </Link>

        <ul className="flex items-center gap-14 font-sans text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
          <Link to={"/"}>
            <li>Home</li>
          </Link>

          <Link to={"/about"}>
            <li>About Us</li>
          </Link>

          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>

          <div>
            <p className="flex flex-row ">
              <div
                className="relative"
                onMouseEnter={toggleDropdownq}
                onMouseLeave={toggleDropdownq}
              >
                <label className="cursor-pointer">Services</label>
                {isDropdownVisibles && (
                  <div className="absolute bg-white  py-1 w-40 rounded-lg shadow-lg border mr-4 ">
                    <ul>
                      <li>
                        <a
                          href="https://aarogya-sahayakv.vercel.app/"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Video Call
                        </a>
                      </li>
                      <li>
                        <Link
                          to="/Search"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Search
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <img src={DropDown} alt="" className="mt-1" />
            </p>
          </div>

          {/* <Link to={"/appointments"}>
            <li>Appointment</li>
          </Link> */}
          <div>
            <p className="flex flex-row">
              <div
                className="relative  transition-all duration-500"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <label className="cursor-pointer">Pages</label>
                {isDropdownVisible && (
                  <div className="absolute bg-white  ml-4 py-1 w-40 rounded-lg shadow-lg border ">
                    <ul>
                      <li>
                        <Link
                          to="/appointments"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Appointments
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/bloodbank"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          BloodBank
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/department"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Department
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Doctors"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Doctor
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/DoctorProfile"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Doctor Profile
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/gallery"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blogs"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Blogs
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/Pricingplans"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Pricing plans
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <img src={DropDown} alt="" className="mt-1" />
            </p>
          </div>
          {user ? (
            <Link to={"/register"}>
              <li>Registration</li>
            </Link>
          ) : (
            <Link to={"/newsignup"}>
              <li>Signup</li>
            </Link>
          )}
          {/* <Link to={"/register"}>
            <li>Registration</li>
          </Link> */}
        </ul>
        <div className="relative flex items-center gap">
          <div className="relative">
            <img
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
          
              onClick={login}
            />
            {isMenu && (
              <div className="w-40 bg-green-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:rounded-lg hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Log Out &nbsp; &nbsp;
                  <TbLogout />
                </p>
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:rounded-lg hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                  <Link to={"/profile"}>Your Profile &nbsp; &nbsp;</Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*For Mobile*/}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link
          to={"/"}
          className="flex items-center gap-0 cursor-none font-bold text-headingColor text-xl  relative"
        >
          Arogya Sahayak
        </Link>

        <div className="relative">
          <img
            src={user ? user?.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="user profile"
            onClick={login}
          />
          {isMenu && (
            <div className="w-40 bg-green-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
              <ul className="flex flex-col">
                <Link to={"/"}>
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    Home
                  </li>
                </Link>

                <Link to={"/about"}>
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    About Us
                  </li>
                </Link>

                <Link to={"/contact"}>
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    Contact
                  </li>
                </Link>

                <Link to={"/appointments"}>
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    Appointments
                  </li>
                </Link>

                <Link to={"/doctors"}>
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    Doctors
                  </li>
                </Link><div className=""></div>

                <Link to={"/services"}>
                  <li
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    Services
                  </li>
                </Link>
              </ul>

              <p
                className="m-2 p-2 rounded-md shadow:md flex items-center justify-center bg-gray-300 gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Log Out
                <TbLogout />
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
