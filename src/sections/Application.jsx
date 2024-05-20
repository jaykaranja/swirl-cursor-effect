import React from "react";
import img10 from "../assets/motionarteffect-img10.png";
import img11 from "../assets/motionarteffect-img11.png";

function Application() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="w-[70%] text-center text-4xl font-medium opacity-90 leading-[55px] max-[1030px]:text-3xl">
        Apply On Any Section Or Enable For Whole Page
      </h1>
      {/* cards */}
      <div className="flex justify-center items-center max-[770px]:flex-col max-[770px]:mt-20">
        {/* card1 */}
        <div className="card_bg flex flex-col items-start w-[40%] max-[770px]:w-[90%] p-10 min-[770px]:mr-5 rounded-xl border-2 border-[#ffffff1a]">
          <h2 className="text-2xl font-medium opacity-80 text-center">
            Apply On Section
          </h2>
          <p className="w-[100%] pr-5 mt-5 opacity-70 tracking-wide leading-[1.6em]">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.{" "}
          </p>
          <img src={img11} alt="sections" className="mt-10" />
        </div>
        {/* card2 */}
        <div className="card_bg flex flex-col items-start w-[40%] max-[770px]:w-[90%]  p-10 mt-[150px] max-[770px]:mt-5 rounded-xl border-2 border-[#ffffff1a]">
          <h2 className="text-2xl font-medium opacity-80 text-center">
            Apply On Page
          </h2>
          <p className="w-[100%] pr-5 mt-5 opacity-70 tracking-wide leading-[1.6em]">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <img src={img10} alt="sections" className="mt-10" />
        </div>
      </div>
    </div>
  );
}

export default Application;
