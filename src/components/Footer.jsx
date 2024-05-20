import React from "react";

function Footer() {
  return (
    <div className="footer_bg w-screen flex justify-center items-center">
      <div className="w-[1300px] max-[1300px]:w-screen px-5 pt-4 pb-2 flex justify-between max-[1030px]:flex-col-reverse max-[1030px]:items-center">
        <p className="text-sm opacity-70 text-center">
          © 2023 Copywrite. All rights reserved by QodeMatrix
        </p>
        <div className="text-sm space-x-3 opacity-70 max-[1030px]:my-4">
          <a href="#">Documentation</a>
          <a href="#">Support</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
