import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/image9.jpg";
import image10 from "../../assets/image10.jpg";
import image11 from "../../assets/image11.jpg";
import image12 from "../../assets/image12.jpg";
import { Spinner } from "react-bootstrap";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

const Carousell = () => {
  const [loaded, setLoaded] = useState(true);


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-[90vh]">
      <div
        className="bg-gradient-to-t from-slate-900 h-[90%] w-full absolute z-1 "
       
      >
        <div
          className="flex justify-center items-center h-full w-full font-display"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <span className="text-[12rem] text-white font-bold first-letter:text-[18rem] first-letter:font-display first-letter:text-white">
            Style your life
          </span>
        </div>
      </div>
      <div className="h-[100vh] border-10 w-[100%]" data-aos="fade-left">
        {loaded ? (
          <Carousel
            className="h-5 border-10"
            showStatus={false}
            autoPlay={true}
            interval={5000}
            infiniteLoop={true}
            showArrows={false}
            showThumbs={false}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="image-slider bg-cover bg-center h-[90vh] overflow-hidden"
              >
                <img src={src} className="object-cover h-full w-full" />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="h-[90vh] flex justify-center items-center">
            <div className="loader">
              <Spinner />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousell;
