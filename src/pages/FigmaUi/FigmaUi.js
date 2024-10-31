
import'./FigmaUi.css'
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
export default function FigmaUi() {

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
    

 
      <div className="course-card">
        <div className="course-info">
          <h1>Figma UI UX Design</h1>
          <p style={{fontFamily: "Inter",
fontSize: "24px",
fontWeight: "400",
lineHeight: "24px",
textAlign: "left",
}}>
            Use Figma to get a job in UI Design, User Interface, User Experience design.
          </p>
          <p style={{fontFamily: "Inter",
fontSize: "20px",
fontWeight: "400",
lineHeight: "24px",
textAlign: "left",
color:"rgba(221, 221, 221, 1)",
}}>
            Become a UX/UI Designer! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS.
          </p>
          <div className="rating">
            <span className="badge">Bestseller</span>
            <span className="stars">4.5</span>
            <span className="stars">★</span>
          </div>
          <p className="creators">
            Created by Andrei Neagoie, Daniel Schifano
          </p>
        </div>
        <div className="course-image">
          <img src='https://www.aqskill.com/wp-content/uploads/2022/02/5809368-2-scaled.jpg' alt="Figma Icon" />
         
        </div>
      </div>

      <div className="learn-section">
      <h2>What you'll learn</h2>
      <div className="learn-items">
        <div className="learn-column">
          <div className="learn-item">
            <span className="checkmark">✔</span> 
            Build beautifully designed web and mobile projects for your customers using modern tools used by top companies in 2024
          </div>
          <div className="learn-item">
            <span className="checkmark">✔</span> 
            Includes 100+ assets and premium design templates that you can keep and use to customize for all your future projects
          </div>
          <div className="learn-item">
            <span className="checkmark">✔</span> 
            Get hired as a Designer or become a freelancer that can work from anywhere and for anyone. Designers are in high demand!
          </div>
        </div>
        <div className="learn-column">
          <div className="learn-item">
            <span className="checkmark">✔</span> 
            Master Figma for your design needs then learn to convert your designs into a live HTML and CSS website
          </div>
          <div className="learn-item">
            <span className="checkmark">✔</span> 
            Have an amazing design portfolio customized and professionally completed by the end of the course (we provide it for you!)
          </div>
          <div className="learn-item">
            <span className="checkmark">✔</span> 
            Master both Web and Mobile design principles and how to go from sketching to fully fledged high fidelity designs that will wow customers
          </div>
        </div>
      </div>
      <div className="voucher-section">
        <label>Enter your voucher</label>
        <input type="text" placeholder="Enter your voucher" />
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
