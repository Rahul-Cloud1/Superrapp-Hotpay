// Utility to extract 'level' from JWT token in localStorage
function getLevelFromToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const payload = JSON.parse(jsonPayload);
    return payload.level || null;
  } catch (e) {
    return null;
  }
}
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
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
    height: '1050px',
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
  const [userLevel, setUserLevel] = useState(null);

  useEffect(() => {
    setUserLevel(getLevelFromToken());
  }, []);


  useEffect(() => {
    async function fetchApprovals() {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5000/approval', {
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
            approvalId: cart.approvalId || '',
            requestedBy: cart.requestedBy || '',
            corporateId: cart.corporateId || '',
            creditsRequested: cart.creditsRequested || 0,
            status: cart.status || '',
            // Preserve full item objects for correct payload mapping
            items: Array.isArray(cart.items) ? cart.items : [],
            createdAt: cart.createdAt || '',
          }));
        } else if (data && typeof data === 'object') {
          mapped = [{
            id: data._id,
            approvalId: data.approvalId || '',
            requestedBy: data.requestedBy || '',
            corporateId: data.corporateId || '',
            creditsRequested: data.creditsRequested || 0,
            status: data.status || '',
            items: Array.isArray(data.items) ? data.items : [],
            createdAt: data.createdAt || '',
          }];
        }
        setApprovals(mapped.reverse());
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
      if (action === 'approve' || action === 'reject') {
        // Find the approval data for this id
        const approvalToStore = approvals.find(a => a.id === id);
        if (approvalToStore) {
          // Only send status update for approve/reject
          const statusValue = action === 'approve' ? 'approved' : 'rejected';
          try {
            const orderRes = await fetch(`http://localhost:5000/approval`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
              },
              body: JSON.stringify({
                newStatus: statusValue,
                approvalId: approvalToStore.id, // send MongoDB _id
              }),
            });
            if (!orderRes.ok) {
              const errorText = await orderRes.text();
              console.error('Order PUT failed:', orderRes.status, errorText);
              setError(`Order PUT failed: ${orderRes.status}`);
              return;
            } else {
              const result = await orderRes.json().catch(() => null);
              console.log('Order PUT success:', result);
            }
          } catch (orderErr) {
            console.error('Order PUT error:', orderErr);
            setError('Order PUT error: ' + orderErr.message);
            return;
          }
        }
      }
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
                  marginBottom: '28px',
                  width: '100%',
                  minWidth: '1200px',
                  maxWidth: '1800px',
                  minHeight: '120px',
                  borderRadius: '15px',
                  background: '#d6e2ec',
                  opacity: 1,
                  zIndex: 1,
                  color: '#222',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '28px 38px 28px 38px',
                  position: 'relative',
                  fontFamily: 'Poppins',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  boxSizing: 'border-box',
                }}
              >
                {/* Status Bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '12px',
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                  background:
                    approvalData.status === 'approved' ? '#4BB543' :
                    approvalData.status === 'rejected' ? '#FF3B30' :
                    '#007AFF',
                  transition: 'background 0.3s',
                }} />
                {/* Status Label */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  right: '38px',
                  fontWeight: 600,
                  fontSize: '16px',
                  color:
                    approvalData.status === 'approved' ? '#4BB543' :
                    approvalData.status === 'rejected' ? '#FF3B30' :
                    '#007AFF',
                  background: 'rgba(255,255,255,0.85)',
                  padding: '2px 14px',
                  borderRadius: '8px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  zIndex: 2,
                }}>
                  {approvalData.status ? approvalData.status.charAt(0).toUpperCase() + approvalData.status.slice(1) : 'Pending'}
                </div>
                {/* Left column: details */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '22px', marginBottom: '10px', color: '#222' }}>
                    Approval ID - {approvalData.approvalId}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '2px', color: '#222' }}>Requested by:</div>
                  <div style={{ fontWeight: 400, fontSize: '15px', marginBottom: '8px', color: '#222' }}>{approvalData.requestedBy}</div>
                  <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '2px', color: '#222' }}>Items requested:</div>
                  <ol style={{ margin: '2px 0 8px 18px', padding: 0 }}>
                    {approvalData.items && approvalData.items.map((item, i) => (
                      typeof item === 'object' && item !== null ? (
                        <li key={i} style={{ fontWeight: 400, fontSize: '15px', color: '#222' }}>
                          {item.name ? `Name: ${item.name}` : ''}
                          {item.quantity ? `, Qty: ${item.quantity}` : ''}
                          
                        </li>
                      ) : (
                        <li key={i} style={{ fontWeight: 400, fontSize: '15px', color: '#222' }}>{item}</li>
                      )
                    ))}
                  </ol>
                  <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '2px', color: '#222' }}>Amount requested:</div>
                  <div style={{ fontWeight: 400, fontSize: '15px', marginBottom: '8px', color: '#222' }}>{approvalData.creditsRequested} credits</div>
                  <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '2px', color: '#222' }}>Remarks:</div>
                  <div style={{ fontWeight: 400, fontSize: '15px', marginBottom: '8px', color: '#222' }}>{approvalData.remarks || 'xxxxxxxx'}</div>
                </div>
                {/* Right column: buttons, visible only for level 1 and only if not already approved/rejected */}
                {userLevel === 'level1' && approvalData.status !== 'approved' && approvalData.status !== 'rejected' && (
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '18px', alignItems: 'center', justifyContent: 'flex-end', minWidth: '320px' }}>
                    <button
                      style={{
                        width: '120px',
                        height: '40px',
                        borderRadius: '8px',
                        background: 'linear-gradient(90deg, #007AFF 0%, #0056B3 100%)',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '17px',
                        border: 'none',
                        cursor: 'pointer',
                        opacity: 1,
                      }}
                      onClick={() => handleAction(approvalData.id, 'approve')}
                    >
                      Approve
                    </button>
                    <button
                      style={{
                        width: '120px',
                        height: '40px',
                        borderRadius: '8px',
                        background: '#fff',
                        color: '#222',
                        fontWeight: 600,
                        fontSize: '17px',
                        border: '2px solid #e3ecf3',
                        cursor: 'pointer',
                        opacity: 1,
                      }}
                      onClick={() => handleAction(approvalData.id, 'reject')}
                    >
                      Reject
                    </button>
                  </div>
                )}
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
        <Sidebar />
        <main style={{marginLeft: '210px', paddingTop: '120px', height: 'calc(100vh - 200px)', overflow: 'auto'}}>
          {/* Orders content goes here */}
        </main>
      </div>
    </div>
  );
};

export default Approval;