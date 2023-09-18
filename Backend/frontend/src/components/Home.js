import React, { useState, useEffect } from 'react';
import './Home.css'
export default function Home() {
  /*const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image URLs for the carousel
  const carouselImages = [
    'https://source.unsplash.com/1600x200?learning,education',
    'https://source.unsplash.com/1600x200?student,school',
    'https://source.unsplash.com/1600x200?india,school',
  ];

  // Function to advance to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  // Automatically advance to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);*/

  // JavaScript to trigger animation for the About the Company section and images
  useEffect(() => {
    const companyInfo = document.querySelector('.company-info');
    const companyPhotos = document.querySelectorAll('.company-photos img');

    companyInfo.style.opacity = '1';
    companyInfo.style.transform = 'translateY(0)';

    companyPhotos.forEach((photo) => {
      photo.style.opacity = '1';
      photo.style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <div>
      <div className="carousel-container-static">
      <img
        src="https://i.ibb.co/RgJDNq0/Banner.png"
        alt="Static Image"
        className="static-image"
      />

      
      </div>

      <section className="hero">
        <h1>Welcome to RoamEd</h1>
        <p>Learn at your own pace, anytime, anywhere.</p>
        <p>Education in motion.</p>
        <a href="#" className="cta-button">
          Get Started
        </a>
      </section>

      <section className="company-info">
        <div className="company-text">
          <h2>About RoamEd</h2>
          <p>
          At RoamEd, we are dedicated to making a positive impact on the lives of tribal children who face unique challenges due to their nomadic lifestyles. Our mission is to provide a top-notch educational platform that empowers these young learners to access quality education, regardless of their geographic mobility.
          </p>
          <p>
          Our platform is designed to be flexible and accessible, allowing tribal children to continue their studies seamlessly while relocating. We're committed to bridging the educational gap and empowering these young learners for a brighter future.
          </p>
          <blockquote>
            <p>
              "Education is the most powerful weapon which you can use to change
              the world." - Nelson Mandela
            </p>
          </blockquote>
        </div>
        <div className="company-photos">
          <img
            src="https://source.unsplash.com/300x300?education"
            alt="Company Photo 1"
          />
          <img
            src="https://source.unsplash.com/300x300?books"
            alt="Company Photo 2"
          />
        </div>
      </section>
    </div>
  );
}
