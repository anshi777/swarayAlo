import React from "react";
import NavBar from "../NavBar/NavBar";

const About = () => {
  return (
    <>
<NavBar/>
      <div className="text-2xl bg-bl">
        {" "}
        <h1 class="text-lg font-bold text-blue-800">About SwarajyAlgo</h1>
      </div>
      <div className="text-center text-slate-100">
        <p>
          "SwarajyAlgo is revolutionizing the trading experience with
          cutting-edge AI technology and advanced market analytics. Our platform
          offers powerful tools for both beginner and advanced traders in
          options, futures, and <a href="more"> more.</a>"
        </p>
      </div>
    </>
  );
};

export default About;
