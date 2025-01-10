import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

function Contact(){
  return (
      <div className="text-center flex flex-col gap-5 max-[426px]:mt-44 h-auto my-20" id="contact">
        <div className="text-5xl mb-10 max-[500px]:text-3xl max-[500px]:mb-5">Contact Me ☎️</div>
        <p className="text-gray-400 text-base">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </p>
        <a href="tel:+92-3046282189" className="text-gray-400 text-2xl hover:text-white">+92-3046282189</a>
        <a href="mailto:Adnanjaferi512@outlook.com" className="text-gray-400 text-2xl hover:text-white">Adnanjaferi512@outlook.com</a>
        <div className="flex justify-center gap-5 mt-10">
          <a href="https://github.com/jaferi512" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/adnanjaferi512" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaLinkedin />
          </a>
          {/* <a href="https://stackoverflow.com/users/23691689/talha-shah" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaStackOverflow />
          </a> */}
          <a href="https://www.upwork.com/freelancers/~01e023530d43f9a1b6" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaSquareUpwork />
          </a>
        </div>
      </div>
  )
}

export default Contact;