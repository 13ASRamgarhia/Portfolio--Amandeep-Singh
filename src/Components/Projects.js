import React from 'react'
import { Tilt } from 'react-tilt'
import SectionWrapper from './hoc/SectionWrapper'
import { Icon } from 'semantic-ui-react'

import autobot from "../Assets/projects/autobot.webp"
import skeleton from "../Assets/projects/skeleton.jpg"
import image_mani from "../Assets/projects/image_mani.png"

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_site_link }) => {
  return(
      <Tilt options={{max: 45, scale: 1, speed: 450}} className={`bg-tertiary p-5 rounded-2xl xs:w-[360px] w-full`}>
        <div className="relative w-full h-60">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl aspect-video" />

          <div className="absolute inset-0 flex justify-end m-3 space-x-3">
            {live_site_link && <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-black shadow-lg" onClick={() => {window.open(live_site_link, "_blank")}}>
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
  )
}

const Projects = () => {
  const projects = [
    {
      name: "Sentiment Analysis ML model",
      description:
        "Sentiment Analysis machine learning model built with an LSTM neural network, trained on 50,000 IMDb movie reviews.",
      tags: [
        {
          name: "python",
          color: "text-yellow-500",
        },
        {
          name: "machine learning",
          color: "text-violet-500",
        }
      ],
      image: skeleton,
      source_code_link: "https://github.com/13ASRamgarhia/Sentiment-Analysis---ML-Script/tree/main",
    },
    {
      name: "Air Quality Analysis and Prediction",
      description:
        "ML-based model to predict future air quality and analysis report on Power BI. Collected data using web scraping. Performed feature engineering and exploratory data analysis. Used Random Forest Regressor to predict Air Quality Index.",
      tags: [
        {
          name: "python",
          color: "text-yellow-500",
        },
        {
          name: "machine learning",
          color: "text-yellow-500",
        },
        {
          name: "power bi",
          color: "text-green-500",
        },
      ],
      image: image_mani,
      source_code_link: "https://github.com/13ASRamgarhia"
    },
    {
      name: "AUTOBOT [discord AUTO-moderation BOT]",
      description:
        "AutoBot is a Discord auto-moderation bot which was developed using discord.py (python) to ease the tasks of server moderators in a Discord Server.",
      tags: [
        {
          name: "python",
          color: "text-yellow-500",
        },
                {
          name: "python automation",
          color: "text-yellow-500",
        },
                {
          name: "discord.py",
          color: "text-yellow-500",
        },
      ],
      image: autobot,
      source_code_link: "https://github.com/13ASRamgarhia/AutoBot",
    },
    {
      name: "Web Scraper",
      description:
        "A Python-based web scraper designed to extract information about universities from the internet. The extracted data is then compiled into a CSV file for easy analysis and use.",
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
          name: "web scraping",
          color: "text-yellow-300",
        },
        {
          name: "drissionpage",
          color: "text-yellow-300",
        },
      ],
      image: skeleton,
      source_code_link: "https://github.com/13ASRamgarhia/University-Data-Web-Scraper",
    },
    {
      name: "SONAR Data Classifier",
      description:
        "Machine Learning model classifies Sonar data, identifying objects as either Rock or Mine based on 60-dimensional sonar features",
      tags: [
        {
          name: "python",
          color: "text-blue-500",
        },
        {
          name: "machine learning",
          color: "text-yellow-500",
        },
        {
          name: "data analysis",
          color: "text-gray-500",
        },
      ],
      image: skeleton,
      source_code_link: "https://github.com/13ASRamgarhia/Sonar-Data-Classifier",
      live_site_link: "https://sonar-data-classifier.streamlit.app/"
    },
    {
      name: "Amazon Sales Data Analysis 2023",
      description:
        "Data Analysis project for analyzing and gaining insights from Amazon website sales in year 2023, and visualizing the gained insights using Tableau",
      tags: [
        {
          name: "python",
          color: "text-blue-500",
        },
        {
          name: "data analysis",
          color: "text-pink-500",
        },
        {
          name: "API",
          color: "text-gray-500",
        },
      ],
      image: skeleton,
      live_site_link: "https://github.com/13ASRamgarhia/Amazon-Sales-Analysis"
    },
  ];

  return (
      <div className='bg-[#050816] px-10 laptop:px-36 py-10 pt-20' id="projectsComponent">
        <div>
          <p className="text-tSecondary text-xl tracking-wider mb-2">MY WORK</p>
          <h2 className="text-white text-5xl font-black">Projects</h2>
        </div>

        <div className="w-full flex mt-3">
          <p className='text-tSecondary max-w-4xl leading-7 tracking-wider text-xl text-justify'>
            Following projects showcase my knowledge and skills in the field. Each project is briefly described with links to project source code repositories and live demos in it. Mainly MERN Technologies are used in development of these projects.
          </p>
        </div>

      <div className="mt-20 flex flex-wrap gap-7 place-content-center">
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
