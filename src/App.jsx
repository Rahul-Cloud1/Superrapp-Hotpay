import { useState, useEffect, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css'

// Asset Imports
import logo from './assets/image 3.png'
import newimage1 from './assets/Bannerimage1.png'
import newimage2 from './assets/Bannerimage2.png'
import newimage3 from './assets/Bannerimage3.png'
import { Link } from 'react-router-dom';
import stationeryImage from './assets/Frame 3.png'
import eventImage from './assets/Rectangle 7.png'
import vectorIcon from './assets/Vector.png'
import profileIcon from './assets/My Profile Icon.png'
import p1Image from './assets/P1.png'
import p2Image from './assets/p2.png'
import p3Image from './assets/p3.png'
import p4Image from './assets/p4.png'
import p5Image from './assets/p5.png'
import p6Image from './assets/p6.png'
import p7Image from './assets/p7.png'
import p8Image from './assets/p8.png'
import p9Image from './assets/p9.png'
import p10Image from './assets/p10.png'
import p11Image from './assets/p11.png'
import p12Image from './assets/p12.png'
import p13Image from './assets/p13.png'
import p14Image from './assets/p14.png'
import servicesImage from './assets/Services.png'
import s1Image from './assets/s1.png'
import s2Image from './assets/s2.png'
import s3Image from './assets/s3.png'
import s4Image from './assets/s4.png'
import s5Image from './assets/s5.png'
import s6Image from './assets/s6.png'
import s7Image from './assets/s7.png'
import s8Image from './assets/s8.png'
import s9Image from './assets/s9.png'
import s10Image from './assets/s10.png'
import s11Image from './assets/s11.png'
import s12Image from './assets/s12.png'
import s13Image from './assets/s13.png'
import s14Image from './assets/s14.png'
import discoverImage from './assets/Discover.png'
import tilephotoImage from './assets/tilephoto.jpg'
import img23Image from './assets/img23.png'


function App() {

  // Hide scrollbars and set up container
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    
    const style = document.createElement('style')
    style.textContent = `
      body, html { overflow: hidden !important; margin: 0; padding: 0; }
      ::-webkit-scrollbar { display: none !important; }
    `
    document.head.appendChild(style)
    
    return () => {
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflow = 'auto'
      document.head.removeChild(style)
    }
  }, [])

  // Carousel Banner image
  const styles = {    
    bannersection: {
      width: '1322px',
      height: '300px',
      position: 'absolute',
      top: '118px',
      left: '60px',
      borderRadius: '10px',
      borderWidth: '1.18px',
      borderStyle: 'solid',
      borderColor: 'rgba(0, 0, 0, 0.15)',
      opacity: 1,
      transform: 'rotate(0deg)',
      background: '#fff',
      boxSizing: 'border-box',
    },
    container: {
      width: '100vw',
      minHeight: '100vh',
      background: '#ffffff',
      overflowX: 'hidden',
      overflowY: 'auto',
      margin: 0,
      padding: 0,
      position: 'relative',
    },
    header: {
      width: '100%',
      height: '96px',
      background: 'rgba(255, 255, 255, 0.35)',
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.35)',
      position: 'relative',
      top: 0,
      left: 0,
    },
    logo: {
      width: '193.92px',
      height: '87px',
      position: 'absolute',
      top: '6px',
      left: '41px',
    },
    searchContainer: {
      width: '721px',
      height: '50px',
      position: 'absolute',
      top: '30px',
      left: '269px',
      display: 'flex',
      border: '1px solid rgba(17, 114, 182, 0.25)',
      borderRadius: '10px',
      background: 'white',
      boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    },
    searchInput: {
      width: 'calc(100% - 50px)',
      height: '100%',
      border: 'none',
      outline: 'none',
      padding: '0 16px',
      fontFamily: 'Poppins',
        
        style: 'Regular',
      style: 'Medium',
      fontWeight: 500,
      color: '#00000040',

      fontSize: '16px',
      background: 'transparent',
    },
    searchButton: {
      width: '50px',
      height: '100%',
      border: 'none',
      background: 'linear-gradient(135deg, #007BFF 0%, #0056B3 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      borderTopRightRadius: '9px',
      borderBottomRightRadius: '9px',
    },
    blueButton: {
      border: 'none',
      borderRadius: '20px',
      background: 'linear-gradient(135deg, #007BFF 0%, #0056B3 100%)',
      color: 'white',
      fontFamily: 'Poppins',        
        style: 'Regular',
      fontWeight: 600,
      fontSize: '18px',
      cursor: 'pointer',
      boxShadow: '0px 4px 8px rgba(0, 123, 255, 0.3)',
      transition: 'all 0.3s ease',
    },
