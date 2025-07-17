
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './assets/image 3.png';
import vectorIcon from './assets/Vector.png';
import profileIcon from './assets/My Profile Icon.png';
import officestationaryicon from './assets/officestationaryicon.png';
import './App.css';

const styles = {
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


const sidebarStyle = {
  width: '210px',
  height: '779px',
  position: 'fixed',
  top: '120px',
  left: 0,
  background: 'rgba(255, 255, 255, 1)',
  borderTop: '1px solid rgba(0,0,0,0.08)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'rgba(0,0,0,0.08)',
  opacity: 1,
  zIndex: 10,
  minWidth: '210px',
  maxWidth: '210px',
  minHeight: '60px',
  color: 'rgba(7, 50, 80, 1)',
  transform: 'rotate(0deg)',
  overflowY: 'auto',
  scrollbarWidth: 'none', // for Firefox
  msOverflowStyle: 'none', // for IE and Edge
};

// Hide scrollbar for Chrome, Safari and Opera
const sidebarScrollbarStyle = `
aside[style]::-webkit-scrollbar {
  display: none;
}
`;
// End of sidebarStyle object

const categoriesData = [
  {
    name: "Office Stationery",
    icon: officestationaryicon,
    subcategories: [
      "Pens & Pencils",
      "Notebooks & Diaries",
      "Files & Folders",
      "Sticky Notes & Pads",
      "Staplers & Punches"
    ]
  },
  {
    name: "Housekeeping Tools",
    icon: officestationaryicon,
    subcategories: [
      "Brooms & Mops",
      "Cleaning Cloths & Dusters",
      "Buckets & Mugs",
      "Brushes & Scrubbers",
      "Dustbins & Trash Bags"
    ]
  },
  {
    name: "Office Pantry",
    icon: officestationaryicon,
    subcategories: [
      "Tea & Coffee Supplies",
      "Snacks & Biscuits",
      "Water Bottles & Dispensers",
      "Sugar, Milk Powder & Creamers",
      "Paper Cups & Plates"
    ]
  },
  {
    name: "Disposables",
    icon: officestationaryicon,
    subcategories: [
      "Disposable Plates & Bowls",
      "Disposable Cutlery",
      "Tissue Papers & Napkins",
      "Garbage Bags",
      "Paper Cups & Lids"
    ]
  },
  {
    name: "Electronics",
    icon: officestationaryicon,
    subcategories: [
      "Printers & Scanners",
      "Projectors & Screens",
      "Calculators",
      "Mobile Accessories",
      "Bluetooth Speakers"
    ]
  },
  {
    name: "Laptop & Luggage Bags",
    icon: officestationaryicon,
    subcategories: [
      "Laptop Backpacks",
      "Laptop Sleeves",
      "Trolley Bags",
      "Messenger Bags",
      "Duffel Bags"
    ]
  },
  {
    name: "IT Equipment",
    icon: officestationaryicon,
    subcategories: [
      "Keyboards & Mice",
      "Monitors",
      "UPS & Power Supplies",
      "Cables & Connectors",
      "Routers & Modems"
    ]
  },
  {
    name: "Sports Equipment",
    icon: officestationaryicon,
    subcategories: [
      "Yoga Mats",
      "Dumbbells & Weights",
      "Cricket Bats & Balls",
      "Table Tennis Sets",
      "Resistance Bands"
    ]
  },
  {
    name: "Office Decor",
    icon: officestationaryicon,
    subcategories: [
      "Indoor Plants",
      "Wall Art & Frames",
      "Desk Organizers",
      "Clocks & Nameplates",
      "Scented Candles & Diffusers"
    ]
  },
  {
    name: "Joining Kit",
    icon: officestationaryicon,
    subcategories: [
      "Welcome Cards",
      "Company Branded Notebooks",
      "ID Card Holders",
      "T-Shirts or Hoodies",
      "Mugs & Bottles"
    ]
  },
  {
    name: "Candies & Chocolates",
    icon: officestationaryicon,
    subcategories: [
      "Assorted Chocolates",
      "Hard Candies",
      "Toffees",
      "Premium Gift Boxes",
      "Sugar-Free Options"
    ]
  },
  {
    name: "Office Furniture",
    icon: officestationaryicon,
    subcategories: [
      "Office Chairs",
      "Desks & Workstations",
      "Filing Cabinets",
      "Conference Tables",
      "Pedestal Drawers"
    ]
  },
  {
    name: "Gift Hampers",
    icon: officestationaryicon,
    subcategories: [
      "Festive Hampers",
      "Wellness Hampers",
      "Gourmet Snack Boxes",
      "Corporate Branding Hampers",
      "Customizable Hampers"
    ]
  },
  {
    name: "Plastic & Glassware",
    icon: officestationaryicon,
    subcategories: [
      "Storage Containers",
      "Glass Jars & Bottles",
      "Microwave-Safe Bowls",
      "Plastic Cups & Tumblers",
      "Food Storage Boxes"
    ]
  },
];

const Products = () => {
  // Track which dropdown is open by index
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Parse query parameter
    const params = new URLSearchParams(location.search);
    const selectedCategory = params.get('category');
    if (selectedCategory) {
      // Find the index of the category that matches the query param (case-insensitive)
      const idx = categoriesData.findIndex(cat => cat.name.toLowerCase() === decodeURIComponent(selectedCategory).toLowerCase());
      if (idx !== -1) {
        setOpenDropdown(idx);
      }
    }
  }, [location.search]);

  return (
    <div style={{
      width: '1440px',
      height: '900px',
      opacity: 1,
      transform: 'rotate(0deg)',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <header style={styles.header}>
        <Link to="/app">
          <img src={logo} alt="Logo" style={styles.logo} />
        </Link>
        <SearchBar />
        <ViewCartButton />
        <ProfileSection />
      </header>
      <style>{`
        ${sidebarScrollbarStyle}
        body::-webkit-scrollbar {
          display: none;
        }
        html, body {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        /* Hide scrollbar for the custom dropdown */
        .custom-category-dropdown::-webkit-scrollbar {
          display: none;
        }
        .custom-category-dropdown {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
      `}</style>
      <aside style={sidebarStyle}>
        {/* Custom Category Selector Dropdown */}
        <div style={{ position: 'relative', width: '190px', height:'30px', margin: '24px auto 16px auto' }}>
          <div
            style={{
              padding: '12px 10px',
              borderRadius: '11px',
              fontSize: '12px',
              fontFamily: 'Poppins',
              fontWeight: 600,
              border: '1.5px solid #007BFF',
              background: 'rgba(7, 50, 80, 1)',
              color: '#ffffffff',
              boxShadow: dropdownOpen ? '0 4px 16px rgba(252, 252, 252, 1)' : '0 2px 8px #ffffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'box-shadow 0.2s',
              borderBottomLeftRadius: dropdownOpen ? '0' : '8px',
              borderBottomRightRadius: dropdownOpen ? '0' : '8px',
            }}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {openDropdown !== null && categoriesData[openDropdown] ? (
                <>
                  <img src={categoriesData[openDropdown].icon} alt="icon" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                  {categoriesData[openDropdown].name}
                </>
              ) : (
                <span style={{ color: '#aaa' }}>Select Category</span>
              )}
            </span>
            <span style={{ fontSize: '18px', marginLeft: '8px', color: '#fff', transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              ▼
            </span>
          </div>
          {dropdownOpen && (
            <div
              className="custom-category-dropdown"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                background: '#fff',
                border: '1.5px solid #007BFF',
                borderTop: 'none',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                boxShadow: '0 8px 24px rgba(0,123,255,0.10)',
                zIndex: 100,
                maxHeight: '260px',
                overflowY: 'auto',
                animation: 'fadeIn 0.2s',
              }}
            >
              {categoriesData.map((cat, idx) => (
                <div
                  key={cat.name}
                  style={{
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    background: openDropdown === idx ? 'rgba(0,123,255,0.08)' : '#fff',
                    color: openDropdown === idx ? '#007BFF' : '#073250',
                    fontWeight: openDropdown === idx ? 600 : 500,
                    borderBottom: idx !== categoriesData.length - 1 ? '1px solid #f0f0f0' : 'none',
                    transition: 'background 0.15s, color 0.15s',
                  }}
                  onClick={() => {
                    setOpenDropdown(idx);
                    setDropdownOpen(false);
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,123,255,0.12)'}
                  onMouseLeave={e => e.currentTarget.style.background = openDropdown === idx ? 'rgba(0,123,255,0.08)' : '#fff'}
                >
                  <img src={cat.icon} alt="icon" style={{ width: '22px', height: '22px', marginRight: '10px' }} />
                  {cat.name}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Show only the selected category's subcategories */}
        {openDropdown !== null && categoriesData[openDropdown] && (
          <div style={{
            width: '180px',
            background: '#fff',
            color: 'rgba(0, 0, 0, 1)',
            borderRadius: '8px',
            margin: '0 auto 16px auto',
            boxShadow: '0 2px 8px rgba(255, 255, 255, 0.08)',
            padding: '10px 0',
            fontWeight: 450,
            fontSize: '16px',
          }}>
            {categoriesData[openDropdown].subcategories.map((sub, subIdx) => (
              <div key={subIdx} style={{ padding: '8px 18px', cursor: 'pointer', borderBottom: subIdx !== categoriesData[openDropdown].subcategories.length - 1 ? '1px solid #eee' : 'none' }}>
                {sub}
              </div>
            ))}
          </div>
        )}
      </aside>
      {/* ...rest of Products page... */}
    </div>
  );
};

export default Products;
