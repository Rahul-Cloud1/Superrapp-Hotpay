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
    fetch('http://10.10.0.218:5000/vendor/order/request', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data && typeof data === 'object' && data.message === 'No Order Request found!') {
          setApprovals([]);
          setError('No order requests found');
        } else if (Array.isArray(data)) {
          setApprovals(data);
          setError('');
        } else if (Array.isArray(data.approvals)) {
          setApprovals(data.approvals);
          setError('');
        } else {
          setApprovals([]);
          setError('No approvals found');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch approvals');
        setLoading(false);
      });
  }, []);

  const handleApprove = async (vendorOrderFlowId) => {
    const token = localStorage.getItem('token');
    const approval = approvals.find(a => a._id === vendorOrderFlowId);
    if (!approval) return setError('Approval not found');
    try {
      const res = await fetch('http://10.10.0.218:5000/vendor/order/request', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderId: approval.orderId,
          vendorOrderFlowId: approval.vendorOrderFlowId,
          status: 'accept'
        })
      });
      const data = await res.json();
      if (data && (data.success || data.status === 'accepted')) {
        setApprovals(prev => prev.map(a => a._id === vendorOrderFlowId ? { ...a, status: 'accepted' } : a));
      }
    } catch (err) {
      setError('Failed to approve request');
    }
  };

  const handleReject = async (vendorOrderFlowId) => {
    const token = localStorage.getItem('token');
    const approval = approvals.find(a => a._id === vendorOrderFlowId);
    if (!approval) return setError('Approval not found');
    try {
      const res = await fetch('http://10.10.0.218:5000/vendor/order/request', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderId: approval.orderId,
          vendorOrderFlowId: approval._id,
          status: 'rejected'
        })
      });
      const data = await res.json();
      if (data && (data.success || data.status === 'rejected')) {
        setApprovals(prev => prev.map(a => a._id === vendorOrderFlowId ? { ...a, status: 'rejected' } : a));
      }
    } catch (err) {
      setError('Failed to reject request');
    }
  };

  return (
    <div style={{ width: '1440px', height: '1050px', background: '#F5F3F3', position: 'relative' }}>
      {/* Header */}
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

      {/* Sidebar */}
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
          {/* Sidebar Items */}
          <div style={{ position: 'absolute', top: 31, left: 23, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { window.location.href = '/vendordashboard'; }}>
            <span style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={profileIcon} alt="Profile" style={{ width: 25, height: 25 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15 }}>My Profile</span>
          </div>

          <div style={{ position: 'absolute', top: 96, left: 23, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { window.location.href = '/vendororders'; }}>
            <span style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={orderIcon} alt="Orders" style={{ width: 25, height: 25 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 13 }}>Orders</span>
          </div>

          <div style={{ position: 'absolute', top: 163, left: 23, display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 19.8, height: 18.75, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={walletIcon} alt="Wallet" style={{ width: 19.8, height: 18.75 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15 }}>Catalog</span>
          </div>

          <div style={{ position: 'absolute', top: 226, left: 23, display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={supportIcon} alt="Support" style={{ width: 25, height: 25 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 14 }}>Support</span>
          </div>

          <div style={{ position: 'absolute', top: 291, left: 26, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { window.location.href = '/vendorapprovals'; }}>
            <span style={{ width: 18.75, height: 20.83, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={approvalIcon} alt="Approval" style={{ width: 18.75, height: 20.83 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15 }}>Approvals</span>
          </div>

          <div style={{ position: 'absolute', top: 351.83, left: 23, display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={invoiceIcon} alt="Invoice" style={{ width: 25, height: 25 }} />
            </span>
            <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 13 }}>Invoices</span>
          </div>

          <div style={{ position: 'absolute', top: 416.83, left: 26, display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <img src={logoutIcon} alt="Logout" style={{ width: 20, height: 20 }} />
            </span>
            <span style={{ color: 'red', fontFamily: 'Poppins', fontSize: 14 }}>Log out</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{
        position: 'fixed',
        top: '210px',
        left: '227px',
        width: '1180px',
        height: '930px',
        paddingBottom: '40px',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 0,
        zIndex: 10
      }}>
        <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
          {/* Approval Cards or Empty/Error UI */}
          {loading ? (
            <div style={{ fontFamily: 'Poppins', fontSize: '20px', color: '#1172B6', textAlign: 'center', marginTop: '80px' }}>Loading approvals...</div>
          ) : (
            <div style={{ fontFamily: 'Poppins', padding: '20px', textAlign: 'center', color: '#073250' }}>
              {/* Map or Error already handled in your long version above, include your dynamic approval cards here */}
              {error || approvals.length === 0 ? (
                <div>{error || 'No approvals found'}</div>
              ) : (
                approvals.map((approval, idx) => (
                  <div key={idx} style={{ marginBottom: '16px', background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                    <h3>Product Name: {approval.name}</h3>
                    <p>Status: {approval.status}</p>
                    <p>Quantity: {approval.quantity}</p>
                    <p>Date: {new Date(approval.createdAt).toLocaleDateString()}</p>
                    <div style={{ marginTop: '10px' }}>
                      <button onClick={() => handleApprove(approval._id)} style={{ marginRight: '12px' }}>Approve</button>
                      <button onClick={() => handleReject(approval._id)}>Reject</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VendorApprovals;
