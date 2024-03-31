// import React, { useEffect, useState } from "react";
// import { fetchAllDoctors, saveDoctorData } from "../utils/firebaseFunctions";
import { Link } from "react-router-dom";
import { doctordata } from "../utils/SampleAvailabiltyData";

// function Doctors() {

//   useEffect(() => {
//     try {
//       const allDoctors = async () => {
//         setdoctors(await fetchAllDoctors());
//       };
//       allDoctors();
//     } catch (e) {
//       console.log(e);
//     }
//   }, []);

//   useEffect(() => {
//     console.log("alldoctors", doctors);
//   }, []);
//   return (
//     <>
//       <div class="max-w-3xl mx-auto bg-white rounded shadow overflow-hidden mt-10">
//         <div class="px-6 py-4">
//           <h2 class="text-3xl font-bold mb-4 text-gray-800">List of Doctors</h2>
//           <ul class="divide-y divide-gray-200">
//             {doctors.map((doctor) => {
//               return (
//                 <li class="py-4" key={doctor.docID}>
//                   <Link to={`/doctors/${doctor.docID}`}>
//                     <div>
//                       <h3 class="text-xl font-semibold mb-2 text-gray-900">
//                         {doctor.doctor.doctorName}
//                       </h3>
//                       <p class="text-gray-600 mb-2">
//                         Specialty: {doctor.doctor.speciality}
//                       </p>
//                       <p class="text-gray-500">Email: {doctor.doctor.email}</p>
//                     </div>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Doctors;

import React, { useEffect, useState } from "react";
import doctorheroimg from "../images/banner_img.webp";
import doctor1 from "../images/doctor_1.webp";
import { fetchAllDoctors, saveDoctorData } from "../utils/firebaseFunctions";

const Doctors = () => {
  const [doctors, setdoctors] = useState([]);
  useEffect(() => {
    try {
      const allDoctors = async () => {
        setdoctors(await fetchAllDoctors());
      };
      allDoctors();
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    console.log("alldoctors", doctors);
  }, []);

  return (
    <>
      <section className="flex items-center justify-center w-full md:pl-36 -mt-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-6xl ">
          <div className="md:h-screen flex flex-col justify-center md:pb-36 pt-10 md:pt-0 md:gap-3 gap-1">
            <div className="flex"></div>
            <p className="md:text-6xl text-4xl text-center md:text-start font-extrabold mt-5 pl-10 md:pl-0 -ml-9">
              Introduce You to Our Experts &nbsp;
            </p>
            <p className="mt-5 md:mt-1 text-mediumGrey md:w-3/4 md:text-start text-center pl-10 md:pl-0 text-xl -ml-9">
              The list of certified doctors with years of professional
              experiences
            </p>
          </div>
          <div className="relative">
            <div className="md:h-screen md:absolute flex items-center justify-center md:pb-36">
              <img src={doctorheroimg} alt="Hero" />
            </div>
          </div>
        </div>
      </section>

      <div className=" grid md:grid-cols-3 grid-rows-2 gap-4 mt-14 md:mt-0 grid-cols-1">
        {doctors.map((doctor) => {
          return (
            <div className=" border h-auto w-[320px]  rounded-xl shadow-xl shadow-blue-200 md:ml-12 mx-auto">
              <img
                className="  w-[320px] h-[250px] bg-blue-100  rounded-xl object-cover object-right-top"
                src={doctor.doctorInfo.image}
              ></img>

              <p className="ml-10 border h-12 w-60   text-center rounded-xl mt-3 py-2 bg-blue-300 text-lg font-bold">
                {doctor.doctorInfo.specialization}
              </p>

              <div className=" text-center mt-4 ml-4 mr-4">
                <p className=" text-2xl font-bold "></p>

                <p className=" text-lg font-semibold">
                  {doctor.doctorInfo.name}
                </p>
                <p className="mt-2 font-normal text-md text-gray-600">
                  {doctor.doctorInfo.biography}
                </p>

                <Link
                  className=" flex flex-row gap-4 justify-center items-center py-2 my-3 bg-blue-300 rounded-xl "
                  to={`/doctors/${doctor.docID}`}
                >
                  View
                </Link>
              </div>

              
            </div>
          );
        })}
      </div>

      {/* <div>
        <div class="max-w-3xl mx-auto bg-white rounded shadow overflow-hidden mt-10">
          <div class="px-6 py-4">
            <h2 class="text-3xl font-bold mb-4 text-gray-800">
              List of Doctors
            </h2>
            <ul class="divide-y divide-gray-200">
              {doctors.map((doctor) => {
                return (
                  <li class="py-4" key={doctor.docID}>
                    <Link to={`/doctors/${doctor.docID}`}>
                      <div>
                        <h3 class="text-xl font-semibold mb-2 text-gray-900">
                          {doctor.doctorInfo.name}
                        </h3>
                        <p class="text-gray-600 mb-2">
                          Specialty: {doctor.doctorInfo.specialization}
                        </p>
                        <p class="text-gray-500">
                          Email: {doctor.doctorInfo.contact.email}{" "}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Doctors;
