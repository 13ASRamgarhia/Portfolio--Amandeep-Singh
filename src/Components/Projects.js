import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import SectionWrapper from './hoc/SectionWrapper'
import { fadeIn, textVariant } from './utils/motion'
import { Icon } from 'semantic-ui-react'

import pepper from "../Assets/projects/pepper.png"
import randomapp from "../Assets/projects/randomapp.png"
import inotebook from "../Assets/projects/inotebook.png"
import newssense from "../Assets/projects/newssense.png"
import autobot from "../Assets/projects/autobot.webp"
import skeleton from "../Assets/projects/skeleton.jpg"

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_site_link }) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 5, 0.75)}>
      <Tilt options={{max: 45, scale: 1, speed: 450}} className="bg-tertiary p-5 rounded-2xl xs:w-[360px] w-full">
        <div className="relative w-full h-60">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl aspect-video" />

          <div className="absolute inset-0 flex justify-end m-3 space-x-3">
            {live_site_link && <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-black shadow-lg" onClick={() => {window.open(source_code_link, "_blank")}}>
                <Icon name="linkify" size="large" className='pl-1'/>
            </div>}
            {source_code_link && <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-black shadow-lg" onClick={() => {window.open(source_code_link, "_blank")}}>
                <Icon name="github" size="large" className='pl-1'/>
            </div>}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="mt-2 text-tSecondary text-base">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {
            tags.map((tag) => {
              return(
                <p key={tag.name} className={`text-base ${tag.color}`}>#{tag.name}</p>
              )
            })
          }
        </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  const projects = [
    {
      name: "Random app",
      description:
        "A simple web application developed using create-react-app and tailwind to get users from an API",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "tailwind",
          color: "text-pink-500",
        },
        {
          name: "API",
          color: "text-gray-500",
        },
      ],
      image: randomapp,
      source_code_link: "https://github.com/13ASRamgarhia/Random-app",
      live_site_link: "https://random-react-application.netlify.app/"
    },
    {
      name: "Pepper clone",
      description:
        "A single page application developed using React and Tailwind, cloning a popular website - Pepper. Project was developed for learning purposes",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "tailwind",
          color: "text-pink-500",
        },
      ],
      image: pepper,
      source_code_link: "https://github.com/13ASRamgarhia/Pepper---Frontend-Development",
      live_site_link: "https://pepper-frontend-project.netlify.app/"
    },
    {
      name: "iNotebook",
      description:
        "iNotebook is a React app which is developed using MERN Technologies. This is a cloud notebook app, which can be accessed by a device with internet connection. User needs to register in order start accessing the notes. Once user is registered, he/she can just login to his/her notebook and start writing. This app is using MongoDB to store the user data and their notes. User can add a new note and delete a note.",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "tailwind",
          color: "text-pink-500",
        },
        {
          name: "node.js",
          color: "text-green-500",
        },
        {
          name: "mongoDB",
          color: "text-green-500",
        },
        {
          name: "REST API",
          color: "text-gray-500",
        },
      ],
      image: inotebook,
      source_code_link: "https://github.com/13ASRamgarhia/iNotebook-frontend--MERN-Stack",
      live_site_link: "https://inotebook-cloud-notebook-app.netlify.app/"
    },
    {
      name: "Notes app",
      description:
        "Notes is a React app which is developed using MERN Technologies. This is a cloud notebook app, which can be accessed by a device with internet connection. User needs to register in order start accessing the notes. Once user is registered, he/she can just login to his/her notebook and start writing. This app is using MySQL to store the user data and their notes. User can add a new note, edit an existing note, and delete a note.",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "tailwind",
          color: "text-pink-500",
        },
        {
          name: "mySQL",
          color: "text-blue-500",
        },
        {
          name: "node.js",
          color: "text-green-500",
        }
      ],
      image: skeleton,
      source_code_link: "https://github.com/13ASRamgarhia/Notes-frontend",
    },
    {
      name: "NewSense",
      description:
        "NewsSense is a web application which can be used to grab quick daily news bites. One can use NewsSense to read news for 17 different countries and for 7 various categories.",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "REST API",
          color: "text-gray-500",
        }
      ],
      image: newssense,
      source_code_link: "https://github.com/13ASRamgarhia/NewSense",
      live_site_link: "https://news-sense.netlify.app/"
    },
    {
      name: "Autobot",
      description:
        "AutoBot is a basic Auto-moderation Discord Bot which was developed for Project-III in 8th semester of my Bachelor's degree in Computer Science Engineering at St. Andrews Institute of Technology and Management",
      tags: [
        {
          name: "python",
          color: "text-yellow-500",
        },
        {
          name: "discord.py",
          color: "text-violet-500",
        }
      ],
      image: autobot,
      source_code_link: "https://github.com/13ASRamgarhia/AutoBot",
    },
    {
      name: "University Scraper",
      description:
        "This is the very first version of Web Scraper which was developed during my internship at Connexio Inc. The project was developed for extracting the required data for the app. Later, it was submitted as Project-I in the sixth semester of my bachelor's.",
      tags: [
        {
          name: "python",
          color: "text-yellow-500",
        },
        {
          name: "beautifulSoup",
          color: "text-yellow-300",
        },
        {
          name: "scrapy",
          color: "text-yellow-300",
        },
        {
          name: "selenium",
          color: "text-yellow-300",
        },
      ],
      image: skeleton,
      source_code_link: "https://github.com/13ASRamgarhia/University-Scraper",
    },
    {
      name: "Automated Attendence System",
      description:
        "Developed an automated attendance system using Python for marking attendance using its face recognition system. As named, the aim of this project was to develop an automated attendance system to save time and prevent corruption. The project was submitted to the college as Project II in the 7th semester",
      tags: [
        {
          name: "python",
          color: "text-yellow-500",
        },
        {
          name: "numpy",
          color: "text-yellow-300",
        },
        {
          name: "mysql",
          color: "text-blue-500",
        },
        {
          name: "pillow",
          color: "text-yellow-300",
        },
        {
          name: "opencv-contrib-python",
          color: "text-yellow-300",
        },
      ],
      image: skeleton,
      source_code_link: "https://github.com/13ASRamgarhia/Facial-Recognition-System",
    },
  ];

  return (
      <div className='bg-[#050816] px-10 laptop:px-36 py-10 pt-20' id="projectsComponent">
        <motion.div variants={textVariant()}>
          <p className="text-tSecondary text-xl tracking-wider mb-2">MY WORK</p>
          <h2 className="text-white text-5xl font-black">Projects</h2>
        </motion.div>

        <div className="w-full flex mt-3">
          <motion.p variants={fadeIn("", "", 0.1, 1)} className='text-tSecondary max-w-4xl leading-7 tracking-wider text-xl'>
            Following projects showcase my knowledge and skills in the field. Each project is briefly described with links to project source code repositories and live demos in it. Mainly MERN Technologies are used in development of these projects.
          </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7 items-end">
          {
            projects.map((project, index) => {
              return(
                <ProjectCard key={`project-${index}`} index={index} {...project} />
              )
            })
          }
        </div>
      </div>
  )
}

export default SectionWrapper(Projects, "")
