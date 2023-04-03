import React, { useContext, useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
// import Footer from './Footer'
import portfolioContext from '../Context/portfolioContext'
import About from './About'
import Experience from './Experience'

import resume from "../Assets/Resume.pdf"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Landing = () => {
  document.title = "Portfolio | Amandeep Singh";

  const context = useContext(portfolioContext);
  const { setIsLandingVisible } = context;

  const landingRef = useRef();
  const [landingHeight, setLandingHeight] = useState()

  const getLandingHeight = () => {
    setLandingHeight(landingRef.current.clientHeight)
  }

  const checkForLandingVisibility = () => {
    if(window.scrollY < landingHeight){
      setIsLandingVisible(true)
    }
    else{
      setIsLandingVisible(false)
    }
  }

  useEffect(() => {
    getLandingHeight();

    window.addEventListener("scroll", checkForLandingVisibility)
  })
  return (
    <>
      <Navbar />
      <div className='' id="landingComponent">
          

          <div className='min-h-screen h-screen px-0 laptop:px-10 py-10' id="landingComponent" ref={landingRef}>
            <div className="flex flex-col h-full px-10 text-white">
              <div className="flex my-auto tablet:space-x-3 laptop:w-[50%]">
                <div className='hidden tablet:flex flex-col'>
                <div className="w-5 h-5 rounded-full bg-[#8556eb] mx-auto"></div>
                <div className="w-1 h-72 bg-gradient-to-b from-[#8556eb] to-transparent mx-auto"></div>
                </div>

                <div className='space-y-5'>
                  <div className="welcomeTag font-inter flex bg-gradient-to-r from-[#1e1121] to-[#6e2f8a] w-fit py-2 px-3 border-[#fbfafd] border rounded">Welcome to my Portfolio</div>
                <div className='space-y-1'>
                  <p className="font-inter font-bold text-5xl text-tPrimary">Amandeep Singh</p>
                </div>
                <div>
                  <p className="font-inter text-xl laptop:pr-10 intro leading-7 text-tSecondary" style={{textShadow: "0px 0px 14px rgba(0,0,0,1)"}}>I am 2022 graduate BTech CSE from Maharshi Dayanand University, Rohtak. I develop web applications, backend servers, user interfaces, and 3D visuals</p>
                </div>
                <div className='flex flex-col laptop:flex laptop:flex-row my-auto space-x-0 laptop:space-x-4 space-y-4 laptop:space-y-0'>
                    <a href={resume} download className='bg-[#6e2f8a] w-fit flex my-auto px-4 py-3 font-monserrat hover:text-current text-tPrimary focus:text-current rounded-lg hover:bg-transparent border border-[#6e2f8a] hover:transition-all hover:duration-300'>Get resume</a>
                    <AnchorLink href="#contactComponent"><p className="text-tPrimary w-fit flex my-auto px-4 py-3 border border-[#6e2f8a] rounded-lg hover:bg-[#6e2f8a] hover:transition-all hover:duration-300 font-monserrat hover:text-tPrimary">Get in touch</p></AnchorLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
                
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
          {/* <Footer /> */}
      </div>
    </>
  )
}

export default Landing
