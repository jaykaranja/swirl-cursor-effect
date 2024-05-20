import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Application from "./sections/Application";
import Browsers from "./sections/Browsers";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Ratings from "./sections/Ratings";
import Wand from "./sections/Wand";

function App() {
  return (
    <>
      {/* <canvas> */}
      <div className="flex flex-col items-center">
        <div className="w-[1300px] max-[1300px]:w-screen">
          <Navbar />
          <Hero />
          <Ratings />
          <Wand />
          <Application />
          <Browsers />
          <Features />
        </div>
        <Footer />
      </div>
      {/* </canvas> */}
    </>
  );
}

export default App;
