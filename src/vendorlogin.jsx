
// API endpoint
const LOGIN_API = 'http://10.10.0.218:5000/auth/login/vendor';

async function loginVendor(email, password) {
  const response = await fetch(LOGIN_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return response;
}

import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './assets/image 3.png'
import applink from './assets/applink.png';

function vendorlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <header className="signup-page-header" style={{
  width: '1440px',
  height: '120px',
  transform: 'rotate(0deg)',
  opacity: 1,
  background: 'rgba(255, 255, 255, 1)',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 10
}}>
  <img 
    src={logo} 
    alt="SuperApp Logo"
    style={{
      width: '206px',
      height: '92px',
      position: 'absolute',
      top: '24px',
      left: '59px',
      transform: 'rotate(0deg)',
      opacity: 1
    }}
  />
  <div className="header-content">
    <nav className="header-nav">
      <ul className="nav-links">
        

        <li>
          <a href="#" className="nav-link" style={{
            width: '156px',
            height: '47px',
            position: 'absolute',
            top: '48px',
            left: '760px',
            transform: 'rotate(0deg)',
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            background: 'white',
            color: '#1172B6',
            border: 'none',
            borderRadius: '4px'
          }}>Register Now</a>
        </li>
        <li>
          <a href="#" className="nav-link" style={{
            width: '156px',
            height: '47px',
            position: 'absolute',
            top: '48px',
            left: '986px',
            transform: 'rotate(0deg)',
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            background: 'white',
            color: '#1172B6',
            border: 'none',
            borderRadius: '4px'
          }}>Contact Us</a>
        </li>
        <li>
          <a href="#" className="nav-link" style={{
            width: '180px',
            height: '47px',
            position: 'absolute',
            top: '48px',
            left: '1178px',
            transform: 'rotate(0deg)',
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            background: 'white',
            color: '#1172B6',
            border: 'none',
            borderRadius: '4px'
          }}>Vendor Login</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

      {/* Background Section */}
      <div className="background-section" style={{
        width: '1440px',
        height: '901px',
        position: 'absolute',
        top: '123px',
        left: '0px',
        transform: 'rotate(0deg)',
        opacity: 1,
        background: 'linear-gradient(360deg, #1172B6 5.29%, #073250 55.29%)'
      }}>
        {/* Welcome Back, Partner 👋 */}
        <div style={{
          width: '516px',
          height: '42px',
          position: 'absolute',
          top: '134px',
          left: '88px',
          transform: 'rotate(0deg)',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '38px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: 'rgba(255, 255, 255, 1)',
          display: 'flex',
          alignItems: 'center',
          verticalAlign: 'middle',
          zIndex: 11
        }}>
          Welcome Back, Partner 👋
        </div>
        {/* Manage orders, inventory, and earnings */}
        <div style={{
          width: '596px',
          height: '136px',
          position: 'absolute',
          top: '207px',
          left: '88px',
          transform: 'rotate(0deg)',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '50px',
          lineHeight: '120%',
          letterSpacing: '0%',
          color: 'rgba(255, 255, 255, 1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          verticalAlign: 'middle',
          zIndex: 11
        }}>
          <span>Manage orders,</span>
          <span>inventory, and earnings</span>
        </div>
        {/* Subtitle under */}
        <div style={{
          width: '700px',
          height: '40px',
          position: 'absolute',
          top: '420px',
          left: '88px',
          transform: 'rotate(0deg)',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '38px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: 'rgba(255, 255, 255, 1)',
          display: 'flex',
          alignItems: 'center',
          verticalAlign: 'middle',
          zIndex: 11
        }}>
          Manage orders, update inventory, and grow your business — all from one powerful dashboard.
        </div>
        {/* Download our app Text */}
        <div style={{
          width: '593px',
          height: '47px',
          position: 'absolute',
          top: '650px',
          left: '88px',
          transform: 'rotate(0deg)',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '32px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: 'rgba(255, 255, 255, 1)',
          display: 'flex',
          alignItems: 'center',
          verticalAlign: 'middle',
          zIndex: 11
        }}>
          Download our app
        </div>
        {/* App Link Image as Button */}
        <button
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            margin: 0,
            cursor: 'pointer',
            position: 'absolute',
            top: '615px',
            left: '88px',
            zIndex: 11,
            display: 'block',
            overflow: 'visible',
            outline: 'none',
          }}
          onClick={() => {
            window.open('https://your-app-link.com', '_blank');
          }}
          tabIndex={0}
        >
      {/* Remove button outline on focus for this button only */}
      <style>{`
        button[tabindex="0"]:focus {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>
          <img 
            src={applink}
            alt="App Link"
            style={{
              width: '250px',
              height: '250px',
              display: 'block',
              userSelect: 'none',
              objectFit: 'cover',
            }}
          />
        </button>
      </div>

      {/* Login Frame */}
      <div className="login-frame" style={{
        width: '463px',
        height: '625.19px',
        position: 'absolute',
        top: '252px',
        left: '900px',
        transform: 'rotate(0deg)',
        opacity: 1,
        borderRadius: '13.59px',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <img 
          src={logo} 
          alt="SuperApp Logo"
          style={{
            width: '292px',
            height: '131px',
            position: 'absolute',
            top: '34px',
            left: '85px',
            transform: 'rotate(0deg)',
            opacity: 1
          }}
        />
        <div style={{
          width: '90px',
          height: '39px',
          position: 'absolute',
          top: '177px',
          left: '186px',
          transform: 'rotate(0deg)',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#000000ff'
        }}>Sign in</div>
        
        <div style={{
          width: '55px',
          height: '30px',
          position: 'absolute',
          top: '245px',
          left: '65px',
          transform: 'rotate(0deg)',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontSize: '19px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#000000ff'
        }}>Email</div>
        
        {/* Email Input Field */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '320px',
            height: '40px',
            position: 'absolute',
            top: '270px',
            left: '71px',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#333'
          }}
          placeholder="Enter your email"
          required
        />
        {/* Line 1 */}
        <div style={{
          width: '280.56px',
          height: '0px',
          position: 'absolute',
          top: '300.2px',
          left: '70.67px',
          transform: 'rotate(0deg)',
          opacity: 1,
          borderTop: '1.1px solid rgba(0, 0, 0, 0.55)',
          borderWidth: '1.1px 0 0 0'
        }}></div>

        {/* Password Input Field */}
        <div style={{
          width: '90px',
          height: '30px',
          position: 'absolute',
          top: '313px',
          left: '65px',
          transform: 'rotate(0deg)',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontSize: '19px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#000000ff'
        }}>Password</div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '320px',
            height: '40px',
            position: 'absolute',
            top: '340px',
            left: '71px',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#333'
          }}
          placeholder="Enter your password"
          required
        />
        {/* Line 2 */}
        <div style={{
          width: '280.56px',
          height: '0px',
          position: 'absolute',
          top: '370.2px',
          left: '70.67px',
          transform: 'rotate(0deg)',
          opacity: 1,
          borderTop: '1.1px solid rgba(0, 0, 0, 0.55)',
          borderWidth: '1.1px 0 0 0'
        }}></div>
        
        {/* Sign in Button */}
        <div
          onClick={async () => {
            if (loading) return;
            setError('');
            if (email.trim() === '' || !email.includes('@')) {
              setError('Please enter a valid email.');
              return;
            }
            if (password.trim() === '') {
              setError('Please enter your password.');
              return;
            }
            setLoading(true);
            try {
              const response = await loginVendor(email, password);
              if (!response.ok) throw new Error('Invalid email or password');
              const data = await response.json();
              if (data.token) {
                localStorage.setItem('token', data.token);
              }
              setInfo('Login successful!');
              setTimeout(() => navigate('/vendordashboard'), 1200);
            } catch (err) {
              setError(err.message || 'Login failed');
            } finally {
              setLoading(false);
            }
          }}
          style={{
            width: '321.73px',
            height: '49.37px',
            position: 'absolute',
            top: '428px',
            left: '72px',
            transform: 'rotate(0deg)',
            opacity: loading ? 0.7 : 1,
            borderRadius: '10.97px',
            background: 'linear-gradient(90deg, #6CB2DA 46.63%, #395F74 100%)',
            boxShadow: '0px 8.52px 7.67px 0px rgba(57, 95, 116, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: loading ? 'not-allowed' : 'pointer',
            pointerEvents: loading ? 'none' : 'auto',
          }}
        >
          <span style={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '18px',
            color: 'white',
            textAlign: 'center'
          }}>{loading ? 'Please wait...' : 'Sign in'}</span>
        </div>
        {/* Info message */}
        {info && !error && (
          <div style={{
            color: 'green',
            position: 'absolute',
            top: '470px',
            left: '72px',
            fontFamily: 'Poppins',
            fontSize: '16px'
          }}>{info}</div>
        )}
        {/* Error message */}
        {error && (
          <div style={{
            color: 'red',
            position: 'absolute',
            top: '490px',
            left: '72px',
            fontFamily: 'Poppins',
            fontSize: '16px'
          }}>{error}</div>
        )}
        
        {/* Forgot Password Text removed as requested */}
        
        {/* Register Text */}
        <div style={{
          width: '304.90px',
          height: '26px',
          position: 'absolute',
          top: '558.01px',
          left: '79.45px',
          transform: 'rotate(0deg)',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: '17.55px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#000000',
          cursor: 'pointer',
          animationDuration: '0ms'
        }}>
          Don't have an account? 
          <Link to="/signup" style={{
            color: '#1172B6',
            textDecoration: 'underline',
            textDecorationStyle: 'solid',
            marginLeft: '4px'
          }}>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default vendorlogin;
