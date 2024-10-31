import React, { useState } from 'react';
import './Register.css';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, perform login or other actions
      console.log('Form submitted');
      navigate('/Home');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="register-page">
      <div className="background-section"></div>
      <div className="form-section">
        <div>
          <h2>Member Login</h2>
          <p>Please fill in your basic info</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                style={{ width: "500px" }}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-group">
              <input
                style={{ width: "500px" }}
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="forget-password">
              <a href="#">Forget Password?</a>
            </div>
            <button type="submit">LOGIN</button>
          </form>
          <div className="social-login">
            <p style={{ fontFamily: "Inter", fontSize: "24px", fontWeight: "400", lineHeight: "29.05px", textAlign: "center", color: "#14279B" }}>OR</p>
            <div className="icons">
              <div className="icon google">
                <FaGoogle />
              </div>
              <div className="icon facebook">
                <FaFacebookF />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
