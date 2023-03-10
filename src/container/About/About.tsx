import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { images } from '../../constant'
import AppWrap from '../../wrapper/AppWrap'

const abouts = [
  {
    title:"Frontend Developer",
    description:'now meet with the web developer',
    imgURL:images.about01
  },
  {
    title:"Backend Developer",
    description:'now meet with the web developer',
    imgURL:images.about02
  },
  {
    title:"Competitve Programming",
    description:'We also do competitive programming here',
    imgURL:images.about03
  },

]

const About = () => {
  return (
    <>
    <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title + index}
        >
          <img src={about.imgURL} alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
        </motion.div>
      ))}
    </div>
  </>
  )
}

export default AppWrap(About,'about','');