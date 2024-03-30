import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  fetchRegisteredData,
  getAvailableSlots,
  getDoctorDetails,
} from "../utils/firebaseFunctions";

import { useStateValue } from "../context/StateProvider";
import {
  collection,
  doc,
  getDoc,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../firebase.config";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function DoctorProfile() {
  const { docID } = useParams();
  const [data, setdata] = useState("");
  const [slots, setslots] = useState([]);
  const [patient, setpatient] = useState({});
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const getdata = async () => {
      const doctor = await getDoctorDetails(docID);
      setdata(doctor);
      const availableSolts = await getAvailableSlots(docID);
      setslots(availableSolts ? availableSolts : []);
      const patientdata = await fetchRegisteredData(user.uid );
      setpatient(patientdata);
      console.log("patientdata", patientdata);
    };
    getdata();
  }, []);

  const allocateSlot = async (id) => {
    const docRef = doc(collection(firestore, "slots"), id);
    const slotSnapshot = await getDoc(docRef);
    if (slotSnapshot.exists) {
      const newData = {
        ...slotSnapshot.data(),
        allocatedTo: patient.ArogyaNumber,
      };
      setDoc(docRef, newData).then((res) => {
        console.log("the data has been updated");
      });
    }
  };

  return (
    <div className=" mt-12 grid grid-cols-2 items-center justify-center">
      <div className=" border w-[300px] h-[220px] mt-[125px] rounded-3xl shadow-xl shadow-blue-200">
        <img
          src={data?.image}
          alt=""
          className="w-[300px] h-auto rounded-lg shadow-xl -mt-[338px]"
        />
        <div className="grid grid-cols-3 items-center gap-2 mt-8">
          <FaXTwitter className=" text-center h-10 w-10 bg-blue-900 text-white rounded-full px-2 py-2 ml-16 hover:bg-blue-400" />
          <FaInstagram className="text-center h-10 w-10 bg-blue-900 text-white rounded-full px-2 py-2 ml-8 hover:bg-blue-400 " />
          <FaFacebookF className="text-center h-10 w-10 bg-blue-900 text-white rounded-full px-2 py-2 -md:ml-16 hover:bg-blue-400" />
        </div>
      </div>
      <div className=" w-[900px]  h-auto -ml-[260px] mt-8 md:mt-0 bg-blue-100 rounded-lg shadow-lg p-8">
        <p className="font-bold text-4xl mb-4">Doctor's Details</p>
        <p className="text-lg font-bold ">
          Specialization: {data?.specialization}
        </p>
        <p className="text-lg font-bold">Name: {data?.name}</p>
        <p className="text-lg font-bold">Email: {data?.contact?.email}</p>
        <p className="text-lg font-bold">Phone: {data?.contact?.phone}</p>
        <p className="text-lg font-bold">Address: {data?.contact?.address}</p>
        <div className="mt-4">
          <p className="text-lg font-semibold">Languages spoken:</p>
          <ul className="list-disc pl-4">
            {data?.languages_spoken?.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">Experience:</p>
          <ul className="list-disc pl-4">
            {data?.experience?.map((exp, index) => (
              <li key={index}>
                Position: {exp.position}, Institution: {exp.institution}, Start
                Date: {exp.start_date}, End Date:{" "}
                {exp.end_date ? exp.end_date : "Currently ongoing"}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">Education:</p>
          <ul className="list-disc pl-4">
            {data?.education?.map((edu, index) => (
              <li key={index}>
                Degree: {edu.degree}, Institution: {edu.institution}, Year:{" "}
                {edu.year}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">Certifications:</p>
          <ul className="list-disc pl-4">
            {data?.certifications?.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
        <p className="mt-4">{data?.biography}</p>
      </div>
      <div >
        {/* <h1 className="font-bold text-3xl mb-4 text-center">
          Patient: {patient.username}
        </h1> */}
        <div className=" mt-12">
          {user.email === "blazeplays2003@gmail.com" ? (
            <>
            <h1 className="font-bold text-3xl mb-6 text-center border  h-20 w-72 -mt-[160px] bg-blue-200 rounded-2xl">
            Patient: {patient?.username}
          </h1>
           <div className=" border w-52 h-12 py-2 mt-8 p text-center bg-blue-900 rounded-2xl ml-10">
            <Link
              className="ml-5 mr-5 text-white text-xl"
              to={`/bookslots/${docID}`}
            >
              Make slot available
            </Link>
            </div>
            </>
          ) : (
            <h1 className="font-bold text-3xl mb-6 text-center border  h-20 w-72 -mt-[152px] bg-blue-200 rounded-2xl">
            Patient: {patient?.username}
          </h1>
          )}
          {slots.length === 0 ? (
            <p className="text-center col-span-full mt-6 -ml-72 text-xl ">
              There are no slots available right now!
            </p>
          ) : (
            slots.map((slot) => (
              <div 
                key={slot.id}
              
              >
                <div className="flex  flex-row gap-4 mt-4">
                  <p className="">
                    Date: {slot.data().date}
                  </p>
                  <p className="">
                    Timing: {slot.data().from}-{slot.data().to}
                  </p>
                </div>
                <div className=" mt-8 ">
                <Link to={"/appointments"}
                  onClick={() => {
                    allocateSlot(slot.id);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-36"
                >
                  Book slot
                </Link>

                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
