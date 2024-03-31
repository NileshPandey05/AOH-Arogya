import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { IoCall } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import Banner from "../images/Banner.png";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tq2fkhk", "template_rc7dfbe", form.current, {
        publicKey: "qFQPmV2nVNMbo8_Qut",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full mt-8 ">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left">
  <div class="space-y-5">
    <h2 class="font-bold text-4xl md:text-6xl md:ml-40 ">Contact Us</h2>
    <p class="text-lg md:text-xl font-semibold md:ml-40">
      Kindly reach us to get the fastest response and treatment
    </p>
  </div>
  <div>
    <img src={Banner} alt="Banner" class="w-full max-w-md mx-auto md:mr-64" />
  </div>
</div>

<div className="grid md:grid-cols-1 justify-center items-center md:ml-32 ml-[120px] ">
  <form
    onSubmit={sendEmail}
    className="md:w-[90%] w-auto md:px-8 px-2 -ml-[120px] py-4 border rounded-3xl shadow-md md:ml-0 "
  >
    <div className="ml-2 pr-10">
      <label className="text-xl px-6 block py-2">Name</label>
      <input
        className="border h-12 w-full rounded-lg text-start px-4 mt-3 ml-4"
        type="text"
        id="name"
        placeholder="Enter Your Name"
      />

      <label className="text-xl px-6 block mt-2">Email</label>
      <input
        className="border h-12 w-full rounded-lg text-start px-4 mt-3 ml-4"
        type="text"
        id="email"
        placeholder="Enter Your Email"
      />
      
      <label className="text-xl px-6 block mt-4">Message</label>
      <textarea
        placeholder="Write a message..."
        name="message"
        className="font-thin w-full h-[150px] border rounded-xl px-3 py-5 ml-4 mt-4"
        required
      />

      <input type="submit" value="Send" className="mt-6 mb-3 md:ml-80 px-20 ml-[76px] md:px-4  border text-white w-auto md:w-[20%] h-10 bg-blue-900 rounded-3xl" />
    </div>
  </form>
</div>

      <div className="md:flex justify-center items-center mt-8">
      <div className="  mt-8 grid md:grid-cols-3 grid-cols-1 gap-12 items-center ">
          <div className="mt-2 border h-24 w-full px-6 py-4 rounded-2xl bg-blue-200">
            <IoCall className="w-12 h-12" />
            <p className="-mt-[45px] ml-14 text-xl font-semibold">Phone</p>
            <p className="-mt-1 ml-14">022 4567 4565</p>
          </div>

          <div className="mt-2 border h-24 w-full px-6 py-4  rounded-2xl bg-blue-200">
            <BiLogoGmail className="h-12 w-12" />
            <p className="-mt-[45px] ml-14 text-xl font-semibold">Email Us</p>
            <p className="-mt-1 ml-14">arogyasahayak@gmail.com</p>
          </div>

                  
                  
          <div className="mt-2  border h-24 w-full px-6 py-4 rounded-2xl  bg-blue-200 ">
          <FaLocationDot className="h-12 w-12" />
            <p className="-mt-[45px] ml-14 text-xl font-semibold">Location</p>
            <p className="-mt-1 ml-14">Gandhi Nagar,Mumbai-400080</p>

          </div>
              </div>
      </div>
      <div className="mt-8 md:w-[93%] mx-auto">
        <iframe className="rounded-3xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7536.5314221503295!2d72.9475289583206!3d19.18359347391006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710413656875!5m2!1sen!2sin"
          style={{ border: 0, width: "100%", height: "300px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
