import React from "react";
import img1 from "../assets/motionarteffect-img1.png";
import img2 from "../assets/motionarteffect-img2.png";
import img3 from "../assets/motionarteffect-img3.png";
import img4 from "../assets/motionarteffect-img4.png";

function Ratings() {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h1 className="text-xl font-medium opacity-80 text-center">
        Trusted by thousands of users around the world
      </h1>
      {/* tabs */}
      <div className="flex flex-wrap justify-center items-center mt-10">
        {/* 1 */}
        <div className="flex space-x-3 mx-20 my-5">
          <img src={img2} alt="img2" />
          <div className="flex flex-col justify-around py-1">
            <img src={img4} alt="img4" />
            <p className="text-sm">
              <span className="font-bold">4.5</span> Score, 9 Reviews
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex space-x-3 mx-20 my-5">
          <img src={img1} alt="img2" />
          <div className="flex flex-col justify-around py-1">
            <img src={img4} alt="img4" />
            <p className="text-sm">
              <span className="font-bold">4.5</span> Score, 9 Reviews
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex space-x-3 mx-20 my-5">
          <img src={img3} alt="img2" />
          <div className="flex flex-col justify-around py-1">
            <img src={img4} alt="img4" />
            <p className="text-sm">
              <span className="font-bold">4.5</span> Score, 9 Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
