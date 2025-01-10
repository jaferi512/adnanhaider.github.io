import React, { useState } from "react";
import "../App.css";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar({ sendDataToParent }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("/");

  const handleLinkClick = (menu) => {
    setSelectedMenu(menu);
    setMenuOpen(false);
    sendDataToParent(false);
  };

  const handleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    sendDataToParent(newMenuState);
  };

  return (
    <>
<div
  className="navbar flex justify-between items-center pt-8 mb-12 max-md:mb-6 max-md:block"
>
        <div className="title flex justify-between w-full max-[426px]:items-center">
          <a href="/">
            <h1
              className={`text-3xl max-md:text-xl italic font-bold signature`}
              onClick={() => handleLinkClick("home")}
            >
              &lt;Adnan Haider /&gt;
            </h1>
          </a>
          <button
            className="text-2xl hidden max-md:block"
            onClick={() => handleMenu()}
          >
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
        <nav
          className={`flex gap-10 max-md:flex-col max-md:mt-12 ${
            menuOpen ? "max-md:flex" : "max-md:hidden"
          } `}
        >
          <ul className="flex gap-10 max-md:flex-col max-md:w-full">
            {[
              { name: "Home", id: "" },
              { name: "Skills", id: "skills" },
              { name: "Experiences", id: "experience" },
              { name: "Projects", id: "projects" },
              { name: "Certificates", id: "certificates" },
              { name: "Contact", id: "contact" },
            ].map((menu) => (
              <li key={menu.id} className="max-md:w-full">
                <a
                  href={`#${menu.id}`}
                  className={`inline-block w-full text-[#7e9199] hover:text-white max-md:hover:border-none max-md:active:bg-purple-500 max-md:active:text-white max-md:px-2 hover:border-b pb-1 text-lg ${
                    selectedMenu === menu.id
                      ? "text-white border-b-2 border-white"
                      : ""
                  }`}
                  onClick={() => handleLinkClick(menu.id)}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className={`hidden justify-around items-center mt-28 max-md:flex`}>
            <li>
              <a
                href="https://github.com/talhashah-dev"
                className="text-4xl"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/talhashah-dev/"
                className="text-4xl"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/23691689/talha-shah"
                className="text-4xl"
                target="_blank"
                rel="noreferrer"
              >
                <FaStackOverflow />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
