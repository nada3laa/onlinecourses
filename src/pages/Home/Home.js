import React, { useState } from 'react';
import Slider from 'react-slick';
import './Home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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

const Home = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

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

  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      text: "Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.",
      author: "Jacob Jones",
      title: "Student, National University",
      image: "https://teachertraining.ie/wp-content/uploads/2021/05/project-based-learning.jpg"
    },
    {
      text: "This platform has helped me advance my skills and career significantly. Highly recommended!",
      author: "Emily Smith",
      title: "Professional Developer",
       image: "https://teachertraining.ie/wp-content/uploads/2021/05/project-based-learning.jpg"
    },
    {
      text: "An excellent resource for anyone looking to improve their knowledge and skills.",
      author: "Michael Brown",
      title: "Software Engineer",
       image: "https://teachertraining.ie/wp-content/uploads/2021/05/project-based-learning.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
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
      
 

      <section className="skills">
        <div className="skill">
          <GiPublicSpeaker className="skill-icon" />
          <h3>Public Speaking</h3>
        </div>
        <div className="skill">
          <FaGraduationCap className="skill-icon" />
          <h3>Career-Oriented</h3>
        </div>
        <div className="skill">
          <MdOutlineGroups className="skill-icon" />
          <h3>Creative Thinking</h3>
        </div>
      </section> 
   <div className="skill-section" style={{backgroundColor:"#fff"}}>
      <div className="text-content">
        <h1>Up Your <span className="highlight">Skills</span><br></br> To <span className="highlight">Advance</span> Your<br></br> Career Path</h1>
        <p>Provides you with the latest online learning system and material<br></br> that help your knowledge growing.</p>
        <div className="buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Get free trial</button>
        </div>
        {/* <div className="stats">
          <div className="stat-item">
            <span className="stat-number">2K+</span>
            <span className="stat-description">Video Courses</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5K+</span>
            <span className="stat-description">Online Courses</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">250+</span>
            <span className="stat-description">Tutors</span>
          </div>
        </div> */}
      </div>
      <div className="image-content">
        <img src='	https://lec.qa/wp-content/uploads/2020/12/College-Girl.png' alt="Learning" />
      </div>
    </div>
      
 
        <div className="container-section">
        <h1 className='Fostering '>Fostering a playful & engaging learning environment</h1>
      <div className="sections">
        <div className="section">
          <div className="section-header">
            <div className="icon learning"></div>
            <h2 className='Learning'>Learning</h2>
          </div>
          <p className='topic-p'>Access your current learning activities<br></br> are courses contact</p>
          <a href="/Learning" className="learn-more">Learn More</a>
        </div>
        <div className="section">
          <div className="section-header">
            <div className="icon history"></div>
            <h2 className='Learning'>History</h2>
          </div>
          <p className='topic-p'>Classes in development that cover<br></br> the most recent  in web.</p>
          <a href="/Learning" className="learn-more">Learn More</a>
        </div>
        <div className="section">
          <div className="section-header">
            <div className="icon order"></div>
            <h2 className='Learning'>Order</h2>
          </div>
          <p className='topic-p'>Retrieve your copies certificates<br></br> and receipts</p>
          <a href="/Learning" className="learn-more" >Learn More</a>
        </div>
      </div>
      <div className="testimonial-slider">
        <div className="testimonial" key={currentSlide}>
          <p>"{testimonials[currentSlide].text}"</p>
          <div className="testimonial-author">
            <img src={testimonials[currentSlide].image}  alt={testimonials[currentSlide].author} />
            <div>
              <h3>{testimonials[currentSlide].author}</h3>
              
              <h5>{testimonials[currentSlide].title}</h5>
            </div>
          </div>
        </div>
        <div className="testimonial-navigation">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={index === currentSlide ? "dot active" : "dot"}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
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
};

export default Home;
