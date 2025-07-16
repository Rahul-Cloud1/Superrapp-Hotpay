

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

const Support = () => {
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
      <div style={{width: '1440px', height: '900px', position: 'relative', opacity: 1}}>
        <header style={styles.header}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <SearchBar />
          <ViewCartButton />
          <ProfileSection />
        </header>
        {/* Box under header */}
        <div style={{
          position: 'absolute',
          top: '154px',
          left: '235px',
          width: '1190px',
          height: '349px',
          borderRadius: '5px',
          background: 'rgba(17, 114, 182, 0.15)',
          opacity: 1,
          boxShadow: '0 2px 8px rgba(17, 114, 182, 0.08)',
        }}>
          <div style={{
            position: 'absolute',
            top: '15px',
            left: '25px',
            width: '431px',
            height: '33px',
            opacity: 1,
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: '22px',
            lineHeight: '150%',
            letterSpacing: 0,
            color: 'rgba(0, 0, 0, 1)',
            display: 'flex',
            alignItems: 'center',
            verticalAlign: 'middle',
          }}>
            Feel free to write us your query :)
          </div>
        {/* Query box */}
        <div
          style={{
            position: 'absolute',
            top: '67px',
            left: '25px',
            width: '1137px',
            height: '181px',
            borderRadius: '10px',
            background: 'white',
            opacity: 1,
            boxShadow: '0 2px 8px rgba(17, 114, 182, 0.08)',
            border: '1px solid rgba(17, 114, 182, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'none',
          }}
        >
          <textarea
            placeholder="Type your query here..."
            style={{
              width: '95%',
              height: '80%',
              border: 'none',
              outline: 'none',
              resize: 'none',
              fontFamily: 'Poppins',
              fontSize: '18px',
              color: 'black',
              background: 'transparent',
              padding: '16px',
              borderRadius: '8px',
              boxSizing: 'border-box',
            }}
          />
        </div>
        {/* Submit button */}
        <button
          style={{
            position: 'absolute',
            top: '274px',
            left: '25px',
            width: '215px',
            height: '50px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #007BFF 0%, #0056B3 100%)',
            color: 'white',
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '18px',
            border: 'none',
            cursor: 'pointer',
            opacity: 1,
            boxShadow: '0px 4px 8px rgba(0, 123, 255, 0.15)',
            transition: 'all 0.3s ease',
          }}
        >
          Submit
        </button>
        </div>
        {/* FAQs heading under the box */}
        <div
          style={{
            position: 'absolute',
            top: '537px',
            left: '267px',
            width: '201px',
            height: '39px',
            opacity: 1,
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: 0,
            color: 'rgba(0, 0, 0, 1)',
            display: 'flex',
            alignItems: 'center',
            verticalAlign: 'middle',
          }}
        >
          FAQs
        </div>
        {/* Modern Attractive Accordion FAQs Box */}
        <div
          style={{
            position: 'absolute',
            top: '590px',
            left: '267px',
            width: '1100px',
            minHeight: '100px',
            maxHeight: '200px',
            background: 'rgba(255,255,255,0.85)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(17, 114, 182, 0.18)',
            border: 'none',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 1,
            overflowY: 'auto',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Hide scrollbar for Chrome, Safari, Opera */}
          <style>{`
            .faqs-scrollable::-webkit-scrollbar { display: none; }
            .faqs-scrollable { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
          <div className="faqs-scrollable" style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {[{
              q: 'What is SuperApp?',
              a: 'SuperApp is an all-in-one platform for office supplies, orders, approvals, and more.'
            }, {
              q: 'How do I contact support?',
              a: 'You can use the query box above or email us at support@superapp.com.'
            }, {
              q: 'How do I track my orders?',
              a: 'Go to the Orders section from the sidebar to view and track your orders.'
            }, {
              q: 'Can I approve requests from my mobile?',
              a: 'Yes, SuperApp is mobile-friendly and you can approve requests on any device.'
            }, {
              q: 'Is my data secure?',
              a: 'We use industry-standard security to keep your data safe and private.'
            }].map((faq, idx) => (
              <details key={idx} style={{
                background: 'transparent',
                borderRadius: '12px',
                boxShadow: '0 2px 12px rgba(17, 114, 182, 0.07)',
                padding: '12px 20px',
                fontFamily: 'Poppins',
                fontSize: '16px',
                color: '#222',
                border: 'none',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s',
                outline: 'none',
              }}>
                <summary style={{
                  fontWeight: 700,
                  fontSize: '19px',
                  color: '#007BFF',
                  outline: 'none',
                  cursor: 'pointer',
                  marginBottom: '8px',
                  padding: '6px 0',
                  borderRadius: '8px',
                  transition: 'background 0.2s',
                }}
                  onMouseOver={e => e.target.style.background = 'rgba(0,123,255,0.07)'}
                  onMouseOut={e => e.target.style.background = 'transparent'}
                >{faq.q}</summary>
                <div style={{marginTop: '8px', color: '#333', background: 'transparent', padding: '0 4px'}}>{faq.a}</div>
              </details>
            ))}
          </div>
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
          zIndex: 10
        }}>
          {/* Sidebar navigation icons */}
          <nav style={{ position: 'relative', width: '210px', height: '779px' }}>
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
        <main className="profile-scrollable" style={{marginLeft: '210px', paddingTop: '120px', height: 'calc(100vh - 120px)', overflow: 'auto'}}>
          {/* Orders content goes here */}
        </main>
      </div>
    </div>
  );
};

export default Support;
