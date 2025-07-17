

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/image 3.png';
import vectorIcon from './assets/Vector.png';
import profileIcon from './assets/My Profile Icon.png';
import profileicon from './assets/profileicon.png';
import ordericon from './assets/ordericon.png';
import walleticon from './assets/walleticon.png';
import supporticon from './assets/supporticon.png';
import approvalicon from './assets/approvalicon.png';
import invoiceicon from './assets/invoiceicon.png';
import logouticon from './assets/logouticon.png';
import './App.css';


const styles = {
  profileStyle: {
    width: '100vw',
    minHeight: '140vh',
    transform: 'rotate(0deg)',
    opacity: 1,
    background: 'rgba(245, 243, 243, 1)'
  },
  header: {
    width: '100%',
    height: '120px',
    background: 'rgba(255, 255, 255, 0.35)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.35)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
  },
  logo: {
    width: '193.92px',
    height: '87px',
    position: 'absolute',
    top: '21px',
    left: '41px',
  },
  searchContainer: {
    width: '721px',
    height: '50px',
    position: 'absolute',
    top: '46px',
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
    fontWeight: 600,
    fontSize: '18px',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 123, 255, 0.3)',
    transition: 'all 0.3s ease',
  },
};

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
);

const ViewCartButton = () => (
  <button style={{
    ...styles.blueButton,
    width: '152px',
    height: '50px',
    position: 'absolute',
    top: '46px',
    left: '1062px',
  }}>
    View Cart
  </button>
);

const ProfileSection = () => (
  <>
    <button style={{
      width: '30px',
      height: '30px',
      position: 'absolute',
      top: '57px',
      left: '1285px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
    }}>
      <img src={profileIcon} alt="Profile" style={{
        width: '30px',
        height: '30px',
        borderRadius: '50%'
      }} />
    </button>
    <span style={{
      position: 'absolute',
      top: '62px',
      left: '1320px',
      fontFamily: 'Poppins',
      fontSize: '16px',
      color: 'black',
    }}>
      My Profile
    </span>
  </>
);




// Helper: sidebar icon style
function sidebarIconStyle(top, left, width, height) {
  return {
    position: 'absolute',
    top: `${top}px`,
    left: `${left}px`,
    width,
    height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    opacity: 1,
    transition: 'transform 300ms ease-out',
  };
}

// Helper: animate icon (scale effect)
function animateIcon(e) {
  e.currentTarget.style.transform = 'scale(1.1)';
  setTimeout(() => {
    e.currentTarget.style.transform = 'scale(1)';
  }, 300);
}

