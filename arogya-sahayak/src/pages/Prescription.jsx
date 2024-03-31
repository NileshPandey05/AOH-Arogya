import React, { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import Lottie from 'lottie-react'; 
import notFound from "../assest/notfound.json"
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  addDoc,
  updateDoc,
  where,
  getDoc,
  and,
  limit,
} from "firebase/firestore";
import { firestore } from "../firebase.config";
import { useState } from "react";
import { fetchPatientData, prescriptionUpload, uploadImage } from "../utils/firebaseFunctions";

const Prescription = () => {
  const [{ user }, dispatch] = useStateValue();
  const [isDoctor, setisDoctor] = useState(false);
  const [doctordata, setdoctordata] = useState();
  const [arogya, setarogya] = useState("");
  const [imageUplaod, setimageUplaod] = useState([]);

  const upsetImage = (file) => {
    setimageUplaod((prev) => {
      return [...prev, file];
    });
  };

  useEffect(() => {
    const checkdoctor = async () => {
      const docRef = collection(firestore, "doctors");

      const q = query(docRef, where("contact.email", "==", user.email));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log("nonethin");
      } else {
        setisDoctor(true);
        querySnapshot.forEach((doc) => {
          setdoctordata(doc.data());
        });
      }
    };
    checkdoctor();
  }, []);

  const writeData = async (e) => {
    e.preventDefault();
    let data = await fetchPatientData(arogya);
    console.log(data.id)

    prescriptionUpload(imageUplaod,data.id);
  };

  if (isDoctor === false) {
    return (
      <div className="  ">
       
        <Lottie 
          animationData={notFound}
          className="w-[350px]  h-auto  lg:ml-96 md:ml-40 "
        /> 
         <h1 className=  " text-center text-3xl font-bold -mt-12  ">You Are Not Doctor...</h1>
      </div>
    );
  } else {
    return (
      <div className="mt-10">
        <input type="text" className="bg-slate-600" value={arogya} onChange={(e)=>setarogya(e.target.value)}/>
        <div className="text-sm leading-6">
          <label htmlFor="Hypertension" className="font-medium text-gray-900">
            Upload The Prescription
          </label>
          <p className="text-gray-500">
            <input
              id="Hypertension"
              name={`${new Date().toISOString().split('T')[0]}_Prescription`}
              type="file"
              onChange={(e) => {
                upsetImage({
                  file: e.target.files[0],
                  filename: e.target.name,
                });
              }}
            />
          </p>
        </div>
        <button onClick={writeData}> submit</button>
      </div>
    );
  }
};

export default Prescription;
