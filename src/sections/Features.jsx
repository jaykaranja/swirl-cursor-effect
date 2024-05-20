import React from "react";
import img6 from "../assets/motionarteffect-img6.png";
import img7 from "../assets/motionarteffect-img7.png";
import img9 from "../assets/motionarteffect-img9.png";

function Features() {
  return (
    <div className="my-20 flex flex-col items-center w-[100%] px-5">
      <h2 className="w-[50%] max-[800px]:w-[100%] text-3xl font-medium opacity-80 text-center">
        An All-Round Plugin With Powerful Features
      </h2>
      <p className="w-[50%] max-[800px]:w-[100%] pr-5 mt-5 opacity-70 tracking-wide leading-[1.6em] text-center">
        Whether you're a seasoned web designer or just starting out, Motion Art
        for Elementor seamlessly integrates with the Elementor platform,
        providing you with a seamless and intuitive experience.
      </p>
      {/* feature-cards */}
      <div className="flex flex-wrap mt-20">
        {/* card1 */}
        <div className="flex-1 min-w-[300px] p-5 m-2 card_bg border-2 border-[#ffffff1a] rounded-xl min-h-[400px]">
          <img src={img9} alt="lightning-icon" />
          <h2 className="text-2xl font-medium opacity-80">Light Weight</h2>
          <p className="w-[80%] mt-5 opacity-70 tracking-wide leading-[1.6em]">
            Motion Art for Elementor is designed to be lightweight.
          </p>
        </div>
        {/* card2 */}
        <div className="flex-1 min-w-[300px] p-5 m-2 card_bg border-2 border-[#ffffff1a] rounded-xl">
          <img src={img6} alt="lightning-icon" />
          <h2 className="text-2xl font-medium opacity-80">100% Responsive</h2>

          <p className="w-[80%] mt-5 opacity-70 tracking-wide leading-[1.6em]">
            Create a consistent visual experience across all devices.
          </p>
        </div>
        {/* card3 */}
        <div className="flex-1 min-w-[300px] p-5 m-2 card_bg border-2 border-[#ffffff1a] rounded-xl">
          <img src={img7} alt="lightning-icon" />
          <h2 className="text-2xl font-medium opacity-80">
            User Friendly Interface
          </h2>
          <p className="w-[80%] mt-5 opacity-70 tracking-wide leading-[1.6em]">
            Ensure a smooth experience for both applicants and administrators.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
