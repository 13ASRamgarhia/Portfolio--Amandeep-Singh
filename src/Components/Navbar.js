import React, { useContext, useState } from "react";
import portfolioContext from "../Context/portfolioContext";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "animate.css";
import close from "../Assets/close.svg";

const Navbar = () => {
  const context = useContext(portfolioContext);
  const { isLandingVisible } = context;

  const [colorNavbar, setColorNavbar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  
  const changeNavbarStyle = () => {
    if(window.scrollY > 50){
      setColorNavbar(true)
    }
    else{
      setColorNavbar(false)
    }

    document.getElementById("navbarComp").classList.remove("absolute")
    document.getElementById("navbarComp").classList.add("fixed")
    document.getElementById("navbarComp").classList.add("top-0")
  }
  window.addEventListener("scroll", changeNavbarStyle);

  return (
    <div className={`navbar-div z-40 absolute px-5 tablet:py-2 py-4 w-screen ${colorNavbar ? "bg-[#050816]/90" : "bg-transparent"}`} id="navbarComp">
        <div className="navbar-container flex justify-between">
            <div className="logo-div my-auto pt-3 flex">
              <p className={`text-xl tablet:text-2xl font-elianto text-white ${isLandingVisible ? "animate__animated animate__hinge" : "animate__animated animate__fadeInDown"}`}>AMANDEEP SINGH</p>
            </div>
            <div className="nav-items-div hidden laptop:flex py-4 px-3 tablet:my-auto w-full tablet:w-fit justify-center tablet:justify-end text-xl">
              <div className="nav-items flex my-auto space-x-6">
                <AnchorLink href="#landingComponent"><p className="text-tPrimary font-monserrat hover:text-tPrimary">Home</p></AnchorLink>
                <AnchorLink href="#aboutComponent"><p className="text-tPrimary font-monserrat hover:text-tPrimary">About</p></AnchorLink>
                <AnchorLink href="#projectsComponent"><p className="text-tPrimary font-monserrat hover:tetPrimaryxt-white">Projects</p></AnchorLink>
                <AnchorLink href="#experienceComponent"><p className="text-tPrimary font-monserrat hover:text-tPrimary">Experience</p></AnchorLink>
                <AnchorLink href="#skillsComponent"><p className="text-tPrimary font-monserrat hover:text-tPrimary">Skills</p></AnchorLink>
                <AnchorLink href="#contactComponent"><p className="text-tPrimary font-monserrat hover:text-tPrimary">Contact</p></AnchorLink>
              </div>
            </div>
            <button onClick={() => {setIsOpen(!isOpen)}} className="flex flex-col laptop:hidden my-auto">
            {
              isOpen ?
              <img src={close} alt="close" />
              :
              <div className="flex flex-col laptop:hidden space-y-1 text-white">
                <div className="w-6 h-1 rounded-2xl bg-white"></div>
                <div className="w-6 h-1 rounded-2xl bg-white"></div>
                <div className="w-3 h-1 rounded-2xl bg-white"></div>
              </div>
            }
            </button>

            <div className={`flex laptop:hidden p-6 bg-tSecondary absolute top-[4.5rem] right-0 mx-4 my-2 min-w-[7rem] rounded-xl ${isOpen ? "animate__animated animate__fadeInRight" : "animate__animated animate__fadeOutRight"}`}>
              <div className="nav-items flex flex-col space-y-2">
                  <AnchorLink href="#landingComponent" onClick={() => {setIsOpen(!isOpen)}}><p className="text-tertiary font-monserrat">Home</p></AnchorLink>
                  <AnchorLink href="#aboutComponent" onClick={() => {setIsOpen(!isOpen)}}><p className="text-tertiary font-monserrat">About</p></AnchorLink>
                  <AnchorLink href="#projectsComponent" onClick={() => {setIsOpen(!isOpen)}}><p className="text-tertiary font-monserrat">Projects</p></AnchorLink>
                  <AnchorLink href="#experienceComponent" onClick={() => {setIsOpen(!isOpen)}}><p className="text-tertiary font-monserrat">Experience</p></AnchorLink>
                  <AnchorLink href="#skillsComponent" onClick={() => {setIsOpen(!isOpen)}}><p className="text-tertiary font-monserrat">Skills</p></AnchorLink>
                  <AnchorLink href="#contactComponent" onClick={() => {setIsOpen(!isOpen)}}><p className="text-tertiary font-monserrat">Contact</p></AnchorLink>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
