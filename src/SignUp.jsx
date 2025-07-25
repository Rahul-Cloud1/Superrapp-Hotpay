
import './Login.css'
import logo from './assets/image 3.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  // Form fields
  const [formData, setFormData] = useState({
    companyLegalName: '',
    employeeCount: '',
    city: '',
    state: '',
    pincode: '',
    adminEmail: '',
    billingAddress: '',
    adminName: '',
    adminContact: '',
    gstin: '',
    deliveryAddress: '',
    designation: '',
  });

  // Loading and error state (optional)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Backend API endpoint 

  const API_URL = 'http://localhost:5000/corporate';

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Signup failed');
      }
      setSuccess(true);
      alert('Signup successful!');
      
      setFormData({
        companyLegalName: '',
        employeeCount: '',
        city: '',
        state: '',
        pincode: '',
        adminEmail: '',
        billingAddress: '',
        adminName: '',
        adminContact: '',
        gstin: '',
        deliveryAddress: '',
        designation: '',
      });
    } catch (err) {
      setError(err.message || 'Signup failed');
      alert('Signup failed: ' + (err.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

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
      width: '1180px',
      height: '1197px',
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
          fontStyle: 'Semibold',
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
          fontStyle: 'Regular',
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
                <Link to="/login" className="nav-link" style={{
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
                  fontStyle: 'Semibold',
                  fontSize: '26px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  background: 'white',
                  color: '#1172B6',
                  border: 'none',
                  borderRadius: '4px'
                }}>Login</Link>
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
                  fontSize: '26px',
                  fontStyle: 'Semibold',
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
                  left: '1197px',
                  transform: 'rotate(0deg)',
                  opacity: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: '26px',
                  fontStyle: 'Semibold',
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
      <form className="signup-box" style={{
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
            width: '292.71px',
            height: '131.33px',
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
          fontStyle: 'Semibold',
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
          fontStyle: 'Medium',
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
          fontStyle: 'Medium',
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
            fontSize: '15px',
            fontStyle: 'Regular',
            color: '#333',
            background: 'white'
          }}
          placeholder="Enter city"
        />
        
        {/* Company Legal Name Input */}
        <input
          type="text"
          value={formData.companyLegalName}
          onChange={(e) => setFormData({ ...formData, companyLegalName: e.target.value })}
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
            fontSize: '15px',
            fontStyle: 'Regular',
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
          fontStyle: 'Medium',
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
          fontStyle: 'Medium',
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
          type="text"
          value={formData.employeeCount}
          onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
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
            fontSize: '15px',
            fontStyle: 'Regular',
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
            fontSize: '15px',
            fontStyle: 'Regular',
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
          fontStyle: 'Medium',
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
            fontSize: '15px',
            fontStyle: 'Regular',
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
          fontStyle: 'Medium',
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
            fontSize: '15px',
            fontStyle: 'Regular',
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
          fontStyle: 'Medium',
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
            fontSize: '15px',
            fontStyle: 'Regular',
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
          fontStyle: 'Medium',
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
            fontSize: '15px',
            fontStyle: 'Regular',
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
          fontStyle: 'Medium',
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
          value={formData.billingAddress}
          onChange={(e) => setFormData({ ...formData, billingAddress: e.target.value })}
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
            fontSize: '15px',
            fontStyle: 'Regular',
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
          fontStyle: 'Medium',
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
          value={formData.deliveryAddress}
          onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
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
            fontSize: '15px',
            fontStyle: 'Regular',
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
          fontStyle: 'Medium',
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
            fontSize: '15px',
            fontStyle: 'Regular',
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
          fontStyle: 'Medium',
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
            fontSize: '15px',
            fontStyle: 'Regular',
            color: '#333',
            background: 'white'
          }}
          placeholder="Enter admin contact"
        />

        {/* Submit Button */}
        <button onClick={handleSubmit}
          type="submit"
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
            fontSize: '26.67px',
            cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            letterSpacing: '0%'
          }}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit your request'}
        </button>
        {/* Optionally show error or success message */}
        {error && (
          <div style={{ color: 'red', position: 'absolute', top: '1110px', left: '346px', fontFamily: 'Poppins', fontSize: '18px' }}>{error}</div>
        )}
        {success && (
          <div style={{ color: 'green', position: 'absolute', top: '1140px', left: '346px', fontFamily: 'Poppins', fontSize: '18px' }}>Signup successful!</div>
        )}
      </form>
    </div>
  )
}

export default SignUp
