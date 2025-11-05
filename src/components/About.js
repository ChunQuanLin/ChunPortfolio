/*
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Camera, Coffee, Globe } from 'lucide-react';
import './About.css';

const About = () => {
  const interests = [
    { icon: <Code />, title: 'Coding', description: 'Building elegant solutions' },
    { icon: <Camera />, title: 'Photography', description: 'Capturing life\'s moments' },
    { icon: <Coffee />, title: 'Coffee', description: 'Fuel for creativity' },
    { icon: <Globe />, title: 'Travel', description: 'Exploring new perspectives' }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm a passionate software engineer with a creative eye for photography. 
              I believe in the power of technology to solve real-world problems and 
              the beauty of capturing moments that tell stories.
            </p>
            
            <p>
              With several years of experience in full-stack development, I specialize 
              in creating scalable web applications and intuitive user experiences. 
              My background in both engineering and visual arts gives me a unique 
              perspective on how to build products that are both functional and beautiful.
            </p>

            <p>
              When I'm not coding or behind the camera, you'll find me exploring new 
              technologies, contributing to open-source projects, or planning my next 
              photography adventure.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>1000+</h4>
                <p>Photos Captured</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-interests"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Interests & Hobbies</h3>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="interest-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="interest-icon">
                    {interest.icon}
                  </div>
                  <h4>{interest.title}</h4>
                  <p>{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
*/
