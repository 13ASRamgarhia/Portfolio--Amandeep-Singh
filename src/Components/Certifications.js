import React from 'react'
import { textVariant } from './utils/motion'
import { motion } from 'framer-motion';
import "../App.css";

import pythonprogrammer from "../Assets/certifications/pythonprogrammer.webp"
import fullstack from "../Assets/certifications/fullstack.webp"
import javascript from "../Assets/certifications/javascript.webp"

const CertificationCard = ({ index, name, img, organization, date, credential }) => {
    return(
      <div className="wrapper">
        <div className="card">
        <img src={img} alt={name} />
          <div className="info space-y-2 w-full">
            <div>
                <h1 className='font-tahoma font-medium text-xl'>{name}</h1>
            </div>
            <div>
                <p className='font-tahoma text-base'>{organization}</p>
                <p className='font-tahoma text-base'>{date}</p>
            </div>
            <div className='flex justify-end'>
                <a href={credential} rel='noopener noreferrer' target='blank' className='bg-tertiary px-4 py-2 rounded-lg hover:text-current focus:text-current'>Certificate Link</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

const Certifications = () => {
    const certifications = [
        {
            name: "Full Stack Developer Certification",
            img: fullstack,
            date: "Dec 2022",
            organization: "Board Infinity",
            credential: "https://drive.google.com/file/d/1-aHNeY9KJbSpH7OZ3VlXBFMpfDuOepbr/view?usp=sharing"
        },
        {
            name: "JavaScript Course Completion Certification",
            img: javascript,
            date: "May 2022",
            organization: "Infosys | Springboard",
            credential: "https://drive.google.com/file/d/1JI-lDZ18oV9PzDLEpQkscFEEo7ujkgyA/view?usp=sharing"
        },
        {
            name: "Python Programmer Certification",
            img: pythonprogrammer,
            date: "Dec 2021",
            organization: "Infosys | Springboard",
            credential: "https://drive.google.com/file/d/1pjQRsBF17gY11navFoOTfFP2Zhw_YuC2/view?usp=sharing"
        },
      ]

  return (
    <div className='bg-[#050816] px-10 laptop:px-36 py-10 pt-20'>
        <motion.div variants={textVariant()}>
        <h2 className="text-white text-5xl font-black">Certifications</h2>
        </motion.div>

            <div className="grid grid-cols-autofit gap-10 mt-20">
                {certifications.map((certification, index) => (
                    <CertificationCard key={certification.name} index={index} {...certification} />
                ))}
            </div>
    </div>
  )
}

export default Certifications
