

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
        const res = await fetch('http://10.10.0.218:5000/order', {
          method: 'GET',
          headers: token ? { 'Authorization': `Bearer ${token}` } : {},
        });
        if (!res.ok) throw new Error('Failed to fetch orders');
        const data = await res.json();
        // Map API response to required fields for display
        const mappedOrders = Array.isArray(data) ? data.map(order => ({
          date: order.createdAt ? new Date(order.createdAt).toLocaleDateString() : '',
          id: order.orderId || '',
          items: Array.isArray(order.items)
            ? order.items.map(item => {
                const name = item.name || '';
                const quantity = item.quantity !== undefined ? item.quantity : '';
                return name ? `${name} (Qty: ${quantity})` : '';
              }).filter(Boolean)
            : [],
          totalAmount: order.totalAmount || '',
          address: order.deliveryAddress || '',
          invoiceNo: order.invoiceNo || '',
          status: order.status || '',
        })) : [];
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
    <div style={styles.profileStyle}>
      <style>{`
        .profile-scrollable::-webkit-scrollbar { display: none; }
        .profile-scrollable { -ms-overflow-style: none; scrollbar-width: none; }
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
        <main className="profile-scrollable" style={{marginLeft: '210px', paddingTop: '120px', height: 'calc(100vh - 120px)', overflow: 'auto'}}>
          <div style={{
            position: 'absolute',
            top: '151px',
            left: '235px',
            width: '266px',
            height: '78px',
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontStyle: 'Medium',
            fontSize: '52px',
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
          {orders.map((order, idx) => (
            <div key={order.id} style={{
              position: 'absolute',
              top: `${237 + idx * 203}px`,
              left: '223px',
              width: '1190px',
              height: '194px',
              borderRadius: '10px',
              background: 'rgba(17, 114, 182, 0.15)',
              border: '1.5px solid #1172B626',
              fontFamily: 'Poppins',
              color: '#000',
              opacity: 1,
              boxSizing: 'border-box',
              zIndex: 2,
              overflow: 'hidden',
            }}>
              {/* Date */}
              <div style={{position:'absolute',top:'24px',left:'32px',fontSize:'18px',fontWeight:500}}>{order.date}</div>
              {/* Invoice No. */}
              {/* <div style={{position:'absolute',top:'24px',left:'950px',fontSize:'18px',fontWeight:500}}>{`Invoice no. - ${order.invoiceNo}`}</div> */}
              {/* Order ID */}
              <div style={{position:'absolute',top:'60px',left:'32px',fontSize:'16px',fontWeight:800}}>{`Order ID - ${order.id}`}</div>
              {/* Items */}
              <div style={{position:'absolute',top:'90px',left:'32px',fontSize:'16px',color:'#222',fontWeight:400}}>{order.items && order.items.join(', ')}</div>
              {/* Total Amount */}
              <div style={{position:'absolute',top:'120px',left:'32px',fontSize:'16px',fontWeight:500}}>{`Total amount - Rs ${order.totalAmount}`}</div>
              {/* Delivery Address */}
              <div style={{position:'absolute',top:'150px',left:'32px',fontSize:'16px',width:'568px',fontWeight:400}}>{`Delivery address - ${order.address}`}</div>
              {/* Progress line */}
              <div style={{position:'absolute',top:'140px',left:'750px',width:'350px',height:'0px',border:'1.5px solid rgba(0,0,0,0.75)'}} />
              {/* Status circles: only 3 (Order placed, Out for delivery, Delivered) */}
              {[0,1,2].map(i => (
                <div key={i} style={{
                  position:'absolute',
                  top:`${140 - 10/2}px`,
                  left:`${750 + (i * 350/2) - 10/2}px`,
                  width:'10px',height:'10px',
                  backgroundColor: i <= getStatusIndex(order.status) ? '#28a745' : 'rgba(0,0,0,0.75)', // green
                  borderRadius:'50%',
                  opacity:1
                }} />
              ))}
              {/* Status labels: only 3 */}
              <div style={{position:'absolute',top:'157px',left:`${750 - 10/2 - (93/2) + 10/2}px`,width:'93px',height:'15px',fontSize:'13px',textAlign:'center',color:'rgba(0,0,0,0.75)'}}>Order placed</div>
              <div style={{position:'absolute',top:'157px',left:`${750 + (350/2) - 10/2 - (93/2) + 10/2}px`,width:'93px',height:'15px',fontSize:'13px',textAlign:'center',color:'rgba(0,0,0,0.75)'}}>Out for delivery</div>
              <div style={{position:'absolute',top:'157px',left:`${750 + 350 - 10/2 - (93/2) + 10/2}px`,width:'93px',height:'15px',fontSize:'13px',textAlign:'center',color:'rgba(0,0,0,0.75)'}}>Delivered</div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Orders;
      