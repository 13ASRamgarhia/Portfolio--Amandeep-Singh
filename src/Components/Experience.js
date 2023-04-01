import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import SectionWrapper from './hoc/SectionWrapper';
import { textVariant } from './utils/motion';

import connexio from "../Assets/Company/connexio.jpg"
import uda from "../Assets/Company/uda.jpg"
import Certifications from './Certifications';

const InternshipCard = ({ internship }) => {
  return(
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      dateClassName='text-white'
      date={internship.date}
      iconStyle={{ background: "#E6DEDD" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={internship.icon}
            alt={internship.company_name}
            className='object-contain rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white font-bold text-xl">{internship.title}</h3>
        <p className="text-tSecondary text-lg font-semibold m-0">{internship.company}</p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {internship.points.map((point, index) => {
            return(
              <li key={`internship-point-${index}`} className="text-tSecondary text-lg pl-1 tracking-wider">{point}</li>
            )
          })}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  const internships = [
    {
        title: "ROR Manager Intern",
        company: "Underdogs Arena",
        address: "Kanpur, UP, India",
        date: "May 2021 - Aug 2021",
        icon: uda,
        points: [
            "Contributed in website designing and development for an eSportsorg - Underdogs Arena",
            "Managed ongoing tournaments using Excel programming and Discord, which involved more than 5000 eSports players",
            "Learnt a lot of interpersonal skills, like Communication Skills, Problem Solving, Openness to feedback, and Team Work"
        ]
    },
    {
        title: "Product Manager Intern",
        company: "Connexio Inc.",
        address: "St. Louis, MO, USA",
        date: "Feb 2019 - Aug 2019",
        icon: connexio,
        points: [
            "Developed a web scraper using beautifulSoup and selenium to extract the desired data for the product from the www",
            "Worked with senior developer to manage large and complex data for the product",
            "Worked as Student Ambassador at SAITM, Gurugram"
        ]
    },
  ]

  return (
    <div id="experienceComponent">
      <div className='bg-[#050816] px-10 laptop:px-36 py-10 pt-20'>
        <motion.div variants={textVariant()}>
          <p className="text-tSecondary text-xl tracking-wider mb-2">WHAT I HAVE DONE SO FAR</p>
          <h2 className="text-white text-5xl font-black">Internships</h2>
        </motion.div>

        <div className="flex flex-col mt-20">
          <VerticalTimeline>
            {
              internships.map((internship, index) => {
                return(
                  <InternshipCard key={index} internship={internship} />
                )
              })
            }
          </VerticalTimeline>
        </div>
      </div>
      <Certifications />
    </div>
  )
}

export default SectionWrapper(Experience, "work")
