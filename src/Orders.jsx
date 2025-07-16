

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

const Orders = () => {
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
        <aside style={{
          width: '210px',
          height: '779px',
          position: 'fixed',
          top: '120px',
          left: 0,
          background: 'rgba(255, 255, 255, 1)',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          borderWidth: '1px',
          transform: 'rotate(0deg)',
          opacity: 1,
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
        {/* 'My Orders' box under header */}
        <div
          style={{
            position: 'absolute',
            top: '151px',
            left: '235px',
            width: '266px',
            height: '78px',
            borderRadius: '12px',
            background: 'none',
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'none',
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '32px',
            color: 'black',
            zIndex: 2,
            transform: 'rotate(0deg)',
          }}
        >
          My Orders
          <div
            style={{
              position: 'absolute',
              top: '175px',
              left: '12px',
              width: '510px',
              height: '27px',
              transform: 'rotate(0deg)',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              color: 'rgba(0, 0, 0, 1)'
            }}
          >
            JK Copier Paper - 20 pc, Parker Beta Neo Metalic Blue - 100 pc
          </div>
        </div>
        {/* I under 'My Orders' text */}
        <div
          style={{
            position: 'absolute',
            top: '237px',
            left: '223px',
            width: '1190px',
            height: '194px',
            borderRadius: '10px',
            opacity: 1,
            background: 'rgba(17, 114, 182, 0.15)',
            color: 'rgba(17, 114, 182, 0.15)',
            border: '1.5px solid rgba(22, 142, 228, 0.15)',
            zIndex: 1,
            transform: 'rotate(0deg)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '22px',
              width: '116px',
              height: '23px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.7)'
            }}
          >
            21/07/2025
          </div>
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '953px',
              width: '185px',
              height: '23px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.7)'
            }}
          >
            Invoice no. - 124536
          </div>
          <div
            style={{
              position: 'absolute',
              top: '54px',
              left: '22px',
              width: '196px',
              height: '21px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.7)'
            }}
          >
            Order ID - 1324565
          </div>
            <div
              style={{
                position: 'absolute',
                top: '116px',
                left: '22px',
                width: '196px',
                height: '21px',
                opacity: 1,
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: 0,
                verticalAlign: 'middle',
                color: 'rgba(0, 0, 0, 0.7)'
              }}
            >
              Total amount - Rs 12,500
            </div>
            <div
              style={{
                position: 'absolute',
                top: '147px',
                left: '22px',
                width: '568px',
                height: '21px',
                opacity: 1,
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: 0,
                verticalAlign: 'middle',
                color: 'rgba(0, 0, 0, 0.7)'
              }}
            >
              Delivery address - 324, Sector 27, Gurugram, Haryana - 122002
            </div>
            <div
              style={{
                position: 'absolute',
                top: '140.85px',
                left: '741.92px',
                width: '350.7691955566406px',
                height: '0px',
                opacity: 1,
                borderWidth: '1.46px',
                border: '1.46px solid rgba(0, 0, 0, 0.75)'
              }}
            />
            {/* Four circles on the line: start, center-left, center-right, end */}
            {/* Calculate exact positions for perfect alignment */}
            <div
              style={{
                position: 'absolute',
                top: `${140.85 - 10.23 / 2}px`,
                left: `${741.92 - 10.23 / 2}px`,
                width: '10.23px',
                height: '10.23px',
                opacity: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                borderRadius: '50%'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '157.8px',
                left: `${741.92 - 10.23 / 2 - (93.73332977294922/2) + 10.23/2}px`,
                width: '93.73px',
                height: '15.2px',
                opacity: 1,
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '12.67px',
                lineHeight: '150%',
                letterSpacing: 0,
                textAlign: 'center',
                verticalAlign: 'middle',
                color: 'rgba(0, 0, 0, 0.75)'
              }}
            >
              Order placed
            </div>
            <div
              style={{
                position: 'absolute',
                top: `${140.85 - 10.23 / 2}px`,
                left: `${741.92 + (350.7691955566406 / 3) - 10.23 / 2}px`,
                width: '10.23px',
                height: '10.23px',
                opacity: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                borderRadius: '50%'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '157.8px',
                left: `${741.92 + (350.7691955566406 / 3) - 10.23 / 2 - (93.73332977294922/2) + 10.23/2}px`,
                width: '93.73px',
                height: '15.2px',
                opacity: 1,
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '12.67px',
                lineHeight: '150%',
                letterSpacing: 0,
                textAlign: 'center',
                verticalAlign: 'middle',
                color: 'rgba(0, 0, 0, 0.75)'
              }}
            >
              Approval
            </div>
            <div
              style={{
                position: 'absolute',
                top: `${140.85 - 10.23 / 2}px`,
                left: `${741.92 + (2 * 350.7691955566406 / 3) - 10.23 / 2}px`,
                width: '10.23px',
                height: '10.23px',
                opacity: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                borderRadius: '50%'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '157.8px',
                left: `${741.92 + (2 * 350.7691955566406 / 3) - 10.23 / 2 - (93.73332977294922/2) + 10.23/2}px`,
                width: '93.73px',
                height: '15.2px',
                opacity: 1,
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '12.67px',
                lineHeight: '150%',
                letterSpacing: 0,
                textAlign: 'center',
                verticalAlign: 'middle',
                color: 'rgba(0, 0, 0, 0.75)'
              }}
            >
              Out for delivery
            </div>
            <div
              style={{
                position: 'absolute',
                top: `${140.85 - 10.23 / 2}px`,
                left: `${741.92 + 350.7691955566406 - 10.23 / 2}px`,
                width: '10.23px',
                height: '10.23px',
                opacity: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                borderRadius: '50%'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '157.8px',
                left: `${741.92 + 350.7691955566406 - 10.23 / 2 - (93.73332977294922/2) + 10.23/2}px`,
                width: '93.73px',
                height: '15.2px',
                opacity: 1,
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '12.67px',
                lineHeight: '150%',
                letterSpacing: 0,
                textAlign: 'center',
                verticalAlign: 'middle',
                color: 'rgba(0, 0, 0, 0.75)'
              }}
            >
              Delivered
            </div>
        </div>
        <main className="profile-scrollable" style={{marginLeft: '210px', paddingTop: '120px', height: 'calc(100vh - 120px)', overflow: 'auto'}}>
          {/* Orders content goes here */}
        </main>
        {/* New box with specified styles */}
        <div
          style={{
            position: 'absolute',
            top: '440px',
            left: '223px',
            width: '1190px',
            height: '194px',
            borderRadius: '10px',
            opacity: 1,
            background: 'rgba(17, 114, 182, 0.15)',
            transform: 'rotate(0deg)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '22px',
              width: '116px',
              height: '23px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.7)'
            }}
          >
            21/07/2025
          </div>
          <div
            style={{
              position: 'absolute',
              top: '85px',
              left: '20px',
              width: '510px',
              height: '27px',
              transform: 'rotate(0deg)',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              color: 'rgba(0, 0, 0, 1)'
            }}
          >
            JK Copier Paper - 20 pc, Parker Beta Neo Metalic Blue - 100 pc
          </div>
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '953px',
              width: '185px',
              height: '23px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.7)'
            }}
          >
            Invoice no. - 124536
          </div>
          <div
            style={{
              position: 'absolute',
              top: '54px',
              left: '22px',
              width: '196px',
              height: '21px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.7)'
            }}
          >
            Order ID - 1324565
          </div>
          <div
            style={{
              position: 'absolute',
              top: '116px',
              left: '22px',
              width: '196px',
              height: '21px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.7)'
            }}
          >
            Total amount - Rs 12,500
          </div>
          <div
            style={{
              position: 'absolute',
              top: '147px',
              left: '22px',
              width: '568px',
              height: '21px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.7)'
            }}
          >
            Delivery address - 324, Sector 27, Gurugram, Haryana - 122002
          </div>
          {/* Four circles and status labels for box 2 */}
          <div
            style={{
              position: 'absolute',
              top: '140.85px',
              left: '741.92px',
              width: '350.7691955566406px',
              height: '0px',
              opacity: 1,
              borderWidth: '1.46px',
              border: '1.46px solid rgba(0, 0, 0, 0.75)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: `${140.85 - 10.23 / 2}px`,
              left: `${741.92 - 10.23 / 2}px`,
              width: '10.23px',
              height: '10.23px',
              opacity: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              borderRadius: '50%'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '157.8px',
              left: `${741.92 - 10.23 / 2 - (93.73332977294922/2) + 10.23/2}px`,
              width: '93.73px',
              height: '15.2px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '12.67px',
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.75)'
            }}
          >
            Order placed
          </div>
          <div
            style={{
              position: 'absolute',
              top: `${140.85 - 10.23 / 2}px`,
              left: `${741.92 + (350.7691955566406 / 3) - 10.23 / 2}px`,
              width: '10.23px',
              height: '10.23px',
              opacity: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              borderRadius: '50%'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '157.8px',
              left: `${741.92 + (350.7691955566406 / 3) - 10.23 / 2 - (93.73332977294922/2) + 10.23/2}px`,
              width: '93.73px',
              height: '15.2px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '12.67px',
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.75)'
            }}
          >
            Approval
          </div>
          <div
            style={{
              position: 'absolute',
              top: `${140.85 - 10.23 / 2}px`,
              left: `${741.92 + (2 * 350.7691955566406 / 3) - 10.23 / 2}px`,
              width: '10.23px',
              height: '10.23px',
              opacity: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              borderRadius: '50%'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '157.8px',
              left: `${741.92 + (2 * 350.7691955566406 / 3) - 10.23 / 2 - (93.73332977294922/2) + 10.23/2}px`,
              width: '93.73px',
              height: '15.2px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '12.67px',
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.75)'
            }}
          >
            Out for delivery
          </div>
          <div
            style={{
              position: 'absolute',
              top: `${140.85 - 10.23 / 2}px`,
              left: `${741.92 + 350.7691955566406 - 10.23 / 2}px`,
              width: '10.23px',
              height: '10.23px',
              opacity: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              borderRadius: '50%'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '157.8px',
              left: `${741.92 + 350.7691955566406 - 10.23 / 2 - (93.73332977294922/2) + 10.23/2}px`,
              width: '93.73px',
              height: '15.2px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '12.67px',
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.75)'
            }}
          >
            Delivered
          </div>
        </div>
        {/* Date text */}
        {/* Third box with specified styles */}
        <div
          style={{
            position: 'absolute',
            top: '643px',
            left: '223px',
            width: '1190px',
            height: '194px',
            borderRadius: '10px',
            opacity: 1,
            background: 'rgba(17, 114, 182, 0.15)',
            transform: 'rotate(0deg)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '22px',
              width: '116px',
              height: '23px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.7)'
            }}
          >
            21/07/2025
          </div>
          <div
            style={{
              position: 'absolute',
              top: '85px',
              left: '20px',
              width: '510px',
              height: '27px',
              transform: 'rotate(0deg)',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              color: 'rgba(0, 0, 0, 1)'
            }}
          >
            JK Copier Paper - 20 pc, Parker Beta Neo Metalic Blue - 100 pc
          </div>
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '953px',
              width: '185px',
              height: '23px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.7)'
            }}
          >
            Invoice no. - 124536
          </div>
          <div
            style={{
              position: 'absolute',
              top: '54px',
              left: '22px',
              width: '196px',
              height: '21px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.7)'
            }}
          >
            Order ID - 1324565
          </div>
          <div
            style={{
              position: 'absolute',
              top: '116px',
              left: '22px',
              width: '196px',
              height: '21px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.7)'
            }}
          >
            Total amount - Rs 12,500
          </div>
          <div
            style={{
              position: 'absolute',
              top: '147px',
              left: '22px',
              width: '568px',
              height: '21px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.7)'
            }}
          >
            Delivery address - 324, Sector 27, Gurugram, Haryana - 122002
          </div>
          {/* Four circles and status labels for box 3 */}
          <div
            style={{
              position: 'absolute',
              top: '140.85px',
              left: '741.92px',
              width: '350.7691955566406px',
              height: '0px',
              opacity: 1,
              borderWidth: '1.46px',
              border: '1.46px solid rgba(0, 0, 0, 0.75)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: `${140.85 - 10.23 / 2}px`,
              left: `${741.92 - 10.23 / 2}px`,
              width: '10.23px',
              height: '10.23px',
              opacity: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              borderRadius: '50%'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '157.8px',
              left: `${741.92 - 10.23 / 2 - (93.73332977294922/2) + 10.23/2}px`,
              width: '93.73px',
              height: '15.2px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '12.67px',
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.75)'
            }}
          >
            Order placed
          </div>
          <div
            style={{
              position: 'absolute',
              top: `${140.85 - 10.23 / 2}px`,
              left: `${741.92 + (350.7691955566406 / 3) - 10.23 / 2}px`,
              width: '10.23px',
              height: '10.23px',
              opacity: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              borderRadius: '50%'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '157.8px',
              left: `${741.92 + (350.7691955566406 / 3) - 10.23 / 2 - (93.73332977294922/2) + 10.23/2}px`,
              width: '93.73px',
              height: '15.2px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '12.67px',
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.75)'
            }}
          >
            Approval
          </div>
          <div
            style={{
              position: 'absolute',
              top: `${140.85 - 10.23 / 2}px`,
              left: `${741.92 + (2 * 350.7691955566406 / 3) - 10.23 / 2}px`,
              width: '10.23px',
              height: '10.23px',
              opacity: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              borderRadius: '50%'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '157.8px',
              left: `${741.92 + (2 * 350.7691955566406 / 3) - 10.23 / 2 - (93.73332977294922/2) + 10.23/2}px`,
              width: '93.73px',
              height: '15.2px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '12.67px',
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.75)'
            }}
          >
            Out for delivery
          </div>
          <div
            style={{
              position: 'absolute',
              top: `${140.85 - 10.23 / 2}px`,
              left: `${741.92 + 350.7691955566406 - 10.23 / 2}px`,
              width: '10.23px',
              height: '10.23px',
              opacity: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              borderRadius: '50%'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '157.8px',
              left: `${741.92 + 350.7691955566406 - 10.23 / 2 - (93.73332977294922/2) + 10.23/2}px`,
              width: '93.73px',
              height: '15.2px',
              opacity: 1,
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '12.67px',
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              verticalAlign: 'middle',
              color: 'rgba(0, 0, 0, 0.75)'
            }}
          >
            Delivered
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Orders;
