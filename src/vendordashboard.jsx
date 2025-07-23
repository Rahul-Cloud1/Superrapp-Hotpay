import React, { useState, useEffect } from 'react';
import logo from './assets/image 3.png';
import profileIcon from './assets/profileicon.png';
import orderIcon from './assets/ordericon.png';
import walletIcon from './assets/walleticon.png';
import supportIcon from './assets/supporticon.png';
import approvalIcon from './assets/approvalicon.png';
import invoiceIcon from './assets/invoiceicon.png';
import logoutIcon from './assets/logouticon.png';

function VendorDashboard() {
  const [vendor, setVendor] = useState(null);
  const [warehouseAddresses, setWarehouseAddresses] = useState([]);
  const [billingAddresses, setBillingAddresses] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.4:5000/vendor')
      .then(res => res.json())
      .then(data => {
        setVendor(data);
        setWarehouseAddresses(data.warehouseAddresses || []);
        setBillingAddresses(data.billingAddresses || []);
      })
      .catch(() => {
        setVendor(null);
        setWarehouseAddresses([]);
        setBillingAddresses([]);
      });
  }, []);

  return (
    <div style={{
      width: '1440px',
      height: '900px',
      transform: 'rotate(0deg)',
      opacity: 1,
      background: '#F5F3F3',
      margin: 0,
      padding: 0,
      position: 'relative',
    }}>
      <header style={{
        width: '1440px',
        height: '120px',
        transform: 'rotate(0deg)',
        opacity: 1,
        background: '#FFFFFF59',
        boxShadow: '0px 4px 4px 0px #00000059',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10
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
            transform: 'rotate(0deg)',
            opacity: 1
          }}
        />
        <div style={{
          width: '452px',
          height: '62px',
          position: 'absolute',
          top: '34px',
          left: '285px',
          transform: 'rotate(0deg)',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '36px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#073250',
          display: 'flex',
          alignItems: 'center',
          verticalAlign: 'middle',
        }}>
          Vendor Dashboard
        </div>
      {/* Billing Address Box */}
      <div style={{
        width: '1190px',
        minHeight: '94px',
        position: 'absolute',
        top: '513px',
        left: '227px',
        borderRadius: '15px',
        background: '#1172B626',
        opacity: 1,
        transform: 'rotate(0deg)',
        color: '#1172B6',
        fontFamily: 'Poppins',
        fontSize: '28px',
        fontWeight: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '24px 32px',
      }}>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <span style={{ fontWeight: 600, fontSize: '22px', color: '#073250' }}>Billing address</span>
          <button style={{
            marginLeft: 'auto',
            padding: '10px 24px',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #073250 0%, #1172B6 100%)',
            color: '#fff',
            fontWeight: 500,
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0px 2px 8px 0px #0000001A',
          }}>Add new billing address</button>
        </div>
        {/* Dynamic billing addresses */}
        {billingAddresses.length === 0 ? (
          <div style={{ color: '#073250', fontSize: '16px', marginTop: '8px' }}>No billing addresses found.</div>
        ) : (
          billingAddresses.map((addr, idx) => (
            <div key={idx} style={{ color: '#073250', fontSize: '16px', marginTop: '8px' }}>
              {addr}
            </div>
          ))
        )}
      </div>
      {/* Warehouse Box */}
      <div style={{
        width: '1190px',
        minHeight: '94px',
        position: 'absolute',
        top: '401px',
        left: '227px',
        borderRadius: '15px',
        background: '#1172B626',
        opacity: 1,
        transform: 'rotate(0deg)',
        color: '#1172B6',
        fontFamily: 'Poppins',
        fontSize: '28px',
        fontWeight: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '24px 32px',
      }}>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <span style={{ fontWeight: 600, fontSize: '22px', color: '#073250' }}>Warehouse</span>
          <button style={{
            marginLeft: 'auto',
            padding: '10px 24px',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #073250 0%, #1172B6 100%)',
            color: '#fff',
            fontWeight: 500,
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0px 2px 8px 0px #0000001A',
          }}>Add new delivery address</button>
        </div>
        {/* Dynamic warehouse addresses */}
        {warehouseAddresses.length === 0 ? (
          <div style={{ color: '#073250', fontSize: '16px', marginTop: '8px' }}>No delivery addresses found.</div>
        ) : (
          warehouseAddresses.map((addr, idx) => (
            <div key={idx} style={{ color: '#073250', fontSize: '16px', marginTop: '8px' }}>
              {addr}
            </div>
          ))
        )}
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
            transform: 'rotate(0deg)',
            opacity: 1,
            cursor: 'pointer',
            transition: 'transform 300ms ease-out',
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
          transform: 'rotate(0deg)',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#000000',
          display: 'flex',
          alignItems: 'center',
          verticalAlign: 'middle',
        }}>
          My Profile
        </span>
      </header>
      {/* Sidebar inlined from Sidebar.jsx */}
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
            <span style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={profileIcon} alt="Profile" style={{ width: 25, height: 25, cursor: 'pointer' }} onClick={() => { window.location.href = '/vendordashboard'; }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15, opacity: 1 }}>My Profile</span>
          </div>

          {/* Orders icon and label */}
          <div style={{ position: 'absolute', top: 96, left: 23, display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={orderIcon} alt="Orders" style={{ width: 25, height: 25 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 13, opacity: 1 }}>Orders</span>
          </div>

          {/* Wallet icon and label */}
          <div style={{ position: 'absolute', top: 163, left: 23, display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 19.8, height: 18.75, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={walletIcon} alt="Wallet" style={{ width: 19.8, height: 18.75 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15, opacity: 1 }}>Catalog</span>
          </div>

          {/* Support icon and label */}
          <div style={{ position: 'absolute', top: 226, left: 23, display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={supportIcon} alt="Support" style={{ width: 25, height: 25 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 14, opacity: 1 }}>Support</span>
          </div>

          {/* Approval icon and label */}
          <div style={{ position: 'absolute', top: 291, left: 26, display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 18.75, height: 20.83, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={approvalIcon} alt="Approval" style={{ width: 18.75, height: 20.83 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15, opacity: 1 }}>Approvals</span>
          </div>

          {/* Invoice icon and label */}
          <div style={{ position: 'absolute', top: 351.83, left: 23, display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={invoiceIcon} alt="Invoice" style={{ width: 25, height: 25 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 13, opacity: 1 }}>Invoices</span>
          </div>

          {/* Logout icon and label */}
          <div style={{ position: 'absolute', top: 416.83, left: 26, display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={logoutIcon} alt="Logout" style={{ width: 20, height: 20 }} />
            </span>
            <span style={{ color: 'red', fontFamily: 'Poppins', fontSize: 14, opacity: 1 }}>Log out</span>
          </div>
        </nav>
      </aside>

      {/* My Profile Box */}
      <div style={{
        width: '1190px',
        height: '243px',
        position: 'absolute',
        top: '140px',
        left: '227px',
        borderRadius: '15px',
        background: '#1172B626',
        opacity: 1,
        transform: 'rotate(0deg)',
        color: '#1172B6',
        fontFamily: 'Poppins',
        fontSize: '32px',
        fontWeight: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
        <div style={{
          width: '1190px',
          height: '44px',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
          background: 'linear-gradient(90deg, #073250 0%, #1172B6 0.01%)',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '32px',
          color: '#fff',
          fontSize: '24px',
          fontWeight: 600,
        }}>
          My Profile
        </div>
        {/* Vendor Details Section */}
        <div style={{
          width: '634px',
          height: '188px',
          position: 'absolute',
          top: '55px',
          left: '23px',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'Medium',
          fontSize: '15px',
          lineHeight: '30px',
          letterSpacing: '0%',
          color: '#000000',
          background: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}>
        <div>Vendor Name: <span style={{ fontWeight: 400 }}>{vendor?.name || ''}</span></div>
        <div>Employee Count: <span style={{ fontWeight: 400 }}>{vendor?.employeeCount || ''}</span></div>
        <div>GSTIN: <span style={{ fontWeight: 400 }}>{vendor?.gstin || ''}</span></div>
        <div>Contact: <span style={{ fontWeight: 400 }}>{vendor?.contact || ''}</span></div>
        <div>Email ID: <span style={{ fontWeight: 400 }}>{vendor?.email || ''}</span></div>
        <div>Category: <span style={{ fontWeight: 400 }}>{vendor?.category || ''}</span></div>
        </div>
      </div>
    </div>
  );
}

export default VendorDashboard;
