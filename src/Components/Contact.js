import React, {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"

import EarthCanvas from './canvas/Earth'
import SectionWrapper from "./hoc/SectionWrapper";
import { slideIn } from './utils/motion';

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [formLoading, setFormLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Amandeep Singh",
          from_email: formData.email,
          to_email: "13asramgarhia@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setFormLoading(false);
          console.error(error);

          alert("Oh Snap! Something went wrong. Please try again.");
        }
      );
  }

  return (
    <div
      className={`flex laptop:flex-row flex-col-reverse gap-10 overflow-hidden bg-[#050816] px-10 laptop:px-36 py-10 pt-20`}
      id="#contactComponent"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className="text-tSecondary text-xl tracking-wider uppercase mb-2">Get in touch</p>
        <h3 className="text-white font-black text-5xl">Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              autoComplete='false'
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {formLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
