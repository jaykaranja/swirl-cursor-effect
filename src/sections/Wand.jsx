import React from "react";
import rightIcon from "../assets/right-icon.png";
import wandImg from "../assets/motionarteffect-img5.png";

function Wand() {
  return (
    <div className="px-5 mt-20 flex justify-between items-center max-[770px]:flex-col max-[770px]:space-y-5">
      {/* left part => text */}
      <div className="w-[60%] p-3 max-[770px]:w-[100%] max-[480px]:text-center flex flex-col max-[480px]:items-center">
        <h2 className="text-4xl font-medium opacity-90 leading-[55px] max-[1030px]:text-3xl">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h2>
        <p className="w-[100%] pr-5 mt-5 opacity-70 tracking-wide leading-[1.6em]">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <button className="gradient_bg w-fit flex space-x-5 items-center py-4 px-8 rounded-3xl mt-10 text-[20px] font-light">
          <p>Purchase From Envato</p>
          <img src={rightIcon} alt="right-icon" className="h-[30px]" />
        </button>
      </div>
      {/* right part => image */}
      <img src={wandImg} alt="wand-icon" />
    </div>
  );
}

export default Wand;
