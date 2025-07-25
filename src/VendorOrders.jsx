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
    const token = localStorage.getItem('token');
    fetch('http://localhost:5000/vendor/order', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('Fetched orders:', data);
        setOrders(Array.isArray(data) ? data : data.orders || []);
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

      {/* Main content area: Dynamic Order Boxes */}
      <main style={{ position: 'absolute', top: '120px', left: '190px', width: '1250px', height: '930px', padding: '40px 0', overflowY: 'auto' }}>
        {loading ? (
          <div style={{ textAlign: 'center', marginTop: '100px', fontSize: '24px', color: '#1172B6' }}>Loading orders...</div>
        ) : error ? (
          <div
            style={{
              width: '1190px',
              height: '194px',
              borderRadius: '10px',
              background: '#d6e3ed',
              position: 'relative',
              top: '40px',
              left: '24px',
              opacity: 1,
              boxShadow: '0 2px 8px #1172B626',
              display: 'flex',
              flexDirection: 'column',
              padding: '16px 24px',
              color: '#073250',
              fontFamily: 'Poppins',
              fontSize: '18px',
              zIndex: 1,
              position: 'relative'
            }}
          >
            {/* Date label as per design, empty value */}
            <div
              style={{
                width: '116px',
                height: '23px',
                position: 'absolute',
                top: '16px',
                left: '22px',
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
                color: '#000000B2',
                opacity: 1,
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                zIndex: 2
              }}
            >
              {/* Empty value */}
            </div>
            {/* Invoice number top right */}
            <div style={{ position: 'absolute', top: '16px', right: '32px', fontSize: '16px', color: '#073250', fontWeight: 400 }}>
              Invoice no. -
            </div>
            {/* Order ID and product list */}
            <div style={{ fontWeight: 600, fontSize: '20px', marginTop: '40px', marginBottom: '4px' }}>
              Order ID -
            </div>
            <div style={{ fontSize: '15px', color: '#073250', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {/* Empty value */}
            </div>
            {/* Total amount */}
            <div style={{ fontSize: '15px', color: '#073250', marginBottom: '2px' }}>
              Total amount - Rs
            </div>
            {/* Delivery address */}
            <div style={{ fontSize: '15px', color: '#073250', marginBottom: '2px' }}>
              Delivery address -
            </div>
            {/* Status bar */}
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '18px', marginLeft: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#222' }}></div>
                  <span style={{ fontSize: '12px', color: '#222', marginTop: '4px' }}>Order placed</span>
                </div>
                <div style={{ width: '60px', height: '2px', background: '#222', marginTop: '-16px' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#222' }}></div>
                  <span style={{ fontSize: '12px', color: '#222', marginTop: '4px' }}>Approval</span>
                </div>
                <div style={{ width: '60px', height: '2px', background: '#222', marginTop: '-16px' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#222' }}></div>
                  <span style={{ fontSize: '12px', color: '#222', marginTop: '4px' }}>Out for delivery</span>
                </div>
                <div style={{ width: '60px', height: '2px', background: '#222', marginTop: '-16px' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#222' }}></div>
                  <span style={{ fontSize: '12px', color: '#222', marginTop: '4px' }}>Delivered</span>
                </div>
              </div>
            </div>
          </div>
        ) : orders.length === 0 ? (
          <div
            style={{
              width: '1190px',
              height: '194px',
              borderRadius: '10px',
              background: '#1172B626',
              position: 'relative',
              top: '40px',
              left: '24px',
              opacity: 1,
              boxShadow: '0 2px 8px #1172B626',
              display: 'flex',
              flexDirection: 'column',
              padding: '24px',
              color: '#073250',
              fontFamily: 'Poppins',
              fontSize: '18px',
              zIndex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Date label as per design, empty for no orders */}
            <div
              style={{
                width: '116px',
                height: '23px',
                position: 'absolute',
                top: '16px',
                left: '22px',
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
                color: '#000000B2',
                opacity: 1,
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                zIndex: 2
              }}
            >
              {/* Empty date for no orders */}
            </div>
            <div style={{ fontWeight: 600, fontSize: '22px', marginBottom: '8px', color: '#1172B6', marginTop: '32px' }}>No Orders Found</div>
            <div style={{ fontSize: '18px' }}>There are currently no orders to display.</div>
          </div>
        ) : (
          [...orders].reverse().map((order, idx) => (
            <div
              key={order.orderId || idx}
              style={{
                width: '1190px',
                minHeight: '120px',
                borderRadius: '10px',
                background: '#d6e3ed',
                position: 'relative',
                top: `${40 + idx * 140}px`,
                left: '24px',
                opacity: 1,
                boxShadow: '0 2px 8px #1172B626',
                display: 'flex',
                flexDirection: 'column',
                padding: '16px 24px',
                color: '#073250',
                fontFamily: 'Poppins',
                fontSize: '18px',
                zIndex: 1,
                marginBottom: '16px',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: '20px', marginBottom: '8px' }}>
                Order ID: {order.orderId}
              </div>
              <div style={{ fontSize: '16px', marginBottom: '4px' }}>
                Name: {order.name}
              </div>
              <div style={{ fontSize: '16px', marginBottom: '4px' }}>
                Quantity: {order.quantity}
              </div>
              <div style={{ fontSize: '16px', marginBottom: '4px' }}>
                Created At: {order.createdAt ? new Date(order.createdAt).toLocaleString() : ''}
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}


export default VendorOrders;
