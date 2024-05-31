import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import SectionWrapper from './hoc/SectionWrapper';
import { textVariant } from './utils/motion';

import connexio from "../Assets/Company/connexio.jpg"
import uda from "../Assets/Company/uda.jpg"
import polstrat from "../Assets/Company/polstrat.png"
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
      title: "Data Analyst Intern",
      company: "Polstrat Communications Pvt Ltd",
      address: "Noida, UP, India",
      date: "June 2023 - Nov 2023",
      icon: polstrat,
      points: [
          "Applied statistical techniques and data mining to discern behavioral trends in electoral and demographic data.",
          "Conducted in-depth analysis of large datasets, presenting actionable insights for strategic decision-making",
          "Designed and developed interactive dashboards using Power BI, to visualize and communicate key data points effectively",
          "Improved data collection techniques, implemented data mining methodologies, and provided recommendations influencing strategic business direction."
      ]
    },
    {
        title: "Product Manager Intern",
        company: "Connexio Inc.",
        address: "St. Louis, MO, USA",
        date: "Feb 2019 - Aug 2019",
        icon: connexio,
        points: [
            "Executed web scraping techniques to extract pertinent data from the World Wide Web, ensuring the accuracy and relevance of information for the product.",
            "Managed the extraction and processing of data to feed into the product, contributing to the creation of a comprehensive and userfriendly platform",
            "Played a pivotal role in integrating data-driven features into the product, enhancing its functionality and value for users seeking personalized educational recommendations."
        ]
    },
  ]

  return (
    <div id="experienceComponent">
      <div className='bg-[#050816] px-10 laptop:px-36 py-10 pt-20'>
        <motion.div variants={textVariant()}>
          <p className="text-tSecondary text-xl tracking-wider mb-2">WHAT I HAVE DONE SO FAR</p>
          <h2 className="text-white text-5xl font-black">Experience</h2>
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
