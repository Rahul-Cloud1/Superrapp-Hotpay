import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './assets/image 3.png';
import vectorIcon from './assets/Vector.png';
import profileIcon from './assets/My Profile Icon.png';
import officestationaryicon from './assets/officestationaryicon.png';
import pens from './assets/pens.png';
import './App.css';


// No hardcoded products, only API data will be used



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

const sidebarScrollbarStyle = `
aside[style]::-webkit-scrollbar {
  display: none;
}
`;

const categoriesData = [
  {
    name: "Office Stationery",
    icon: officestationaryicon,
    subcategories: [
      "Pens & Pencils",
      "Notebooks",
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
  // ...rest of your categories...
];

const Products = () => {

  // State for products (empty by default, filled by API)
  const [products, setProducts] = useState([]);

  // Fetch API data and merge with hardcoded products
  useEffect(() => {
    fetch('http://10.10.2.109:5000/product?category=Pens%20%26%20Pencils')
      .then(res => res.json())
      .then(data => {

        console.log(data);
        
        // Map API products to ensure they have the required fields
        const mappedApiProducts = data.map(apiProduct => ({
          ...apiProduct,
          image: apiProduct.image || pens,
          category: apiProduct.category || 'Office Stationery',
          subcategory: apiProduct.subCategory || '',
        }));
        setProducts(mappedApiProducts);
      })
      .catch(() => {
        setProducts([]);
      });
  }, []);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedCategory = params.get('category');
    if (selectedCategory) {
      const idx = categoriesData.findIndex(cat => cat.name.toLowerCase() === decodeURIComponent(selectedCategory).toLowerCase());
      if (idx !== -1) {
        setOpenDropdown(idx);
        setSelectedSubcategory(null);
      }
    }
  }, [location.search]);

  // --- FILTER PRODUCTS BASED ON SELECTION ---
  let filteredProducts = [];
  if (openDropdown !== null && categoriesData[openDropdown]) {
    const categoryName = categoriesData[openDropdown].name;
    if (selectedSubcategory) {
      filteredProducts = products.filter(
        p => p.category === categoryName && p.subcategory === selectedSubcategory
      );
    } else {
      filteredProducts = products.filter(
        p => p.category === categoryName
      );
    }
  } else {
    filteredProducts = products; // Show all if nothing selected
  }

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
                    setSelectedSubcategory(null);
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
            {/* "All" option */}
            <div
              style={{
                padding: '8px 18px',
                cursor: 'pointer',
                color: '#007BFF',
                fontWeight: 600,
                background: selectedSubcategory === null ? 'rgba(0,123,255,0.08)' : 'transparent'
              }}
              onClick={() => setSelectedSubcategory(null)}
            >
              All
            </div>
            {categoriesData[openDropdown].subcategories.map((sub, subIdx) => (
              <div
                key={subIdx}
                style={{
                  padding: '8px 18px',
                  cursor: 'pointer',
                  borderBottom: subIdx !== categoriesData[openDropdown].subcategories.length - 1 ? '1px solid #eee' : 'none',
                  background: selectedSubcategory === sub ? 'rgba(0,123,255,0.08)' : 'transparent'
                }}
                onClick={() => setSelectedSubcategory(sub)}
              >
                {sub}
              </div>
            ))}
          </div>
        )}
      </aside>
      {/* Dynamic Products Grid */}
      <main style={{
        position: 'absolute',
        top: '147px',
        left: '235px',
        right: 0,
        padding: '1px',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '18px',
        width: '1100px',
        minHeight: '10px',
        background: 'transparent',
      }}>
        {filteredProducts.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#888', fontSize: '18px' }}>
            No products found.
          </div>
        ) : (
          filteredProducts.map((product, idx) => (
            <div key={product.id} style={{
              width: '160px',
              height: '220px',
              borderRadius: '5px',
              background: 'rgba(255, 255, 255, 1)',
              color: '#073250',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              opacity: 1,
              transform: 'rotate(0deg)',
              margin: '0 auto',
              padding: '10px',
            }}>
              <div style={{
                width: '130px',
                height: '150px',
                background: '#fff',
                borderRadius: '1px',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img src={product.image} alt={product.name} style={{
                  width: '100px',
                  height: '150px',
                  objectFit: 'contain'
                }} />
              </div>
              <div style={{
                fontWeight: 500,
                fontSize: '15px',
                marginBottom: '4px',
                textAlign: 'left'
              }}>
                {product.name}<br />{product.description}
              </div>
              <div style={{
                fontSize: '15px',
                fontWeight: 400,
                marginBottom: '1px',
                textAlign: 'left'
              }}>
                ₹{product.price}/unit
              </div>
              <div style={{
                fontSize: '10px',
                fontWeight: 400,
                marginBottom: '2px',
                textAlign: 'left'
              }}>
                MOQ- {product.moq}pcs
              </div>
              <button style={{
                border: 'none',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #007BFF 0%, #0056B3 100%)',
                color: 'white',
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '12px',
                cursor: 'pointer',
                width: '100%',
                height: '28px',
                marginTop: 'auto',
              }}>
                Add to Cart
              </button>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default Products;