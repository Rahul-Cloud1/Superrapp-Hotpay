

import React from 'react';
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






const Miceform = () => {
  // Generate a random Query ID (6 digits)
  const [queryId] = React.useState(() => 'Q' + Math.floor(100000 + Math.random() * 900000));
  const [location, setLocation] = React.useState('');
  const [locationSuggestions, setLocationSuggestions] = React.useState([]);
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [pax, setPax] = React.useState('');
  const [eventType, setEventType] = React.useState('');
  const [roomRequired, setRoomRequired] = React.useState('No');
  const [mgRooms, setMgRooms] = React.useState('');
  const [mgPax, setMgPax] = React.useState('');
  const [inclusions, setInclusions] = React.useState('');

  // Dummy location suggestions for auto-suggest
  const allLocations = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Goa', 'Jaipur', 'Ahmedabad'
  ];

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    setLocationSuggestions(
      value.length > 0
        ? allLocations.filter(loc => loc.toLowerCase().includes(value.toLowerCase()))
        : []
    );
  };

  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setLocationSuggestions([]);
  };

  return (
    <div style={styles.profileStyle}>
      {/* Hide scrollbar but allow scrolling */}
      <style>{`
        html, body {
          background: rgba(245, 243, 243, 1) !important;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .profile-scrollable::-webkit-scrollbar {
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
          display: none !important;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .profile-scrollable {
          -ms-overflow-style: none !important;  /* IE and Edge */
          scrollbar-width: none !important;     /* Firefox */
          overflow: auto !important;
        }
        .miceform-card {
          color: #000;
        }
        .miceform-label {
          font-family: 'Poppins';
          font-weight: 600;
          color: #000;
          margin-bottom: 6px;
        }
        .miceform-section-title {
          font-family: 'Poppins';
          font-weight: 700;
          font-size: 22px;
          color: #000;
          margin-bottom: 18px;
          margin-top: 0;
        }
        .miceform-input, .miceform-select, .miceform-textarea {
          border: 1.5px solid #007BFF33;
          border-radius: 8px;
          padding: 8px 14px;
          font-family: 'Poppins';
          font-size: 16px;
          background: #fff;
          color: #000;
          transition: border 0.2s;
        }
        .miceform-input:focus, .miceform-select:focus, .miceform-textarea:focus {
          border: 1.5px solid #007BFF;
          outline: none;
        }
        .miceform-autosuggest-list {
          position: absolute;
          top: 38px;
          left: 136px;
          background: #fff;
          border: 1.5px solid #007BFF33;
          border-radius: 8px;
          list-style: none;
          margin: 0;
          padding: 0;
          z-index: 10;
          width: 260px;
          box-shadow: 0 4px 16px 0 #007bff22;
        }
        .miceform-autosuggest-list li {
          padding: 8px 14px;
          cursor: pointer;
          font-family: 'Poppins';
          color: #000;
        }
        .miceform-autosuggest-list li:hover {
          background: #e6f0ff;
        }
        .miceform-submit-btn {
          margin-top: 24px;
          padding: 12px 36px;
          background: linear-gradient(135deg, #007BFF 0%, #0056B3 100%);
          color: #fff;
          border: none;
          border-radius: 24px;
          font-family: 'Poppins';
          font-size: 20px;
          font-weight: 700;
          box-shadow: 0 4px 16px 0 #007bff33;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .miceform-submit-btn:hover {
          background: linear-gradient(135deg, #0056B3 0%, #007BFF 100%);
          transform: translateY(-2px) scale(1.03);
        }
        .miceform-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 8px 32px 0 #007bff22;
          padding: 40px 48px 32px 48px;
          max-width: 700px;
          width: 100%;
          position: absolute;
          left: 50%;
          top: 140px;
          transform: translateX(-50%);
          z-index: 10;
        }
      `}</style>
      <div style={{width: '100%', minHeight: '100vh', position: 'relative'}}>
        <header style={styles.header}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <SearchBar />
          <ViewCartButton />
          <ProfileSection />
        </header>
        {/* MICE Form Card */}
        <div className="miceform-card">
          <h2 className="miceform-section-title">MICE Query Form</h2>
          {/* Query ID (auto) */}
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 18 }}>
            <label className="miceform-label">Query ID</label>
            <input className="miceform-input" type="text" value={queryId} readOnly />
          </div>
          {/* Location with type & auto-suggest */}
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 18, position: 'relative' }}>
            <label className="miceform-label">Location</label>
            <input
              className="miceform-input"
              type="text"
              value={location}
              onChange={handleLocationChange}
              placeholder="Type location..."
              autoComplete="off"
            />
            {locationSuggestions.length > 0 && (
              <ul className="miceform-autosuggest-list">
                {locationSuggestions.map(loc => (
                  <li key={loc} onClick={() => handleLocationSelect(loc)}>{loc}</li>
                ))}
              </ul>
            )}
          </div>
          {/* Start Date & End Date */}
          <div style={{ display: 'flex', gap: 24, marginBottom: 18 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <label className="miceform-label">Start Date</label>
              <input className="miceform-input" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <label className="miceform-label">End Date</label>
              <input className="miceform-input" type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
            </div>
          </div>
          {/* No. of Pax */}
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 18 }}>
            <label className="miceform-label">No. of Pax</label>
            <input className="miceform-input" type="number" min="1" value={pax} onChange={e => setPax(e.target.value)} placeholder="Enter number" />
          </div>
          {/* Type of Event Dropdown */}
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 18 }}>
            <label className="miceform-label">Type of Event</label>
            <select className="miceform-select" value={eventType} onChange={e => setEventType(e.target.value)}>
              <option value="">Select event type</option>
              <option>Day Conference (0900-1800l)</option>
              <option>Normal Dinner (1900-2300)</option>
              <option>Hi Tea Session (Open Column)</option>
              <option>Cocktail Dinner (1930-2300l)</option>
              <option>Residential Conference (Rooms Required)</option>
              <option>Offsite (Rooms Required)</option>
              <option>Day Outing (No Rooms Required)</option>
            </select>
          </div>
          {/* Room Required Yes/No */}
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 18 }}>
            <label className="miceform-label">Room Required</label>
            <select className="miceform-select" value={roomRequired} onChange={e => setRoomRequired(e.target.value)}>
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          {/* If Yes, show MG of Rooms and MG of Pax */}
          {roomRequired === 'Yes' && (
            <div style={{ display: 'flex', gap: 24, marginBottom: 18 }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <label className="miceform-label">MG of Rooms</label>
                <input className="miceform-input" type="number" min="1" value={mgRooms} onChange={e => setMgRooms(e.target.value)} placeholder="Enter rooms" />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <label className="miceform-label">MG of Pax</label>
                <input className="miceform-input" type="number" min="1" value={mgPax} onChange={e => setMgPax(e.target.value)} placeholder="Enter pax" />
              </div>
            </div>
          )}
          {/* Inclusions (open column) */}
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 18 }}>
            <label className="miceform-label">Inclusions</label>
            <textarea
              className="miceform-textarea"
              value={inclusions}
              onChange={e => setInclusions(e.target.value)}
              placeholder="Please summarise requirement..."
              style={{ minHeight: 60, resize: 'vertical' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <button className="miceform-submit-btn" type="button">Submit Query</button>
          </div>
        </div>
        <main className="profile-scrollable" style={{paddingTop: '120px', height: 'calc(100vh - 120px)'}}>
          {/* Orders content goes here */}
        </main>
      </div>
    </div>
  );
};

export default Miceform;
