import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
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
  <Link to="/cart">
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
  maxHeight: 'calc(100vh - 120px)', // Never exceed viewport minus header
  height: 'auto', // Let sidebar grow with content
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
  //  categories...
];

const Products = () => {
  // Update cart item quantity
  const updateCartQuantity = async (productId, variantId, qty) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ productId, variantId, qty }),
      });
      if (!res.ok) {
        alert('Failed to update cart quantity');
      }
    } catch (err) {
      alert('Error updating cart quantity');
    }
  };

  // Fetch cart data
  const fetchCart = async () => {
    try {
      const res = await fetch('http://localhost:5000/cart');
      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        alert('Failed to fetch cart');
        return [];
      }
    } catch (err) {
      alert('Error fetching cart');
      return [];
    }
  };

  // Send for approval (outline, replace with your endpoint)
  const sendForApproval = async () => {
    const cartData = await fetchCart();
    // Replace with your approval endpoint and payload
    try {
      const res = await fetch('http://localhost:5000/approval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart: cartData }),
      });
      if (res.ok) {
        alert('Approval order sent!');
      } else {
        alert('Failed to send approval order');
      }
    } catch (err) {
      alert('Error sending approval order');
    }
  };


  const [products, setProducts] = useState([]);
  const [addedToCartIdx, setAddedToCartIdx] = useState(null);

  
  useEffect(() => {
   
    const allSubcategories = categoriesData.flatMap(cat => cat.subcategories);
    Promise.all(
      allSubcategories.map(subcat =>
        fetch(`http://localhost:5000/product?category=${encodeURIComponent(subcat)}`)
          .then(res => res.json())
          .catch(() => [])
      )
    ).then(allData => {
      
      console.log('API Products:', allData);
     
      const merged = allData.flat().map(apiProduct => {
        let variant = (apiProduct.variants && apiProduct.variants.length > 0) ? apiProduct.variants[0] : {};
        return {
          ...apiProduct,
          image: variant.image || apiProduct.image || pens,
          category: apiProduct.category || '',
          subcategory: apiProduct.subCategory || '',
          superPrice: variant.sellingPrice || '',
          price: variant.unitPrice || '',
          moq: variant.moq || '',
          gstPercentage: variant.gstPercentage || '',
        };
      });
      setProducts(merged);
    }).catch(() => {
      setProducts([]);
    });
  }, []);
  // Set default to first category and its first subcategory
  const [openDropdown, setOpenDropdown] = useState(categoriesData.length > 0 ? 0 : null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    categoriesData.length > 0 && categoriesData[0].subcategories.length > 0 ? categoriesData[0].subcategories[0] : null
  );
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedCategory = params.get('category');
    const selectedSubcat = params.get('subcategory');
    if (selectedCategory) {
      const idx = categoriesData.findIndex(cat => cat.name.toLowerCase() === decodeURIComponent(selectedCategory).toLowerCase());
      if (idx !== -1) {
        setOpenDropdown(idx);
        if (selectedSubcat) {
          setSelectedSubcategory(decodeURIComponent(selectedSubcat));
        } else if (categoriesData[idx].subcategories.length > 0) {
          setSelectedSubcategory(categoriesData[idx].subcategories[0]);
        } else {
          setSelectedSubcategory(null);
        }
      }
    }
  }, [location.search]);

  // --- FILTER PRODUCTS BASED ON SELECTION ---
  let filteredProducts = [];
  if (openDropdown !== null && categoriesData[openDropdown]) {
    const categoryName = categoriesData[openDropdown].name;
    let subcat = selectedSubcategory;
    // No need to setSelectedSubcategory here, already handled in state initialization and useEffect
    filteredProducts = products.filter(
      p => p.category === categoryName && p.subcategory === subcat
    );
  } else {
    filteredProducts = [];  
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      minHeight: '1200px', // Increased min height for more products
      opacity: 1,
      transform: 'rotate(0deg)',
      margin: '0 auto',
      position: 'relative',
      overflow: 'auto',
    }}>
      <style>{`
        .product-card {
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .product-card:hover {
          box-shadow: 0 8px 32px rgba(0,123,255,0.18), 0 2px 8px rgba(0,0,0,0.10);
          transform: translateY(-6px) scale(1.04);
          z-index: 2;
        }
      `}</style>
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
                    // Redirect to first subcategory
                    const firstSub = cat.subcategories && cat.subcategories.length > 0 ? cat.subcategories[0] : null;
                    if (firstSub) {
                      window.location.href = `/products?category=${encodeURIComponent(cat.name)}&subcategory=${encodeURIComponent(firstSub)}`;
                    } else {
                      setSelectedSubcategory(null);
                    }
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
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '24px',
        width: 'calc(100vw - 267px)',
        minHeight: '900px', // Increased min height for more products
        maxHeight: 'calc(100vh - 147px)',
        background: 'transparent',
        overflowY: 'auto',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}>
        {filteredProducts.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#888', fontSize: '18px' }}>
            No products found.
          </div>
        ) : (
          // Remove duplicate products by _id (if any)
          Array.from(new Map(filteredProducts.map(p => [p._id, p])).values()).map((product, idx) => (
            <div key={product._id || product.id || idx} className="product-card" style={{
              minWidth: '230px',
              maxWidth: '230px',
              width: '230px',
              minHeight: '400px',
              maxHeight: '400px',
              height: '420px',
              borderRadius: 0,
              color: '#222',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '0',
              padding: '18px 14px 0 14px',
              position: 'relative',
              overflow: 'hidden',
              background: '#fff',
              boxSizing: 'border-box',
              justifyContent: 'space-between',
            }}>
              {/* GST Percentage in top-right corner (placeholder if missing) */}
              <div style={{
                position: 'absolute',
                top: '6px',
                right: '8px',
                fontSize: '12px',
                fontFamily: 'Poppins',
                background: product.gstPercentage ? 'rgba(125, 200, 247, 0.8)' : 'transparent',
                color: product.gstPercentage ? 'rgba(0, 0, 0, 0.8)' : '#bbb',
                borderRadius: '20px',
                padding: '2px 6px',
                fontWeight: 700,
                zIndex: 3,
                minHeight: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {product.gstPercentage ? `GST ${product.gstPercentage}%` : <span style={{opacity:0.5}}>GST --%</span>}
              </div>
              <div style={{
                width: '100%',
                height: '180px',
                background: '#fff',
                borderRadius: '12px',
                marginBottom: '20px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {product.image ? (
                  <img src={product.image} alt={product.name || 'Product'} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))',
                    transition: 'transform 0.2s',
                  }} />
                ) : (
                  <div style={{width:'100%',height:'100%',background:'#f3f3f3',borderRadius:'12px',display:'flex',alignItems:'center',justifyContent:'center',color:'#bbb',fontSize:'14px'}}>No Image</div>
                )}
              </div>
              <div style={{
                width: '100%',
                textAlign: 'left',
                marginBottom: '1px',
                minHeight: '38px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontWeight: 600,
                  fontFamily: 'Poppins',
                  fontSize: '17px',
                  color: product.name ? 'rgba(0, 0, 0, 0.8)' : '#bbb',
                  letterSpacing: '0.2px',
                  lineHeight: '1.2',
                  display: '-webkit-box',
                  marginBottom: '15px',
                  minHeight: '24px',
                  maxHeight: '36px',
                  overflow: 'hidden',
                  WebkitLineClamp: 1.5,
                  WebkitBoxOrient: 'vertical',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                }}>{
                  product.name
                    ? (() => {
                        const words = product.name.split(' ');
                        if (words.length > 5) {
                          return words.slice(0, 5).join(' ') + '...';
                        } else {
                          return product.name;
                        }
                      })()
                    : <span style={{opacity:0.5}}>No Name</span>
                }</span>
                {/* Super Price - main price, attractive (placeholder if missing) */}
                <span style={{
                  display: 'inline-block',
                  fontSize: 'clamp(14px, 2vw, 18px)',
                  fontWeight: 600,
                  fontFamily:'Comic Sans MS, Comic Sans, Chalkboard SE, Pacifico, Caveat, cursive',
                  background: product.superPrice ? 'linear-gradient(90deg, #FF2E63, #FF9900, #FFD700, #43E97B, #9B59B6, #007BFF)' : 'none',
                  WebkitBackgroundClip: product.superPrice ? 'text' : 'none',
                  WebkitTextFillColor: product.superPrice ? 'transparent' : '#ccc',
                  borderRadius: '0',
                  padding: '0',
                  margin: '8px 0 2px 0',
                  boxShadow: 'none',
                  textAlign: 'left',
                  letterSpacing: '0.25px',
                  lineHeight: '1.2',
                  minHeight: '28px',
                  border: 'none',
                  transition: 'all 0.2s',
                  maxWidth: '180px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  <span style={{
                    
                    maxFontSize: '10px',
                    minFontSize: '10px',
                    fontSize: '16px',
                    fontWeight: 400,
                    fontFamily: 'poppins',
                    color: '#FF2E63',
                    marginRight: '4px',
                  }}>Super</span>
                  <span style={{
                    
                    maxFontSize: '10px',
                    minFontSize: '10px',
                    fontSize: '16px',
                    fontWeight: 400,
                    fontFamily: 'poppins',
                    color: '#FF9900',
                    marginRight: '4px',
                  }}>Price:</span>
                  <span
                    style={{
                      fontSize: (product.superPrice && product.superPrice.toString().replace(/\D/g, '').length > 4)
                        ? '10px'
                        : '16px',
                      fontWeight: 600,
                      fontFamily: 'poppins',
                      color: '#FFD700',
                      marginLeft: '6px',
                      maxWidth: '140px', // Increased width to fit large prices
                      overflow: 'visible', // Allow full price to show
                      whiteSpace: 'nowrap',
                      transition: 'font-size 0.2s',
                      justifyContent: 'center',
                    }}
                  >
                    {product.superPrice && product.superPrice !== '' ? (
                      <span style={{ color: '#222', WebkitTextFillColor: '#222', background: 'none' }}>
                        <span style={{ color: '#222' }}>₹</span>{product.superPrice}
                      </span>
                    ) : <span style={{ opacity: 0.5 }}>N/A</span>}
                  </span>
                </span>
              </div>
              <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0',
                gap: '2px',
                minHeight: '18px',
              }}>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: product.price ? 'rgba(0, 0, 0, 0.8)' : '#ccc',
                  letterSpacing: '0.1px',
                  minWidth: '90px',
                  textAlign: 'left',
                }}>
                  Unit Price: ₹{product.price && product.price !== '' ? product.price : <span style={{opacity:0.5}}>N/A</span>}
                </span>
                <span style={{
                  fontSize: '13px',
                  maxFontSize: '14px',
                  fontWeight: 600,
                  color: product.moq ? '#555' : '#ccc',
                  letterSpacing: '0.1px',
                  minWidth: '60px',
                  textAlign: 'right',
                }}>
                  MOQ- {product.moq && product.moq !== '' ? product.moq : <span style={{opacity:0.5}}>N/A</span>}pcs
                </span>
              </div>
              <button style={{
                border: 'none',
                borderRadius: '8.71px',
                background: 'rgba(17, 114, 182, 0.15)',
                color: '#073250',
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: '20px',
                lineHeight: '140%',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                width: '240px',
                height: '45.5px',
                marginTop: '4px',
                color: '#073250',
                boxShadow: '#073250 0 2px 8px',
                transition: 'background 0.2s',
                opacity: 1,
                position: 'relative',
                top: 0,
                left: 0,
                transform: 'rotate(0deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                
              }}
              onClick={async () => {
                const variant = product.variants && product.variants.length > 0 ? product.variants[0] : {};
                const productId = product._id;
                const variantId = variant._id;
                const payload = {
                  productId: productId,
                  variantId: variantId,
                  name: product.name,
                  price: variant.unitPrice,
                  superPrice: variant.sellingPrice ? `₹${variant.sellingPrice}` : '',
                  moq: variant.moq,
                  image: variant.image,
                  quantity: 1,
                  subcategory: product.subCategory,
                  gstPercentage: variant.gstPercentage,
                  gstAmount: (variant.sellingPrice && variant.gstPercentage)
                    ? ((parseFloat(variant.sellingPrice) * parseFloat(variant.gstPercentage) / 100).toFixed(2))
                    : ''
                };
                const token = localStorage.getItem('token');
                if (!token || token === 'undefined' || token === 'null') {
                  alert('No valid token found. Please login again.');
                  return;
                }
                try {
                  const res = await fetch('http://localhost:5000/cart', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(payload),
                  });
                  if (res.ok) {
                    setAddedToCartIdx(idx);
                    setTimeout(() => {
                      setAddedToCartIdx(null);
                    }, 1200);
                  } else {
                    alert('Failed to add to cart');
                  }
                } catch (err) {
                  alert('Error adding to cart');
                }
              }}>
                {addedToCartIdx === idx ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          ))
        )}
      </main>
    </div>
  );
};
export default Products;