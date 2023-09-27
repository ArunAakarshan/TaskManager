import React from 'react';
import im1 from '../assets/Left.jpg';
import im2 from '../assets/Right.jpg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-us-page">
      <h1>About Us</h1>
      <div className="image-text-container">
        <img src={im1} alt="1" className="about-image about-left"
        />
        <p>
          <b><strong>Our Story</strong></b>
          <br />
          <p className='words'>
          Building a task management app involves designing and developing software that enables individuals and teams 
          to organize, track, and complete tasks efficiently. It starts with the identification of user needs and 
          objectives, followed by designing a user-friendly interface. Key features typically include task creation, 
          categorization, setting due dates, priority levels, and notifications. The app should offer both web and
           mobile versions for accessibility. The development process includes frontend and backend development, 
           database integration, and rigorous testing to ensure reliability and security. 
          Continuous improvement through user feedback and updates is essential.
        </p>
        </p>
      </div>
      <div className="image-text-container">
        <img
          src={im2}
          alt="2"
          className="about-image about-right"
        />
        <p>
          <b><strong>Our Mission</strong></b>
          <br />
          <p className='words'>
          The mission of our task management app is to enhance users' productivity, reduce stress, and foster 
          collaboration. We aim to simplify task management by providing a platform where users can seamlessly 
          create, organize, and prioritize tasks. Our mission is to empower individuals and teams to achieve 
          their goals efficiently. We prioritize user experience, ensuring that the app is easy to use and 
          adaptable to various workflows. Security and scalability are at the core of our mission to ensure 
          the app can grow with users' needs. Ultimately, our goal is to help people manage their tasks 
          effectively, both in their personal and professional lives, leading to improved work-life balance and accomplishments.
        </p>
        </p>
        <Link to="/Tasklist">
        <button className="back-button">Back to Tasks</button>
      </Link>
      </div>
    </div>
  );
}

export default About;
