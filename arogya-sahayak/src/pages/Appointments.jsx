import React, { useState, useEffect } from "react";
import Bannerimage from "../images/banner_img2.webp";
import Appimage from "../images/appointment_img.webp";
import { IoCall } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";

const Appointments = () => {
  const [{ user }, dispatch] = useStateValue();
  const [name, setName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(user?.phone);
  const [medicalRecord, setMedicalRecord] = useState("");
  const [appointmentType, setAppointmentType] = useState("routine");
  const [departmentType, setDepartmentType] = useState("Pediatric");
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const getYourSlots = async () => {
      const data = [];
      const docRef = collection(firestore, "slots");
      const q = query(docRef, where("allocatedTo", "==", user ? user.displayName: ""));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        data.push(doc);
      });
      setSlots(data);
    };
    getYourSlots();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      name,
      phone,
      medicalRecord,
      email,
      date,
      time,
      appointmentType,
    });
    // Add your form submission logic here
  };

  return user ? (
    <div className=" md:mt-0">
      <div className="md:flex flex flex-col md:flex-row gap-4 text-center  items-center justify-evenly mt-10 w-full">
        <div className="w-[90%]">
        <p className="md:text-start text-center text-5xl font-extrabold ">
          Don’t Let Your Health Take a Backseat!
        </p>
        <p className="md:text-start text-center text-2xl font-bold ">
          Fill out the appointment form below to schedule a consultation with
          one of our healthcare professionals.
        </p>

        </div>
       
        <img
          src={Bannerimage}
          className=" h-[350px] w-auto"
          alt="Banner"
        ></img>
      </div>

      <div className="mt-10">
        <h1 className="text-xl font-bold mb-4">Alloted Slots : </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {slots.length === 0 ? (
            <p>There are no slots available right now!</p>
          ) : (
            slots.map((slot) => (
              <Link
                to={"/videocall"}
                key={slot.id}
                className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg p-3 shadow-md text-white"
              >
                <div className="px-6 py-4">
                  <p className="text-lg font-semibold mb-2">
                    Date: {slot.data().date}
                  </p>
                  <p className="text-lg font-semibold mb-2">
                    Timing: {slot.data().from}-{slot.data().to}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      <div className="md:-mt-52">
        <p className=" md:text-end text-center md:mr-20 md:mt-[300px] mt-6 text-3xl font-bold">
          Contact Info
        </p>
        <img
          src={Appimage}
          className=" h-70 md:w-[320px] w-full md:ml-[820px] mx-auto mt-10 rounded-lg"
          alt="App image"
        />
        <div className="md:ml-[820px] mt-6 mx-auto sm:w-[90%]">
          <div>
            <IoCall className="w-10 h-10" />
            <p className="-mt-[45px] ml-14 text-xl font-semibold">Phone</p>
            <p className="-mt-1 ml-14">022 4567 4565</p>
          </div>

          <div className="mt-4">
            <BiLogoGmail className="h-10 w-10" />
            <p className="-mt-[45px] ml-14 text-xl font-semibold">Email Us</p>
            <p className="-mt-1 ml-14">arogyasahayak@gmail.com</p>
          </div>

          <div className="mt-4">
            <FaLocationDot className="h-10 w-10" />
            <p className="-mt-[45px] ml-14 text-xl font-semibold">
              {" "}
              Our Location
            </p>
            <p className="-mt-1 ml-14">Gandhi Nagar,45 Street, Mumbai-400080</p>
          </div>
        </div>
      </div>

      <div className="md:-mt-[485px] mt-10">
        <p className="text-start text-3xl font-bold ml-6">Appointment</p>

        <form onSubmit={handleSubmit} className="mt-12">
          <div className="flex flex-wrap gap-6">
            <div>
              <label htmlFor="name" className="text-xl px-6  block">
                Name
              </label>
              <input
                className="border h-12 w-full rounded-lg text-start px-4 mt-3 ml-4"
                type="text"
                id="name"
                placeholder="Enter Your Name"
                value={user?.displayName}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="">
              <label htmlFor="phone" className="text-xl px-6 block">
                Phone Number
              </label>
              <input
                className="border h-12 w-full rounded-lg text-start px-4 mt-3 ml-4"
                type="text"
                id="phone"
                placeholder="Enter Your Phone Number"
                value={user?.phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="w-full ">
              <label htmlFor="medicalrecord" className="text-xl px-6 block">
                Medical Record Number
              </label>
              <input
                className="border h-12 w-[235px] rounded-lg text-start px-4 mt-3 ml-4"
                type="text"
                id="medicalrecord"
                placeholder="123456 7890"
                value={medicalRecord}
                onChange={(e) => setMedicalRecord(e.target.value)}
                required
              />
            </div>

            <div className="md:-mt-[112px] md:ml-[260px]">
              <label htmlFor="email" className="text-xl px-6 block">
                Email
              </label>
              <input
                className="border h-12 w-full rounded-lg text-start px-4 mt-3 ml-4"
                type="email"
                id="email"
                placeholder=" Enter Your Email"
                value={user?.email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="md:-ml-[522px]">
              <label htmlFor="date" className="text-xl px-6 block">
                Date
              </label>
              <input
                className="border h-12 w-full rounded-lg text-start px-4 mt-3 ml-4"
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="ml-[54px]">
              <label htmlFor="time" className="text-xl px-6 block">
                Time
              </label>
              <input
                className="border h-12 w-full rounded-lg text-start px-4 ml-6 mt-3"
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Reason to visit */}
          <div className="mt-10 ml-5">
            <p className=" text-xl font-semibold">Reason For Visit</p>
            <div className="flex items-start gap-8 -mt-2 flex-wrap">
              <label className="mt-6 ">
                <input
                  className=" w-6 h-6"
                  type="radio"
                  value="regular"
                  checked={appointmentType === "regular"}
                  onChange={() => setAppointmentType("regular")}
                />
                <p className=" text-start  text-lg text-gray-800 font-medium -mt-[30px]  ml-8">
                  Routine Checkup
                </p>
              </label>

              <label className="mt-6">
                <input
                  className=" h-6 w-6"
                  type="radio"
                  value="new"
                  checked={appointmentType === "new"}
                  onChange={() => setAppointmentType("new")}
                />
                <p className=" text-start text-lg  text-gray-800 font-medium -mt-[30px] ml-8">
                  New Patient Visit
                </p>
              </label>

              <label className="mt-6">
                <input
                  className="  h-6 w-6"
                  type="radio"
                  value="specific"
                  checked={appointmentType === "specific"}
                  onChange={() => setAppointmentType("specific")}
                />
                <p className=" text-start -mt-[30px] ml-8 text-lg font-medium text-gray-800">
                  Specific Concern
                </p>
              </label>
            </div>
          </div>

          {/* Department */}
          <div className="mt-10 ml-5">
            <p className=" text-xl font-semibold">Department</p>
            <div className="flex items-start flex-wrap gap-8 -mt-2">
              <label className="mt-6 ">
                <input
                  className=" w-6 h-6"
                  type="radio"
                  value="regular"
                  checked={departmentType === "pediatric"}
                  onChange={() => setDepartmentType("pediatric")}
                />
                <p className=" text-start  text-lg text-gray-800 font-medium -mt-[30px]  ml-8">
                  Pediatric
                </p>
              </label>

              <label className="mt-6">
                <input
                  className=" h-6 w-6"
                  type="radio"
                  value="new"
                  checked={departmentType === "Obstetrics and Gynecology"}
                  onChange={() =>
                    setDepartmentType("Obstetrics and Gynecology")
                  }
                />
                <p className=" text-start text-lg  text-gray-800 font-medium -mt-[30px] ml-8">
                  {" "}
                  Obstetrics and Gynecology
                </p>
              </label>

              <label className="mt-6">
                <input
                  className="  h-6 w-6"
                  type="radio"
                  value="specific"
                  checked={departmentType === "Cardiology"}
                  onChange={() => setDepartmentType("Cardiology")}
                />
                <p className=" text-start -mt-[30px] ml-8 text-lg font-medium text-gray-800">
                  Cardiology
                </p>
              </label>

              <label className="mt-6">
                <input
                  className="  h-6 w-6"
                  type="radio"
                  value="specific"
                  checked={departmentType === "Neurology"}
                  onChange={() => setDepartmentType("Neurology")}
                />
                <p className=" text-start -mt-[30px] ml-8 text-lg font-medium text-gray-800">
                  Neurology
                </p>
              </label>
            </div>
          </div>
          <div className=" border h-12 w-48 mt-12 py-2 ml-4  bg-blue-900 text-white rounded-2xl">
            <Link
              className=" ml-4 -mt-8  px-2 py-4 "
              to={"/doctors"}
              type="submit"
            >
              Book Appointment <span className=" text-xl"> → </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <h1 className=" text-3xl font-bold text-center mt-12">
      {" "}
      To Book Your Appointment You Have to Sign In First...
    </h1>
  );
};

export default Appointments;
