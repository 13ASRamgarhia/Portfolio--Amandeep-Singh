import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import SectionWrapper from './hoc/SectionWrapper';
import { textVariant } from './utils/motion';

import connexio from "../Assets/Company/connexio.jpg"
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
      company: "Polstrat Communications Pvt Ltd, Noida, UP, India",
      address: "Noida, UP, India",
      date: "June 2023 - Nov 2023",
      icon: polstrat,
      points: [
          "Worked on a project “Electoral Roll”, where aim was to analyze past elections and predict win rate for clients. Performed practices including Sentiment Analysis, Predictive and Descriptive Analysis",
          "Extracting data by executing Web Scraping techniques along with OpenCV and MS Excel",
          "Responsible for analyzing the data pulled from databases and creating reports on MS Excel and visualizations on Power BI and Tableau",
          "Responsible for Automating data extraction and data processing processes using Python scripting"
      ]
    },
    {
        title: "Product Manager Intern",
        company: "Connexio Inc., St. Louis, MO, USA",
        address: "St. Louis, MO, USA",
        date: "Feb 2019 - Aug 2019",
        icon: connexio,
        points: [
            "Developed python scripts to automate the Data Extraction process, leading to time to time updated and improved dataset for the product",
            "Assisted with product needs and resolved problems to maintain business relationships",
            "Implemented Agile methodologies to streamline processes and improve overall team efficiency in product development cycles"
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
