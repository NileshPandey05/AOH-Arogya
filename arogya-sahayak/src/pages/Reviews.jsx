import React, { useState } from "react";
import profile1 from "../images/avatar_1.webp";
import profile2 from "../images/avatar_2.webp";
import profile3 from "../images/avatar_3.webp";
import quote from "../images/quote.svg";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import cta from "../images/cta_img.webp";
// import { useState } from 'react';

const Reviews = () => {
  const [review, setreview] = useState("");

  return (
    <div>
      <div className=" mt-6 ml-8">
        <h1 className=" text-center  text-5xl font-bold">Some Reviews </h1>
        <h2 className=" text-center text-2xl font-semibold text-blue-800 mt-1">
          {" "}
          OF OUR CLIENTS{" "}
        </h2>

        <div className=" border-l h-[400px]  text-center ml-[550px] border-gray-400 mt-14 "></div>
        <div className=" items-start  -mt-[400px] ">
          <div>
            <img src={profile1} className=" w-16 h-16"></img>
            <div className=" -mt-[50px] ml-24">
              <p
                className="  text-xl font-semibold text-gray-700 "
              >
                {" "}
                PAULO HUBERT{" "}
              </p>
              <p> Navi, Mumbai Maharashtra</p>
            </div>
            <div className=" h-2 w-2 bg-blue-800  -mt-8 ml-[546px] rounded-full"></div>
          </div>

          <div className=" mt-20 ml-28">
            <img src={profile2} className=" w-16 h-16"></img>
            <div className=" -mt-[50px] ml-24">
              <p
                className="  text-xl font-semibold  text-gray-700"
              >
                {" "}
                LAURENCE VENDETTA{" "}
              </p>
              <p> Thane, Maharashtra</p>
            </div>
            <div className=" h-2 w-2 bg-blue-800  -mt-6 ml-[434px] rounded-full"></div>

            <div>
              <img
                src={quote}
                className=" ml-[470px] -mt-[120px] w-10 h-10"
              ></img>
              <p className="  text-start ml-[530px] text-sm  font-thin -mt-2 ">
                {" "}
                I recently had to bring my child to Arogya Sahayak for a minor
                injury, and I was so impressed with the care he received. The
                pediatrician was great with him and made him feel at ease, and
                the entire staff was kind and attentive.
              </p>

              <div className=" ml-[530px] mt-6 flex flex-row gap-1 text-blue-800">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <img src={profile3} className=" w-16 h-16"></img>
            <div className=" -mt-[50px] ml-24">
              <p
                className="  text-xl font-semibold text-gray-700 "
              >
                {" "}
                CASSANDRA RAUL{" "}
              </p>
              <p> Kalyan, Maharashtra</p>
              <div className=" h-2 w-2 bg-blue-800  -mt-[30px] ml-[450px] rounded-full"></div>
            </div>

            {/* <div>
                 <img src={quote} className=' ml-[450px] -mt-[120px] w-10 h-10 '></img>
                 <p className='  text-start ml-[520px] text-sm  font-thin -mt-2 '>  I recently had to bring my child to Arogya Sahayak for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.</p>

                 <div className=' ml-[520px] mt-6 flex flex-row gap-1 text-blue-500'>
                 <FaStar />
                 <FaStar />
                 <FaStar />
                 <FaStar />
                 <FaRegStarHalfStroke />
                 </div>
            
             </div> */}
          </div>
        </div>
      </div>

      <div className=" bg-blue-300 h-72 w-full mt-[200px] rounded-xl"></div>

      <div>
        <p className=" -mt-[220px] ml-20 mr-[480px] text-5xl font-bold text-start text-white">
          Don’t Let Your Health Take a Backseat!
        </p>
        <p className=" text-lg font-semibold mt-3 ml-20  mr-[480px]">
          Schedule an appointment with one of our experienced medical
          professionals today!
        </p>
        <img src={cta} className=" w-96 h-96 ml-[770px] -mt-[320px]"></img>
      </div>
    </div>
  );
};

export default Reviews;
