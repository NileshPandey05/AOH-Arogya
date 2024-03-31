import React from "react";
import Galleryimg from "../images/gellerybanner_img.webp";
import galleryimg1 from "../images/portfolio_4_lg.jpeg";
import galleryimg2 from "../images/portfolio_2_lg.jpeg";
import galleryimg3 from "../images/portfolio_3_lg.jpeg";
import galleryimg4 from "../images/portfolio_5_lg.jpeg";
import galleryimg5 from "../images/gallery12.jpg";
import galleryimg6 from "../images/gallery10.jpg";
import galleryimg7 from "../images/galleryimg9.jpg";
import galleryimg8 from '../images/gallery11.jpg';
import galleryimg9 from '../images/gallery14.jpg';
import galleryimg10 from  '../images/gallery15.jpg';

const Gallery = () => {
  return (
    <div className="mt-4">
      <section className="flex items-center justify-center w-full md:pl-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-6xl" id="home">
          <div className="md:h-screen flex flex-col justify-center md:pb-36 pt-10 md:pt-0 md:gap-3 gap-1">
            <div className="flex"></div>
            <p className="md:text-6xl text-4xl font-extrabold text-center md:text-start md:-ml-4">
              Welcome to Arogya Sahayak Gallery
            </p>
            <p className="mt-5 md:mt-1 text-mediumGrey md:w-3/4 text-xl text-center md:text-start font-semibold md:-ml-4">
              The special moment of our hospital
            </p>
          </div>
          <div className="relative">
            <div className="md:h-screen md:absolute flex justify-center items-center ml-12 md:ml-0 md:pb-36">
              <img src={Galleryimg} alt="Gallery Banner" />
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 md:-mt-12">
      
        <img src={galleryimg2} alt="Gallery Image 2" className="aspect-w-16 aspect-h-9 object-cover rounded-2xl " />
        <img src={galleryimg3} alt="Gallery Image 3" className="aspect-w-16 aspect-h-9 object-cove rounded-2xl" />
        <img src={galleryimg4} alt="Gallery Image 4" className="aspect-w-16 aspect-h-9 object-cover rounded-2xl" />
        <img src={galleryimg5} alt="Gallery Image 5" className="aspect-w-16 aspect-h-9 object-cover rounded-2xl" />
        <img src={galleryimg6} alt="Gallery Image 6" className=" w-[100%] h-[247px] aspect-h-9 object-cover rounded-2xl" />
        <img src={galleryimg7} alt="Gallery Image 7" className="aspect-w-16 aspect-h-9 object-cover rounded-2xl" /> 
         <img src={galleryimg1} alt="Gallery Image 1" className="w-full h-[250px] object-cover rounded-2xl" />
         <img src={galleryimg8} alt="Gallery Image 5" className=" w-full h-[250px] object-cover rounded-2xl" />
         <img src={galleryimg9} alt="Gallery Image 5" className=" w-full h-[250px] object-cover rounded-2xl" />
      
    
      </div>
    </div>
  );
};

export default Gallery;
