import React, { useEffect, useState } from 'react';
import logo from './assets/image 3.png';
import profileIcon from './assets/profileicon.png';
import orderIcon from './assets/ordericon.png';
import walletIcon from './assets/walleticon.png';
import supportIcon from './assets/supporticon.png';
import approvalIcon from './assets/approvalicon.png';
import invoiceIcon from './assets/invoiceicon.png';
import logoutIcon from './assets/logouticon.png';

function VendorOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Replace with your actual orders API endpoint
    fetch('http://10.10.0.218:5000/vendor/orders')
      .then(res => res.json())
      .then(data => {
        setOrders(data.orders || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch orders');
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ width: '1440px', height: '1050px', background: '#F5F3F3', position: 'relative' }}>
      {/* Header (copied from vendordashboard.jsx) */}
      <header style={{
        width: '1440px',
        height: '120px',
        background: '#FFFFFF59',
        boxShadow: '0px 4px 4px 0px #00000059',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100
      }}>
        <img
          src={logo}
          alt="SuperApp Logo"
          style={{
            width: '193.92px',
            height: '87px',
            position: 'absolute',
            top: '21px',
            left: '41px',
            opacity: 1
          }}
        />
        <div style={{
          width: '450px',
          height: '62px',
          position: 'absolute',
          top: '34px',
          left: '285px',
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: '36px',
          color: '#073250',
          display: 'flex',
          alignItems: 'center',
        }}>
          Vendor Orders
        </div>
        <img
          src={profileIcon}
          alt="My Profile Icon"
          style={{
            width: '30px',
            height: '30px',
            position: 'absolute',
            top: '57px',
            left: '1265px',
            cursor: 'pointer',
            color: '#1172B6',
          }}
          onClick={() => {
            window.location.href = '/vendordashboard';
          }}
        />
        <span style={{
          width: '95px',
          height: '20px',
          position: 'absolute',
          top: '62px',
          left: '1300px',
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: '16px',
          color: '#000000',
          display: 'flex',
          alignItems: 'center',
        }}>
          My Profile
        </span>
      </header>

      {/* Sidebar (copied from vendordashboard.jsx) */}
      <aside style={{
        width: '190px',
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
        zIndex: 99
      }}>
        <nav style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Profile icon and label */}
          <div style={{ position: 'absolute', top: 31, left: 23, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { window.location.href = '/vendordashboard'; }}>
            <span style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={profileIcon} alt="Profile" style={{ width: 25, height: 25 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15 }}>My Profile</span>
          </div>
          {/* Orders icon and label */}
          <div style={{ position: 'absolute', top: 96, left: 23, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { window.location.href = '/vendororders'; }}>
            <span style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={orderIcon} alt="Orders" style={{ width: 25, height: 25 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 13 }}>Orders</span>
          </div>
          {/* Wallet icon and label */}
          <div style={{ position: 'absolute', top: 163, left: 23, display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 19.8, height: 18.75, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={walletIcon} alt="Wallet" style={{ width: 19.8, height: 18.75 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15 }}>Catalog</span>
          </div>
          {/* Support icon and label */}
          <div style={{ position: 'absolute', top: 226, left: 23, display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={supportIcon} alt="Support" style={{ width: 25, height: 25 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 14 }}>Support</span>
          </div>
          {/* Approval icon and label */}
          <div style={{ position: 'absolute', top: 291, left: 26, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { window.location.href = '/vendorapprovals'; }}>
            <span style={{ width: 18.75, height: 20.83, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={approvalIcon} alt="Approval" style={{ width: 18.75, height: 20.83 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15 }}>Approvals</span>
          </div>
          {/* Invoice icon and label */}
          <div style={{ position: 'absolute', top: 351.83, left: 23, display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={invoiceIcon} alt="Invoice" style={{ width: 25, height: 25 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 13 }}>Invoices</span>
          </div>
          {/* Logout icon and label */}
          <div style={{ position: 'absolute', top: 416.83, left: 26, display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={logoutIcon} alt="Logout" style={{ width: 20, height: 20 }} />
            </span>
            <span style={{ color: 'red', fontFamily: 'Poppins', fontSize: 14 }}>Log out</span>
          </div>
        </nav>
      </aside>

    </div>
  );
}

export default VendorOrders;
