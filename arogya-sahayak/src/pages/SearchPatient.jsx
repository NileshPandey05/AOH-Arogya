import React, { useState } from "react";
import {
  fetchFiles,
  fetchPatientData,
  fetchRegisteredData,
} from "../utils/firebaseFunctions";
import {
  faCalendarCheck,
  faCreditCard,
  faEnvelope,
  faFilePdf,
  faFlask,
  faImage,
  faLocationDot,
  faMobileScreenButton,
  faStethoscope,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchPatient = () => {
  const [agrogyaNumber, setagrogyaNumber] = useState("");
  const [files, setfiles] = useState({});
  const [data, setdata] = useState();

  const getPatient = async () => {
    localStorage.setItem("filesLists","{}")
    // const filedata = await fetchFiles(agrogyaNumber).then((res) => {
    //   console.log(res);
    // });
    await fetchPatientData(agrogyaNumber).then((res) => {
      console.log(res);
      setdata(res);
    });
    // setfiles(filedata);
    const storedFilesJSON = localStorage.getItem("filesLists");
    if (storedFilesJSON) {
      const parsedFiles = JSON.parse(storedFilesJSON);
      console.log("filesJSON", parsedFiles);
      setfiles(parsedFiles);
      console.log("files", files);
    }

    setagrogyaNumber("");
  };

  const getThemFiles = async () => {
    console.log(data.id);
    const filedata = await fetchFiles(data.id).then((res) => {
      console.log(res);
    });
    setfiles(filedata);
    const storedFilesJSON = localStorage.getItem("filesLists");
    if (storedFilesJSON) {
      const parsedFiles = JSON.parse(storedFilesJSON);
      console.log("filesJSON", parsedFiles);
      setfiles(parsedFiles);
      console.log("files", files);
      // localStorage.setItem("filesLists",{})
    }
  };
  return (
    <div>
      <p className=" text-center font-extrabold lg:text-5xl text-3xl mt-16">
        Identity Insight: Peer into Your Profile with the Power of Your Arogya
        Number
      </p>
      <div className="mt-20 flex flex-col items-center  justify-center ">
        <input
          type="text"
          className=" border h-12 w-[90%] px-3 rounded-lg border-gray-600 text-gray-900 shadow-md shadow-blue-200"
          placeholder="Enter Your Arogya Number..."
          value={agrogyaNumber}
          onChange={(e) => setagrogyaNumber(e.target.value)}
        />
        <button
          className="  bg-blue-900  border mt-6 h-10  w-48 rounded-lg text-white "
          onClick={getPatient}
        >
          Get Profile
        </button>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:mt-6">
        {data !== undefined && (
          <>
            {" "}
            <div className="flex-1 p-4">
              <div
                className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg p-8 shadow-md text-white"
                id="Details"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={data?.photoURL}
                    alt="img"
                    className="w-24 h-24 rounded-full"
                  />
                  <h2 className="text-2xl font-bold mb-4">{data?.username}</h2>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Details</h3>
                  <div className="flex items-center mb-2">
                    <b>Arogya number : &nbsp;</b>
                    <p className="text-lg"> {data?.ArogyaNumber}</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon
                      icon={faMobileScreenButton}
                      className="mr-2"
                    />
                    <p className="text-lg">{data?.phone}</p>
                  </div>

                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    <a href={`mailto:${data?.email}`}>
                      <p className="text-lg">{data?.email}</p>
                    </a>
                  </div>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
                    <p className="text-lg">
                      {data?.aadhaar || "Aadhaar Card No."}
                    </p>
                  </div>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                    <p className="text-lg">
                      Address-
                      {`${data?.address} ${data?.state} ${data?.pincode} ${data?.city}`}
                    </p>
                  </div>
                </div>
              </div>
              <br />

              <div
                className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg p-8 shadow-md text-white"
                id="labResults"
              >
                <p className="text-lg font-semibold mb-4">Latest Lab Results</p>
                <button onClick={getThemFiles} className=" border h-10 w-[100px] bg-white text-black rounded-lg text-center mb-2  font-semibold" >GET FILES</button>

                {Object.keys(files).length > 0 ? (
                  Object.keys(files).map((ele) => {
                    console.log(ele);
                    return (
                      <div className="flex items-center mb-4" key={ele}>
                        <FontAwesomeIcon icon={faImage} className="mr-2" />
                        <a
                          href={files[ele]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="text-lg">{ele}</p>
                        </a>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-lg">No files found</p>
                )}
              </div>
            </div>
            <div className="flex-1 p-4">
              <div
                id="overview"
                className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg p-8 shadow-md text-white"
              >
                <h2 className="text-3xl font-bold mb-4">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="h-24 bg-gray-200 p-4 rounded-lg flex flex-col justify-between text-gray-800">
                    <p className="text-lg font-semibold">Gender</p>
                    <p className="text-xl">{data?.gender || "Gender"}</p>
                  </div>

                  <div className="h-24 bg-gray-200 p-4 rounded-lg flex flex-col justify-between text-gray-800">
                    <p className="text-lg font-semibold">Date of Birth</p>
                    <p className="text-xl">{data?.DOB || "DOB"} </p>
                  </div>

                  <div className="h-24 bg-gray-200 p-4 rounded-lg flex flex-col justify-between text-gray-800">
                    <p className="text-lg font-semibold">Weight</p>
                    <p className="text-xl">
                      {`${data?.weight} kg` || "Weight"}
                    </p>
                  </div>

                  <div className="h-24 bg-gray-200 p-4 rounded-lg flex flex-col justify-between text-gray-800">
                    <p className="text-lg font-semibold">Height</p>
                    <p className="text-xl">
                      {`${data?.height} cm` || "Height"}
                    </p>
                  </div>

                  <div className="h-24 bg-gray-200 p-4 rounded-lg flex flex-col justify-between text-gray-800">
                    <p className="text-lg font-semibold">Blood Group</p>
                    <p className="text-xl">{data?.bloodGroup || "O+ve"}</p>
                  </div>

                  {/* <div className="h-24 bg-gray-200 p-4 rounded-lg flex flex-col justify-between text-gray-800">
                  <p className="text-lg font-semibold">BP Level</p>
                  <p className="text-xl">{data?.BPlevel || "No BP"}</p>
                </div> */}
                </div>
              </div>

              <br />
              <div
                id="options-bar"
                className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg p-8 shadow-md              text-white"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Emergency Contact Details
                </h2>
                <div className="flex flex-col space-y-2">
                  <p className="text-lg">
                    <b>Name:</b> &nbsp; {data?.Emername}
                  </p>
                  <p className="text-lg">
                    <b>Relation:</b> &nbsp;{data?.EmerRelation}
                  </p>
                  <p className="text-lg">
                    <b>Phone No.:</b> &nbsp; {data?.Emerphone}
                  </p>
                </div>
              </div>
              <br />
              <div
                id="options-bar"
                className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg p-8 shadow-md text-white"
              >
                <h2 className="text-3xl font-bold mb-4">Insurance Details</h2>
                <div className="flex flex-col space-y-2">
                  <p className="text-lg">
                    <b>Primary subscriber's name :</b> &nbsp; {data?.insureName}
                  </p>
                  <p className="text-lg">
                    <b>Insurance provider:</b> &nbsp;{data?.insurePorvider}
                  </p>
                  <p className="text-lg">
                    <b>Policy No.:</b> &nbsp; {data?.policyNumber}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPatient;
