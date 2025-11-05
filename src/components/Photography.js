import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Camera} from 'lucide-react';
import './Photography.css';

const Photography = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        {id: 'all', name: 'All'},
        {id: 'landscape', name: 'Landscape'},
        {id: 'humans', name: 'Humans'},
        {id: 'life', name: 'Life'},
        {id: 'animals', name: 'Animals'},
        {id: 'misc', name: 'Misc'}
    ];

    const photos = [
        {
            id: 1,
            src: 'https://live.staticflickr.com/65535/54901311492_f0d93b1306_b.jpg',
            title: 'Unknown Dog',
            category: 'animals'
        },
        {
            id: 2,
            src: 'https://live.staticflickr.com/65535/54902415803_ba6cc6aeda_b.jpg',
            title: 'NYC Pigeon',
            category: 'animals'
        },
        {
            id: 3,
            src: 'https://live.staticflickr.com/65535/54902433459_287117828c_b.jpg',
            title: 'NYC Bird and Puddle',
            category: 'animals'
        },
        {
            id: 4,
            src: 'https://live.staticflickr.com/65535/54902416393_9f412390db_b.jpg',
            title: 'Caddo Lake',
            category: 'animals'
        },
        {
            id: 5,
            src: 'https://live.staticflickr.com/65535/54902181456_77ef3ede2e_b.jpg',
            title: 'Colorado Bend State Park',
            category: 'animals'
        },
        {
            id: 6,
            src: 'https://live.staticflickr.com/65535/54902433534_39fe9c4e7e_b.jpg',
            title: 'Denver Deer',
            category: 'animals'
        },
        {
            id: 7,
            src: 'https://live.staticflickr.com/65535/54902433644_c5de956a39_b.jpg',
            title: 'New Mexico',
            category: 'life'
        },
        {
            id: 8,
            src: 'https://live.staticflickr.com/65535/54902181281_99dc23d3cc_b.jpg',
            title: 'NoiseRot Festival',
            category: 'life'
        },
        {
            id: 9,
            src: 'https://live.staticflickr.com/65535/54902490055_a2fac4b033_b.jpg',
            title: 'Live Jazz Revelers Hall',
            category: 'life'
        },
        {
            id: 10,
            src: 'https://live.staticflickr.com/65535/54901311457_412c547e76_b.jpg',
            title: 'Live Jazz Revelers Hall Stare',
            category: 'life'
        }
    ];

    const filteredPhotos = activeCategory === 'all'
        ? photos
        : photos.filter(photo => photo.category === activeCategory);

    return (
        <section id="photography" className="section photography-section">
            <div className="container">
                {/*<motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <h2 className="section-title">Photography</h2>
                    <p className="section-subtitle">Capturing life</p>
                </motion.div>*/}

                <motion.div
                    className="photography-intro"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                    viewport={{once: true}}
                >
                    <div className="intro-content">
                        <Camera size={48} className="intro-icon"/>
                        <p>
                            Most of these photos are my personal photos taken over the past few years. They're either
                            from trips to a new location or an event, such as a concert. For the most part, I do not
                            stay
                            in one place to take my photos so a lot of them are unplanned and completely taken in the
                            moment. A few photos are staged and I hope to get more of those in the near future. Almost
                            all the photos have been taken with my Fuji XT4 camera but I just got the GFX 50Sii so newer
                            photos will come from either camera. On occasion, when I need the speed and size, I will use
                            my Ricoh GRiii. While I typically just use natural light for my photos to keep my bag
                            lighter and because I am outside most of the time, I do have a Godox flash and some Neewer
                            studio lights. I do not have a personal studio but I am very open to shooting anywhere and
                            everywhere, not to mention renting a place is also easily doable. I hope you enjoy these as
                            much as I did taking them!
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="category-filters"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.3}}
                    viewport={{once: true}}
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                <motion.div
                    className="photo-gallery"
                    layout
                >
                    <AnimatePresence mode="wait">
                        {filteredPhotos.map((photo, index) => (
                            <motion.div
                                key={photo.id}
                                className="photo-item"
                                layout
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.8}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                whileHover={{scale: 1.05}}
                                onClick={() => setSelectedImage(photo)}
                            >
                                <img src={photo.src} alt={photo.title}/>
                                <div className="photo-overlay">
                                    <div className="photo-info">
                                        <h4>{photo.title}</h4>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    className="photography-cta"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.8, delay: 0.6}}
                    viewport={{once: true}}
                >
                    <a href="https://www.flickr.com/photos/203782998@N04/albums/" target="_blank"
                       rel="noopener noreferrer"
                       className="btn btn-secondary">
                        View More on Flickr
                    </a>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="lightbox-content"
                            initial={{scale: 0.8, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            exit={{scale: 0.8, opacity: 0}}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImage.src} alt={selectedImage.title}/>
                            <div className="lightbox-info">
                                <h3>{selectedImage.title}</h3>
                                <div className="lightbox-actions">
                                    <button className="action-btn" onClick={() => window.open(selectedImage.src)}>
                                        Source on Flickr
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Photography;