miceSection: {
      width: '1316px',
      height: '117px',
      position: 'absolute',
      top: '434px',
      left: '63px',
      borderRadius: '11.83px',
      background: 'rgba(17, 114, 182, 0.15)',
      border: '1.18px solid rgba(17, 114, 182, 0.15)',
      boxShadow: '0px 4.73px 4.73px 0px rgba(17, 114, 182, 0.15)',
      boxSizing: 'border-box',
    },
    productsLink: {
      width: '141px',
      height: '34px',
      position: 'absolute',
      top: '565px',
      left: '40px',
      fontFamily: 'Poppins',
        
        style: 'Regular',
      fontSize: '24px',
      style: 'Semibold',
      fontWeight: 600,
      fontStyle: 'Regular',
      lineHeight: '150%',
      letterSpacing: '0%',
      color: 'black',
      opacity: 1,
      angle: '0deg',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      border: 'none',
      background: 'transparent',
      gap: '2px',
    },
    servicesLink: {
      width: '111px',
      height: '34px',
      position: 'absolute',
      top: '1003px',
      left: '61px',
      fontFamily: 'Poppins',
        
        style: 'Regular',
      fontSize: '24px',
      style: 'Semibold',
      fontWeight: 600,
      fontStyle: 'Regular',
      lineHeight: '150%',
      letterSpacing: '0%',
      color: 'black',
      opacity: 1,
      angle: '0deg',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      border: 'none',
      background: 'transparent',
      verticalAlign: 'middle',
      borderRadius: '0px',
    },
    p1: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '619px',
      left: '61px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p2: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '619px',
      left: '195px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p3: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '619px',
      left: '329px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p4: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '619px',
      left: '463px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p5: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '619px',
      left: '597px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p6: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '619px',
      left: '731px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p7: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '619px',
      left: '865px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p8: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '619px',
      left: '999px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p9: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '619px',
      left: '1133px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p10: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '619px',
      left: '1267px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p11: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '804px',
      left: '65px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p12: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '804px',
      left: '199px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p13: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '804px',
      left: '333px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p14: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '804px',
      left: '467px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s1: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1079px',
      left: '61px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s2: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1079px',
      left: '195px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s3: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1079px',
      left: '329px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s4: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1079px',
      left: '463px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s5: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1079px',
      left: '597px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s6: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1079px',
      left: '731px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s7: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1079px',
      left: '865px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s8: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1079px',
      left: '999px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s9: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1079px',
      left: '1133px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s10: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1079px',
      left: '1267px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s11: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1264px',
      left: '65px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s12: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1264px',
      left: '199px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s13: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1264px',
      left: '333px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s14: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1264px',
      left: '467px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    s15: {
      width: '110px',
      height: '110px',
      position: 'absolute',
      top: '1264px',
      left: '601px',
      opacity: 1,
      angle: '0deg',
      borderRadius: '10.35px',
      background: 'rgba(193, 219, 238, 0.2)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    discover: {
      width: '341px',
      height: '34px',
      position: 'absolute',
      top: '1459px',
      left: '61px',
      opacity: 1,
      angle: '0deg',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  }

  // Reusable Components
  const SearchBar = () => (
    <div style={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search for office supplies..."
        style={styles.searchInput}
      />
      <button style={styles.searchButton}>
        <img src={vectorIcon} alt="search" style={{
          width: '20px',
          height: '20px',
          filter: 'brightness(0) invert(1)',
        }} />
      </button>
    </div>
  )

  const ViewCartButton = () => (
    <button style={{
      ...styles.blueButton,
      width: '152px',
      height: '50px',
      position: 'absolute',
      top: '30px',
      left: '1062px',
    }}>
      View Cart
    </button>
  )

  const ProfileSection = () => (
    <>
      <a href="/profile" style={{ textDecoration: 'none' }}>
        <button style={{
          width: '30px',
          height: '30px',
          position: 'absolute',
          top: '48px',
          left: '1285px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          padding: 0,
        }}>
          <img src={profileIcon} alt="Profile" style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
          }} />
        </button>
        <span style={{
          position: 'absolute',
          top: '53px',
          left: '1320px',
          fontFamily: 'Poppins',
        
        style: 'Regular',
          fontSize: '16px',
          color: 'black',
        }}>
          My Profile
        </span>
      </a>
    </>
  )

  const carouselImages = [newimage1];
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    if (carouselImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % carouselImages.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [carouselImages.length]);

  const ContentCard = ({ leftPosition, showOrderButton = false, showBookNowButton = false, showHeading = false, showCard2Heading = false, showCard3Heading = false, showSubtext = false, showCard2Subtext = false, showCard3Subtext = false, showCard3Button = false, hasStationeryBackground = false, hasEventBackground = false, isCard3 = false }) => (
    <div style={{
      ...(isCard3 ? styles.contentCard3 : styles.bannersection),
      left: leftPosition,
      backgroundImage: hasStationeryBackground ? `url(${stationeryImage})` : hasEventBackground ? `url(${eventImage})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <img src={carouselImages[currentBanner]} alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', transition: 'opacity 0.5s' }} />
    </div>
  )

  const MiceSection = () => (
    <div style={styles.miceSection}>
      {/* Background image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '197px',
        height: '117px',
        backgroundImage: `url(${img23Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderTopLeftRadius: '11.83px',
        borderBottomLeftRadius: '11.83px',
      }} />
      
      {/* Main heading */}
      <h2 style={{
        position: 'absolute',
        width: '199px',
        height: '30px', 
        top: '15px',
        left: '212px',
        fontFamily: 'Poppins',        
        style: 'Medium',        
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '150%',
        letterSpacing: '0%',
        color: 'rgba(0, 0, 0, 1)',
        margin: 0,        
      }}>
        Plan. Book. Impress.
      </h2>
      
      {/* First description line */}
      <p style={{
        position: 'absolute',
        top: '48px',
        left: '213px',
        fontFamily: 'Poppins',        
        style: 'Regular',
        fontSize: '15px',
        fontWeight: 400,
        lineHeight:'150%',
        color: 'black',
        margin: 0,
        lineHeight: '1.4',
      }}>
        From boardroom meetings to full-scale offsite — manage every detail effortlessly.
      </p>
      
      {/* Second description line */}
      <p style={{
        position: 'absolute',
        top: '77px',
        left: '212px',
        fontFamily: 'Poppins',        
        style: 'Regular',
        fontSize: '14px',
        fontWeight: 400,
        color: 'black',
        margin: 0,
        lineHeight: '1.4',
      }}>
        Venues, logistics, travel & more — all under one Superrapp.
      </p>
      
      {/* Get a quote now button */}
      <button style={{
        position: 'absolute',
        top: '47px',
        right: '50px',
        width: '208.52px',
        height: '44px',
        border: 'none',
        borderRadius: '9.57px',
        background: 'rgba(0, 0, 0, 1)',
        color: 'white',
        fontFamily: 'Poppins',        
        style: 'Regular',
        fontSize: '18.62px',
        fontWeight: 400,
        fontStyle: 'Regular',
        lineHeight: '150%',
        letterSpacing: '0%',
        textAlign: 'center',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
      }}
      >
        <a href="/miceform" style={{ textDecoration: 'none', color: 'inherit' }}>
          Get a quote now
        </a>
      </button>
    </div>
  )

  const SmallElement = () => (
    <div style={styles.smallElement}>
      {/* Element content goes here */}
    </div>
  )

  const navigate = useNavigate();
  const ProductsLink = () => (
    <button 
      style={styles.productsLink}
      onClick={() => navigate('/products')}
    >
      <span>Products</span>
      <span>→</span>
    </button>
  )

  const ServicesLink = () => (
    <button 
      style={styles.servicesLink}
      onClick={() => console.log('Services link clicked')}
    >
      <span>Services</span>
      <span>→</span>
    </button>
  )

  const ProductsCard = () => (
    <div 
      style={styles.productsCard}
      onClick={() => {
        console.log('Navigate to: Office Stationery 1');
        // Add navigation logic here when implemented
        // Navigate to "Office Stationery 1" with instant animation
      }}
    >
      {/* Product image placeholder */}
      <div style={{
        width: '80px',
        height: '80px',
        backgroundImage: 'url(https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '4px',
        marginBottom: '8px',
      }} />
      
      {/* Product title */}
      <p style={{
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontSize: '14px',
        fontWeight: 400,
        style: 'Regular',
        color: 'black',
        textAlign: 'center',
        margin: 0,
        padding: '0 4px',
        lineHeight: '1.2',
      }}>
        Office  Stationery
      </p>
    </div>
  )

  const P1 = () => (
    <div style={styles.p1} onClick={() => navigate('/products?category=Office%20Stationery')}>
      <div style={{
        width: '90.32018280029297px',
        height: '90.32018280029297px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        angle: '0deg',
        backgroundImage: `url(${p1Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        angle: '0deg',
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px',
      }}>
        Office<br />Stationery
      </div>
    </div>
  )

  const P2 = () => (
    <div style={styles.p2} onClick={() => navigate('/products?category=Housekeeping%20Tools')}>
      <div style={{
        width: '90.32018280029297px',
        height: '90.32018280029297px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        angle: '0deg',
        backgroundImage: `url(${p2Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        angle: '0deg',
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px',
      }}>
        Housekeeping<br />Tools
      </div>
    </div>
  )

  const P3 = () => (
    <div style={styles.p3} onClick={() => navigate('/products?category=Office%20Pantry')}>
      <div style={{
        width: '90.32018280029297px',
        height: '90.32018280029297px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        angle: '0deg',
        backgroundImage: `url(${p3Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        angle: '0deg',
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px',
      }}>
        Office<br />Pantry
      </div>
    </div>
  )

  const P4 = () => (
    <div style={styles.p4} onClick={() => navigate('/products?category=Disposables')}>
      <div style={{
        width: '90.32018280029297px',
        height: '90.32018280029297px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        angle: '0deg',
        backgroundImage: `url(${p4Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        angle: '0deg',
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px',
      }}>
        Disposables<br />
      </div>
    </div>
  )

  const P5 = () => (
    <div style={styles.p5} onClick={() => navigate('/products?category=Electronics')}>
      <div style={{
        width: '90.32018280029297px',
        height: '90.32018280029297px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        angle: '0deg',
        backgroundImage: `url(${p5Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        angle: '0deg',
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px',
      }}>
        Electronics<br />
      </div>
    </div>
  )

  const P6 = () => (
    <div style={styles.p6} onClick={() => navigate('/products?category=Laptop%20%26%20Luggage%20Bags')}>
      <div style={{
        width: '90.32018280029297px',
        height: '90.32018280029297px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        angle: '0deg',
        backgroundImage: `url(${p6Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        angle: '0deg',
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px',
      }}>
        Laptop &<br />Luggage Bags
      </div>
    </div>
  )

  const P7 = () => (
    <div style={styles.p7} onClick={() => navigate('/products?category=IT%20Equipment')}>
      <div style={{
        width: '90.32018280029297px',
        height: '90.32018280029297px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        angle: '0deg',
        backgroundImage: `url(${p7Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        angle: '0deg',
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px',
      }}>
        IT<br />Equipment
      </div>
    </div>
  )

  const P8 = () => (
    <div style={styles.p8} onClick={() => navigate('/products?category=Sports%20Equipment')}>
      <div style={{
        width: '90.32018280029297px',
        height: '90.32018280029297px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        angle: '0deg',
        backgroundImage: `url(${p8Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        angle: '0deg',
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px',
      }}>
        Sports<br />Equipment
      </div>
    </div>
  )

  const P9 = () => (
    <div style={styles.p9} onClick={() => navigate('/products?category=Office%20Decor')}>
      <div style={{
        width: '90.32018280029297px',
        height: '90.32018280029297px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        angle: '0deg',
        backgroundImage: `url(${p9Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        angle: '0deg',
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px',
      }}>
        Office<br />Decor
      </div>
    </div>
  )

  const P10 = () => (
    <div style={styles.p10} onClick={() => navigate('/products?category=Joining%20Kit')}>
      <div style={{
        width: '90.32018280029297px',
        height: '90.32018280029297px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        angle: '0deg',
        backgroundImage: `url(${p10Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        angle: '0deg',
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px',
      }}>
        Joining<br />Kit
      </div>
    </div>
  )

  const P11 = () => (
    <div style={styles.p11} onClick={() => navigate('/products?category=Candies%20%26%20Chocolates')}>
      <div style={{
        width: '90.32018280029297px',
        height: '90.32018280029297px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        angle: '0deg',
        backgroundImage: `url(${p11Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        angle: '0deg',
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px',
      }}>
        Candies &<br />Chocolates
      </div>
    </div>
  )

  const P12 = () => (
    <div style={styles.p12} onClick={() => navigate('/products?category=Office%20Furniture')}>
      <div style={{
        width: '90.32018280029297px',
        height: '90.32018280029297px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        angle: '0deg',
        backgroundImage: `url(${p12Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        angle: '0deg',
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px',
      }}>
        Office<br />Furniture
      </div>
    </div>
  )

  const P13 = () => (
    <div style={styles.p13} onClick={() => navigate('/products?category=Gift%20Hampers')}>
      <div style={{
        width: '90.32018280029297px',
        height: '90.32018280029297px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        angle: '0deg',
        backgroundImage: `url(${p13Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        angle: '0deg',
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px',
      }}>
        Gift<br />Hampers
      </div>
    </div>
  )

  const P14 = () => (
    <div style={styles.p14} onClick={() => navigate('/products?category=Plastic%20%26%20Glassware')}>
      <div style={{
        width: '90.32018280029297px',
        height: '90.32018280029297px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        angle: '0deg',
        backgroundImage: `url(${p14Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        angle: '0deg',
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '0px',
      }}>
        Plastic &<br />Glassware
      </div>
    </div>
  )

  const S1 = () => (
    <div style={styles.s1}>
      {/* Service content */}
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s1Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',
        
        
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Plumbing
      </div>
    </div>
  )

  const S2 = () => (
    <div style={styles.s2}>
      {/* Service content */}
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s2Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Carpenter
      </div>
    </div>
  )

  const S3 = () => (
    <div style={styles.s3}>
      {/* Service content */}
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s3Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Electrician
      </div>
    </div>
  )

  const S4 = () => (
    <div style={styles.s4}>
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s4Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',        
        style: 'Regular',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Pest<br />Control
      </div>
    </div>
  )

  const S5 = () => (
    <div style={styles.s5}>
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s5Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Employee<br />Grooming
      </div>
    </div>
  )

  const S6 = () => (
    <div style={styles.s6}>
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s6Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Team<br />Building
      </div>
    </div>
  )

  const S7 = () => (
    <div style={styles.s7}>
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s7Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        IT<br />Support
      </div>
    </div>
  )

  const S8 = () => (
    <div style={styles.s8}>
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s8Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Self Defence<br />Training
      </div>
    </div>
  )

  const S9 = () => (
    <div style={styles.s9}>
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s9Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Doctor<br />On Call
      </div>
    </div>
  )

  const S10 = () => (
    <div style={styles.s10}>
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s10Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontStyle: 'Regular',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Office<br />Pooja
      </div>
    </div>
  )

  const S11 = () => (
    <div style={styles.s11}>
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s11Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Deep<br />Cleaning
      </div>
    </div>
  )

  const S12 = () => (
    <div style={styles.s12}>
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s12Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Office<br />Celebration
      </div>
    </div>
  )

  const S13 = () => (
    <div style={styles.s13}>
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s13Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Festive<br />Decoration
      </div>
    </div>
  )

  const S14 = () => (
    <div style={styles.s14}>
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s14Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Relocation<br />Consultant
      </div>
    </div>
  )

  const S15 = () => (
    <div style={styles.s15}>
      <div style={{
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '10px',
        left: '10px',
        opacity: 1,
        backgroundImage: `url(${s1Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }} />
      <div style={{
        width: '110px',
        height: '39px',
        position: 'absolute',
        top: '118px',
        left: '0px',
        opacity: 1,
        color: 'black',
        fontFamily: 'Poppins',
        
        style: 'Regular',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Air<br />Conditioning
      </div>
    </div>
  )

  const Discover = () => (
    <div style={styles.discover}>
      <img 
        src={discoverImage} 
        alt="Discover" 
        style={{
          width: '341px',
          height: '34px',
          opacity: 1,
        }}
      />
    </div>
  )

  // Professional Product Card Component
  const ProductCard = ({ product, onAddToCart }) => (
    <article 
      style={{
        position: 'relative',
        backgroundColor: 'white',
        width: '230px',
        height: '350px',
        borderRadius: '8px',
        border: '1px solid #E5E7EB',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        flexShrink: 0,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
      }}
      role="button"
      tabIndex={0}
      aria-label={`Product: ${product.title}`}
    >
      {/* Product Image */}
      <div 
        style={{
          width: '186px',
          height: '186px',
          position: 'absolute',
          top: '16px',
          left: '22px',
          backgroundImage: `url("${product.image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '6px',
        }}
        aria-label="Product image"
      />
      
      {/* Product Title */}
      <h3 style={{
        position: 'absolute',
        top: '218px',
        left: '16px',
        right: '16px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '1.4',
        color: 'rgba(0, 0, 0, 1)',
        margin: 0,
      }}>
        {product.title}
      </h3>
      
      {/* Price */}
      <div style={{
        position: 'absolute',
        top: '260px',
        left: '16px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: '18px',
        color: 'rgba(0, 0, 0, 1)',
      }}>
        {product.price}
      </div>
      
      {/* MOQ */}
      <div style={{
        position: 'absolute',
        top: '282px',
        left: '16px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: '14px',
        color: 'rgba(0, 0, 0, 0.8)',
      }}>
        {product.moq}
      </div>
      
      {/* ADD TO CART Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(product.id);
        }}
        style={{
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          right: '0px',
          height: '45px',
          backgroundColor: '#DBEAFE',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins',
        
        style: 'Regular',
          fontWeight: 600,
          fontStyle: 'Regular',
          fontSize: '20px',
          lineHeight: '140%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: 'rgba(7, 50, 80, 1)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#BFDBFE';
          e.target.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#DBEAFE';
          e.target.style.transform = 'scale(1)';
        }}
        onFocus={(e) => {
          e.target.style.outline = '2px solid #3B82F6';
          e.target.style.outlineOffset = '2px';
        }}
        onBlur={(e) => {
          e.target.style.outline = 'none';
        }}
        aria-label={`Add ${product.title} to cart`}
      >
        ADD TO CART
      </button>
    </article>
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <Link to="/app">
          <img src={logo} alt="Logo" style={styles.logo} />
        </Link>
        <SearchBar />
        <ViewCartButton />
        <ProfileSection />
      </header>
      
      {/* Main content - 3 ContentCard boxes at specified positions */}
      <ContentCard leftPosition="61px" showOrderButton={true} showHeading={true} showSubtext={true} hasStationeryBackground={false} />
      
      <MiceSection />
      <ProductsLink />
      <P1 />
      <P2 />
      <P3 />
      <P4 />
      <P5 />
      <P6 />
      <P7 />
      <P8 />
      <P9 />
      <P10 />
      <P11 />
      <P12 />
      <P13 />
      <P14 />
      <ServicesLink />
      <S1 />
      <S2 />
      <S3 />
      <S4 />
      <S5 />
      <S6 />
      <S7 />
      <S8 />
      <S9 />
      <S10 />
      <S11 />
      <S12 />
      <S13 />
      <S14 />
      <S15 />
      <Discover />
      
      {/* Container with exact specifications */}
      <div style={{
        width: '1945px',
        height: '350.49884033203125px',
        transform: 'rotate(0deg)',
        opacity: 1,
        position: 'absolute',
        top: '1525px',
        left: '61px',
        gap: '15px',
        display: 'flex',
        overflowX: 'scroll',
        overflowY: 'hidden'
      }}>
        {/* Tile 1 - Parker Beta Neo Metallic Blue Pen */}
        <div style={{
          width: '230px',
          height: '350px',
          transform: 'rotate(0deg)',
          opacity: 1,
          borderRadius: '5px',
          border: '1px solid rgba(17, 114, 182, 0.15)',
          boxShadow: '0px 4px 4px 0px rgba(17, 114, 182, 0.15)',
          flexShrink: 0,
          position: 'relative',
          backgroundColor: 'white'
        }}>
          {/* Product Image */}
          <div style={{
            width: '186px',
            height: '186px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '5px',
            left: '22px',
            backgroundImage: `url(${tilephotoImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '8px',
          }} />
          
          {/* Product Title */}
          <div style={{
            width: '201px',
            height: '36px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '200px',
            left: '16px',
            fontFamily: 'Poppins',
        
        style: 'Regular',
            fontWeight: 700,
            fontStyle: 'Bold',
            fontSize: '16px',
            lineHeight: '114.99999999999999%',
            letterSpacing: '0%',
            color: 'rgba(0, 0, 0, 1)',
            textAlign: 'left',
          }}>
            Parker Beta Neo Metallic Blue Pen
          </div>
          
          {/* Price */}
          <div style={{
            width: '124px',
            height: '18px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '249px',
            left: '16px',
            fontFamily: 'Anek Devanagari',
            fontWeight: 600,
            fontStyle: 'SemiBold',
            fontSize: '22px',
            lineHeight: '140%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            boxShadow: '0px 4px 4px 0px rgba(17, 114, 182, 0.15)',
            color: 'rgba(0, 0, 0, 1)',
          }}>
            ₹ 19/unit
          </div>
          
          {/* MOQ */}
          <div style={{
            width: '124.0577621459961px',
            height: '17.429603576660156px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '273px',
            left: '16px',
            fontFamily: 'Poppins',
        
        style: 'Regular',
            fontWeight: 500,
            fontStyle: 'Medium',
            fontSize: '14px',
            lineHeight: '140%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: 'rgba(0, 0, 0, 0.8)',
          }}>
            MOQ - 1000 pc
          </div>
          
          {/* ADD TO CART Button */}
          <div style={{
            width: '230px',
            height: '45.49885559082031px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '305px',
            borderRadius: '8.71px',
            backgroundColor: 'rgba(17, 114, 182, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <button style={{
              transform: 'rotate(0deg)',
              opacity: 1,
              fontFamily: 'Poppins',
        
        style: 'Regular',
              fontWeight: 600,
              fontStyle: 'SemiBold',
              fontSize: '20px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: 'rgba(7, 50, 80, 1)',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              margin: '0'
            }}>
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Tile 2 - Product */}
        <div style={{
          width: '230px',
          height: '350px',
          transform: 'rotate(0deg)',
          opacity: 1,
          borderRadius: '5px',
          border: '1px solid rgba(17, 114, 182, 0.15)',
          boxShadow: '0px 4px 4px 0px rgba(17, 114, 182, 0.15)',
          flexShrink: 0,
          position: 'relative',
          backgroundColor: 'white'
        }}>
          {/* Product Image */}
          <div style={{
            width: '186px',
            height: '186px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '5px',
            left: '22px',
            backgroundImage: `url(${tilephotoImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '8px',
          }} />
          
          {/* Product Title */}
          <div style={{
            width: '201px',
            height: '36px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '200px',
            left: '16px',
            fontFamily: 'Poppins',
        
        style: 'Regular',
            fontWeight: 700,
            fontStyle: 'Bold',
            fontSize: '16px',
            lineHeight: '114.99999999999999%',
            letterSpacing: '0%',
            color: 'rgba(0, 0, 0, 1)',
            textAlign: 'left',
          }}>
            Premium Office Supplies
          </div>
          
          {/* Price */}
          <div style={{
            width: '124px',
            height: '18px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '249px',
            left: '16px',
            fontFamily: 'Anek Devanagari',
            fontWeight: 600,
            fontStyle: 'SemiBold',
            fontSize: '22px',
            lineHeight: '140%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            boxShadow: '0px 4px 4px 0px rgba(17, 114, 182, 0.15)',
            color: 'rgba(0, 0, 0, 1)',
          }}>
            ₹ 19/unit
          </div>
          
          {/* MOQ */}
          <div style={{
            width: '124.0577621459961px',
            height: '17.429603576660156px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '273px',
            left: '16px',
            fontFamily: 'Poppins',
        
        style: 'Regular',
            fontWeight: 500,
            fontStyle: 'Medium',
            fontSize: '14px',
            lineHeight: '140%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: 'rgba(0, 0, 0, 0.8)',
          }}>
            MOQ - 1000 pc
          </div>
          
          {/* ADD TO CART Button */}
          <div style={{
            width: '230px',
            height: '45.49885559082031px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '305px',
            borderRadius: '8.71px',
            backgroundColor: 'rgba(17, 114, 182, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <button style={{
              transform: 'rotate(0deg)',
              opacity: 1,
              fontFamily: 'Poppins',
        
        style: 'Regular',
              fontWeight: 600,
              fontStyle: 'SemiBold',
              fontSize: '20px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: 'rgba(7, 50, 80, 1)',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              margin: '0'
            }}>
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Tile 3 - Product */}
        <div style={{
          width: '230px',
          height: '350px',
          transform: 'rotate(0deg)',
          opacity: 1,
          borderRadius: '5px',
          border: '1px solid rgba(17, 114, 182, 0.15)',
          boxShadow: '0px 4px 4px 0px rgba(17, 114, 182, 0.15)',
          flexShrink: 0,
          position: 'relative',
          backgroundColor: 'white'
        }}>
          {/* Product Image */}
          <div style={{
            width: '186px',
            height: '186px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '5px',
            left: '22px',
            backgroundImage: `url(${tilephotoImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '8px',
          }} />
          
          {/* Product Title */}
          <div style={{
            width: '201px',
            height: '36px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '200px',
            left: '16px',
            fontFamily: 'Poppins',
        
        style: 'Regular',
            fontWeight: 700,
            fontStyle: 'Bold',
            fontSize: '16px',
            lineHeight: '114.99999999999999%',
            letterSpacing: '0%',
            color: 'rgba(0, 0, 0, 1)',
            textAlign: 'left',
          }}>
            Office Essentials
          </div>
          
          {/* Price */}
          <div style={{
            width: '124px',
            height: '18px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '249px',
            left: '16px',
            fontFamily: 'Anek Devanagari',
            fontWeight: 600,
            fontStyle: 'SemiBold',
            fontSize: '22px',
            lineHeight: '140%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            boxShadow: '0px 4px 4px 0px rgba(17, 114, 182, 0.15)',
            color: 'rgba(0, 0, 0, 1)',
          }}>
            ₹ 19/unit
          </div>
          
          {/* MOQ */}
          <div style={{
            width: '124.0577621459961px',
            height: '17.429603576660156px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '273px',
            left: '16px',
            fontFamily: 'Poppins',
        
        style: 'Regular',
            fontWeight: 500,
            fontStyle: 'Medium',
            fontSize: '14px',
            lineHeight: '140%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: 'rgba(0, 0, 0, 0.8)',
          }}>
            MOQ - 1000 pc
          </div>
          
          {/* ADD TO CART Button */}
          <div style={{
            width: '230px',
            height: '45.49885559082031px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '305px',
            borderRadius: '8.71px',
            backgroundColor: 'rgba(17, 114, 182, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <button style={{
              transform: 'rotate(0deg)',
              opacity: 1,
              fontFamily: 'Poppins',
        
        style: 'Regular',
              fontWeight: 600,
              fontStyle: 'SemiBold',
              fontSize: '20px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: 'rgba(7, 50, 80, 1)',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              margin: '0'
            }}>
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Tile 4 - Product */}
        <div style={{
          width: '230px',
          height: '350px',
          transform: 'rotate(0deg)',
          opacity: 1,
          borderRadius: '5px',
          border: '1px solid rgba(17, 114, 182, 0.15)',
          boxShadow: '0px 4px 4px 0px rgba(17, 114, 182, 0.15)',
          flexShrink: 0,
          position: 'relative',
          backgroundColor: 'white'
        }}>
          {/* Product Image */}
          <div style={{
            width: '186px',
            height: '186px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '5px',
            left: '22px',
            backgroundImage: `url(${tilephotoImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '8px',
          }} />
          
          {/* Product Title */}
          <div style={{
            width: '201px',
            height: '36px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '200px',
            left: '16px',
            fontFamily: 'Poppins',
        
        style: 'Regular',
            fontWeight: 700,
            fontStyle: 'Bold',
            fontSize: '16px',
            lineHeight: '114.99999999999999%',
            letterSpacing: '0%',
            color: 'rgba(0, 0, 0, 1)',
            textAlign: 'left',
          }}>
            Business Supplies
          </div>
          
          {/* Price */}
          <div style={{
            width: '124px',
            height: '18px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '249px',
            left: '16px',
            fontFamily: 'Anek Devanagari',
            fontWeight: 600,
            fontStyle: 'SemiBold',
            fontSize: '22px',
            lineHeight: '140%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            boxShadow: '0px 4px 4px 0px rgba(17, 114, 182, 0.15)',
            color: 'rgba(0, 0, 0, 1)',
          }}>
            ₹ 19/unit
          </div>
          
          {/* MOQ */}
          <div style={{
            width: '124.0577621459961px',
            height: '17.429603576660156px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '273px',
            left: '16px',
            fontFamily: 'Poppins',
        
        style: 'Regular',
            fontWeight: 500,
            fontStyle: 'Medium',
            fontSize: '14px',
            lineHeight: '140%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: 'rgba(0, 0, 0, 0.8)',
          }}>
            MOQ - 1000 pc
          </div>
          
          {/* ADD TO CART Button */}
          <div style={{
            width: '230px',
            height: '45.49885559082031px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '305px',
            borderRadius: '8.71px',
            backgroundColor: 'rgba(17, 114, 182, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <button style={{
              transform: 'rotate(0deg)',
              opacity: 1,
              fontFamily: 'Poppins',
        
        style: 'Regular',
              fontWeight: 600,
              fontStyle: 'SemiBold',
              fontSize: '20px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: 'rgba(7, 50, 80, 1)',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              margin: '0'
            }}>
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Tile 5 - Product */}
        <div style={{
          width: '230px',
          height: '350px',
          transform: 'rotate(0deg)',
          opacity: 1,
          borderRadius: '5px',
          border: '1px solid rgba(17, 114, 182, 0.15)',
          boxShadow: '0px 4px 4px 0px rgba(17, 114, 182, 0.15)',
          flexShrink: 0,
          position: 'relative',
          backgroundColor: 'white'
        }}>
          {/* Product Image */}
          <div style={{
            width: '186px',
            height: '186px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '5px',
            left: '22px',
            backgroundImage: `url(${tilephotoImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '8px',
          }} />
          
          {/* Product Title */}
          <div style={{
            width: '201px',
            height: '36px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '200px',
            left: '16px',
            fontFamily: 'Poppins',
        
        style: 'Regular',
            fontWeight: 700,
            fontStyle: 'Bold',
            fontSize: '16px',
            lineHeight: '114.99999999999999%',
            letterSpacing: '0%',
            color: 'rgba(0, 0, 0, 1)',
            textAlign: 'left',
          }}>
            Professional Tools
          </div>
          
          {/* Price */}
          <div style={{
            width: '124px',
            height: '18px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '249px',
            left: '16px',
            fontFamily: 'Anek Devanagari',
            fontWeight: 600,
            fontStyle: 'SemiBold',
            fontSize: '22px',
            lineHeight: '140%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            boxShadow: '0px 4px 4px 0px rgba(17, 114, 182, 0.15)',
            color: 'rgba(0, 0, 0, 1)',
          }}>
            ₹ 19/unit
          </div>
          
          {/* MOQ */}
          <div style={{
            width: '124.0577621459961px',
            height: '17.429603576660156px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '273px',
            left: '16px',
            fontFamily: 'Poppins',
        
        style: 'Regular',
            fontWeight: 500,
            fontStyle: 'Medium',
            fontSize: '14px',
            lineHeight: '140%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: 'rgba(0, 0, 0, 0.8)',
          }}>
            MOQ - 1000 pc
          </div>
          
          {/* ADD TO CART Button */}
          <div style={{
            width: '230px',
            height: '45.49885559082031px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '305px',
            borderRadius: '8.71px',
            backgroundColor: 'rgba(17, 114, 182, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <button style={{
              width: '189px',
              height: '26px',
              transform: 'rotate(0deg)',
              opacity: 1,
              fontFamily: 'Poppins',
        
        style: 'Regular',
              fontWeight: 600,
              fontStyle: 'SemiBold',
              fontSize: '20px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: 'rgba(7, 50, 80, 1)',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}>
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Tile 6 - Product */}
        <div style={{
          width: '230px',
          height: '350px',
          transform: 'rotate(0deg)',
          opacity: 1,
          borderRadius: '5px',
          border: '1px solid rgba(17, 114, 182, 0.15)',
          boxShadow: '0px 4px 4px 0px rgba(17, 114, 182, 0.15)',
          flexShrink: 0,
          position: 'relative',
          backgroundColor: 'white'
        }}>
          {/* Product Image */}
          <div style={{
            width: '186px',
            height: '186px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '5px',
            left: '22px',
            backgroundImage: `url(${tilephotoImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '8px',
          }} />
          
          {/* Product Title */}
          <div style={{
            width: '201px',
            height: '36px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '200px',
            left: '16px',
            fontFamily: 'Poppins',
        
        style: 'Regular',
            fontWeight: 700,
            fontStyle: 'Bold',
            fontSize: '16px',
            lineHeight: '114.99999999999999%',
            letterSpacing: '0%',
            color: 'rgba(0, 0, 0, 1)',
            textAlign: 'left',
          }}>
            Quality Products
          </div>
          
          {/* Price */}
          <div style={{
            width: '124px',
            height: '18px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '249px',
            left: '16px',
            fontFamily: 'Anek Devanagari',
            fontWeight: 600,
            fontStyle: 'SemiBold',
            fontSize: '22px',
            lineHeight: '140%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            boxShadow: '0px 4px 4px 0px rgba(17, 114, 182, 0.15)',
            color: 'rgba(0, 0, 0, 1)',
          }}>
            ₹ 19/unit
          </div>
          
          {/* MOQ */}
          <div style={{
            width: '124.0577621459961px',
            height: '17.429603576660156px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '273px',
            left: '16px',
            fontFamily: 'Poppins',
        
        style: 'Regular',
            fontWeight: 500,
            fontStyle: 'Medium',
            fontSize: '14px',
            lineHeight: '140%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: 'rgba(0, 0, 0, 0.8)',
          }}>
            MOQ - 1000 pc
          </div>
          
          {/* ADD TO CART Button */}
          <div style={{
            width: '230px',
            height: '45.49885559082031px',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'absolute',
            top: '305px',
            borderRadius: '8.71px',
            backgroundColor: 'rgba(17, 114, 182, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <button style={{
              width: '189px',
              height: '26px',
              transform: 'rotate(0deg)',
              opacity: 1,
              fontFamily: 'Poppins',
        
        style: 'Regular',
              fontWeight: 600,
              fontStyle: 'SemiBold',
              fontSize: '20px',
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: 'rgba(7, 50, 80, 1)',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      
      {/* Spacer to add space under tiles and increase page length */}
      <div style={{
        width: '100%',
        height: '10px',
        position: 'absolute',
        top: '1925px',
        left: '0px'
      }}>
      </div>
    </div>
  )
}

export default App