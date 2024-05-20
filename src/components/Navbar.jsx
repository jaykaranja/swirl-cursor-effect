import React from "react";
import logo from "../assets/MotionArtEffect-logo.png";

function Navbar() {
  return (
    <div className="w-inherit flex justify-between items-center px-10 mt-8 max-[1300px]:px-3">
      <img src={logo} alt="logo" />
      <button className="text-black border-2 border-white py-4 px-10 bg-white rounded-md transition-all max-[1027px]:hidden hover:bg-transparent hover:text-white">
        Purchase Now
      </button>
    </div>
  );
}

export default Navbar;
