import React from 'react'

import html from "../Assets/tech/html.png"
import css from "../Assets/tech/css.png"
import javascript from "../Assets/tech/javascript.png"
import reactjs from "../Assets/tech/reactjs.png"
import redux from "../Assets/tech/redux.png"
import tailwind from "../Assets/tech/tailwind.png"
import nodejs from "../Assets/tech/nodejs.png"
import mongodb from "../Assets/tech/mongodb.png"
import threejs from "../Assets/tech/threejs.png"
import git from "../Assets/tech/git.png"
import docker from "../Assets/tech/docker.png"
import python from "../Assets/tech/python.png"
import aws from "../Assets/tech/aws.png"
import nextjs from "../Assets/tech/nextjs.png"
import numpy from "../Assets/tech/numpy.svg"
import openCV from "../Assets/tech/openCV.png"
import mySQL from "../Assets/tech//mySQL.png"
import pandas from "../Assets/tech/pandas.svg"
import powerBI from "../Assets/tech/powerBI.png"

const Skills = () => {
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Numpy",
      icon: numpy,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "Power BI",
      icon: powerBI,
    },
    {
      name: "Open CV",
      icon: openCV,
    },
    {
      name: "mySQL",
      icon: mySQL,
    },
    {
      name: "AWS",
      icon: aws,
    },
  ];

  return (
    <div className='bg-[#050816] px-10 laptop:px-36 py-10 pt-20' id="skillsComponent">
        <p className="text-tSecondary text-xl tracking-wider mb-2">WHAT I HAVE LEARNT SO FAR</p>
        <h2 className="text-white text-5xl font-black">Skills</h2>

        <div className="flex flex-row flex-wrap justify-center gap-10 my-10">
          {technologies.map((technology) => {
            return(
              <div className="" key={technology.name}>
                <div className="icon w-24 h-24">
                  <img src={technology.icon} className='aspect-square object-contain' alt="Skill" />
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Skills