

import React, { useEffect, useState } from 'react';
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



const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchOrders() {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        if (token) {
          document.cookie = `token=${token}; path=/`;
        }
        const res = await fetch('http://localhost:5000/order', {
          method: 'GET',
          headers: token ? { 'Authorization': `Bearer ${token}` } : {},
        });
        if (!res.ok) throw new Error('Failed to fetch orders');
        const data = await res.json();
        // Map API response to required fields for display
        const mappedOrders = Array.isArray(data) ? data.map(order => ({
          date: order.createdAt ? new Date(order.createdAt).toLocaleDateString() : '',
          createdAt: order.createdAt ? new Date(order.createdAt) : null,
          id: order.orderId || '',
          items: Array.isArray(order.items)
            ? order.items
                .filter(item => typeof item === 'object' && typeof item.name === 'string' && item.name.trim() !== '')
                .map(item => `${item.name} (Qty: ${item.quantity !== undefined ? item.quantity : ''})`)
            : [],
          totalAmount: order.totalAmount || '',
          address: order.deliveryAddress || '',
          invoiceNo: order.invoiceNo || '',
          status: order.status || '',
        })) : [];
        // Sort by createdAt descending (latest first)
        mappedOrders.sort((a, b) => {
          if (!a.createdAt && !b.createdAt) return 0;
          if (!a.createdAt) return 1;
          if (!b.createdAt) return -1;
          return b.createdAt - a.createdAt;
        });
        setOrders(mappedOrders);
      } catch (err) {
        setError(err.message || 'Error fetching orders');
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  // Helper for progress line status
  const getStatusIndex = (status) => {
    // status: 'placed', 'out_for_delivery', 'delivered'
    switch (status) {
      case 'placed': return 0;
      case 'out_for_delivery': return 1;
      case 'delivered': return 2;
      default: return 0;
    }
  };

  return (
    <div style={{ ...styles.profileStyle, minHeight: '100vh', background: 'rgba(245, 243, 243, 1)' }}>
      <style>{`
        .profile-scrollable::-webkit-scrollbar { display: none; }
        .profile-scrollable { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 1200px) {
          .orders-main {
            margin-left: 0 !important;
            padding-top: 100px !important;
          }
          .orders-card {
            left: 2vw !important;
            width: 96vw !important;
          }
          .orders-title {
            left: 2vw !important;
            font-size: 7vw !important;
          }
          aside {
            display: none !important;
          }
        }
        @media (max-width: 700px) {
          .orders-title {
            font-size: 8vw !important;
            top: 110px !important;
          }
          .orders-card {
            top: unset !important;
            position: static !important;
            margin: 16px 0 !important;
            height: auto !important;
            min-height: 220px !important;
            padding-bottom: 24px !important;
          }
          .orders-card > div {
            position: static !important;
            display: block !important;
            margin-bottom: 8px !important;
          }
          .orders-progress-line, .orders-status-label {
            display: none !important;
          }
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
        <aside style={{
          width: '210px',
          height: 'calc(100vh - 120px)',
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
          <nav style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', top: 31, left: 23, display: 'flex', alignItems: 'center' }}>
              <a href="/profile" style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, textDecoration: 'none' }} aria-label="Profile">
                <img src={profileicon} alt="Profile" style={{ width: 25, height: 25 }} />
              </a>
              <a href="/profile" style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15, opacity: 1, textDecoration: 'none' }}>My Profile</a>
            </div>
            <div style={{ position: 'absolute', top: 96, left: 23, display: 'flex', alignItems: 'center' }}>
              <a href="/orders" style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }} aria-label="Orders">
                <img src={ordericon} alt="Orders" style={{ width: 25, height: 25 }} />
              </a>
              <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 13, opacity: 1 }}>Orders</span>
            </div>
            <div style={{ position: 'absolute', top: 163, left: 23, display: 'flex', alignItems: 'center' }}>
              <a href="/wallet" style={{ width: 19.8, height: 18.75, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, textDecoration: 'none' }} aria-label="Wallet">
                <img src={walleticon} alt="Wallet" style={{ width: 19.8, height: 18.75 }} />
              </a>
              <a href="/wallet" style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15, opacity: 1, textDecoration: 'none' }}>SuperWallet</a>
            </div>
            <div style={{ position: 'absolute', top: 226, left: 23, display: 'flex', alignItems: 'center' }}>
              <a href="/support" style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }} aria-label="Support">
                <img src={supporticon} alt="Support" style={{ width: 25, height: 25 }} />
              </a>
              <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 14, opacity: 1 }}>Support</span>
            </div>
            <div style={{ position: 'absolute', top: 291, left: 26, display: 'flex', alignItems: 'center' }}>
              <a href="/approval" style={{ width: 18.75, height: 20.83, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, textDecoration: 'none' }} aria-label="Approval">
                <img src={approvalicon} alt="Approval" style={{ width: 18.75, height: 20.83 }} />
              </a>
              <a href="/approval" style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15, opacity: 1, textDecoration: 'none' }}>Approvals</a>
            </div>
            <div style={{ position: 'absolute', top: 351.83, left: 23, display: 'flex', alignItems: 'center' }}>
              <a href="/invoice" style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, textDecoration: 'none' }} aria-label="Invoice">
                <img src={invoiceicon} alt="Invoice" style={{ width: 25, height: 25 }} />
              </a>
              <a href="/invoice" style={{ color: '#111', fontFamily: 'Poppins', fontSize: 13, opacity: 1, textDecoration: 'none' }}>Invoices</a>
            </div>
            <div style={{ position: 'absolute', top: 416.83, left: 26, display: 'flex', alignItems: 'center' }}>
              <a href="/login" style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, textDecoration: 'none' }} aria-label="Logout">
                <img src={logouticon} alt="Logout" style={{ width: 20, height: 20 }} />
              </a>
              <a href="/login" style={{ color: 'red', fontFamily: 'Poppins', fontSize: 14, opacity: 1, textDecoration: 'none' }}>Log out</a>
            </div>
          </nav>
        </aside>
        <main className="profile-scrollable orders-main" style={{marginLeft: '160px', paddingTop: '160px', minHeight: 'calc(100vh - 120px)', overflow: 'auto', width: '100%'}}>
          <div className="orders-title" style={{
            position: 'relative',
            marginLeft: '112px',
            marginTop: '-24px',
            marginBottom: '12px',
            width: '266px',
            height: '55px',
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontStyle: 'Medium',
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: 0,
            verticalAlign: 'middle',
            color: '#000000',
            opacity: 1,
            transform: 'rotate(0deg)'
          }}>My Orders</div>
          {loading && <div style={{fontSize:20, color:'#007AFF'}}>Loading...</div>}
          {error && <div style={{fontSize:18, color:'red'}}>{error}</div>}
          {orders.length === 0 && !loading && !error && (
            <div style={{fontSize:18, color:'#333'}}>No orders found.</div>
          )}
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginLeft: '90px', marginTop: '-3px'}}>
            {orders.map((order, idx) => (
              <div key={order.id} className="orders-card" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                width: '95vw',
                maxWidth: '1100px',
                minHeight: '194px',
                borderRadius: '10px',
                background: 'rgba(17, 114, 182, 0.15)',
                border: '1.5px solid #1172B626',
                fontFamily: 'Poppins',
                color: '#000',
                opacity: 1,
                boxSizing: 'border-box',
                zIndex: 2,
                overflow: 'hidden',
                marginBottom: '16px',
                minWidth: '280px',
                padding: '24px 32px 24px 32px',
                gap: '8px',
              }}>
                <div style={{fontSize:'16px',fontWeight:600,marginBottom:'2px'}}>{order.date}</div>
                <div style={{fontSize:'16px',fontWeight:600,marginBottom:'2px'}}>{`Order ID - ${order.id}`}</div>
                <div className="orders-items-list" style={{
                  fontSize: '16px',
                  color: '#222',
                  fontWeight: 400,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  width: '100%',
                  minHeight: '24px',
                  marginBottom: '2px',
                }}>
                  {Array.isArray(order.items) && order.items.length > 0
                    ? order.items.map((item, i) => (
                        typeof item === 'string' ? <div key={i} style={{
                          fontWeight: 650,
                          color: '#222',
                          fontFamily: 'Poppins',
                          fontSize: '15px',
                        }}>{item}</div> : null
                      ))
                    : null}
                </div>
                <div style={{fontSize:'16px',fontWeight:600,marginBottom:'2px'}}>{`Total amount - Rs ${order.totalAmount}`}</div>
                <div style={{fontSize:'16px',fontWeight:600,width:'100%',marginBottom:'2px'}}>{`Delivery address - ${order.address}`}</div>
                <div style={{width:'100%',marginTop:'8px',position:'relative',height:'32px'}}>
                  <div className="orders-progress-line" style={{position:'absolute',top:'12px',left:'36%',width:'28%',height:'0px',border:'1.5px solid rgba(0,0,0,0.75)'}} />
                  {[0,1,2].map(i => (
                    <div key={i} style={{
                      position:'absolute',
                      top:'7px',
                      left:`calc(36% + ${i} * 14%)`,
                      width:'15px',height:'15px',
                      backgroundColor: i <= getStatusIndex(order.status) ? '#28a745' : 'rgba(0,0,0,0.75)',
                      borderRadius:'50%',
                      opacity:1
                    }} />
                  ))}
                  <div className="orders-status-label" style={{position:'absolute',top:'20px',left:'36%',width:'93px',height:'15px',fontSize:'13px',textAlign:'center',color:'rgba(0,0,0,0.75)'}}>Order placed</div>
                  <div className="orders-status-label" style={{position:'absolute',top:'20px',left:'50%',width:'93px',height:'15px',fontSize:'13px',textAlign:'center',color:'rgba(0,0,0,0.75)'}}>Out for delivery</div>
                  <div className="orders-status-label" style={{position:'absolute',top:'20px',left:'64%',width:'93px',height:'15px',fontSize:'13px',textAlign:'center',color:'rgba(0,0,0,0.75)'}}>Delivered</div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Orders;
      