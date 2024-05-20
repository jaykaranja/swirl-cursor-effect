import React from "react";
import img8 from "../assets/motionarteffect-img8.png";

function Browsers() {
  return (
    <div className="card_bg mt-20 p-5 py-10 rounded-xl border-2 mx-5 border-[#ffffff1a] flex flex-col items-center">
      <h2 className="text-2xl font-medium opacity-80 text-center">
        Supported by All Popular Browsers
      </h2>
      <p className="w-[40%] max-[1000px]:w-[100%] pr-5 mt-5 opacity-70 tracking-wide leading-[1.6em] text-center">
        Rest assured, Motion Art is designed to be compatible with all major web
        browsers.
      </p>
      {/* browser's list */}
      <img src={img8} alt="browsers" className="mt-10" />
    </div>
  );
}

export default Browsers;
