import './Login.css';
import { Link } from 'react-router-dom';
import logo from './assets/image 3.png';
import applink from './assets/applink.png';
import { useEffect, useState } from 'react';

// Login page component
function Login() {
  // State to control OTP section visibility
  const [email, setEmail] = useState('');
  const [showOTP, setShowOTP] = useState(false);

  // Hide scrollbars visually but allow scrolling
  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';
    // Add CSS to hide scrollbars visually but keep functionality
    const style = document.createElement('style');
    style.textContent = `
      body, html { margin: 0; padding: 0; height: auto !important; min-height: 100vh; }
      ::-webkit-scrollbar { display: none !important; }
      body { scrollbar-width: none !important; -ms-overflow-style: none !important; }
    `;
    document.head.appendChild(style);
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.head.removeChild(style);
    };
  }, []);

  // Main login container
  return (
    <div className="login-container" style={{
      width: '100vw',
      minWidth: '1400px',
      height: 'auto',
      minHeight: '100vh',
      background: 'rgba(255, 255, 255, 1)',
      position: 'relative',
      overflow: 'visible'
    }}>
      {/* Header Section */}
      <header className="login-page-header" style={{
        width: '1380px',
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
        <Link to="/app">
          <img 
            src={logo} 
            alt=""
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
        </Link>
        <div className="header-content">
          <div className="header-logo">
            
          </div>
          <nav className="header-nav">
            <ul className="nav-links">
               <li>
                <a href="#" className="nav-link" style={{
                  width: '156px',
                  height: '47px',
                  position: 'absolute',
                  top: '48px',
                  left: '534px',
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
                }}> Sign Up</a>
              </li>
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
                }}>Login</a>
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
          fontWeight: 800,
          fontStyle: 'normal',
          fontSize: '70px',
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
          Procure supplies. Book services. One platform for everything your office needs.
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
            width: '292.71px',
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
          onBlur={() => {
            if (email.trim() !== '' && email.includes('@')) {
              setShowOTP(true)
            }
          }}
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
        
        {/* OTP Section - Only show when email is entered */}
        {showOTP && (
          <>
            <div style={{
              width: '94px',
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
              fontSize: '19.75px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#000000ff'
            }}>Enter OTP</div>
            
            {/* Otp 1 */}
            <div style={{
              width: '50px',
              height: '50px',
              position: 'absolute',
              top: '349px',
              left: '72px',
              transform: 'rotate(0deg)',
              opacity: 1,
              borderRadius: '5px',
              background: 'rgba(17, 114, 182, 0.15)'
            }}></div>
            {/* Otp 2 */}
            <div style={{
              width: '50px',
              height: '50px',
              position: 'absolute',
              top: '349px',
              left: '141px',
              transform: 'rotate(0deg)',
              opacity: 1,
              borderRadius: '5px',
              background: 'rgba(17, 114, 182, 0.15)'
            }}></div>
            {/* Otp 3 */}
            <div style={{
              width: '50px',
              height: '50px',
              position: 'absolute',
              top: '349px',
              left: '208px',
              transform: 'rotate(0deg)',
              opacity: 1,
              borderRadius: '5px',
              background: 'rgba(17, 114, 182, 0.15)'
            }}></div>
            {/* Otp 4 */}
            <div style={{
              width: '50px',
              height: '50px',
              position: 'absolute',
              top: '349px',
              left: '277px',
              transform: 'rotate(0deg)',
              opacity: 1,
              borderRadius: '5px',
              background: 'rgba(17, 114, 182, 0.15)'
            }}></div>
            {/* Otp 5 */}
            <div style={{
              width: '50px',
              height: '50px',
              position: 'absolute',
              top: '349px',
              left: '344px',
              transform: 'rotate(0deg)',
              opacity: 1,
              borderRadius: '5px',
              background: 'rgba(17, 114, 182, 0.15)'
            }}></div>
          </>
        )}
        
        {/* Sign in Button */}
        <div 
          onClick={() => {
            if (!showOTP && email.trim() !== '' && email.includes('@')) {
              setShowOTP(true)
            }
          }}
          style={{
          width: '321.73px',
          height: '49.37px',
          position: 'absolute',
          top: '428px',
          left: '72px',
          transform: 'rotate(0deg)',
          opacity: 1,
          borderRadius: '10.97px',
          background: 'linear-gradient(90deg, #6CB2DA 46.63%, #395F74 100%)',
          boxShadow: '0px 8.52px 7.67px 0px rgba(57, 95, 116, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}>
          <span style={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '18px',
            color: 'white',
            textAlign: 'center'
          }}>{showOTP ? 'Sign in' : 'Send OTP'}</span>
        </div>
        
        {/* Forgot Password Text */}
        <div style={{
          width: '304.90px',
          height: '23px',
          position: 'absolute',
          top: '503.78px',
          left: '79.45px',
          transform: 'rotate(0deg)',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontSize: '15.36px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: 'rgba(0, 0, 0, 0.75)',
          cursor: 'pointer'
        }}>Forgot your password?</div>
        
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
          <span style={{
            color: '#1172B6',
            textDecoration: 'underline',
            textDecorationStyle: 'solid',
            marginLeft: '4px'
          }}>Sign up</span>
        </div>
      </div>
    </div>
  )
}
export default Login
