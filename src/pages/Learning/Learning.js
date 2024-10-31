
import'./Learning.css'
import React, { useState } from 'react';

import { FaCaretDown, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { GiPublicSpeaker } from 'react-icons/gi';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineGroups } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <li className="dropdown" onClick={toggleDropdown}>
      {title} <FaCaretDown />
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};



export default function Learning() {

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const [isMobile, setIsMobile] = useState(false);


  const data = [
    { bon: 'AP2TU2CD6T', type: 'PMI', intern: 'PMI' },
    { bon: 'AP2TU2CD6T', type: 'PMI', intern: 'PMI' },
    { bon: 'AP2TU2CD6T', type: 'PMI', intern: 'PMI' },
    { bon: 'AP2TU2CD6T', type: 'PMI', intern: 'PMI' },
  ];

  const assignees = [
    'Multiple booking',
    'Fabrice Kahn',
    'Sibe Hamder',
    'Sureena Saluja',
    'Kashif Saleem Bhatti',
    'Alban Richard Chaptal',
  ];


  
  const categories = [
    { label: 'Category 1', link: '#category1' },
    { label: 'Category 2', link: '#category2' },
    { label: 'Category 3', link: '#category3' }
  ];

  const resources = [
    { label: 'Remote ClassRoom', link: '/RemoteClass' },
    { label: 'FileSharing', link: '/FileSharing' },
    { label: 'Vouchers', link: '/Vouchers' },
    { label: 'Help', link: '#resource3' },
    { label: 'Notepad', link: '#resource3' },
  ];

  const FollowUp = [
    { label: 'Dashboard', link: '/Dashboard' },
    { label: 'Signatures', link: '/Signatures' },
    { label: 'Course Program', link: '/Course Program' },
    { label: 'Satisfaction Survey', link: '/Satisfaction Survey' },
   
  ];


  const cards = [
    {
      title: 'Figma UI UX Design..',
      image: 'https://www.aqskill.com/wp-content/uploads/2022/02/5809368-2-scaled.jpg',
      time: '08 hr 12 mins',
      link: '/FigmaUi'
    },
    {
      title: 'Learn With Shoaib',
      image: 'https://blog.scitraining.com/wp-content/uploads/2019/04/How-to-learn-photography-online.jpg',
      time: '06 hr 3 mins',
        link: '/FigmaUi'
    },
    {
      title: 'Building User Interface..',
      image: 'https://tse2.mm.bing.net/th?id=OIP.4xEaHSmo-nTL6wHra7L05wHaFS&pid=Api&P=0&h=220',
      time: '01 hr 2 mins',
        link: '/FigmaUi'
    },

    {
        title: 'Figma UI UX Design..',
        image: 'https://www.aqskill.com/wp-content/uploads/2022/02/5809368-2-scaled.jpg',
        time: '08 hr 12 mins',
          link: '/FigmaUi'
      },
      {
        title: 'Learn With Shoaib',
        image: 'https://blog.scitraining.com/wp-content/uploads/2019/04/How-to-learn-photography-online.jpg',
        time: '06 hr 3 mins',
          link: '/FigmaUi'
      },
      {
        title: 'Building User Interface..',
        image: 'https://tse2.mm.bing.net/th?id=OIP.4xEaHSmo-nTL6wHra7L05wHaFS&pid=Api&P=0&h=220',
        time: '01 hr 2 mins',
          link: '/FigmaUi'
      },

      {
        title: 'Figma UI UX Design..',
        image: 'https://www.aqskill.com/wp-content/uploads/2022/02/5809368-2-scaled.jpg',
        time: '08 hr 12 mins',
          link: '/FigmaUi'
      },
      {
        title: 'Learn With Shoaib',
        image: 'https://blog.scitraining.com/wp-content/uploads/2019/04/How-to-learn-photography-online.jpg',
        time: '06 hr 3 mins',
          link: '/FigmaUi'
      },
      {
        title: 'Building User Interface..',
        image: 'https://tse2.mm.bing.net/th?id=OIP.4xEaHSmo-nTL6wHra7L05wHaFS&pid=Api&P=0&h=220',
        time: '01 hr 2 mins',
          link: '/FigmaUi'
      },
  ];


  return (

 
      
     <div>

<nav className="navbar">
        <div className="logo">Logo</div>
        <div className="nav-toggle" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
       
        <ul className={`nav-links ${navOpen ? 'nav-open' : ''}`}>
        <li><Link to="/Home">Home</Link></li>
          <Dropdown title="Categories" items={categories} />
          <Dropdown title="Resources" items={resources} />
          <Dropdown title="Follow Up" items={FollowUp} />
          {/* <li>Follow up</li> */}
          <li>Teach</li>
          <li><Link to="/Features">Features</Link></li>
        </ul>
        <div className="search-bar-container">
          {/* <label htmlFor="search-bar" className="search-label">Search</label> */}
          <input type="text" id="search-bar" placeholder="Search" className="search-bar" />
          {/* <FaSearch className="search-icon" /> */}
        </div>
      </nav>

   
   
      <div className="tepically-section">
                <div className="content">
                    <h1>My Learning</h1>
                    <p>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
                </div>
            </div>

            <div className="container-learn">
  <div className="cards">
    {cards.map((card, index) => (
      <div 
        key={index} 
        className="card" 
        onClick={() => window.location.href = card.link} // Replace 'card.link' with the URL you want to navigate to
        style={{ cursor: 'pointer' }} // Optional: Change the cursor to pointer to indicate clickability
      >
        <img src={card.image} alt={card.title} />
        <div className="card-content">
          <h2 className="card-title">{card.title}</h2>
          <div className="card-time">{card.time}</div>
        </div>
      </div>
    ))}
  </div>
  <div className="pagination">
    <button>&lt;</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>&gt;</button>
  </div>
</div>

 

   


    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p className='footer-p'>Top learning experiences that create more talent in the world.</p>
        </div>
        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Social</h4>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Dribble</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='footer-p'>&copy; 2024 Courses. All rights reserved.</p>
        <div className="social-icons">
          {/* Replace '#' with your actual social media links */}
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </footer>
    </div>
     



     
      
     

      
    
   
  );
}
