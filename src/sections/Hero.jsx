import rightIcon from "../assets/right-icon.png";

function Hero() {
  return (
    <div className="px-7 mt-20 flex max-[770px]:flex-col max-[770px]:items-center">
      {/* left part */}
      <div className="text-[18px] w-[25%] flex-col space-y-3 max-[770px]:text-center max-[770px]:w-[90%] max-[770px]:flex max-[770px]:items-center">
        <h2 className="gradient_text w-[150px] max-[770px]:w-[170px]">
          Transform Your Website
        </h2>
        <h2 className="w-[150px] max-[770px]:w-[220px]">
          With e-commerce tools
        </h2>
      </div>
      {/* right part */}
      <div className="flex-1 px-3">
        <div className="w-[70%] max-[770px]:w-[100%] max-[770px]:mt-3 max-[480px]:text-center">
          <h2 className="text-[55px] leading-[75px] font-semibold max-[1030px]:text-[40px] max-[1030px]:leading-[60px]">
            Attract Your Visitors Attention With Colorful
            <br />
            <span className="gradient_text">e-commerce tools</span>
            <button className="gradient_bg w-fit flex space-x-5 items-center py-0 px-6 rounded-3xl mt-10 text-[18px] font-light">
              <p>Purchase Here</p>
              <img src={rightIcon} alt="right-icon" className="h-[30px]" />
            </button>
          </h2>
          <p className="w-[100%] pr-5 mt-5 opacity-70 tracking-wide leading-[1.6em]">
            Unleash the power of creativity with tools for Elementor - your
            ultimate solution for seamlessly integrating captivating tools
            into your website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
