import React from 'react';
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";

import { fadeIn, textVariant } from './utils/motion';
import web from "../Assets/web.png";
import mobile from "../Assets/mobile.png";
import backend from "../Assets/backend.png";
import creator from "../Assets/creator.png";
import SectionWrapper from "./hoc/SectionWrapper";

const JobRoleCard = ({ index, title, icon }) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full bg-gradient-to-t from-green-500 to-pink-500 p-[1px] rounded-xl shadow-card'>
        <div options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className="text-white text-lg font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const jobRoles = [
    {
      title: "Data Analyst",
      icon: creator,
    },
    {
      title: "Business Analyst",
      icon: mobile,
    },
    {
      title: "AI Developer",
      icon: backend,
    },
    {
      title: "MERN Stack Developer",
      icon: web,
    },
  ];

  return (
    <>
    <div className='bg-[#050816] px-10 laptop:px-36 py-10 pt-20' id="aboutComponent">
      <motion.div variants={textVariant()}>
        <p className="text-tSecondary text-xl tracking-wider mb-2">INTRODUCTION</p>
        <h2 className="text-white text-5xl font-black">Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='text-tSecondary max-w-4xl leading-7 tracking-wider mt-4 text-xl text-justify'>
      Data Analyst skilled in Python, SQL, and AI, with hands-on experience in end-to-end data lifecycle management, from extraction and processing to advanced analytics and visualization. Proven ability to translate complex datasets into actionable insights, optimize workflows, and build innovative, data-driven solutions for business impact. Seeking to leverage expertise in AI and data analytics to drive strategic decision-making.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {jobRoles.map((role, index) => (
          <JobRoleCard key={role.title} index={index} {...role} />
        ))}
      </div>
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")
