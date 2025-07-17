
import './Login.css'
import logo from './assets/image 3.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    state: '',
    pincode: '',
    email: '',
    password: '',
    adminName: '',
    adminContact: '',
    gstin: '',
    adminEmail: '',
    designation: '',
  });




  // Hide scrollbars visually but allow scrolling
  useEffect(() => {
    // Set body to allow scrolling
    document.body.style.overflow = 'auto'
    document.body.style.height = 'auto'
    document.documentElement.style.overflow = 'auto'
    document.documentElement.style.height = 'auto'
    
    // Add CSS to hide scrollbars visually but keep functionality
    const style = document.createElement('style')
    style.textContent = `
      body, html { 
        margin: 0; 
        padding: 0;
        height: auto !important;
        min-height: 100vh;
      }
      ::-webkit-scrollbar { 
        display: none !important; 
      }
      body {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
    `
    document.head.appendChild(style)
    
    // Cleanup function
    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.documentElement.style.overflow = ''
      document.documentElement.style.height = ''
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="signup-container" style={{
      width: '1440px',
      height: '1671px',
      transform: 'rotate(0deg)',
      opacity: 1,
      background: 'rgba(255, 255, 255, 1)',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Background Section */}
      <div style={{
        width: '1440px',
        height: '1551px',
        position: 'absolute',
        top: '120px',
        left: 0,
        transform: 'rotate(0deg)',
        opacity: 1,
        background: 'linear-gradient(360deg, #1172B6 5.29%, #073250 55.29%)',
        zIndex: 1
      }}>
        {/* Welcome Text */}
        <div style={{
          width: '516px',
          height: '42px',
          position: 'absolute',
          top: '71px',
          left: '88px',
          transform: 'rotate(0deg)',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '40px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: 'rgba(255, 255, 255, 1)',
          display: 'flex',
          alignItems: 'center',
          verticalAlign: 'middle',
          zIndex: 11
        }}>
          Welcome to Superrapp,
        </div>
        {/* Subtitle Text */}
        <div style={{
          width: '936px',
          height: '42px',
          position: 'absolute',
          top: '138px',
          left: '88px',
          transform: 'rotate(0deg)',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: 'rgba(255, 255, 255, 1)',
          display: 'flex',
          alignItems: 'center',
          verticalAlign: 'middle',
          zIndex: 11
        }}>
          We would like you to submit this form to register you on Superrapp.
        </div>
      </div>
      {/* Header Section */}
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
        <Link to="/app">
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
        </Link>
        <div className="header-content">
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

      {/* Sign Up Box */}
      <div className="signup-box" style={{
        width: '1180px',
        height: '1179px',
        transform: 'rotate(0deg)',
        opacity: 1,
        position: 'absolute',
        top: '350px',
        left: '170px',
        borderRadius: '13.59px',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 5
      }}>
        <img 
          src={logo}
          alt="SuperApp Logo"
          style={{
            width: '292.7135925292969px',
            height: '131.3255615234375px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '33px',
            left: '289px'
          }}
        />
        {/* Sign Up Form Title */}
        <div style={{
          width: '215px',
          height: '48px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '75px',
          left: '613px',
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '32px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgba(0, 0, 0, 1)'
        }}>
          Sign Up Form
        </div>
        
        {/* Company Legal Name Label */}
        <div style={{
          width: '306px',
          height: '38px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '225px',
          left: '80px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '0%',
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(0, 0, 0, 0.75)'
        }}>
          Company Legal Name
        </div>

        {/* City Label */}
        <div style={{
          width: '306px',
          height: '38px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '225px',
          left: '650px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '0%',
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(0, 0, 0, 0.75)'
        }}>
          City
        </div>

        {/* City Input */}
        <input
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({...formData, city: e.target.value})}
          style={{
            width: '450px',
            height: '50px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '274px',
            left: '650px',
            borderRadius: '5px',
            border: '1px solid rgba(17, 114, 182, 0.15)',
            outline: 'none',
            padding: '0 15px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#333',
            background: 'white'
          }}
          placeholder="Enter city"
        />
        
        {/* Company Legal Name Input */}
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          style={{
            width: '450px',
            height: '50px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '274px',
            left: '80px',
            borderRadius: '5px',
            border: '1px solid rgba(17, 114, 182, 0.15)',
            outline: 'none',
            padding: '0 15px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#333',
            background: 'white'
          }}
          placeholder="Enter company legal name"
        />
        

        {/* Employee Count Label */}
        <div style={{
          width: '306px',
          height: '38px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '347px',
          left: '80px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '0%',
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(0, 0, 0, 0.75)'
        }}>
          Employee Count
        </div>
        {/* State Label */}
        <div style={{
          width: '306px',
          height: '38px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '347px',
          left: '650px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '0%',
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(0, 0, 0, 0.75)'
        }}>
          State
        </div>

        {/* Employee Count Input */}
        <input
          type="number"
          value={formData.lastName}
          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          style={{
            width: '450px',
            height: '50px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '396px',
            left: '80px',
            borderRadius: '5px',
            border: '1px solid rgba(17, 114, 182, 0.15)',
            outline: 'none',
            padding: '0 15px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#333',
            background: 'white'
          }}
          placeholder="Enter employee count"
        />
        {/* State Input */}
        <input
          type="text"
          value={formData.state}
          onChange={(e) => setFormData({...formData, state: e.target.value})}
          style={{
            width: '450px',
            height: '50px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '396px',
            left: '650px',
            borderRadius: '5px',
            border: '1px solid rgba(17, 114, 182, 0.15)',
            outline: 'none',
            padding: '0 15px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#333',
            background: 'white'
          }}
          placeholder="Enter state"
        />

        {/* Pincode Label */}
        <div style={{
          width: '306px',
          height: '38px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '478px',
          left: '650px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '0%',
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(0, 0, 0, 0.75)'
        }}>
          Pincode
        </div>
        {/* Pincode Input */}
        <input
          type="text"
          value={formData.pincode}
          onChange={(e) => setFormData({...formData, pincode: e.target.value})}
          style={{
            width: '450px',
            height: '50px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '527px',
            left: '650px',
            borderRadius: '5px',
            border: '1px solid rgba(17, 114, 182, 0.15)',
            outline: 'none',
            padding: '0 15px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#333',
            background: 'white'
          }}
          placeholder="Enter pincode"
        />

        {/* GSTIN Label */}
        <div style={{
          width: '306px',
          height: '38px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '600px',
          left: '650px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '0%',
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(0, 0, 0, 0.75)'
        }}>
          GSTIN
        </div>
        {/* GSTIN Input */}
        <input
          type="text"
          value={formData.gstin}
          onChange={(e) => setFormData({...formData, gstin: e.target.value})}
          style={{
            width: '450px',
            height: '50px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '649px',
            left: '650px',
            borderRadius: '5px',
            border: '1px solid rgba(17, 114, 182, 0.15)',
            outline: 'none',
            padding: '0 15px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#333',
            background: 'white'
          }}
          placeholder="Enter GSTIN"
        />

        {/* Admin Email Label */}
        <div style={{
          width: '306px',
          height: '38px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '722px',
          left: '650px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '0%',
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(0, 0, 0, 0.75)'
        }}>
          Admin Email
        </div>
        {/* Admin Email Input */}
        <input
          type="email"
          value={formData.adminEmail}
          onChange={(e) => setFormData({...formData, adminEmail: e.target.value})}
          style={{
            width: '450px',
            height: '50px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '771px',
            left: '650px',
            borderRadius: '5px',
            border: '1px solid rgba(17, 114, 182, 0.15)',
            outline: 'none',
            padding: '0 15px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#333',
            background: 'white'
          }}
          placeholder="Enter admin email"
        />

        {/* Designation Label */}
        <div style={{
          width: '306px',
          height: '38px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '844px',
          left: '650px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '0%',
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(0, 0, 0, 0.75)'
        }}>
          Designation
        </div>
        {/* Designation Input */}
        <input
          type="text"
          value={formData.designation}
          onChange={(e) => setFormData({...formData, designation: e.target.value})}
          style={{
            width: '450px',
            height: '50px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '893px',
            left: '650px',
            borderRadius: '5px',
            border: '1px solid rgba(17, 114, 182, 0.15)',
            outline: 'none',
            padding: '0 15px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#333',
            background: 'white'
          }}
          placeholder="Enter designation"
        />
        
        {/* Billing Address Label */}
        <div style={{
          width: '306px',
          height: '38px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '478px',
          left: '80px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '0%',
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(0, 0, 0, 0.75)'
        }}>
          Billing Address
        </div>
        
        {/* Billing Address Input */}
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          style={{
            width: '450px',
            height: '50px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '527px',
            left: '80px',
            borderRadius: '5px',
            border: '1px solid rgba(17, 114, 182, 0.15)',
            outline: 'none',
            padding: '0 15px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#333',
            background: 'white'
          }}
          placeholder="Enter billing address"
        />
        
        {/* Delivery Address Label */}
        <div style={{
          width: '306px',
          height: '38px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '600px',
          left: '80px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '0%',
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(0, 0, 0, 0.75)'
        }}>
          Delivery Address
        </div>
        
        {/* Delivery Address Input */}
        <input
          type="text"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          style={{
            width: '450px',
            height: '50px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '649px',
            left: '80px',
            borderRadius: '5px',
            border: '1px solid rgba(17, 114, 182, 0.15)',
            outline: 'none',
            padding: '0 15px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#333',
            background: 'white'
          }}
          placeholder="Enter delivery address"
        />

        {/* Admin Name Label */}
        <div style={{
          width: '306px',
          height: '38px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '722px',
          left: '80px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '0%',
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(0, 0, 0, 0.75)'
        }}>
          Admin Name
        </div>
        {/* Admin Name Input */}
        <input
          type="text"
          value={formData.adminName || ''}
          onChange={(e) => setFormData({...formData, adminName: e.target.value})}
          style={{
            width: '450px',
            height: '50px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '771px',
            left: '80px',
            borderRadius: '5px',
            border: '1px solid rgba(17, 114, 182, 0.15)',
            outline: 'none',
            padding: '0 15px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#333',
            background: 'white'
          }}
          placeholder="Enter admin name"
        />

        {/* Admin Contact Label */}
        <div style={{
          width: '306px',
          height: '38px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '844px',
          left: '80px',
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '26px',
          lineHeight: '100%',
          letterSpacing: '0%',
          display: 'flex',
          alignItems: 'center',
          color: 'rgba(0, 0, 0, 0.75)'
        }}>
          Admin Contact
        </div>
        {/* Admin Contact Input */}
        <input
          type="text"
          value={formData.adminContact || ''}
          onChange={(e) => setFormData({...formData, adminContact: e.target.value})}
          style={{
            width: '450px',
            height: '50px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '893px',
            left: '80px',
            borderRadius: '5px',
            border: '1px solid rgba(17, 114, 182, 0.15)',
            outline: 'none',
            padding: '0 15px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#333',
            background: 'white'
          }}
          placeholder="Enter admin contact"
        />

        {/* Submit Button */}
        <button
          style={{
            width: '488.74px',
            height: '75px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '1024px',
            left: '346px',
            borderRadius: '16.67px',
            background: 'linear-gradient(90deg, #6CB2DA 46.63%, #395F74 100%)',
            boxShadow: '0px 12.94px 11.65px 0px rgba(57, 95, 116, 0.25)',
            border: 'none',
            color: 'white',
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '24px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            letterSpacing: '0%'
          }}
        >
          Submit your request
        </button>
      </div>
    </div>
  )
}

export default SignUp
