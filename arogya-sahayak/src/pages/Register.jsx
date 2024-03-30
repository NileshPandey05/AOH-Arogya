import React, { useState } from "react";
import { firestore, storage } from "../firebase.config";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { useStateValue } from "../context/StateProvider";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { saveRegisteredData } from "../utils/firebaseFunctions";

const Register = () => {
  const [{ user }, dispatch] = useStateValue();

  const [imageUplaod, setimageUplaod] = useState([]);

  const upsetImage = (file) => {
    setimageUplaod((prev) => {
      return [...prev, file];
    });
  };

  const [userInfo, setuserInfo] = useState({
    id:user?.uid,
    username: user ? user.displayName : "",
    photoURL:user?.photoURL,
    fname: "",
    lname: "",
    DOB: "",
    email: user ? user.email : "",
    phone: user? user.phoneNumber : "",
    gender: "",
    mStatus: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    Emername: "",
    Emerphone: "",
    EmerRelation: "Parent",
    insureName: "",
    insurePorvider: "Tata",
    policyNumber: "",
    Hypertension: false,
    Diabetes: false,
    Cancer: false,
    Stroke: false,
    Arthritis: false,
    aadhaar: "",
    weight: "",
    height: "",
    bloodGroup:"O+ve",
  });

  const handleChange = (e) => {
    let fieldName = e.target.name;
    let newValue = e.target.value;
    setuserInfo((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });

    console.log(userInfo);
  };

  const writeData = async (e) => {
    e.preventDefault();

    saveRegisteredData(imageUplaod, userInfo).then((res) => {
      alert("you have successfull registered");
    });
  };

  return (
    <form className="ml-10 mr-10 mt-20">
      <div className="max-w-3x3 mx-auto mt-8 p-8 rounded-md shadow-md bg-gray-100">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="bg-white rounded-md shadow-md p-8 mb-8">
            <div className="sm:col-span-3">
              <h2
                htmlFor="argogya number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Your Arogya Number: {user.phoneNumber?user.phoneNumber:userInfo.phone}
              </h2>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autocomplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    onChange={handleChange}
                    value={userInfo.username}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-md p-8 mb-8">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                for="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  onChange={handleChange}
                  value={userInfo.fname}
                  autocomplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="lname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  onChange={handleChange}
                  value={userInfo.lname}
                  autocomplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={userInfo.email}
                  autocomplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  onChange={handleChange}
                  value={userInfo.phone}
                  autocomplete="phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Gender
              </legend>
              <div className="flex items-center gap-x-3">
                <input
                  id="gender"
                  name="gender"
                  type="radio"
                  value="male"
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  for="gender"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Male
                </label>

                <input
                  id="gender"
                  name="gender"
                  type="radio"
                  value="female"
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  for="gender"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Female
                </label>
              </div>
            </div>
            <br />
            <div className="mt-6 space-y-6">
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Marital-Status
              </legend>
              <div className="flex items-center gap-x-3">
                <input
                  id="mStatus"
                  name="mStatus"
                  type="radio"
                  value="married"
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  for="martial-status"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  married
                </label>

                <input
                  id="mStatus"
                  name="mStatus"
                  value="single"
                  onChange={handleChange}
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  for="martial-status"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Single
                </label>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="aadhaar"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Aadhaar Card No.
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="aadhaar"
                  id="aadhaar"
                  value={userInfo.aadhaar}
                  onChange={handleChange}
                  autocomplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                for="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={userInfo.address}
                  onChange={handleChange}
                  autocomplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                for="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={userInfo.city}
                  onChange={handleChange}
                  autocomplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                for="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={userInfo.state}
                  onChange={handleChange}
                  autocomplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                for="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  value={userInfo.pincode}
                  onChange={handleChange}
                  autocomplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
            <label
              for="bloodGroup"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Blood Group
            </label>
            <div className="mt-2">
              <select
                id="bloodGroup"
                name="bloodGroup"
                onChange={handleChange}
                autocomplete="Relation"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="O+ve">O+ve</option>
                <option value="A+ve">A+ve</option>
                <option value="B+ve">B+ve</option>
                <option value="AB+ve">AB+ve</option>
                <option value="O-ve">O-ve</option>
                <option value="A-ve">A-ve</option>
                <option value="B-ve">B-ve</option>
                <option value="AB-ve">AB-ve</option>
              </select>
            </div>
          </div>
            <div className="sm:col-span-2">
              <label
                for="height"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Height
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="height"
                  id="height"
                  value={userInfo.height}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                for="weight"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Weight
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="weight"
                  id="weight"
                  value={userInfo.weight}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                for="weight"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date of birth
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="DOB"
                  id="DOB"
                  value={userInfo.DOB}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-8 mb-8">
          <h2 className="text-base font-semibold leading-7 text-gray-900 ">
            Emergency contact details
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 mb-10">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>
          <div className="sm:col-span-3">
            <label
              htmlFor="Ename"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="Emername"
                  id="Emername"
                  value={userInfo.Emername}
                  onChange={handleChange}
                  autocomplete="name"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="sm:col-span-3">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              phone
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="number"
                  name="Emerphone"
                  id="Emerphone"
                  value={userInfo.Emerphone}
                  onChange={handleChange}
                  autocomplete="phone"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="sm:col-span-3">
            <label
              for="EmerRelation"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Relation
            </label>
            <div className="mt-2">
              <select
                id="EmerRelation"
                name="EmerRelation"
                autocomplete="Relation"
                onChange={handleChange}
                value={userInfo.EmerRelation}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value="Parent">Parent</option>
                <option value="Spouce">Spouce</option>
                <option value="Childern">Childern</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-md p-8 mb-8">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Insurance Details
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>
          <br />
          <div className="sm:col-span-3">
            <label
              htmlFor="insureName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Primary subscriber's name (if different from the patient)
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="insureName"
                  id="insureName"
                  value={userInfo.insureName}
                  onChange={handleChange}
                  autocomplete="name"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
            </div>
          </div>
          <br />

          <div className="sm:col-span-3">
            <label
              for="insurePorvider"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Insurance provider
            </label>
            <div className="mt-2">
              <select
                id="insurePorvider"
                name="insurePorvider"
                onChange={handleChange}
                autocomplete="Relation"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value="Tata">TATA</option>
                <option value="Hdfc">HDFC</option>
                <option value="Acko">acko</option>
                <option value="Lic">LIC</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <br />
          <div className="sm:col-span-3">
            <label
              htmlFor="policyNumber"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Policy number
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="number"
                  name="policyNumber"
                  id="policyNumber"
                  value={userInfo.policyNumber}
                  onChange={handleChange}
                  autocomplete="phone"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <br />

          <input
            id="insurance-card"
            name="insurance-card"
            type="file"
            onChange={(e) => {
              upsetImage({
                file: e.target.files[0],
                filename: e.target.name,
              });
            }}
          />
        </div>

        <div className="bg-white rounded-md shadow-md p-8 mb-8">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Past Medication
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="Hypertension"
                      name="Hypertension"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="Hypertension"
                      className="font-medium text-gray-900"
                    >
                      Hypertension
                    </label>
                    <p className="text-gray-500">
                      <input
                        id="Hypertension"
                        name="Hypertension"
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
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="Diabetes"
                      name="Diabetes"
                      type="checkbox"
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="Diabetes"
                      className="font-medium text-gray-900"
                    >
                      Diabetes
                    </label>
                    <p className="text-gray-500">
                      <input
                        id="Diabetes"
                        name="Diabetes"
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
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="Cancer"
                      name="Cancer"
                      type="checkbox"
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label for="Cancer" className="font-medium text-gray-900">
                      Cancer
                    </label>
                    <p className="text-gray-500">
                      <input
                        id="Cancer"
                        name="Cancer"
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
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="Stroke"
                      name="Stroke"
                      type="checkbox"
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label for="Stroke" className="font-medium text-gray-900">
                      Stroke
                    </label>
                    <p className="text-gray-500">
                      <input
                        id="Stroke"
                        name="Stroke"
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
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="Arthritis"
                      name="Arthritis"
                      type="checkbox"
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      for="Arthritis"
                      className="font-medium text-gray-900"
                    >
                      Arthritis
                    </label>
                    <p className="text-gray-500">
                      <input
                        id="Arthritis"
                        name="Arthritis"
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
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 mt-8">
        <button
          type="button"
          className="text-sm font-semibold text-gray-600 hover:text-gray-800 focus:outline-none focus:ring focus:text-gray-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={writeData}
          className=" rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Register;