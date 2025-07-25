

import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
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
    width: '100vw',
    minHeight: '100vh',
    transform: 'rotate(0deg)',
    opacity: 1,
    background: 'rgba(245, 243, 243, 1)',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
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
  <Link to="/cart" style={{ textDecoration: 'none' }}>
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
  </Link>
);

const ProfileSection = () => (
  <>
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




const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [showAddLevel, setShowAddLevel] = useState(false);
  const [addLevelForm, setAddLevelForm] = useState({
    level: '',
    name: '',
    email: '',
    designation: '',
    contact: ''
  });
  const [formError, setFormError] = useState('');
  const [formLoading, setFormLoading] = useState(false);

  // Edit company details modal state
  const [showEditDetails, setShowEditDetails] = useState(false);
  const [editDetailsForm, setEditDetailsForm] = useState({
    companyLegalName: '',
    employeeCount: '',
    gstin: '',
    adminName: '',
    adminContact: '',
    adminEmail: '',
    billingAddress: '',
    deliveryAddress: '',
  });
  const [editDetailsError, setEditDetailsError] = useState('');
  const [editDetailsLoading, setEditDetailsLoading] = useState(false);

  // Fetch profile data and determine user level
  const [isLevel1, setIsLevel1] = useState(false);
  const [isLevel2, setIsLevel2] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        let email = '';
        if (token) {
          const decoded = jwtDecode(token);
          email = decoded?.email;
        }
        setUserEmail(email);
        const res = await fetch('http://localhost:5000/corporate/profile', {
          headers: {
            'Authorization': token ? `Bearer ${token}` : '',
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        // Build approvalHierarchy array from backend data
        let approvalHierarchy = [];
        if (Array.isArray(data.level1)) {
          approvalHierarchy = approvalHierarchy.concat(
            data.level1.map(l1 => ({
              level: 1,
              name: l1.name,
              email: l1.email,
              contact: l1.contactNo,
              designation: l1.designation
            }))
          );
        }
        if (Array.isArray(data.level2)) {
          approvalHierarchy = approvalHierarchy.concat(
            data.level2.map(l2 => ({
              level: 2,
              name: l2.name,
              email: l2.email,
              contact: l2.contactNo,
              designation: l2.designation
            }))
          );
        }
        setProfile({
          companyLegalName: data.companyLegalName,
          employeeCount: data.employeeCount,
          gstin: data.gstin,
          adminName: data.adminName,
          adminContact: data.adminContact,
          adminEmail: data.adminEmail,
          billingAddress: data.billingAddress,
          deliveryAddress: Array.isArray(data.deliveryAddress) && data.deliveryAddress.length > 0 ? data.deliveryAddress[0].address : '',
          approvalHierarchy
        });

        // Check if user is in level1 or level2
        let isLevel1 = false;
        let isLevel2 = false;
        if (email && Array.isArray(data.level1)) {
          isLevel1 = data.level1.some(user => user.email === email);
        }
        if (email && Array.isArray(data.level2)) {
          isLevel2 = data.level2.some(user => user.email === email);
        }
        setIsLevel1(isLevel1);
        setIsLevel2(isLevel2);
      } catch (err) {
        setProfile(null);
        setIsLevel1(false);
      }
    };
    fetchProfile();
  }, []);

  // Open edit details modal and prefill form
  const handleEditDetailsOpen = () => {
    if (!profile) return;
    setEditDetailsForm({
      companyLegalName: profile.companyLegalName || '',
      employeeCount: profile.employeeCount || '',
      gstin: profile.gstin || '',
      adminName: profile.adminName || '',
      adminContact: profile.adminContact || '',
      adminEmail: profile.adminEmail || '',
      billingAddress: profile.billingAddress || '',
      deliveryAddress: profile.deliveryAddress || '',
    });
    setEditDetailsError('');
    setShowEditDetails(true);
  };

  // Handle edit details form change
  const handleEditDetailsChange = (e) => {
    const { name, value } = e.target;
    setEditDetailsForm(f => ({ ...f, [name]: value }));
  };

  // Submit edit details form
  const handleEditDetailsSubmit = async (e) => {
    e.preventDefault();
    setEditDetailsError('');
    setEditDetailsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/corporate/profile', {
        method: 'PATCH',
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          companyLegalName: editDetailsForm.companyLegalName,
          employeeCount: editDetailsForm.employeeCount,
          gstin: editDetailsForm.gstin,
          adminName: editDetailsForm.adminName,
          adminContact: editDetailsForm.adminContact,
          adminEmail: editDetailsForm.adminEmail,
          billingAddress: editDetailsForm.billingAddress,
          deliveryAddress: editDetailsForm.deliveryAddress,
        })
      });
      if (!res.ok) {
        let errorMsg = 'Failed to update details.';
        try {
          const errorData = await res.json();
          if (errorData && errorData.message) {
            errorMsg = errorData.message;
          } else if (errorData && errorData.errors && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
            errorMsg = errorData.errors.map(e => e.msg).join(', ');
          }
        } catch (jsonErr) {
          try {
            const errorText = await res.text();
            if (errorText) errorMsg = errorText;
          } catch {}
        }
        setEditDetailsError(errorMsg);
        setEditDetailsLoading(false);
        return;
      }
      setShowEditDetails(false);
      setEditDetailsLoading(false);
      // Refresh profile
      const profileRes = await fetch('http://localhost:5000/corporate/profile', {
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json'
        }
      });
      const data = await profileRes.json();
      let approvalHierarchy = [];
      if (Array.isArray(data.level1)) {
        approvalHierarchy = approvalHierarchy.concat(
          data.level1.map(l1 => ({
            level: 1,
            name: l1.name,
            email: l1.email,
            contact: l1.contactNo,
            designation: l1.designation
          }))
        );
      }
      if (Array.isArray(data.level2)) {
        approvalHierarchy = approvalHierarchy.concat(
          data.level2.map(l2 => ({
            level: 2,
            name: l2.name,
            email: l2.email,
            contact: l2.contactNo,
            designation: l2.designation
          }))
        );
      }
      setProfile({
        companyLegalName: data.companyLegalName,
        employeeCount: data.employeeCount,
        gstin: data.gstin,
        adminName: data.adminName,
        adminContact: data.adminContact,
        adminEmail: data.adminEmail,
        billingAddress: data.billingAddress,
        deliveryAddress: Array.isArray(data.deliveryAddress) && data.deliveryAddress.length > 0 ? data.deliveryAddress[0].address : '',
        approvalHierarchy
      });
    } catch (err) {
      setEditDetailsError('Failed to update details.');
      setEditDetailsLoading(false);
    }
  };

  const handleAddLevelChange = (e) => {
    const { name, value } = e.target;
    setAddLevelForm(f => ({ ...f, [name]: value }));
  };

  const handleAddLevelSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    if (!addLevelForm.level || !addLevelForm.name || !addLevelForm.email || !addLevelForm.designation || !addLevelForm.contact) {
      setFormError('All fields are required.');
      return;
    }
    setFormLoading(true);
    try {
      const token = localStorage.getItem('token');
      // Map level to API expected string
      let apiLevel = '';
      if (addLevelForm.level === '1') apiLevel = 'level1';
      else if (addLevelForm.level === '2') apiLevel = 'level2';
      else apiLevel = addLevelForm.level;
      const res = await fetch('http://localhost:5000/corporate/level', {
        method: 'POST',
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          level: apiLevel,
          name: addLevelForm.name,
          email: addLevelForm.email,
          designation: addLevelForm.designation,
          contactNo: addLevelForm.contact
        })
      });
      if (!res.ok) {
        let errorMsg = 'Failed to add level.';
        try {
          const errorData = await res.json();
          if (errorData && errorData.message) {
            errorMsg = errorData.message;
          } else if (errorData && errorData.errors && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
            errorMsg = errorData.errors.map(e => e.msg).join(', ');
          }
        } catch (jsonErr) {
          // Not JSON, try text
          try {
            const errorText = await res.text();
            if (errorText) errorMsg = errorText;
          } catch {}
        }
        setFormError(errorMsg);
        setFormLoading(false);
        return;
      }
      // Optionally, refresh profile data
      setShowAddLevel(false);
      setAddLevelForm({ level: '', name: '', email: '', designation: '', contact: '' });
      setFormLoading(false);
      // Refresh profile
      const profileRes = await fetch('http://localhost:5000/corporate/profile', {
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json'
        }
      });
      const data = await profileRes.json();
      // Build approvalHierarchy array from backend data
      let approvalHierarchy = [];
      if (data.level1 && typeof data.level1 === 'object') {
        approvalHierarchy.push({
          level: 1,
          name: data.level1.name,
          email: data.level1.email,
          contact: data.level1.contactNo,
          designation: data.level1.designation
        });
      } else if (Array.isArray(data.level1)) {
        approvalHierarchy = approvalHierarchy.concat(
          data.level1.map(l1 => ({
            level: 1,
            name: l1.name,
            email: l1.email,
            contact: l1.contactNo,
            designation: l1.designation
          }))
        );
      }
      if (Array.isArray(data.level2) && data.level2.length > 0) {
        approvalHierarchy = approvalHierarchy.concat(
          data.level2.map(l2 => ({
            level: 2,
            name: l2.name,
            email: l2.email,
            contact: l2.contactNo,
            designation: l2.designation
          }))
        );
      }
      setProfile({
        companyLegalName: data.companyLegalName,
        employeeCount: data.employeeCount,
        gstin: data.gstin,
        adminName: data.adminName,
        adminContact: data.adminContact,
        adminEmail: data.adminEmail,
        billingAddress: data.billingAddress,
        deliveryAddress: Array.isArray(data.deliveryAddress) && data.deliveryAddress.length > 0 ? data.deliveryAddress[0].address : '',
        approvalHierarchy
      });
    } catch (err) {
      setFormError('Failed to add level.');
      setFormLoading(false);
    }
  };

  if (!profile) {
    return <div style={{ padding: 40, fontFamily: 'Poppins' }}>Loading profile...</div>;
  }

  return (
    <div style={styles.profileStyle}>
      <style>{`
        html, body {
          scroll-behavior: smooth;
        }
      `}</style>
      <div style={{width: '100%', minHeight: '100vh', position: 'relative', boxSizing: 'border-box'}}>
        <header style={styles.header}>
          <Link to="/app">
            <img src={logo} alt="Logo" style={styles.logo} />
          </Link>
          <SearchBar />
          <ViewCartButton />
          <ProfileSection />
        </header>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          minHeight: '100vh',
          boxSizing: 'border-box',
        }}>
          <aside style={{
            width: '210px',
            height: 'calc(100vh - 120px)',
            position: 'fixed',
            top: '120px',
            left: 0,
            background: 'rgba(255, 255, 255, 1)',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            opacity: 1,
            zIndex: 10
          }}>
            {/* Sidebar navigation icons */}
            <nav style={{ position: 'relative', width: '100%', height: '100%' }}>
              {/* Profile icon and label */}
              <div style={{ position: 'absolute', top: 31, left: 23, display: 'flex', alignItems: 'center' }}>
                <button
                  style={{ width: 25, height: 25, background: 'none', border: 'none', padding: 0, cursor: 'pointer', opacity: 1, transition: 'transform 300ms ease-out', marginRight: 12 }}
                  onClick={e => animateIcon(e)}
                  aria-label="Profile"
                >
                  <img src={profileicon} alt="Profile" style={{ width: 25, height: 25 }} />
                </button>
                <span style={{ color: '#111', fontFamily: 'Poppins', fontSize: 15, opacity: 1 }}>My Profile</span>
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
          <main style={{
            flex: 1,
            marginLeft: '210px',
            paddingTop: '130px',
            boxSizing: 'border-box',
            width: '100%',
          }}>
            {/* MY PROFILE heading */}
            <div style={{
              width: '100%',
              maxWidth: 600,
              margin: '0 auto',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'sans-serif',
              fontWeight: 500,
              fontSize: '2.2rem',
              color: '#020202ff',
              letterSpacing: '2px',
              background: 'none',
              zIndex: 2,
              padding: '0 16px',
            }}>
              My Profile
            </div>
            {/* Custom styled box under header */}
            <div style={{
              width: '95%',
              maxWidth: 1100,
              minHeight: 180,
              margin: '32px auto 0 auto',
              borderRadius: '15px',
              background: 'rgba(17, 114, 182, 0.15)',
              opacity: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: '36px 24px 0 24px',
              boxSizing: 'border-box',
              fontFamily: 'Poppins',
              fontSize: '1rem',
              color: '#222',
              gap: '10px',
              position: 'relative',
            }}>
              {/* Edit details icon for level 1 users */}
              {isLevel1 && (
                <button
                  style={{
                    position: 'absolute',
                    top: 18,
                    right: 18,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    zIndex: 2,
                  }}
                  title="Edit Details"
                  onClick={handleEditDetailsOpen}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="16.5" width="18" height="3" rx="1.5" fill="#1976d2"/>
                    <path d="M16.13 3.29a2.1 2.1 0 0 1 2.97 2.97l-9.6 9.6-3.3.33.33-3.3 9.6-9.6z" fill="#2196f3" stroke="#1976d2" strokeWidth="1.2"/>
                  </svg>
                </button>
              )}
      {/* Edit Details Modal */}
      {showEditDetails && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.25)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #e3f0ff 100%)',
            borderRadius: '18px',
            padding: '38px 44px',
            minWidth: '420px',
            boxShadow: '0 8px 32px rgba(33, 150, 243, 0.18), 0 1.5px 8px rgba(33, 150, 243, 0.10)',
            position: 'relative',
            fontFamily: 'Poppins',
            zIndex: 100000,
            border: '1.5px solid #b3d1f7',
            transition: 'box-shadow 0.2s',
          }}>
            <button onClick={() => setShowEditDetails(false)} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', color: '#1976d2', zIndex: 100001, fontWeight: 700, transition: 'color 0.2s' }}>&times;</button>
            <h2 style={{ marginBottom: 22, fontWeight: 700, fontSize: 26, color: '#1976d2', letterSpacing: '1px', textAlign: 'center', textShadow: '0 2px 8px #e3f0ff' }}>Edit Company Details</h2>
            <form onSubmit={handleEditDetailsSubmit} autoComplete="off">
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 600, color: '#1976d2', fontSize: 16 }}>Company Legal Name</label><br />
                <input name="companyLegalName" value={editDetailsForm.companyLegalName} onChange={handleEditDetailsChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #90caf9', fontSize: 17, background: '#e3f0ff', color: '#000000ff', outline: 'none', boxShadow: '0 1.5px 6px #e3f0ff' }} required />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 600, color: '#1976d2', fontSize: 16 }}>Employee Count</label><br />
                <input name="employeeCount" value={editDetailsForm.employeeCount} onChange={handleEditDetailsChange} type="number" min="1" style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #90caf9', fontSize: 17, background: '#e3f0ff', color: '#000000ff', outline: 'none', boxShadow: '0 1.5px 6px #e3f0ff' }} required />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 600, color: '#1976d2', fontSize: 16 }}>GSTIN</label><br />
                <input name="gstin" value={editDetailsForm.gstin} onChange={handleEditDetailsChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #90caf9', fontSize: 17, background: '#e3f0ff', color: '#000000ff', outline: 'none', boxShadow: '0 1.5px 6px #e3f0ff' }} required />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 600, color: '#1976d2', fontSize: 16 }}>Admin Name</label><br />
                <input name="adminName" value={editDetailsForm.adminName} onChange={handleEditDetailsChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #90caf9', fontSize: 17, background: '#e3f0ff', color: '#000000ff', outline: 'none', boxShadow: '0 1.5px 6px #e3f0ff' }} required />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 600, color: '#1976d2', fontSize: 16 }}>Admin Contact</label><br />
                <input name="adminContact" value={editDetailsForm.adminContact} onChange={handleEditDetailsChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #90caf9', fontSize: 17, background: '#e3f0ff', color: '#000000ff', outline: 'none', boxShadow: '0 1.5px 6px #e3f0ff' }} required />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 600, color: '#1976d2', fontSize: 16 }}>Admin Email ID</label><br />
                <input name="adminEmail" type="email" value={editDetailsForm.adminEmail} onChange={handleEditDetailsChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #90caf9', fontSize: 17, background: '#e3f0ff', color: '#000000ff', outline: 'none', boxShadow: '0 1.5px 6px #e3f0ff' }} required />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 600, color: '#1976d2', fontSize: 16 }}>Billing Address</label><br />
                <input name="billingAddress" value={editDetailsForm.billingAddress} onChange={handleEditDetailsChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #90caf9', fontSize: 17, background: '#e3f0ff', color: '#000000ff', outline: 'none', boxShadow: '0 1.5px 6px #e3f0ff' }} required />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 600, color: '#1976d2', fontSize: 16 }}>Delivery Address</label><br />
                <input name="deliveryAddress" value={editDetailsForm.deliveryAddress} onChange={handleEditDetailsChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #90caf9', fontSize: 17, background: '#e3f0ff', color: '#000000ff', outline: 'none', boxShadow: '0 1.5px 6px #e3f0ff' }} required />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', position: 'relative' }}>
                <button type="submit" style={{
                  background: 'linear-gradient(135deg, #1976d2 0%, #2196f3 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px 38px',
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: '18px',
                  cursor: editDetailsLoading ? 'not-allowed' : 'pointer',
                  opacity: editDetailsLoading ? 0.7 : 1,
                  boxShadow: '0 2px 8px #b3d1f7',
                  letterSpacing: '1px',
                  transition: 'background 0.2s, box-shadow 0.2s',
                }} disabled={editDetailsLoading}>{editDetailsLoading ? 'Saving...' : 'Save'}</button>
                {editDetailsError && (
                  <span style={{
                    color: '#e53935',
                    fontSize: '13px',
                    marginLeft: 14,
                    fontWeight: 500,
                    background: '#fff3f3',
                    borderRadius: 6,
                    padding: '4px 10px',
                    boxShadow: '0 1px 4px rgba(229,57,53,0.07)',
                    position: 'absolute',
                    right: '-2px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    whiteSpace: 'nowrap',
                  }}>{editDetailsError}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
              <div><b>Company Legal Name:</b> {profile.companyLegalName}</div>
              <div><b>Employee Count:</b> {profile.employeeCount}</div>
              <div><b>GSTIN:</b> {profile.gstin}</div>
              <div><b>Admin Name:</b> {profile.adminName}</div>
              <div><b>Admin Contact:</b> {profile.adminContact}</div>
              <div><b>Admin Email ID:</b> {profile.adminEmail}</div>
            </div>
            {/* Approval Hierarchy section in a styled box */}
            <div style={{
              width: '95%',
              maxWidth: 1100,
              minHeight: 120,
              margin: '32px auto 0 auto',
              borderRadius: '15px',
              background: 'rgba(17, 114, 182, 0.15)',
              opacity: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: '36px 24px',
              boxSizing: 'border-box',
              fontFamily: 'Poppins',
              fontSize: '1rem',
              color: '#222',
              gap: '10px',
              zIndex: 20,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                marginBottom: '18px',
              }}>
                <span style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  color: 'black',
                  letterSpacing: '1px',
                }}>
                  Approval Hierarchy
                </span>
                {isLevel1 && (
                  <button
                    style={{
                      marginLeft: 'auto',
                      background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 22px',
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: '16px',
                      cursor: 'pointer',
                      boxShadow: '0px 2px 8px rgba(33, 150, 243, 0.12)',
                      transition: 'background 0.2s',
                    }}
                    type="button"
                    onClick={() => setShowAddLevel(true)}
                  >
                    Add Level
                  </button>
                )}
              </div>
              {profile.approvalHierarchy && (
                (isLevel1
                  ? profile.approvalHierarchy
                  : isLevel2
                    ? profile.approvalHierarchy.filter(level => level.email === userEmail)
                    : [])
                  .map((level, idx) => (
                    <React.Fragment key={level.level || idx}>
                      <div style={{
                        marginBottom: '18px',
                        width: '100%',
                        background: 'none',
                        padding: 0,
                      }}>
                        <div style={{fontWeight:700, fontSize:'18px', color:'#1156b6', marginBottom:'6px'}}>{`Level ${level.level}`}</div>
                        <div style={{display:'flex', flexDirection:'row', gap:'40px', fontSize:'16px'}}>
                          <div style={{minWidth:'180px'}}><span style={{fontWeight:600}}>Name:</span> <span style={{fontWeight:400}}>{level.name}</span></div>
                          <div style={{minWidth:'250px'}}><span style={{fontWeight:600}}>Email ID:</span> <span style={{fontWeight:400}}>{level.email}</span></div>
                          <div style={{minWidth:'180px'}}><span style={{fontWeight:600}}>Contact No:</span> <span style={{fontWeight:400}}>{level.contact}</span></div>
                          <div style={{minWidth:'180px'}}><span style={{fontWeight:600}}>Designation:</span> <span style={{fontWeight:400}}>{level.designation}</span></div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))
              )}
            </div>
            {/* Delivery and Billing Address */}
            <div style={{
              width: '95%',
              maxWidth: 850,
              margin: '24px auto 0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '90px',
              justifyContent: 'space-between',
              background: 'rgba(245, 243, 243, 1)',
              borderRadius: '12px',
              boxSizing: 'border-box',
            }}>
              <div style={{
                flex: '1 1 350px',
                minWidth: 250,
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '1.5rem',
                color: 'black',
                marginBottom: 8,
              }}>
                Delivery Address
                <div style={{
                  fontWeight: 400,
                  fontSize: '1rem',
                  marginTop: 10,
                  color: 'black',
                }}>{profile.deliveryAddress}</div>
              </div>
              <div style={{
                flex: '1 1 350px',
                minWidth: 250,
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '1.5rem',
                color: 'black',
                marginBottom: 8,
              }}>
                Billing Address
                <div style={{
                  fontWeight: 400,
                  fontSize: '1rem',
                  marginTop: 8,
                  color: 'black',
                }}>{profile.billingAddress}</div>
              </div>
            </div>
          </main>
        </div>

      {/* Modal for Add Level - render at top level for proper overlay */}
      {showAddLevel && (
        <div style={{
          position: 'fixed',
          top: 600,
          left: 1100,
          width: '10px',
          height: '10px',
          background: 'rgba(0,0,0,0.25)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'auto',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #e3f0ff 100%)',
            borderRadius: '18px',
            padding: '38px 44px',
            minWidth: '420px',
            boxShadow: '0 8px 32px rgba(33, 150, 243, 0.18), 0 1.5px 8px rgba(33, 150, 243, 0.10)',
            position: 'relative',
            fontFamily: 'Poppins',
            zIndex: 100000,
            border: '1.5px solid #b3d1f7',
            transition: 'box-shadow 0.2s',
          }}>
            <button onClick={() => setShowAddLevel(false)} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', color: '#1976d2', zIndex: 100001, fontWeight: 700, transition: 'color 0.2s' }}>&times;</button>
            <h2 style={{ marginBottom: 22, fontWeight: 700, fontSize: 26, color: '#1976d2', letterSpacing: '1px', textAlign: 'center', textShadow: '0 2px 8px #e3f0ff' }}>Add Approval Level</h2>
            <form onSubmit={handleAddLevelSubmit} autoComplete="off">
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 600, color: '#1976d2', fontSize: 16 }}>Select Level</label><br />
                <select name="level" value={addLevelForm.level} onChange={handleAddLevelChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #90caf9', fontSize: 17, background: '#e3f0ff', color: '#000000ff', outline: 'none', boxShadow: '0 1.5px 6px #e3f0ff' }} required>
                  <option value="">Select</option>
                  <option value="1">Level 1</option>
                  <option value="2">Level 2</option>
                </select>
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 600, color: '#1976d2', fontSize: 16 }}>Name</label><br />
                <input name="name" value={addLevelForm.name} onChange={handleAddLevelChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #90caf9', fontSize: 17, background: '#e3f0ff', color: '#000000ff', outline: 'none', boxShadow: '0 1.5px 6px #e3f0ff' }} required />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 600, color: '#1976d2', fontSize: 16 }}>Email ID</label><br />
                <input name="email" type="email" value={addLevelForm.email} onChange={handleAddLevelChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #90caf9', fontSize: 17, background: '#e3f0ff', color: '#000000ff', outline: 'none', boxShadow: '0 1.5px 6px #e3f0ff' }} required />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 600, color: '#1976d2', fontSize: 16 }}>Designation</label><br />
                <input name="designation" value={addLevelForm.designation} onChange={handleAddLevelChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #90caf9', fontSize: 17, background: '#e3f0ff', color: '#000000ff', outline: 'none', boxShadow: '0 1.5px 6px #e3f0ff' }} required />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 600, color: '#1976d2', fontSize: 16 }}>Contact No.</label><br />
                <input name="contact" value={addLevelForm.contact} onChange={handleAddLevelChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #90caf9', fontSize: 17, background: '#e3f0ff', color: '#000000ff', outline: 'none', boxShadow: '0 1.5px 6px #e3f0ff' }} required />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', position: 'relative' }}>
                <button type="submit" style={{
                  background: 'linear-gradient(135deg, #1976d2 0%, #2196f3 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px 38px',
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: '18px',
                  cursor: formLoading ? 'not-allowed' : 'pointer',
                  opacity: formLoading ? 0.7 : 1,
                  boxShadow: '0 2px 8px #b3d1f7',
                  letterSpacing: '1px',
                  transition: 'background 0.2s, box-shadow 0.2s',
                }} disabled={formLoading}>{formLoading ? 'Saving...' : 'Save'}</button>
                {formError && (
                  <span style={{
                    color: '#e53935',
                    fontSize: '13px',
                    marginLeft: 14,
                    fontWeight: 500,
                    background: '#fff3f3',
                    borderRadius: 6,
                    padding: '4px 10px',
                    boxShadow: '0 1px 4px rgba(229,57,53,0.07)',
                    position: 'absolute',
                    right: '-2px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    whiteSpace: 'nowrap',
                  }}>{formError}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
        {/* Delivery and Billing Address section removed as requested */}
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          aside {
            display: none !important;
          }
          .profile-main-content {
            margin-left: 0 !important;
          }
        }
        @media (max-width: 600px) {
          .profile-main-content, .profile-header, .profile-section {
            padding: 0 8px !important;
          }
          .profile-header {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
      </div>
    </div>
  );
};

export default Profile;
