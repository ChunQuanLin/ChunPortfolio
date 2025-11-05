/*
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Globe, Database } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      live: 'https://demo.com',
      category: 'Full-Stack'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://demo.com',
      category: 'Web App'
    },
    {
      title: 'AI Image Recognition',
      description: 'Machine learning application that uses computer vision to identify and classify objects in images with high accuracy.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      github: 'https://github.com',
      live: 'https://demo.com',
      category: 'AI/ML'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations and beautiful UI design.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
      technologies: ['React', 'Framer Motion', 'CSS3', 'JavaScript'],
      github: 'https://github.com',
      live: 'https://demo.com',
      category: 'Frontend'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with interactive maps, detailed forecasts, and location-based services.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=250&fit=crop',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      github: 'https://github.com',
      live: 'https://demo.com',
      category: 'API Integration'
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media platforms with data visualization, trend analysis, and reporting features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      technologies: ['Next.js', 'D3.js', 'Node.js', 'Redis'],
      github: 'https://github.com',
      live: 'https://demo.com',
      category: 'Data Analytics'
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full-Stack':
        return <Code />;
      case 'Web App':
        return <Globe />;
      case 'AI/ML':
        return <Database />;
      default:
        return <Code />;
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-category">
                  {getCategoryIcon(project.category)}
                  <span>{project.category}</span>
                </div>
                
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};
*/
