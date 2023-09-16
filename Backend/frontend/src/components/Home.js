import React from 'react'

export default function Home() {
  return (
    <div>
      <>
      <div className="carousel-container">
        <div className="carousel">
          <img
            className="carousel-slide"
            src="https://source.unsplash.com/1600x200?learning,education"
            alt="Image 1"
          />
          <img
            className="carousel-slide"
            src="https://source.unsplash.com/1600x200?student,school"
            alt="Image 2"
          />
          <img
            className="carousel-slide"
            src="https://source.unsplash.com/1600x200?india,school"
            alt="Image 3"
          />
        </div>
      </div>

      <section className="hero">
        <h1>Welcome to E-Learning</h1>
        <p>Learn at your own pace, anytime, anywhere.</p>
        <a href="#" className="cta-button">
          Get Started
        </a>
      </section>

      <section className="company-info">
        <div className="company-text">
          <h2>About Our Company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            commodo eget est non viverra. Nullam varius nisl vel turpis
            vehicula, at posuere est tristique. Sed eu mauris nec lorem aliquam
            laoreet vel id lorem.
          </p>
          <p>
            Proin euismod bibendum tellus, in laoreet odio gravida eu. Sed sit
            amet dignissim ante. Fusce et sapien ac libero venenatis ultrices
            non eget dui.
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
    </>
    </div>
  )
}
