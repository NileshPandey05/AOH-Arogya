import React from "react";
import departmentimg from "../images/department_img.webp";
import Dep7 from "../images/icon_9.svg";
import Dep8 from "../images/icon_10.svg";
import Dep9 from "../images/icon_11.svg";
import Dep10 from "../images/icon_12.svg";

const Departmentdetails = () => {
  return (
    <div className="md:mt-0 -mt-10 ">
      {/* Department Overview Section */}
      <section className="flex flex-col items-center justify-center w-full px-4 py-8 md:px-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl">
          {/* Department Description */}
          <div className="flex flex-col justify-center md:pb-36 md:pt-0 md:gap-3 gap-1">
            <h1 className="md:text-5xl text-4xl font-extrabold mt-16 md:text-start text-center">
              Pediatric Department
            </h1>
            <p className="text-mediumGrey text-xl md:text-start text-center">
              This department specializes in the care of infants, children, adolescents, and provides a range of services including preventive care, developmental screenings, and treatment of childhood illnesses and conditions.
            </p>
          </div>
          {/* Image */}
          <div className="relative w-full h-auto">
            <img src={departmentimg} alt="Hero" className="w-full h-auto my-10" />
          </div>
        </div>
      </section>

      {/* Additional Treatments Section */}
      <section className="px-4 py-8 md:px-10 -mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center md:text-start text-blue-400">MORE TYPE OF</h2>
          <h1 className=" text-6xl font-bold text-center md:text-start">Treatments</h1>

          {/* Treatments Grid */}

          

<div className=" border md:h-[400px] h-fit w-full rounded-3xl bg-blue-300 mt-8 ">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 py-8 text-white">

            {/* Department Treatment Item 1 */}
            <div className=" rounded-lg p-4  md:bg-blue-300 hover:bg-white hover:text-black  hover:-mt-4 transition-all duration-300  ease-in-out">
                <div className=" border  border-blue-800 rounded-full h-20 w-20 ml-16 py-2 px-2 text-center" >
              <img src={Dep7} alt="Treatment Icon" className="w-28 h-28 -mt-2 ml-3   " /></div>
              <p className="text-xl text-center font-semibold mt-2">Vaccinations Department</p>
              <p className="text-md text-center mt-4">The Pediatric Department provides vaccinations to help protect children from a range of illnesses and diseases, including measles.</p>
            </div>



            {/* Department Treatment Item 2 */}
            <div className=" rounded-lg p-4  hover:bg-white hover:text-black hover:-mt-4 transition-all duration-300  ease-in-out">
                <div className=" border  border-blue-800 rounded-full h-20 w-20 ml-16 py-2 px-2 text-center" >
              <img src={Dep10} alt="Treatment Icon" className="w-28 h-28 -mt-2 ml-3  " /></div>
              <p className="text-xl text-center font-semibold mt-2">Developmental screenings</p>
              <p className="text-md text-center mt-4">The Pediatric Department provides regular developmental screenings to identify any delays or concerns and provide early intervention services.

</p>
            </div>

            {/* Department Treatment Item 3 */}
            <div className="rounded-lg p-4  hover:bg-white hover:text-black hover:-mt-4 transition-all duration-300  ease-in-out">
                <div className=" border border-blue-800 rounded-full h-20 w-20 ml-16 py-2 px-2 text-center" >
              <img src={Dep9} alt="Treatment Icon" className="w-28 h-28  ml-2  " /></div>
              <p className="text-xl text-center font-semibold mt-2">Treatment of chronic conditions</p>
              <p className="text-md text-center mt-4">The Pediatric Department provides ongoing care and treatment for children with chronic conditions such as asthma, diabetes, and allergies.</p>
            </div>

            {/* Department Treatment Item 4 */}
            <div className=" rounded-lg p-4 hover:bg-white hover:text-black hover:-mt-4 transition-all duration-300  ease-in-out">
                <div className=" border border-blue-800 rounded-full h-20 w-20 ml-16 py-2 px-2 text-center text-blue-" >
              <img src={Dep8} alt="Treatment Icon" className="w-28 h-28 -mt-2 ml-5  " /></div>
              <p className="text-xl text-center font-semibold mt-2">Management of acute illnesses</p>
              <p className="text-md text-center mt-4">The Pediatric Department provides treatment for common childhood illnesses, such as ear infections, strep throat, and viral infections.</p>
            </div>



          </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Departmentdetails;
