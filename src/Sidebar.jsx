import React from 'react';
import { Link } from 'react-router-dom';
import profileicon from './assets/profileicon.png';
import ordericon from './assets/ordericon.png';
import walleticon from './assets/walleticon.png';
import supporticon from './assets/supporticon.png';
import approvalicon from './assets/approvalicon.png';
import invoiceicon from './assets/invoiceicon.png';
import logouticon from './assets/logouticon.png';

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

function animateIcon(e) {
  e.currentTarget.style.transform = 'scale(1.1)';
  setTimeout(() => {
    e.currentTarget.style.transform = 'scale(1)';
  }, 300);
}

const Sidebar = () => (
  <aside style={{
    width: '210px',
    height: '924px',
    position: 'fixed',
    top: '120px',
    left: 0,
    background: 'rgba(255, 255, 255, 1)',
    borderTop: '1px solid rgba(0,0,0,0.08)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.08)',
    opacity: 1,
    zIndex: 10
  }}>
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
);

export default Sidebar;
