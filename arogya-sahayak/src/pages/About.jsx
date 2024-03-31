import React from "react";
import Aboutus from "../images/about.webp";
import Calender from "../images/calendar_white.svg";
import WhyImg from "../images/why_choose_us.webp";
import professional1 from "../images/professional.svg";
import professional2 from "../images/comprehensive.svg";
import professional3 from "../images/patient.svg";
import professional4 from "../images/facilities.svg";
import doct1 from "../images/doctor11.webp";
import doct2 from "../images/doctor12.webp";
import doct3 from "../images/doctor13.webp";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Galleryimg from "../images/gellerybanner_img.webp";
import galleryimg1 from "../images/portfolio_4_lg.jpeg";
import galleryimg2 from "../images/portfolio_2_lg.jpeg";
import galleryimg3 from "../images/portfolio_3_lg.jpeg";
import galleryimg4 from "../images/portfolio_5_lg.jpeg";
import galleryimg5 from "../images/gallery12.jpg";
import galleryimg6 from "../images/gallery10.jpg";
import galleryimg7 from "../images/galleryimg9.jpg";
import galleryimg8 from "../images/gallery11.jpg";
import galleryimg9 from "../images/gallery14.jpg";
import galleryimg10 from "../images/gallery15.jpg";

// import HerAnimation from "../assest/about_section_doctor.json";
// import Lottie from "lottie-react";

