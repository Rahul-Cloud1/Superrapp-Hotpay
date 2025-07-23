import React, { useEffect, useState } from 'react';
import logo from './assets/image 3.png';
import profileIcon from './assets/profileicon.png';
import orderIcon from './assets/ordericon.png';
import walletIcon from './assets/walleticon.png';
import supportIcon from './assets/supporticon.png';
import approvalIcon from './assets/approvalicon.png';
import invoiceIcon from './assets/invoiceicon.png';
import logoutIcon from './assets/logouticon.png';

function VendorApprovals() {
  const [approvals, setApprovals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    fetch('http://10.10.0.218:5000/order/request', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setApprovals(data.approvals || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch approvals');
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ width: '1440px', height: '1050px', background: '#F5F3F3', position: 'relative' }}>
      {/* Header  */}
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
          Vendor Approvals
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

      {/* Main content area for dynamic approval boxes */}
      <div style={{
        position: 'fixed',
        top: '210px', // directly below header
        left: '227px',
        width: '1180px',
        height: '930px', // 1050px total - 120px header
        minHeight: '243px',
        paddingBottom: '40px',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 0,
        zIndex: 10
      }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden', // No scrolling
          }}
        >
          {loading ? (
            <div style={{ fontFamily: 'Poppins', fontSize: '20px', color: '#1172B6', textAlign: 'center', marginTop: '80px' }}>Loading approvals...</div>
          ) : error ? (
            <div style={{ width: '1150px', height: '243px', background: '#1172B626', borderRadius: '15px', opacity: 1, marginBottom: '30px', boxShadow: '0 2px 8px rgba(17, 114, 182, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '32px 40px', position: 'relative', transform: 'rotate(0deg)' }}>
              {/* No data shown in error box */}
            </div>
          ) : approvals.length === 0 ? (
            <div style={{ width: '1190px', height: '243px', background: '#1172B626', borderRadius: '15px', opacity: 1, marginBottom: '30px', boxShadow: '0 2px 8px rgba(17, 114, 182, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '32px 40px', position: 'relative', transform: 'rotate(0deg)' }}>
              {/* No data shown in empty box */}
            </div>
          ) : (
            approvals
              .slice()
              .sort((a, b) => new Date(b.date) - new Date(a.date)) // latest first
              .map((approval, idx) => (
                idx < 10 ? (
                  <div
                    key={idx}
                    style={{
                      width: '1190px',
                      height: '243px',
                      background: '#1172B626',
                      borderRadius: '15px',
                      opacity: 1,
                      marginBottom: '30px',
                      boxShadow: '0 2px 8px rgba(17, 114, 182, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      padding: '32px 40px',
                      position: 'relative',
                      transform: 'rotate(0deg)'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
                      <div style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '22px', color: '#073250' }}>
                        Product Name: {approval.name || 'N/A'}
                      </div>
                      <div style={{ fontFamily: 'Poppins', fontSize: '18px', color: '#073250' }}>
                        Quantity: {approval.quantity || 'N/A'}
                      </div>
                      <div style={{ fontFamily: 'Poppins', fontSize: '18px', color: approval.status === 'approved' ? '#1172B6' : 'red', background: '#fff', borderRadius: '8px', padding: '8px 18px', boxShadow: '0 1px 4px #1172B626', whiteSpace: 'nowrap', maxWidth: '220px', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginRight: '40px', marginTop: '0px' }}>
                        Status: {approval.status || 'N/A'}
                      </div>
                      <div style={{ fontFamily: 'Poppins', fontSize: '18px', color: '#073250' }}>
                        Date: {approval.createdAt || 'N/A'}
                      </div>
                    </div>
                  </div>
                ) : null
              ))
            )}
        </div>
      </div>
    </div>
  );
}

export default VendorApprovals;