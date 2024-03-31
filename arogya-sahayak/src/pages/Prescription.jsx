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
import { fetchPatientData, prescriptionUpload, saveRegisteredData, savedata, uploadImage } from "../utils/firebaseFunctions";

const Prescription = () => {
  const [{ user }, dispatch] = useStateValue();
  const [isDoctor, setisDoctor] = useState(false);
  const [doctordata, setdoctordata] = useState();
  const [arogya, setarogya] = useState("");
  const [imageUplaod, setimageUplaod] = useState([]);
  const [prescrip, setPrescrip]=useState("")
  const upsetImage = (file) => {
    setimageUplaod((prev) => {
      return [...prev, file];
    });
  };
   const writePrescription = async() =>{
    let prescription=[];
    let data = await fetchPatientData(arogya);
    if(data.prescription){
      prescription = data.prescription;
    }
    prescription.push({prescrip,createdAt: new Date().toISOString().split('T')[0],dr:user.displayName});
    console.log({...data,prescription})

    savedata({...data,prescription});
    

   }

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
      <div className="mt-24 flex flex-col items-center justify-center">
        <input type="text"  placeholder="Enter Your Patient Mobile Number..." className= " p-2 border h-12 w-72 text-black rounded-md " value={arogya} onChange={(e)=>setarogya(e.target.value)}/>
        <div className="text-sm leading-6 mt-8">
          <label htmlFor="Hypertension" className="font-bold text-gray-900 text-center text-4xl mt-8">
            Upload The Prescription
          </label>
          <p className="text-gray-500 mt-10 h-10 w-52 text-xl font-semibold text-center ml-20">
            <input className=" "
              id="Hypertension"
              name={`${new Date().toISOString().split('T')[0]}_Prescription`}
              type="file"
              required
              onChange={(e) => {
                upsetImage({
                  file: e.target.files[0],
                  filename: e.target.name,
                });
              }}
            />
          </p>
        </div>
        <button className=" border h-12 w-32 rounded-lg  bg-blue-900 text-white font-semibold text-lg mt-4 " onClick={writeData}> Submit</button>
      

      <div className="flex items-center justify-evenly mt-10 gap-x-2">
      <hr className=" h-2 w-96 "/>
      <p className="text-center mb-2">OR</p>
      <hr className=" h-2 w-96"/>
      </div>
      
     <textarea placeholder="Enter the Prescription..." value={prescrip} onChange={(e)=>setPrescrip(e.target.value)} className=" h-64  w-96 border p-3 border-black mt-10 " >
     </textarea>
     <button className=" border h-12 w-32 rounded-lg  bg-blue-900 text-white font-semibold text-lg mt-4 " onClick={writePrescription}> Submit</button>
      
      
      
      </div>











    );
  }
};

export default Prescription;