const About = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center w-full px-4 py-8 md:px-10 md:py-16">
        <p className=" text-5xl font-bold md:text-center text-center  md:mt-2 md:mb-16">
          About Us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl">
          <div className="flex flex-col justify-center md:pb-36 md:pt-0 md:gap-3 gap-1">
            <h1 className="md:text-5xl text-4xl font-extrabold mt-16 text-start -">
              Welcome to Arogya Sahayak Medical & Healthcare Center
            </h1>
            <p className=" text-mediumGrey text-xl text-start">
              Your Partner in Health and Wellness.
            </p>
          </div>
          <div className="relative w-full h-auto">
            <img src={Aboutus} alt="Hero" className="w-full h-auto" />
          </div>
        </div>
      </section>
      <div className="grid md:grid-cols-3  grid-cols-1 w-full h-auto font-semibold md:mt-2 md:gap-8  gap-10 ">
        <div className="space-y-6 px-8 rounded-lg">
          <p className="  md:text-start text-center text-blue-700 -md:mt-24 mt-14 md:text-4xl text-2xl">
            SERVICES
          </p>
          <h2 className="font-bold  md:text-start  text-center   text-3xl md:text-5xl">
            Provides Our Best Services
          </h2>
        </div>

        <div className="space-y-2 shadow-xl px-8 py-10 rounded-xl shadow-blue-100  hover:-mt-4  transition-all ease-in-out duration-300 ">
          <img
            className="  h-12 w-12 border bg-blue-950 rounded-full px-3  text-white "
            src={Calender}
          ></img>
          <h3 className="text-2xl font-bold text-center md:text-start">
            Blood Bank Service
          </h3>
          <p className="py-8 font-medium">
            Our blood bank service provides a range of services to needs of
            patients in emergency situations.
          </p>

          <button className=" text-xl font-semibold md:text-center bg-blue-900 text-white h-10 w-60 md:ml-8  ml-10">
            {" "}
            Learn More{" "}
          </button>
        </div>
        <div className="space-y-2 shadow-xl px-8 py-10 rounded-xl shadow-blue-100 hover:-mt-4  transition-all ease-in-out duration-300  ">
          <img
            className="  h-12 w-12 border bg-blue-950 rounded-full px-3  text-white "
            src={Calender}
          ></img>
          <h3 className="text-2xl font-bold text-center">
            24/7 Ambulance Services
          </h3>

          <p className="py-8 font-medium">
            Ambulance services are always ready, 24/7, for immediate medical
            assistance and emergency, medical transfer.
          </p>

          <button className=" text-xl font-semibold md:text-center bg-blue-900 text-white h-10 w-60 md:ml-8 ml-10">
            {" "}
            Learn More{" "}
          </button>
        </div>

        <div className="space-y-3 shadow-xl px-8 py-10 rounded-xl shadow-blue-100 hover:-mt-4 transition-all ease-in-out duration-300  ">
          <img
            className="  h-12 w-12 border bg-blue-950 rounded-full px-3  text-white "
            src={Calender}
          ></img>
          <h3 className="text-2xl font-bold text-center">
            Women's Health Consultation
          </h3>
          <p className="font-medium py-8">
            Our women's health consultation service offers a confidential and
            supportive platform for discussing health concerns with experienced
            professionals in a safe and anonymous space.
          </p>

          <button className=" text-xl font-semibold md:text-center bg-blue-900 text-white h-10 w-60 md:ml-8 ml-10">
            {" "}
            Learn More{" "}
          </button>
        </div>
        <div className="space-y-3 shadow-xl px-8 py-10 rounded-xl shadow-blue-100  hover:-mt-4  transition-all ease-in-out duration-300 ">
          <img
            className="  h-12 w-12 border bg-blue-950 rounded-full px-3  text-white "
            src={Calender}
          ></img>
          <h3 className="text-2xl font-bold text-center">Preventive care</h3>
          <p className="font-medium py-12">
            Annual checkups, Regular Routine, for immunizations, and health
            screenings are proactive measures to prevent illness and maintain
            overall well-being and Healthy life .
          </p>

          <button className=" text-xl font-semibold md:text-center bg-blue-900 text-white h-10 w-60 md:ml-8 ml-10">
            {" "}
            Learn More{" "}
          </button>
        </div>
        <div className="space-y-3 shadow-xl px-8 py-10 rounded-xl shadow-blue-100 hover:-mt-4  transition-all ease-in-out duration-300 ">
          <img
            className="  h-12 w-12 border bg-blue-950 rounded-full px-3  text-white "
            src={Calender}
          ></img>
          <h3 className="text-2xl font-bold text-center">
            Mental health services
          </h3>
          <p className="font-medium py-9">
            CWe offer counseling, therapy, and comprehensive services to support
            patients in managing mental health , depression ,anxitey, conditions
            effectively and enhancing their overall well-being and healthy life.
          </p>

          <button className=" text-xl font-semibold md:text-center bg-blue-900 text-white h-10 w-60 md:ml-8 md:mt-12  ml-10">
            {" "}
            Learn More{" "}
          </button>
        </div>
      </div>
    
      <div>
  <div className="hidden md:block md:mt-32">
    <p className="mt-40 md:ml-[500px] text-4xl font-bold ">
      {" "}
      Why Choose Us
    </p>

    <img
      className="h-[620px] w-[470px] rounded-xl -mt-[50px] -md:mt-[150px]"
      src={WhyImg}
      alt="Description of the image"
    />

    <div className="grid md:grid-cols-2 -md:mt-[30px] -mt-7 grid-cols-1 md:gap-4 gap-6">
      <div className="h-[260px] w-[330px] -mt-[500px] ml-[500px] ">
        <img
          className="bg-blue-800 h-12 w-12 rounded-full px-3 md:mt-2 md:ml-2"
          src={professional1}
        ></img>

        <p className="text-2xl font-semibold md:ml-2 md:mt-2">
          Experienced Medical Professionals
        </p>
        <p className="md:ml-2 md:mt-4">
          Our team includes experienced doctors, nurses, and other healthcare
          professionals who are dedicated to providing the best possible care
          to our patients.
        </p>
      </div>

      <div className="h-[260px] w-[330px] -mt-[500px] ml-[250px] ">
        <img
          className="bg-blue-800 h-12 w-12 rounded-full px-3 md:mt-2 md:ml-2"
          src={professional2}
        ></img>

        <p className="text-2xl font-semibold md:ml-2 md:mt-2">
          Comprehensive Services
        </p>
        <p className="md:ml-2 md:mt-4">
          We offer a wide range of healthcare services, from preventive care
          to specialized treatment for complex conditions.
        </p>
      </div>

      <div className="h-[260px] w-[330px] -mt-[252px] ml-[500px] ">
        <img
          className="bg-blue-800 h-12 w-12 rounded-full px-3 md:mt-2 md:ml-2"
          src={professional3}
        ></img>

        <p className="text-2xl font-semibold md:ml-2 md:mt-2">
          Patient-centered Approach
        </p>
        <p className="md:ml-2 md:mt-4">
          We believe in treating each patient as an individual, and we take
          the time to understand your unique health needs and concerns.
        </p>
      </div>

      <div className="h-[260px] w-[330px] -mt-[252px] ml-[250px] ">
        <img
          className="bg-blue-800 h-12 w-12 rounded-full px-3 md:mt-2 md:ml-2"
          src={professional4}
        ></img>

        <p className="text-2xl font-semibold md:ml-2 md:mt-2">
          State-of-the-art Facilities
        </p>
        <p className="md:ml-2 md:mt-4">
          Our healthcare center is equipped with the latest technology and
          equipment to provide our patients with the most advanced care
          possible.
        </p>
      </div>
    </div>
  </div>
