

import React from 'react';
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
    width: '1440px',
    height: '900px',
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
    <a href="/profile" style={{ textDecoration: 'none' }}>
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
    </a>
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

const Approval = () => {
  return (
    <div style={styles.profileStyle}>
      {/* Hide scrollbar but allow scrolling */}
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .profile-scrollable::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .profile-scrollable {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
        }
      `}</style>
      <div style={{width: '100%', minHeight: '100vh', position: 'relative'}}>
        <header style={styles.header}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <SearchBar />
          <ViewCartButton />
          <ProfileSection />
        </header>
        {/* Frame 1 under header */}
        <div
          style={{
            position: 'absolute',
            top: '135px',
            left: '225px',
            width: '1190px',
            height: '369px',
            borderRadius: '15px',
            background: 'rgba(17, 114, 182, 0.15)',
            opacity: 1,
            transform: 'rotate(0deg)',
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '19px',
              width: '291px',
              height: '21px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '20px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            Approval ID - 1324565
          </div>
          <div
            style={{
              position: 'absolute',
              top: '54px',
              left: '19px',
              width: '291px',
              height: '24px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            Requested by:
          </div>
          <div
            style={{
              position: 'absolute',
              top: '78px',
              left: '19px',
              width: '237px',
              height: '23px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            Johndoe@apple.com
          </div>
          <div
            style={{
              position: 'absolute',
              top: '112px',
              left: '19px',
              width: '291px',
              height: '24px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            Order details:
          </div>
          <div
            style={{
              position: 'absolute',
              top: '136px',
              left: '19px',
              width: '237px',
              height: '54px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            1. Item A<br />2. Item B<br />3. Item C
          </div>
          <div
            style={{
              position: 'absolute',
              top: '200px',
              left: '19px',
              width: '291px',
              height: '24px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            Amount requested:
          </div>
          <div
            style={{
              position: 'absolute',
              top: '224px',
              left: '19px',
              width: '237px',
              height: '23px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            800 credits
          </div>
          <div
            style={{
              position: 'absolute',
              top: '259px',
              left: '19px',
              width: '291px',
              height: '24px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            Remarks:
          </div>
          <div
            style={{
              position: 'absolute',
              top: '283px',
              left: '19px',
              width: '237px',
              height: '23px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            if any
          </div>
          {/* Styled box for actions, visible and above aside */}
          <button
            style={{
              position: 'absolute',
              top: '270px',
              left: '791px',
              width: '160px',
              height: '53px',
              borderRadius: '8.92px',
              background: 'linear-gradient(180deg, #007AFF 30%, #004999 100%)',
              opacity: 1,
              transform: 'rotate(0deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '18px',
              boxShadow: '0px 4px 8px rgba(0, 123, 255, 0.3)',
              zIndex: 2,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Accept
          </button>
          <button
            style={{
              position: 'absolute',
              top: '270px',
              left: '967.52px',
              width: '160px',
              height: '53px',
              borderRadius: '8.92px',
              background: 'rgba(255, 255, 255, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#007AFF',
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '18px',
              boxShadow: '0px 4px 8px rgba(0, 123, 255, 0.1)',
              zIndex: 2,
              border: '1px solid #007AFF',
              cursor: 'pointer',
            }}
          >
            Reject
          </button>
          
        </div>
        <aside style={{
          width: '210px',
          height: '779px',
          position: 'fixed',
          top: '120px',
          left: 0,
          background: 'rgba(255, 255, 255, 1)',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          borderWidth: '1px',
          opacity: 1,
          transform: 'rotate(0deg)',
          zIndex: 10
        }}>
          {/* Sidebar navigation icons */}
          <nav style={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Profile icon and label */}
            <div style={{ position: 'absolute', top: 31, left: 23, display: 'flex', alignItems: 'center' }}>
              <a href="/profile" style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, textDecoration: 'none' }} aria-label="Profile">
                <img src={profileicon} alt="Profile" style={{ width: 25, height: 25 }} />
              </a>
              <a href="/profile" style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15, opacity: 1, textDecoration: 'none' }}>My Profile</a>
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
              <a href="/wallet" style={{ width: 19.8, height: 18.75, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, textDecoration: 'none' }} aria-label="Wallet">
                <img src={walleticon} alt="Wallet" style={{ width: 19.8, height: 18.75 }} />
              </a>
              <a href="/wallet" style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15, opacity: 1, textDecoration: 'none' }}>SuperWallet</a>
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
              <a href="/approval" style={{ width: 18.75, height: 20.83, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, textDecoration: 'none' }} aria-label="Approval">
                <img src={approvalicon} alt="Approval" style={{ width: 18.75, height: 20.83 }} />
              </a>
              <a href="/approval" style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15, opacity: 1, textDecoration: 'none' }}>Approvals</a>
            </div>

            {/* Invoice icon and label */}
            <div style={{ position: 'absolute', top: 351.83, left: 23, display: 'flex', alignItems: 'center' }}>
              <a href="/invoice" style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, textDecoration: 'none' }} aria-label="Invoice">
                <img src={invoiceicon} alt="Invoice" style={{ width: 25, height: 25 }} />
              </a>
              <a href="/invoice" style={{ color: '#111', fontFamily: 'Poppins', fontSize: 13, opacity: 1, textDecoration: 'none' }}>Invoices</a>
            </div>

            {/* Logout icon and label */}
            <div style={{ position: 'absolute', top: 416.83, left: 26, display: 'flex', alignItems: 'center' }}>
              <a href="/login" style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, textDecoration: 'none' }} aria-label="Logout">
                <img src={logouticon} alt="Logout" style={{ width: 20, height: 20 }} />
              </a>
              <a href="/login" style={{ color: 'red', fontFamily: 'Poppins', fontSize: 14, opacity: 1, textDecoration: 'none' }}>Log out</a>
            </div>
          </nav>

        {/* Frame 2 (box 2) below the first box */}
        <div
          style={{
            position: 'absolute',
            top: '395px',
            left: '225px',
            width: '1190px',
            height: '369px',
            borderRadius: '15px',
            background: 'rgba(17, 114, 182, 0.15)',
            opacity: 1,
            transform: 'rotate(0deg)',
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '19px',
              width: '291px',
              height: '21px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '20px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            Approval ID - 1324565
          </div>
          <div
            style={{
              position: 'absolute',
              top: '54px',
              left: '19px',
              width: '291px',
              height: '24px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            Requested by:
          </div>
          <div
            style={{
              position: 'absolute',
              top: '78px',
              left: '19px',
              width: '237px',
              height: '23px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            Johndoe@apple.com
          </div>
          <div
            style={{
              position: 'absolute',
              top: '112px',
              left: '19px',
              width: '291px',
              height: '24px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            Order details:
          </div>
          <div
            style={{
              position: 'absolute',
              top: '136px',
              left: '19px',
              width: '237px',
              height: '54px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            1. Item A<br />2. Item B<br />3. Item C
          </div>
          <div
            style={{
              position: 'absolute',
              top: '200px',
              left: '19px',
              width: '291px',
              height: '24px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            Amount requested:
          </div>
          <div
            style={{
              position: 'absolute',
              top: '224px',
              left: '19px',
              width: '237px',
              height: '23px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            800 credits
          </div>
          <div
            style={{
              position: 'absolute',
              top: '259px',
              left: '19px',
              width: '291px',
              height: '24px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            Remarks:
          </div>
          <div
            style={{
              position: 'absolute',
              top: '283px',
              left: '19px',
              width: '237px',
              height: '23px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
            }}
          >
            if any
          </div>
          {/* Styled box for actions, visible and above aside */}
          <button
            style={{
              position: 'absolute',
              top: '270px',
              left: '791px',
              width: '160px',
              height: '53px',
              borderRadius: '8.92px',
              background: 'linear-gradient(180deg, #007AFF 30%, #004999 100%)',
              opacity: 1,
              transform: 'rotate(0deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '18px',
              boxShadow: '0px 4px 8px rgba(0, 123, 255, 0.3)',
              zIndex: 2,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Accept
          </button>
          <button
            style={{
              position: 'absolute',
              top: '270px',
              left: '967.52px',
              width: '160px',
              height: '53px',
              borderRadius: '8.92px',
              background: 'rgba(255, 255, 255, 1)',
              opacity: 1,
              transform: 'rotate(0deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#007AFF',
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '18px',
              boxShadow: '0px 4px 8px rgba(0, 123, 255, 0.1)',
              zIndex: 2,
              border: '1px solid #007AFF',
              cursor: 'pointer',
            }}
          >
            Reject
          </button>
        </div>
        </aside>
        <main className="profile-scrollable" style={{marginLeft: '210px', paddingTop: '120px', height: 'calc(100vh - 120px)', overflow: 'auto'}}>
          {/* Orders content goes here */}
        </main>
      </div>
    </div>
  );
};

export default Approval;
