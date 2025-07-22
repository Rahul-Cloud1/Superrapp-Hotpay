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
  
  const [approvals, setApprovals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchApprovals() {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://192.168.1.4:5000/approval', {
          method: 'GET',
          headers: token ? { 'Authorization': `Bearer ${token}` } : {},
        });
        if (!res.ok) throw new Error('Failed to fetch approvals');
        const data = await res.json();
        console.log('Approval API response:', data);
        // Map cart data to approval box fields based on API response
        let mapped = [];
        if (Array.isArray(data)) {
          mapped = data.map((cart, idx) => ({
            id: cart._id || idx + 1,
            requestedBy: cart.corporateId || 'User',
            orderDetails: Array.isArray(cart.items) ? cart.items.map(i => i.name) : [],
            amount: Array.isArray(cart.items) ? cart.items.reduce((sum, i) => sum + (i.totalPrice || 0), 0) : 0,
          }));
        } else if (data && typeof data === 'object') {
          mapped = [{
            id: data._id,
            requestedBy: data.corporateId,
            orderDetails: Array.isArray(data.items) ? data.items.map(i => i.name) : [],
            amount: Array.isArray(data.items) ? data.items.reduce((sum, i) => sum + (i.totalPrice || 0), 0) : 0,
          }];
        }
        setApprovals(mapped);
      } catch (err) {
        console.error('Approval API error:', err);
        setError(err.message || 'Error fetching approvals');
      } finally {
        setLoading(false);
      }
    }
    fetchApprovals();
  }, []);

  // Accept/Reject handlers
  const handleAction = async (id, action) => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      const url = `http://192.168.1.4:5000/approval/${id}/${action}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: token ? { 'Authorization': `Bearer ${token}` } : {},
      });
      if (!res.ok) throw new Error(`Failed to ${action} approval`);
      // Remove the approval from UI
      setApprovals(prev => prev.filter(a => a.id !== id));
    } catch (err) {
      setError(err.message || `Error on ${action}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.profileStyle}>
      {/* Hide scrollbar but allow scrolling */}
      <style>{`
        .approval-scrollable::-webkit-scrollbar { display: none; }
        .approval-scrollable { -ms-overflow-style: none; scrollbar-width: none; }
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
        {loading && <div style={{position:'absolute',top:130,left:600,fontSize:20,color:'#007AFF'}}>Loading...</div>}
        {error && <div style={{position:'absolute',top:160,left:600,fontSize:18,color:'red'}}>{error}</div>}
        {/* Approvals heading */}
        <div style={{
          position: 'absolute',
          top: '151px',
          left: '235px',
          width: '267px',
          height: '78px',
          opacity: 1,
          transform: 'rotate(0deg)',
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontStyle: 'Medium',
          fontSize: '42px',
          lineHeight: '100%',
          letterSpacing: 0,
          verticalAlign: 'middle',
          color: '#000000',
          zIndex: 2
        }}>
          Approvals
        </div>
        {/* Approval frames - only 2 visible, scroll for more */}
        <div className="approval-scrollable" style={{
          position: 'absolute',
          top: '233px',
          left: '225px',
          width: '1190px',
          height: '760px',
          overflowY: 'auto',
          borderRadius: '15px',
          background: 'rgba(17, 114, 182, 0.05)',
        }}>
          {approvals.length > 0 ? (
            approvals.slice(0, approvals.length).map((approvalData, idx) => (
              <div
                key={approvalData.id}
                style={{
                  marginBottom: '22px',
                  width: '1190px',
                  height: '369px',
                  borderRadius: '15px',
                  background: 'rgba(17, 114, 182, 0.15)',
                  opacity: 1,
                  transform: 'rotate(0deg)',
                  zIndex: 1,
                  color: '#1172B626',
                }}
              >
                <div style={{ position: 'absolute', top: '20px', left: '19px', width: '291px', height: '21px', fontFamily: 'Poppins', fontWeight: 500, fontStyle: 'Medium', fontSize: '20px', lineHeight: '150%', letterSpacing: 0, verticalAlign: 'middle', color: 'rgba(0, 0, 0, 1)', opacity: 1, transform: 'rotate(0deg)' }}>
                  {`Approval ID - ${approvalData.id}`}
                </div>
                <div style={{ position: 'absolute', top: '54px', left: '19px', width: '291px', height: '24px', fontFamily: 'Poppins', fontWeight: 500, fontStyle: 'Medium', fontSize: '16px', lineHeight: '150%', letterSpacing: 0, verticalAlign: 'middle', color: 'rgba(0, 0, 0, 1)', opacity: 1, transform: 'rotate(0deg)' }}>
                  Requested by:
                </div>
                <div style={{ position: 'absolute', top: '78px', left: '19px', width: '237px', height: '23px', fontFamily: 'Poppins', fontWeight: 500, fontStyle: 'Medium', fontSize: '16px', lineHeight: '150%', letterSpacing: 0, verticalAlign: 'middle', color: 'rgba(0, 0, 0, 1)', opacity: 1, transform: 'rotate(0deg)' }}>
                  {approvalData.requestedBy}
                </div>
                <div style={{ position: 'absolute', top: '112px', left: '19px', width: '291px', height: '24px', fontFamily: 'Poppins', fontWeight: 500, fontStyle: 'Medium', fontSize: '16px', lineHeight: '150%', letterSpacing: 0, verticalAlign: 'middle', color: 'rgba(0, 0, 0, 1)', opacity: 1, transform: 'rotate(0deg)' }}>
                  Order details:
                </div>
                <div style={{ position: 'absolute', top: '136px', left: '19px', width: '237px', height: '54px', fontFamily: 'Poppins', fontWeight: 500, fontStyle: 'Medium', fontSize: '16px', lineHeight: '150%', letterSpacing: 0, verticalAlign: 'middle', color: 'rgba(0, 0, 0, 1)', opacity: 1, transform: 'rotate(0deg)' }}>
                  {approvalData.orderDetails && approvalData.orderDetails.map((item, i) => (
                    <span key={i}>{`Item ${i + 1}: ${item}`}<br /></span>
                  ))}
                </div>
                <div style={{ position: 'absolute', top: '200px', left: '19px', width: '291px', height: '24px', fontFamily: 'Poppins', fontWeight: 500, fontStyle: 'Medium', fontSize: '16px', lineHeight: '150%', letterSpacing: 0, verticalAlign: 'middle', color: 'rgba(0, 0, 0, 1)', opacity: 1, transform: 'rotate(0deg)' }}>
                  Amount requested:
                </div>
                <div style={{ position: 'absolute', top: '224px', left: '19px', width: '237px', height: '23px', fontFamily: 'Poppins', fontWeight: 500, fontStyle: 'Medium', fontSize: '16px', lineHeight: '150%', letterSpacing: 0, verticalAlign: 'middle', color: 'rgba(0, 0, 0, 1)', opacity: 1, transform: 'rotate(0deg)' }}>
                  {`${approvalData.amount} credits`}
                </div>
                {/* ...existing code for remarks and buttons... */}
              </div>
            ))
          ) : (
            <div
              style={{
                width: '1190px',
                height: '369px',
                borderRadius: '15px',
                background: 'rgba(17, 114, 182, 0.15)',
                opacity: 1,
                transform: 'rotate(0deg)',
                zIndex: 1,
                color: '#1172B626',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Poppins',
                fontSize: '18px',
              }}
            >
              No approval/cart data found.<br />
              <span style={{fontSize:'14px',color:'#333',marginTop:'12px'}}>Check your backend response or try adding items to the cart.</span>
            </div>
          )}
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
            {/* ...existing code... */}
          </nav>
        </aside>
        <main style={{marginLeft: '210px', paddingTop: '120px', height: 'calc(100vh - 120px)', overflow: 'auto'}}>
          {/* Orders content goes here */}
        </main>
      </div>
    </div>
  );
};

export default Approval;