</div>


<div className="md:mt-20 hidden md:block border md:h-64 h-72 md:w-full w-full rounded-2xl bg-blue-300 shadow-lg shadow-blue-400">
  <div className="grid md:grid-cols-5 grid-cols-1 md:gap-6 gap-4 md:text-center md:mt-16 ml-4 md:text-6xl text-xl font-bold">
    <div>20+</div>
    <div>95%</div>
    <div>5000+</div>
    <div>10+</div>
    <div>22+</div>
  </div>

  <div className="grid  md:grid-cols-5 grid-cols-1 mt-2 gap-4 md:gap-6 md:text-center text-right text-xl font-normal md:ml-4 md:mr-4">
    <div>Years of Experience</div>
    <div>Patient Satisfaction rating</div>
    <div>Patients saved annually</div>
    <div>Healthcare providers on staff</div>
    <div>Convenient locations in the area</div>
  </div>
</div>

      <div>
        <div className="md:mt-24 mt-20  text-center">
          <p className="font-semibold text-3xl text-blue-600"> Meet Our</p>
          <p className="font-bold text-5xl">Experts Doctors</p>

          <div className="grid md:grid-cols-3 grid-cols-1  gap-y-5 md:gap-2 md:ml-10">
            <div className="border sm:w-[300px] py-10 md:mt-20 sm:h-fit md:h-[450px] md:w-80 mt-16 shadow-md shadow-blue-200 rounded-xl  hover:mt-4 transition-all duration-300 ease-in-out">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-2"
                  src={doct1}
                  alt="Doctor 1"
                ></img>
                <p className="text-3xl font-bold mt-4"> Dr. James Lee, MD</p>
                <p className="text-xl font-semibold mt-3">
                  {" "}
                  Head of Cardiologist
                </p>
                <p className="text-md font-normal text-center ml-4 mr-4">
                  {" "}
                  With expertise in managing complex heart conditions and
                  performing advanced cardiac procedures
                </p>
                <div className="grid grid-cols-3 items-center gap-2 mt-4">
                  <FaXTwitter className="text-center h-10 w-10 bg-blue-900 text-white rounded-full px-2 py-2 ml-16" />
                  <FaInstagram className="text-center h-10 w-10 bg-blue-900 text-white rounded-full px-2 py-2 ml-8" />
                  <FaFacebookF className="text-center h-10 w-10 bg-blue-900 text-white rounded-full px-2 py-2 -md:ml-16" />
                </div>
              </div>
            </div>

            <div className="border sm:w-fit py-10 md:mt-20 sm:h-fit md:h-[450px] md:w-80 shadow-md shadow-blue-200 rounded-xl  hover:mt-4 transition-all duration-300 ease-in-out">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-2"
                  src={doct2}
                  alt="Doctor 1"
                ></img>
                <p className="text-3xl font-bold mt-4"> Dr. James Lee, MD</p>
                <p className="text-xl font-semibold mt-3">
                  {" "}
                  Head of Cardiologist
                </p>
                <p className="text-md font-normal text-center ml-4 mr-4">
                  {" "}
                  With expertise in managing complex heart conditions and
                  performing advanced cardiac procedures
                </p>
                <div className="grid grid-cols-3 items-center gap-2 mt-4">
                  <FaXTwitter className="text-center h-10 w-10 bg-blue-900 text-white rounded-full px-2 py-2 ml-16" />
                  <FaInstagram className="text-center h-10 w-10 bg-blue-900 text-white rounded-full px-2 py-2 ml-8" />
                  <FaFacebookF className="text-center h-10 w-10 bg-blue-900 text-white rounded-full px-2 py-2 -md:ml-16" />
                </div>
              </div>
            </div>

            <div className="border sm:w-fit py-10 md:mt-20 sm:h-fit md:h-[450px] md:w-80  shadow-md shadow-blue-200 rounded-xl hover:mt-4 transition-all duration-300 ease-in-out">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-2"
                  src={doct3}
                  alt="Doctor 1"
                ></img>
                <p className="text-3xl font-bold mt-4"> Dr. James Lee, MD</p>
                <p className="text-xl font-semibold mt-3">
                  {" "}
                  Head of Cardiologist
                </p>
                <p className="text-md font-normal text-center ml-4 mr-4">
                  {" "}
                  With expertise in managing complex heart conditions and
                  performing advanced cardiac procedures
                </p>
                <div className="grid grid-cols-3 items-center gap-2 mt-4">
                  <FaXTwitter className=" text-center h-10 w-10 bg-blue-900 text-white rounded-full px-2 py-2 ml-16" />
                  <FaInstagram className="text-center h-10 w-10 bg-blue-900 text-white rounded-full px-2 py-2 ml-8 " />
                  <FaFacebookF className="text-center h-10 w-10 bg-blue-900 text-white rounded-full px-2 py-2 -md:ml-16 " />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className=" text-3xl font-semibold text-blue-600 md:mt-32 mt-20  text-center">
            HAVE A LOOK AT
          </p>
          <p className=" text-5xl font-bold text-center mb-20">
            {" "}
            Our Facilities and Latest Activities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:mt-20">
            <img
              src={galleryimg2}
              alt="Gallery Image 2"
              className="aspect-w-16 aspect-h-9 object-cover rounded-2xl "
            />
            <img
              src={galleryimg3}
              alt="Gallery Image 3"
              className="aspect-w-16 aspect-h-9 object-cove rounded-2xl"
            />
            <img
              src={galleryimg4}
              alt="Gallery Image 4"
              className="aspect-w-16 aspect-h-9 object-cover rounded-2xl"
            />
            <img
              src={galleryimg5}
              alt="Gallery Image 5"
              className="aspect-w-16 aspect-h-9 object-cover rounded-2xl"
            />
            <img
              src={galleryimg6}
              alt="Gallery Image 6"
              className=" w-[100%] h-[247px] aspect-h-9 object-cover rounded-2xl"
            />
            <img
              src={galleryimg7}
              alt="Gallery Image 7"
              className="aspect-w-16 aspect-h-9 object-cover rounded-2xl"
            />
            <img
              src={galleryimg1}
              alt="Gallery Image 1"
              className="w-full h-[250px] object-cover rounded-2xl"
            />
            <img
              src={galleryimg8}
              alt="Gallery Image 5"
              className=" w-full h-[250px] object-cover rounded-2xl"
            />
            <img
              src={galleryimg9}
              alt="Gallery Image 5"
              className=" w-full h-[250px] object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="mt-24">
          <p className=" text-3xl font-semibold text-blue-500 text-center">
            AWARDS
          </p>
          <p className=" text-5xl font-bold text-center">
            {" "}
            Winning Awards and Recognition
          </p>
          <p className=" text-md font-normal text-center mt-2">
            We have been recognized for our commitment to excellence in
            healthcare.
          </p>

          <div className=" grid md:grid-cols-2  grid-cols-1 gap-2 ml-6 -mt-12 ">
            <div className=" border h-28 w-[90%] md:w-[500px] text-center mt-24 shadow-lg shadow-blue-200 rounded-xl">
              <img
                className=" bg-blue-800 h-20 w-20 mt-[15px] ml-4 rounded-xl px-4 py-4 "
                src={professional1}
              ></img>
              <p className=" ml-28 -mt-20 md:-mt-14 text-xl font-semibold text-start">
                Malcolm Baldrige National Quality Award
              </p>
            </div>

            <div className=" border h-28 w-[90%] md:w-[500px] md:mt-24 shadow-lg shadow-blue-200 rounded-xl">
              <img
                className=" bg-blue-800 h-20 w-20 mt-[15px] ml-4 rounded-xl px-4 py-4 "
                src={professional1}
              ></img>
              <p className=" ml-28 -mt-14 text-xl font-semibold text-start">
                HIMSS Davies Award
              </p>
            </div>

            <div className=" border h-28 md:w-[500px] w-[90%] mt-4 shadow-lg shadow-blue-200 rounded-xl">
              <img
                className=" bg-blue-800 h-20 w-20 mt-[15px] ml-4 rounded-xl px-4 py-4 "
                src={professional1}
              ></img>
              <p className=" ml-28 -mt-20 md:-mt-14 text-xl font-semibold text-start">
                Healthgrades National’s Best Hospital
              </p>
            </div>

            <div className=" border h-28 w-[90%] md:w-[500px]  mt-4 shadow-lg shadow-blue-200 rounded-xl">
              <img
                className=" bg-blue-800 h-20 w-20 mt-[15px] ml-4 rounded-xl px-4 py-4 "
                src={professional1}
              ></img>
              <p className=" ml-28 -mt-20 md:-mt-14 text-xl font-semibold text-start">
                Joint Commission Gold Seal of Approval
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