const Profile = () => {
  return (
    <div style={styles.profileStyle}>
      <style>{`
        html, body {
          scroll-behavior: smooth;
        }
      `}</style>
      <div style={{width: '100%', minHeight: '100vh', position: 'relative'}}>
        <header style={styles.header}>
        <Link to="/app">
          <img src={logo} alt="Logo" style={styles.logo} />
        </Link>
          <SearchBar />
          <ViewCartButton />
          <ProfileSection />
        </header>
        {/* MY PROFILE heading */}
        <div style={{
          width: '244.62px',
          height: '53.61px',
          position: 'absolute',
          top: '158.86px',
          left: '250.9px',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'sans-serif',
          fontWeight: 600,
          fontSize: '35px',
          color: '#020202ff',
          letterSpacing: '2px',
          background: 'none',
          zIndex: 2
          
        }}>
          My Profile
        </div>
        {/* Custom styled box under header */}
        <div style={{
          width: '1141px',
          height: '230px',
          position: 'absolute',
          top: '240px',
          left: '235px',
          borderRadius: '15px',
          background: 'rgba(17, 114, 182, 0.15)',
          opacity: 1,
          transform: 'rotate(0deg)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: '27px 0 0 36px',
          boxSizing: 'border-box',
        }}>
          <div style={{
            width: '181.47px',
            height: '186.98px',
            opacity: 1,
            position: 'relative',
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            fontFamily: 'Poppins',  
            fontSize: '15px',
            color: '#222',
          }}>
            <div><b>Company Legal Name:</b></div>
            <div><b>Employee Count:</b></div>
            <div><b>GSTIN:</b></div>
            <div><b>Admin Name:</b></div>
            <div><b>Admin Contact:</b></div>
            <div><b>Admin Email ID:</b></div>
          </div>
        </div>
        {/* Approval Hierarchy heading under the box */}
        <div style={{
          width: '290.07px',
          height: '30.96px',
          position: 'absolute',
          top: '529.9px',
          left: '248.02px',
          opacity: 1,
          color: 'black',
          fontFamily: 'Poppins',
          fontSize: '24px',
          fontWeight: 500,
          letterSpacing: '1px',
        }}>
          Approval Hierarchy
        </div>
        <div style={{
          width: '268px',
          height: '47px',
          position: 'absolute',
          top: '704px',
          left: '248px',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontSize: '30px',
          lineHeight: '150%',
          letterSpacing: 0,
          verticalAlign: 'middle',
          color: 'black',
        }}>
          Delivery Address
        </div>
        <div style={{
          width: '226px',
          height: '47px',
          position: 'absolute',
          top: '759px',
          left: '248px',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '18px',
          color: 'black',
        }}>
          324, Sector 27, Gurugram, Haryana - 122002
        </div>
        <div style={{
          width: '268px',
          height: '47px',
          position: 'absolute',
          top: '704px',
          left: '924px',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontSize: '30px',
          lineHeight: '150%',
          letterSpacing: 0,
          verticalAlign: 'middle',
          color: 'black',
        }}>
          Billing Address
        </div>
        <div style={{
          width: '226px',
          height: '47px',
          position: 'absolute',
          top: '759px',
          left: '924px',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '18px',
          color: 'black',
        }}>
          324, Sector 27, Gurugram, Haryana - 122002
        </div>
        <div style={{
          width: '537.07px',
          height: '60.62px',
          position: 'absolute',
          top: '596.78px',
          left: '250.24px',
          opacity: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          {/* Level 1 */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '3px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#222',
            fontWeight: 400,
          }}>
            <span style={{fontWeight:700, minWidth:'70px'}}>Level 1 –</span>
            <span>1. Name</span>
            <span>2. Email</span>
            <span>3. Contact No.</span>
            <span>4. Designation</span>
          </div>
          {/* Level 2 */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '3px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#222',
            fontWeight: 400,
          }}>
            <span style={{fontWeight:700, minWidth:'70px'}}>Level 2 –</span>
            <span>1. Name</span>
            <span>2. Email</span>
            <span>3. Contact No.</span>
            <span>4. Designation</span>
          </div>
        </div>
        <aside style={{
          width: '210px',
          height: 'calc(140vh - 120px)',
          position: 'fixed',
          top: '120px',
          left: 0,
          background: 'rgba(255, 255, 255, 1)',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          opacity: 1,
          zIndex: 10
        }}>
          {/* Sidebar navigation icons */}
          <nav style={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Profile icon and label */}
            <div style={{ position: 'absolute', top: 31, left: 23, display: 'flex', alignItems: 'center' }}>
              <button
                style={{ width: 25, height: 25, background: 'none', border: 'none', padding: 0, cursor: 'pointer', opacity: 1, transition: 'transform 300ms ease-out', marginRight: 12 }}
                onClick={e => animateIcon(e)}
                aria-label="Profile"
              >
                <img src={profileicon} alt="Profile" style={{ width: 25, height: 25 }} />
              </button>
              <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15, opacity: 1 }}>My Profile</span>
            </div>

            {/* Orders icon and label */}
            <div style={{ position: 'absolute', top: 96, left: 23, display: 'flex', alignItems: 'center' }}>
              <a href="/orders" style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }} aria-label="Orders">
                <img src={ordericon} alt="Orders" style={{ width: 25, height: 25 }} />
              </a>
              <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 13, opacity: 1 }}>Orders</span>
            </div>

            {/* Wallet icon and label */}
            <div style={{ position: 'absolute', top: 163, left: 23, display: 'flex', alignItems: 'center' }}>
              <a href="/wallet" style={{ width: 19.8, height: 18.75, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }} aria-label="Wallet">
                <img src={walleticon} alt="Wallet" style={{ width: 19.8, height: 18.75 }} />
              </a>
              <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15, opacity: 1 }}>SuperWallet</span>
            </div>

            {/* Support icon and label */}
            <div style={{ position: 'absolute', top: 226, left: 23, display: 'flex', alignItems: 'center' }}>
              <a href="/support" style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }} aria-label="Support">
                <img src={supporticon} alt="Support" style={{ width: 25, height: 25 }} />
              </a>
              <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 14, opacity: 1 }}>Support</span>
            </div>

            {/* Approval icon and label */}
            <div style={{ position: 'absolute', top: 291, left: 26, display: 'flex', alignItems: 'center' }}>
              <a href="/approval" style={{ width: 18.75, height: 20.83, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }} aria-label="Approval">
                <img src={approvalicon} alt="Approval" style={{ width: 18.75, height: 20.83 }} />
              </a>
              <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15, opacity: 1 }}>Approvals</span>
            </div>

            {/* Invoice icon and label */}
            <div style={{ position: 'absolute', top: 351.83, left: 23, display: 'flex', alignItems: 'center' }}>
              <a href="/invoice" style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }} aria-label="Invoice">
                <img src={invoiceicon} alt="Invoice" style={{ width: 25, height: 25 }} />
              </a>
              <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 13, opacity: 1 }}>Invoices</span>
            </div>

            {/* Logout icon and label */}
            <div style={{ position: 'absolute', top: 416.83, left: 26, display: 'flex', alignItems: 'center' }}>
              <a href="/login" style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, textDecoration: 'none' }} aria-label="Logout">
                <img src={logouticon} alt="Logout" style={{ width: 20, height: 20 }} />
              </a>
              <a href="/login" style={{ color: 'red', fontFamily: 'Poppins', fontSize: 14, opacity: 1, textDecoration: 'none' }}>Log out</a>
            </div>
          </nav>

        </aside>
        <div style={{
          marginLeft: '210px',
          paddingTop: '120px',
          minHeight: 'calc(100vh - 120px)',
          width: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Orders content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
