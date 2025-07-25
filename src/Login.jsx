
// API endpoints
const SEND_OTP_API = 'http://localhost:5000/auth/login';


async function sendOTP(email) {
  const response = await fetch(SEND_OTP_API, {
    method: 'POST',

    
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  return response;
}
// API endpoints
const VERIFY_OTP_API = 'http://localhost:5000/auth/verify';

async function verifyOTP(email, otpValue) {
  const response = await fetch(VERIFY_OTP_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, otp: otpValue }),
  });
  return response;
}

import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './assets/image 3.png'
import applink from './assets/applink.png';

function Login() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [showOTP, setShowOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const otpRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
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
          <Link to="/signup" className="nav-link" style={{
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
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            background: 'white',
            color: '#1172B6',
            border: 'none',
            borderRadius: '4px'
          }}>Sign Up</Link>
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
            fontFamily: 'Poppins',
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
          <Link to="/venderlogin"style={{
            width: '180px',
            height: '47px',
            position: 'absolute',
            top: '56px',
            left: '1178px',
            transform: 'rotate(0deg)',
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            background: 'white',
            color: '#1172B6',
            border: 'none',
            borderRadius: '4px'
          }}>Vendor Login</Link>
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
        {/* Hi Super Admin Text */}
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
          Hi Super Admin,
        </div>
        {/* Streamline your office management Text */}
        <div style={{
          width: '596px',
          height: '136px',
          position: 'absolute',
          top: '207px',
          left: '88px',
          transform: 'rotate(0deg)',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 700,
          fontStyle: 'normal',
          fontSize: '58px',
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
          <span>Streamline your</span>
          <span>office management</span>
        </div>
        {/* Subtitle under office management */}
        <div style={{
          width: '593px',
          height: '98px',
          position: 'absolute',
          top: '372px',
          left: '88px',
          transform: 'rotate(0deg)',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '28px',
          lineHeight: '140%',
          letterSpacing: '0%',
          color: 'rgba(255, 255, 255, 1)',
          display: 'flex',
          alignItems: 'center',
          verticalAlign: 'middle',
          zIndex: 11
        }}>
          Procure supplies. Book services. One platform for everything your office needs.
        </div>
        {/* Download our app Text */}
        <div style={{
          width: '593px',
          height: '47px',
          position: 'absolute',
          top: '604px',
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
        top: '218px',
        left: '878px',
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
            height: '131.33px',
            position: 'absolute',
            top: '34.43px',
            left: '85.59px',
            transform: 'rotate(0deg)',
            opacity: 1
          }}
        />
        <div style={{
          width: '90px',
          height: '39px',
          position: 'absolute',
          top: '177.93px',
          left: '186.97px',
          transform: 'rotate(0deg)',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          style: 'semibold',
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: '26.33px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#000000ff'
        }}>Sign in</div>
        
        <div style={{
          width: '55px',
          height: '30px',
          position: 'absolute',
          top: '234.96px',
          left: '71.77px',
          transform: 'rotate(0deg)',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins',
          fontWeight: 500,
          style:'Medium',
          fontSize: '19.75px',
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
            width: '306.1px',
            height: '18.65px',
            position: 'absolute',
            top: '268.97px',
            left: '71.77px',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '15.36px',
            color: '#333'
          }}
          placeholder="Enter your email"
          required
        />
        {/* Line 1 */}
        <div style={{
          width: '322.56px',
          height: '0px',
          position: 'absolute',
          top: '294.2px',
          left: '70.67px',
          transform: 'rotate(0deg)',
          opacity: 1,
          borderTop: '1.1px solid rgba(0, 0, 0, 0.55)',
          borderWidth: '1.1px 0 0 0'
        }}></div>
        
        {/* OTP Section - Only show when email is entered */}
        {showOTP && (
          <>
            <div style={{
              width: '94px',
              height: '30px',
              position: 'absolute',
              top: '313px',
              left: '72px',
              transform: 'rotate(0deg)',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Poppins',
              style: 'Medium',
              fontWeight: 500,
              fontSize: '19.75px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#000000ff'
            }}>Enter OTP</div>
            {/* OTP Inputs */}
            <div style={{
              display: 'flex',
              gap: '10px',
              position: 'absolute',
              top: '349px',
              left: '72px',
            }}>
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={otpRefs[idx]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={e => {
                    const val = e.target.value.replace(/\D/g, '');
                    if (!val) return;
                    const newOtp = [...otp];
                    newOtp[idx] = val;
                    setOtp(newOtp);
                    if (val && idx < 4) {
                      otpRefs[idx + 1].current.focus();
                    }
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Backspace') {
                      if (otp[idx]) {
                        const newOtp = [...otp];
                        newOtp[idx] = '';
                        setOtp(newOtp);
                      } else if (idx > 0) {
                        otpRefs[idx - 1].current.focus();
                      }
                    }
                  }}
                  style={{
                    width: '50px',
                    height: '50px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    fontFamily: 'Poppins',
                    fontSize: '22px',
                    color: '#333',
                    background: '#1172B626',
                    backdropFilter: 'blur(5px)',

                    textAlign: 'center',
                  }}
                  placeholder=""
                />
              ))}
            </div>
          </>
        )}
        
        {/* Sign in/Send OTP Button */}
        <div
          onClick={async () => {
            if (loading) return;
            setError('');
            if (!showOTP) {
              // Send OTP
              if (email.trim() === '' || !email.includes('@')) {
                setError('Please enter a valid email.');
                return;
              }
              setLoading(true);
              try {
                const response = await sendOTP(email);
                if (!response.ok) throw new Error('Failed to send OTP');
                setShowOTP(true);

                // for Testing
                console.log('response', await response.json());
                // g
                setInfo('OTP sent to your email.');
              } catch (err) {
                setError(err.message || 'Error sending OTP');
              } finally {
                setLoading(false);
              }
            } else {
              // Verify OTP
              const otpValue = otp.join('');
              if (otpValue.length < 5) {
                setError('Please enter the 5-digit OTP.');
                return;
              }
              setLoading(true);
              try {
                const response = await verifyOTP(email, otpValue);
                if (!response.ok) throw new Error('Invalid OTP');
                // Parse token from response and save to localStorage
                const data = await response.json();
                if (data.token) {
                  localStorage.setItem('token', data.token);
                }
                setInfo('Login successful!');
                setTimeout(() => navigate('/app'), 1200);
              } catch (err) {
                setError(err.message || 'Login failed');
              } finally {
                setLoading(false);
              }
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
            fontSize: '17.55px',
            color: 'white',
            textAlign: 'center',
            letterSpacing: '0px'
          }}>{loading ? 'Please wait...' : showOTP ? 'Sign in' : 'Send OTP'}</span>
        </div>
        {/* Info message */}
        {info && !error && (
          <div style={{
            color: 'green',
            position: 'absolute',
            top: '500px',
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
            top: '500px',
            left: '72px',
            fontFamily: 'Poppins',
            fontSize: '16px'
          }}>{error}</div>
        )}
        
        {/* Forgot Password Text removed as requested */}
        
        {/* Sign up Text */}
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
          fontWeight: 500,
          style: 'Medium',
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
            fontWeight: 600,
          style: 'Semibold',
          fontSize: '17.55px',
            textDecorationStyle: 'solid',
            marginLeft: '4px'
          }}>Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
