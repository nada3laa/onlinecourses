
import'./CoursesSignatures.css'
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
export default function CoursesSignatures() {

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

  const handleSignClick = () => {
    navigate('/SignPage'); // replace with the actual route you want to navigate to
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
  
    <div className="table-container">
      <table className="signature-table">
        <thead>
          <tr>
            <th></th>
            <th>25/03 Morning</th>
            <th>25/03 Afternoon</th>
            <th>26/03 Morning</th>
            <th>26/03 Afternoon</th>
            <th>27/03 Morning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Trainer: Ali Ramadan</td>
            <td>Ali Ramadan</td>
            <td><button onClick={handleSignClick}>Sign</button></td>
            <td><button onClick={handleSignClick}>Sign</button></td>
            <td><button onClick={handleSignClick}>Sign</button></td>
            <td><button onClick={handleSignClick}>Sign</button></td>
          </tr>
          <tr>
            <td>Intern: Febrice Kahn</td>
            <td></td>
            <td><button onClick={handleSignClick}>Sign</button></td>
            <td><button onClick={handleSignClick}>Sign</button></td>
            <td><button onClick={handleSignClick}>Sign</button></td>
            <td><button onClick={handleSignClick}>Sign</button></td>
          </tr>
        </tbody>
      </table>
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
