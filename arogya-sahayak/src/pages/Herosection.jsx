import React from "react";
import { FaAmbulance } from "react-icons/fa";
import { IoLocationOutline, IoCallSharp } from "react-icons/io5";
import Hero from "../images/hero_img.webp";
import Compassion from "../images/compassion.svg";
import Excellence from "../images/excellence.svg";
import Integrity from "../images/integrity.svg";
import Respect from "../images/respect.svg";
import Teamwork from "../images/teamwork.svg";
 import About, { Contact } from "../pages/Contact";
import Reviews from "../pages/Reviews"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center w-full px-4 py-8 md:px-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl">
          <div className="flex flex-col justify-center md:pb-36 md:pt-0 md:gap-3 gap-1">
            <h1 className="md:text-5xl text-4xl font-extrabold mt-16 text-start -">
              Your Partner in Health and Wellness
            </h1>
            <p className=" text-mediumGrey text-xl text-start">
              We are committed to providing you with the best medical and
              healthcare services to help you live healthier and happier.
            </p>
          </div>
          <div className="relative w-full h-auto">
            <img src={Hero} alt="Hero" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="flex flex-col items-center justify-center w-[95%] px-4 py-8 md:px-10 md:py-16 border h-[180px] md:ml-[28px] md:mt-[-63px] mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl space-x-9 mx-auto md:ml-4">
          <div className=" flex flex-col mt-20 ">
            <IoCallSharp className=" h-16 w-16 border bg-blue-950 rounded-full px-3 py-3 text-white " />
            <p className=" -mt-14 ml-20 text-xl font-bold "> Hotline</p>
            <p className=" ml-20 text-lg font-normal ">022 4545 6745</p>
          </div>
          <div className=" flex flex-col mt-20">
            <FaAmbulance className=" h-16 w-16 border bg-blue-950 rounded-full px-3 py-3 text-white " />
            <p className=" -mt-14 ml-20 text-xl font-bold ">Ambulance</p>
            <p className=" ml-20 text-lg font-normal ">022 4675 6745</p>
          </div>
          <div className=" flex flex-col mt-20">
            <IoLocationOutline className=" h-16 w-16 border bg-blue-950 rounded-full px-3 py-3 text-white " />
            <p className=" -mt-14 ml-20 text-xl font-bold ">Loaction </p>
            <p className=" ml-20 text-lg font-normal ">Mumbai, Maharashtra</p>
          </div>
        </div>
        <button className="mt-10 px-8 py-3 bg-blue-950 text-white rounded-full font-semibold text-lg">
          Book Now <span className="ml-2">&#8594;</span>
        </button>
      </section>

      {/* Our Values */}
      <section className="w-full px-4 py-8 md:px-10 md:py-16 bg-white  md:mt-12  mt-64">
        <h1 className="text-5xl font-bold text-center mb-4 md:mb-5">
          Our Values
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-10 max-w-6xl mx-auto">
          <ValueCard
            image={Compassion}
            title="Compassion"
            description="We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease."
          />
          <ValueCard
            image={Excellence}
            title="Excellence"
            description="We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible."
          />
          <ValueCard
            image={Integrity}
            title="Integrity"
            description="We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first."
          />

          <ValueCard
            image={Respect}
            title="Respect"
            description="We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness."
          />
          <ValueCard
            image={Teamwork}
            title="Teamwork"
            description="We believe in working collaboratively with our team members and other healthcare professionals to provide comprehensive and effective care to our patients."
          />

        </div>
        <div>
          
      
        </div>
      </section>
      <Reviews/>
    </div>
  );
};

const ContactInfo = ({ icon, title, phone, location }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white border rounded-md shadow-sm p-6">
      {icon}
      <div className="mt-4">
        <p className="text-lg font-semibold">{title}</p>
        {phone && <p>{phone}</p>}
        {location && <p>{location}</p>}
      </div>
    </div>
  );
};

const ValueCard = ({ image, title, description }) => {
  return (
    <div className="border shadow-md rounded-xl p-6 hover:-mt-4 transition-all duration-300">
      <div className="flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 bg-blue-950 rounded-full p-2"
        />
        <p className="ml-4 text-2xl font-bold">{title}</p>
      </div>
      <p className="mt-4 text-center">{description}</p>
    </div>
  );
};

export default Home;
