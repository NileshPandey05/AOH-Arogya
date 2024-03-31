import React from "react";
import Dep1 from "../images/department_icon_1.svg";
import Dep2 from "../images/department_icon_2.svg";
import Dep3 from "../images/department_icon_3.svg";
import Dep4 from "../images/department_icon_4.svg";
import Dep5 from "../images/department_icon_5.svg";
import Dep6 from "../images/department_icon_6.svg";
import Dep7 from "../images/icon_9.svg";
import Dep8 from "../images/icon_10.svg";
import Dep9 from "../images/icon_11.svg";
import Dep10 from "../images/icon_12.svg";
import { Link } from "react-router-dom";

import Award from "../images/award.svg";

const Department = () => {
  return (
    <div>
      <h1 className=" text-5xl text-center font-bold mt-10 ">Departments</h1>

      <div className=" grid md:grid-cols-6 grid-cols-1 ml-[90px] md:ml-0 items-center justify-center gap-6 mt-10 ">
        
        <Link to={"/departmentdetails"}>
          <div className=" border shadow-md  shadow-blue-100  w-52 h-64 rounded-2xl hover:bg-blue-400 hover:text-white hover:-mt-4  transition-all ease-in-out   duration-300   ">
            <div className=" flex  flex-col justify-center items-center text-cente mt-14 ">
              <img src={Dep1} className=" hover:text-white"></img>
              <p className=" text-xl font-semibold text-center mt-4 ">
                Emergency Department
              </p>
            </div>
          </div>

        </Link>

        <Link to={"/departmentdetails"}>
          <div className=" border shadow-md  shadow-blue-100 w-52 h-64 rounded-2xl  hover:bg-blue-500 hover:text-white  hover:-mt-4  transition-all ease-in-out duration-300">
            <div className=" flex  flex-col justify-center items-center text-cente mt-14 ">
              <img src={Dep2} className=""></img>
              <p className="text-xl font-semibold text-center mt-4">
                Pediatric
              </p>
              <p className="text-xl font-semibold">Department</p>
            </div>
          </div>
        </Link>

        <Link to={"/departmentdetails"}>
          <div className=" border  shadow-md  shadow-blue-100 w-52 h-64 rounded-2xl  hover:bg-blue-500 hover:text-white  hover:-mt-4  transition-all ease-in-out duration-300">
            <div className=" flex  flex-col justify-center items-center text-cente mt-14 ">
              <img src={Dep3}></img>
              <p className=" text-xl font-semibold text-center mt-4 ">
                Gynceology Department
              </p>
            </div>
          </div>
        </Link>

        <Link to={"/departmentdetails"}>
          <div className=" border  shadow-md  shadow-blue-100 w-52 h-64 rounded-2xl  hover:bg-blue-500 hover:text-white  hover:-mt-4  transition-all ease-in-out duration-300">
            <div className=" flex  flex-col justify-center items-center text-cente mt-14 ">
              <img src={Dep4}></img>
              <p className=" text-xl font-semibold text-center mt-4 ">
                {" "}
                Cardiology Department
              </p>
            </div>
          </div>
        </Link>

        <Link to={"/departmentdetails"}>
          <div className=" border  shadow-md  shadow-blue-100 w-52 h-64 rounded-2xl  hover:bg-blue-500 hover:text-white  hover:-mt-4  transition-all ease-in-out duration-300">
            <div className=" flex  flex-col justify-center items-center text-cente mt-14 ">
              <img src={Dep5}></img>
              <p className=" text-xl font-semibold text-center mt-4 ">
                {" "}
                NeuroLogy Department
              </p>
            </div>
          </div>
        </Link>

        <Link to={"/departmentdetails"}>
          <div className=" border shadow-md shadow-blue-100  w-52 h-64 rounded-2xl  hover:bg-blue-500 hover:text-white  hover:-mt-4  transition-all ease-in-out  duration-300">
            <div className=" flex  flex-col justify-center items-center text-cente mt-14 ">
              <img src={Dep6}></img>
              <p className=" text-xl font-semibold text-center mt-4 ">
                {" "}
                Psychiatry Department
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Awards section   */}

      <div className=" mt-28 text-center text-5xl font-bold ">
        <h1>Awards</h1>
        <div className=" flex flex-wrap gap-y-2 md:gap-6 justify-center">
          <div className=" border shadow-md  shadow-blue-100   w-[260px] h-[300px] rounded-2xl md:mt-14 mt-6">
            <div className=" mt-6 ml-4 ">
              <img
                src={Award}
                className=" bg-blue-900  w-18 h-20 px-2 py-2 items-center  rounded-lg "
              ></img>

              <p className=" text-lg  font-semibold  -mt-[84px] ml-[84px] mr-2 text-start">
                Malcolm Baldrige National Quality Award
              </p>
              <p className=" text-sm font-normal text-start mt-8 mr-2">
                This award recognizes healthcare organizations that have
                demonstrated excellence in leadership, strategic planning,
                customer and employee satisfaction, and operational efficiency.
              </p>
            </div>
          </div>

          <div className=" border shadow-md  shadow-blue-100   w-[260px] h-[300px] rounded-2xl md:mt-14 mt-6">
            <div className=" mt-6 ml-4 ">
              <img
                src={Award}
                className=" bg-blue-900  w-18 h-20 px-2 py-2 items-center  rounded-lg "
              ></img>

              <p className=" text-lg  font-semibold  -mt-[84px] ml-[84px] mr-2 text-start">
                HIMSS Davies Award
              </p>
              <p className=" text-sm font-normal text-start mt-[60px] mr-2 ">
                This award recognizes healthcare organizations that have used
                health information technology to improve patient outcomes and
                reduce costs.
              </p>
            </div>
          </div>

          <div className=" border shadow-md  shadow-blue-100   w-[260px] h-[300px] rounded-2xl md:mt-14 mt-6">
            <div className=" mt-6 ml-4 ">
              <img
                src={Award}
                className=" bg-blue-900  w-18 h-20 px-2 py-2 items-center  rounded-lg "
              ></img>

              <p className=" text-lg  font-semibold  -mt-[84px] ml-[84px] mr-2 text-start">
                Healthgrades national's Best Hospital
              </p>
              <p className=" text-sm font-normal text-start mt-8 mr-2">
                This recognition is given to hospitals that have achieved high
                ratings for clinical quality and patient safety across multiple
                specialties and procedures.
              </p>
            </div>
          </div>

          <div className=" border shadow-md  shadow-blue-100   w-[260px] h-[300px] rounded-2xl md:mt-14 mt-6">
            <div className=" mt-6 ml-4 ">
              <img
                src={Award}
                className=" bg-blue-900  w-18 h-20 px-2 py-2 items-center  rounded-lg "
              ></img>

              <p className=" text-lg  font-semibold  -mt-[84px] ml-[84px] mr-2 text-start">
                Joint Commission Gold Seal of Approval
              </p>
              <p className=" text-sm font-normal text-start mt-8 mr-2">
                This recognition is given to hospitals that have met rigorous
                standards for patient safety and quality of care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;

