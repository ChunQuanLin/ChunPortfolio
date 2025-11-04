import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, Eye, Download } from 'lucide-react';
import './Photography.css';

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'landscape', name: 'Landscape' },
    { id: 'portrait', name: 'Portrait' },
    { id: 'street', name: 'Street' },
    { id: 'nature', name: 'Nature' }
  ];

  const photos = [
    {
      id: 1,
      src: 'https://live.staticflickr.com/65535/54902490125_3b72c81668_b.jpg',
      title: 'Mountain Vista',
      category: 'landscape',
      likes: 245,
      views: 1200
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop',
      title: 'Portrait Study',
      category: 'portrait',
      likes: 189,
      views: 890
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      title: 'Urban Life',
      category: 'street',
      likes: 156,
      views: 756
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      title: 'Forest Path',
      category: 'nature',
      likes: 203,
      views: 1100
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      title: 'Sunset Peak',
      category: 'landscape',
      likes: 312,
      views: 1500
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      title: 'Creative Portrait',
      category: 'portrait',
      likes: 178,
      views: 920
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      title: 'City Lights',
      category: 'street',
      likes: 267,
      views: 1300
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      title: 'Wilderness',
      category: 'nature',
      likes: 198,
      views: 980
    }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <section id="photography" className="section photography-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Photography</h2>
          <p className="section-subtitle">Capturing moments, telling stories</p>
        </motion.div>

        <motion.div
          className="photography-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="intro-content">
            <Camera size={48} className="intro-icon" />
            <h3>Visual Storytelling</h3>
            <p>
              Photography is my way of capturing the world's beauty and sharing stories 
              through visual narratives. From landscapes to portraits, each image tells 
              a unique story and evokes emotions.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(photo)}
              >
                <img src={photo.src} alt={photo.title} />
                <div className="photo-overlay">
                  <div className="photo-info">
                    <h4>{photo.title}</h4>
                    <div className="photo-stats">
                      <span><Heart size={16} /> {photo.likes}</span>
                      <span><Eye size={16} /> {photo.views}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="photography-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View More on Instagram
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <div className="lightbox-actions">
                  <button className="action-btn">
                    <Heart size={20} />
                    {selectedImage.likes}
                  </button>
                  <button className="action-btn">
                    <Download size={20} />
                    Download
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
