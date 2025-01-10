import React from "react";
import { Dani_Logo } from "../assets/images";

function About() {
  return (
    <div className="mx-auto h-auto my-36 max-xl:my-20" id="about">
      <div className="flex gap-6 justify-between items-center max-md:flex-wrap max-xl:justify-center">
        <div className="w-1/2 max-xl:w-full text-left max-md:text-center">
          <h1 className="text-5xl max-md:text-4xl mb-5">Hi, I'm Adnan Haider 👋</h1>
          <p className="text-3xl max-md:text-base mb-5 font-light">
          I have been developing high-performing, user-focused mobile applications for more than five years as a Full Stack Mobile Application Engineer. I provide scalable, aesthetically pleasing solutions with flawless backend integration and excellent performance, with a focus on React Native.
          </p>
          <a href="#contact" className="p-2 px-4 rounded-md text-base bg-white text-purple-500 hover:bg-purple-500 hover:text-white transition-all inline-block w-auto">GET IN TOUCH</a>
        </div>
        <img
  className="h-96 w-96 max-xl:h-80 max-xl:w-80 rounded-full object-cover max-[426px]:h-auto max-[426px]:w-full max-[426px]:mb-5"
  src={Dani_Logo}
  alt=""
/>


      </div>
    </div>
  );
}

export default About;
