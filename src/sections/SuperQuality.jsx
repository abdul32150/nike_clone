import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold ">
          We provide you
          <span className="text-coral-red">
            &nbsp;Super <br /> Quality
          </span>&nbsp;Shoes
        </h2>
        <p className="lg:max-w-lg mt-4 info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience providing you unmatched
          quality, innovation and a touch of elegance.
          <br />
          <br />
          Our dedication is to detail and excellence to ensure your excellence.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <img src={shoe8} alt="shoe8" width={570} height={570} />
    </section>
  );
};

export default SuperQuality;
