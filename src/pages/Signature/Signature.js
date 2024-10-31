
import'./Signature.css'
import React, { useState } from 'react';

import { FaCaretDown, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { GiPublicSpeaker } from 'react-icons/gi';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineGroups } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
export default function Signatures() {

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

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CoursesSignatures'); // Replace with the path of the page you want to navigate to
  };
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

      <div className="vouchers-container">
      <h2 className="vouchers-title">Signatures</h2>
    </div>
    {/* Table  */}

    <div className="signatures-info">
      <h2 className="table-title">Signatures Information</h2>
      <div className="info-row row-1">
        <div className="info-label">Training Ref.</div>
        <div className="info-value">GK2387</div>
      </div>
      <div className="info-row row-2">
        <div className="info-label">Course title</div>
        <div className="info-value">PMP exam prep Bootcamp based on PMBOK Guide - Fifth Edition</div>
      </div>
      <div className="info-row row-1">
        <div className="info-label">Period</div>
        <div className="info-value">From 2024-03-25 To 2024-03-29</div>
      </div>
      <div className="info-row row-2">
        <div className="info-label">Length</div>
        <div className="info-value">5 Day(s) or 35 Hour(s)</div>
      </div>
      <div className="info-row row-1">
        <div className="info-label">Site</div>
        <div className="info-value">Virtual Center FR</div>
      </div>
      <div className="info-row row-2">
        <div className="info-label">Trainer</div>
        <div className="info-value">Ali Ramadan</div>
      </div>
      <div className="button-row">
      <button className="help-button" onClick={handleClick}>
        Help On Signatures
      </button>
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
