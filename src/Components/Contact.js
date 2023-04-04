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

  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [msgError, setMsgError] = useState("")
  const [successMsg, setSuccessMsg] = useState("")

  const formDataValidation = () => {
    if(formData.name === ""){
      setNameError("Please enter your name")
      return true
    }
    else if(formData.name.length < 3){
      setNameError("Please enter your full name")
      return true
    }

    if(formData.email === ""){
      setEmailError("Please enter your email")
      return true   
    }
    else if(!(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(formData.email))){
      setEmailError("Please enter a valid email")
      return true
    }

    if(formData.message === ""){
      setMsgError("Your message is empty!")
      return true
    }

    return false
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    formDataValidation();
    if(formDataValidation()){
      return setTimeout(() => {
        setNameError(""); setEmailError(""); setMsgError("");
      }, 4000)
    }

      setFormLoading(true);

      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          {
            from_name: formData.name,
            to_name: "Amandeep Singh",
            from_email: formData.email,
            to_email: `${process.env.REACT_APP_TO_EMAIL}`,
            message: `"from:" ${formData.email}, "message:" ${formData.message}`,
          },
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          () => {
            setFormLoading(false);
            setSuccessMsg("Thank you! I will get back to you as soon as possible.");
            setTimeout(() => {setSuccessMsg("")}, 6000)
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setFormLoading(false);
  
            setSuccessMsg("Oh Snap! Something went wrong. Please try again.");
            setTimeout(() => {setSuccessMsg("")}, 6000)
          }
        );

  }

  return (
    <div className="contact text-white" id="contactComponent">
      <div
        className={`flex laptop:flex-row flex-col-reverse gap-10 overflow-hidden px-10 laptop:px-36 py-10 pt-20`}
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
                autoComplete='off'
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
              <p>{nameError}</p>
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='text'
                name='email'
                value={formData.email}
                onChange={handleChange}
                autoComplete='off'
                placeholder="What's your email address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
              <p>{emailError}</p>
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={formData.message}
                onChange={handleChange}
                autoComplete='off'
                placeholder='What you want to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
              <p>{msgError}</p>
            </label>
            
            <p>{successMsg}</p>
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
    </div>
  )
}

export default SectionWrapper(Contact, "contact")

/*


*/