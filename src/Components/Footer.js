import React from 'react'
import footerImg from "../Assets/footerImg.svg";
import { Icon } from 'semantic-ui-react';

import resume from "../Assets/Resume.pdf"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  return (
    <>
    <div className='h-[1px] w-screen bg-tSecondary' />
    <div className='w-screen bg-[#050816] block py-4 px-4'>
      <div className="flex flex-col tablet:flex-row justify-between laptop:justify-around">
        <div className="nameDiv text-white font-inter font-bold text-3xl">
          <p>Amandeep Singh</p>
          <div>
            <a href="https://github.com/13ASRamgarhia" rel="noreferrer noopener" target="_blank" className='text-white hover:text-current focus:text-current'><Icon name="github" size="small" /></a>
            <a href="https://www.linkedin.com/in/13asr/" rel="noreferrer noopener" target="_blank" className='text-white hover:text-current focus:text-current'><Icon name="linkedin" size="small" /></a>
            <a href="mailto:someone@example.com" rel="noreferrer noopener" target="_blank" className='text-white hover:text-current focus:text-current'><Icon name="mail" size="small" /></a>
          </div>
          <div className='flex flex-row my-auto space-x-4 py-8'>
            <a href={resume} download className='bg-[#6e2f8a] w-fit text-sm flex my-auto px-4 py-3 font-monserrat hover:text-current text-tPrimary focus:text-current rounded-lg hover:bg-transparent border border-[#6e2f8a] hover:transition-all hover:duration-300'>Get resume</a>
            <AnchorLink href="#contactComponent"><p className="text-tPrimary w-fit text-sm flex my-auto px-4 py-3 border border-[#6e2f8a] rounded-lg hover:bg-[#6e2f8a] hover:transition-all hover:duration-300 font-monserrat hover:text-tPrimary">Get in touch</p></AnchorLink>
          </div>
        </div>

        <div className="photoDiv flex space-x-0 laptop:space-x-10">
          <div className='my-auto'>
            <img src={footerImg} alt="footer" className='w-36 h-36 hidden laptop:flex' />
          </div>
          <div className='flex space-x-4 laptop:space-x-6 my-auto'>
            <div className='space-y-3'>
              <div><AnchorLink href="#landingComponent"><p className="text-tPrimary font-monserrat hover:text-tPrimary">Home</p></AnchorLink></div>
              <div><AnchorLink href="#aboutComponent"><p className="text-tPrimary font-monserrat hover:text-tPrimary">About</p></AnchorLink></div>
              <div><AnchorLink href="#projectsComponent"><p className="text-tPrimary font-monserrat hover:tetPrimaryxt-white">Projects</p></AnchorLink></div>
            </div>
            <div className='space-y-3'>
              <div><AnchorLink href="#experienceComponent"><p className="text-tPrimary font-monserrat hover:text-tPrimary">Experience</p></AnchorLink></div>
              <div><AnchorLink href="#skillsComponent"><p className="text-tPrimary font-monserrat hover:text-tPrimary">Skills</p></AnchorLink></div>
              <div><AnchorLink href="#contactComponent"><p className="text-tPrimary font-monserrat hover:text-tPrimary">Contact</p></AnchorLink></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[60%] mx-auto justify-center flex text-white py-2" style={{borderTop: "1px solid #aaa6c3"}}>
      <p className="text-tPrimary">Copyright &#169; 2023 Amandeep Singh</p>
    </div>
    </>
  )
}

export default Footer