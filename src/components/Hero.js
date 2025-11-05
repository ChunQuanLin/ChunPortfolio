import React from 'react';
import {motion} from 'framer-motion';
import {ArrowDown, CameraIcon, Mail} from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({behavior: 'smooth'});
    };

    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-overlay"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className="hero-text"
                    >
                        <h1 className="hero-title">
                            Hi, I'm <span className="highlight">Chun Lin</span>
                        </h1>
                        <h2 className="hero-subtitle">
                            A Photographer
                        </h2>
                        <p className="hero-description">
                            My passion for photography started when I was a young child where I developed a love for the
                            visual arts. It started with drawing via pen and paper and bloomed in 2020 when I got my first dedicated
                            camera. From then
                            on, I decided I will record as many of life's moments as possible because precious
                            memories make the best treasure.
                            <br>
                            If you are interested in joining me in photography, such as a photowalk for example, or want
                            me to take pictures for you, please reach out!
                        </p>

                        <div className="hero-buttons">
                            <motion.a
                                href="#photography"
                                className="btn btn-primary"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                View My Photos
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="btn btn-secondary"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                My Contact Info
                            </motion.a>
                        </div>

                        <div className="hero-social">
                            <motion.a
                                href="https://www.flickr.com/photos/203782998@N04/albums/with/72177720330099670"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                                <CameraIcon size={24}/>
                            </motion.a>
                            <motion.a
                                href="mailto:chunqlin@icloud.com"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                                <Mail size={24}/>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="scroll-indicator"
                animate={{y: [0, 10, 0]}}
                transition={{duration: 2, repeat: Infinity}}
                onClick={scrollToAbout}
            >
                <ArrowDown size={24}/>
            </motion.div>
        </section>
    );
};

export default Hero;
