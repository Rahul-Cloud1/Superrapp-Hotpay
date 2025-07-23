
import React from 'react';
import logo from './assets/image 3.png';
import vectorIcon from './assets/Vector.png';
import profileIcon from './assets/My Profile Icon.png';
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
      top: '57px',
      left: '1325px',
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: '18px',
      color: '#007BFF',
    }}>
      My Profile
    </span>
  </>
);


const Cart = () => {
  // Utility to add a product to cart with required fields
  // Function to update cart on backend
  // Reusable function for quantity change (increment/decrement)
  const updateCartItemQuantity = async (item, newQty) => {
    const payload = {
      productId: item.productId,
      variantId: item.variantId,
      name: item.name,
      price: item.unitPrice || item.price,
      superPrice: item.sellingPrice ? `₹${item.sellingPrice}` : item.superPrice,
      moq: item.moq,
      image: item.image,
      quantity: newQty,
      subcategory: item.subcategory,
      gstPercentage: item.gstPercentage,
      gstAmount: (item.sellingPrice && item.gstPercentage)
        ? ((parseFloat(item.sellingPrice) * parseFloat(item.gstPercentage) / 100).toFixed(2))
        : item.gstAmount || ''
    };
    const token = localStorage.getItem('token');
    if (!token || token === 'undefined' || token === 'null') {
      alert('No valid token found. Please login again.');
      return;
    }
    try {
      const res = await fetch('http://10.10.0.218:5000/cart', {
        method: 'POST', // or 'PUT' if your backend expects it
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        alert('Failed to update cart item quantity');
      }
    } catch (err) {
      alert('Error updating cart item quantity');
    }
  };
  const updateCartOnBackend = async (updatedCart) => {
    const token = localStorage.getItem('token');
    if (!token || token === 'undefined' || token === 'null') {
      setError('No valid token found. Please login again.');
      return;
    }
    try {
      // Map to backend-required fields
      const backendItems = updatedCart.map(item => ({
        name: item.name || '',
        quantity: item.qty || 1,
        productId: item.productId || '',
        variantId: item.variantId || ''
      }));
      // Validate all required fields before sending
      const missingFields = backendItems.filter(item => {
        return !item.name || !item.quantity || !item.productId || !item.variantId;
      });
      if (missingFields.length > 0) {
        setError('Some cart items are missing required fields for backend.');
        console.warn('Missing fields in cart items:', missingFields);
        return;
      }
      const res = await fetch('http://10.10.0.218:5000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ items: backendItems })
      });
      if (!res.ok) {
        setError('Failed to update cart on backend.');
        try {
          const errorData = await res.json();
          console.error('Backend error response:', errorData);
        } catch (e) {
          // ignore JSON parse error
        }
      }
    } catch (e) {
      setError('Error updating cart on backend: ' + e.message);
    }
  };
  const addProductToCart = (product, variant, quantity = 1) => {
    if (!product || !product._id) {
      alert('Cannot add to cart: Product is missing productId (_id). Please contact support or reload the page.');
      console.error('addProductToCart: product missing _id', product);
      return;
    }
    if (!variant || !variant._id) {
      alert('Cannot add to cart: Variant is missing variantId (_id). Please contact support or reload the page.');
      console.error('addProductToCart: variant missing _id', variant);
      return;
    }
    const newItem = {
      // Product fields
      productId: product._id,
      name: product.name,
      category: product.category,
      subcategory: product.subCategory,
      description: product.description,
      // Variant fields
      variantId: variant._id,
      image: variant.image,
      mrp: variant.mrp,
      sellingPrice: variant.sellingPrice,
      gstPercentage: variant.gstPercentage,
      totalPrice: variant.totalPrice,
      moq: variant.moq,
      unitPrice: variant.unitPrice,
      // Cart fields
      qty: quantity,
      // Optionally, calculate GST amount and formatted price
      gstAmount: ((variant.sellingPrice * quantity * variant.gstPercentage) / 100).toFixed(2),
      superPrice: `₹${variant.sellingPrice}`
    };
    let updatedCart = [...cartItems];
    // Check if item already exists (by productId and variantId)
    const idx = updatedCart.findIndex(item => item.productId === newItem.productId && item.variantId === newItem.variantId);
    if (idx > -1) {
      updatedCart[idx].qty += quantity;
    } else {
      updatedCart.push(newItem);
    }
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  const [cartItems, setCartItems] = React.useState([]);
  const [error, setError] = React.useState("");
  // For promocode (if needed later)
  const [promo, setPromo] = React.useState("");

  // Helper to calculate summary
  const getSummary = () => {
    let subtotal = 0;
    let totalGST = 0;
    cartItems.forEach(item => {
      let price = 0;
      let gstPerc = 0;
      if (item.superPrice) {
        price = parseFloat(String(item.superPrice).replace(/[^\d.]/g, ''));
      }
      if (item.gstPercentage) {
        gstPerc = parseFloat(item.gstPercentage);
      }
      subtotal += price * (item.qty || 1);
      totalGST += price * (item.qty || 1) * gstPerc / 100;
    });
    return {
      subtotal: subtotal.toFixed(2),
      totalGST: totalGST.toFixed(2),
      total: (subtotal + totalGST).toFixed(2)
    };
  };

  
  const handleCheckout = async () => {
    
    // Debug: Show cartItems before validation
    console.log('Cart items before validation:', cartItems);

    // Log the payload that will be sent for checkout
    setTimeout(() => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        console.log('Proceed payload (localStorage cart):', cart);
      } catch (e) {
        console.log('Proceed payload: Could not parse localStorage cart');
      }
    }, 0);
    const missingFields = cartItems.filter(item => {
      const missing = [];
      if (!item.name) missing.push('name');
      if (!item.qty) missing.push('qty');
      if (!item.productId) missing.push('productId');
      if (!item.variantId) missing.push('variantId');
      if (missing.length > 0) {
        console.warn('Cart item missing fields:', missing, item);
      }
      return missing.length > 0;
    });
    if (missingFields.length > 0) {
      alert('Some cart items are missing required fields: name, quantity, productId, or variantId. Please check your cart. See console for details.');
      return;
    }   
    if (cartItems.length === 0) {
      alert('Cart is empty.');
      return;
    }
    // Calculate creditsRequested (example: total quantity)
    const totalQuantity = cartItems.reduce((sum, item) => sum + (item.qty || 0), 0);
    // Only send required fields for each item
    const payload = {
      creditsRequested: totalQuantity,
      items: cartItems.map(item => ({
        productId: item.productId,
        variantId: item.variantId,
        quantity: item.qty,
        name: item.name,
        sellingPrice: item.price || item.sellingPrice || '',
      }))
    };
    console.log('Approval payload being sent:', payload);
    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token);
    if (!token || token === 'undefined' || token === 'null') {
      alert('No valid token found in localStorage. Please login again.');
      return;
    }
    try {
      const res = await fetch('http://10.10.0.218:5000/approval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      let responseJson = null;
      try {
        responseJson = await res.json();
      } catch (e) {
        responseJson = null;
        console.error('Error parsing approval backend response:', e);
      }
      console.log('Approval backend response:', responseJson);
      if (res.ok && responseJson && responseJson.success) {
        alert('Cart sent for approval successfully!');
        localStorage.setItem('submittedCart', JSON.stringify(payload));
      } else if (res.ok) {
        alert('Approval request succeeded, but no success message.');
        console.warn('Approval backend returned:', responseJson);
      } else {
        alert('Failed to send cart for approval.\n' + (responseJson ? JSON.stringify(responseJson) : 'No response'));
        console.error('Approval backend error:', res.status, res.statusText, responseJson);
      }
    } catch (err) {
      alert('Error connecting to approval backend. See console for details.');
      console.error('Fetch error:', err);
    }
  };
  const fetchCartFromBackend = async () => {
    setError("");
    const token = localStorage.getItem('token');
    if (!token || token === 'undefined' || token === 'null') {
      setCartItems([]);
      setError("No valid token found. Please login again.");
      return;
    }
    try {
      const res = await fetch('http://10.10.0.218:5000/cart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        console.log('Backend cart response:', data);
        let cart = Array.isArray(data.items) ? data.items : [];
        if (!cart || cart.length === 0) {
          setError("No products found in cart from backend. Response: " + JSON.stringify(data));
          console.warn('No products found in cart from backend. Full response:', data);
        }
        // Map backend fields to UI fields
        const mappedCart = cart.map(item => ({
          name: item.name || '',
          image: item.image || '',
          gstPercentage: item.gst || '',
          gstTotal: item.gstTotal || '',
          qty: item.quantity || 1,
          productId: item.productId || '',
          variantId: item.variantId || '',
          superPrice: item.sellingPrice ? `₹${item.sellingPrice}` : '',
          price: item.sellingPrice || '',
          totalPrice: item.totalPrice || '',
          moq: item.moq || '',
          _id: item._id || '',
        }));
        setCartItems(mappedCart);
      } else {
        setCartItems([]);
        setError("Failed to fetch cart from backend. Status: " + res.status);
        try {
          const errorData = await res.json();
          console.error('Backend cart fetch error response:', errorData);
        } catch (e) {
          console.error('Backend cart fetch error, could not parse JSON:', e);
        }
      }
    } catch (e) {
      setCartItems([]);
      setError("Error fetching cart from backend: " + e.message);
    }
  };

  React.useEffect(() => {
    fetchCartFromBackend();
    // Listen for 'cart-updated' event to refresh cart automatically
    const handleCartUpdated = () => {
      fetchCartFromBackend();
    };
    window.addEventListener('cart-updated', handleCartUpdated);
    return () => {
      window.removeEventListener('cart-updated', handleCartUpdated);
    };
  }, []);
  return (
    <div
      style={{
        width: '1440px',
        height: '900px',
        background: 'rgba(255, 255, 255, 1)',
        opacity: 1,
        transform: 'rotate(0deg)'
      }}
    >
      {/* Debug: Show raw backend cart response if error contains it */}
      {error && error.includes('Response:') && (
        <div style={{
          background: '#fffbe6',
          color: '#b71c1c',
          border: '1px solid #ffe082',
          padding: '12px',
          margin: '16px',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '14px',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
        }}>
          <strong>Raw backend cart response:</strong><br />
          {error.split('Response:')[1]}
        </div>
      )}
      <header style={styles.header}>
        <a href="/app">
          <img src={logo} alt="Logo" style={styles.logo} />
        </a>
        <SearchBar />
        <ViewCartButton />
        <ProfileSection />
      </header>
      <div
        style={{
          position: 'absolute',
          top: '170px',
          left: '100px',
          width: '186px',
          height: '60px',
          opacity: 1,
          transform: 'rotate(0deg)',
          display: 'flex',
          alignItems: 'center',
          verticalAlign: 'middle',
        }}
      >
        <span
          style={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontStyle: 'SemiBold',
            fontSize: '40px',
            lineHeight: '100%',
            letterSpacing: 0,
            color: 'rgba(0, 0, 0, 1)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          Your cart
        </span>
        {/* ...existing code... */}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '249px',
          left: '100px',
          width: '201px',
          height: '22px',
          opacity: 1,
          transform: 'rotate(0deg)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontStyle: 'Medium',
            fontSize: '18px',
            lineHeight: '115%',
            letterSpacing: 0,
            color: 'rgba(0, 0, 0, 1)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          Product
        </span>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '303px',
          left: '100px',
          width: '529px',
          height: cartItems.length > 3 ? `${3 * 116.92 + 2 * 17}px` : `${cartItems.length * 116.92 + (cartItems.length - 1) * 17}px`,
          overflowY: cartItems.length > 3 ? 'auto' : 'visible',
          borderRadius: '14.26px',
          background: 'transparent',
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE 10+ */
        }}
        className="hide-scrollbar"
      >
        {/* Hide scrollbars with CSS */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>
        {error && (
          <div style={{ color: 'red', marginBottom: '10px', fontWeight: 'bold' }}>{error}</div>
        )}
        <button onClick={fetchCartFromBackend} style={{ marginBottom: '10px', padding: '6px 16px', borderRadius: '8px', background: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}>Refresh Cart</button>
        {cartItems.map((item, idx) => (
          <div
            key={item.id + (item.subcategory ? item.subcategory : 'default')}
            style={{
              width: '529px',
              height: '116.92px',
              marginBottom: '17px',
              borderRadius: '14.26px',
              background: 'rgba(17, 114, 182, 0.15)',
              opacity: 1,
              color: 'rgba(255, 255, 255, 1)',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              padding: '0',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '94.11px',
                height: '94.11px',
                position: 'absolute',
                top: '11.41px',
                left: '11.41px',
                borderRadius: '19.96px',
                background: 'rgba(255, 255, 255, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '19.96px' }} />
            </div>
            <div style={{ position: 'absolute', top: '18.54px', left: '119.77px', width: '387.84px', height: '25.67px', opacity: 1 }}>
              <span style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontStyle: 'Medium',
                fontSize: '21.77px',
                lineHeight: '115%',
                letterSpacing: 0,
                color: 'rgba(0, 0, 0, 1)',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>{(() => {
                const words = item.name ? item.name.split(' ') : [];
                if (words.length > 24) {
                  return words.slice(0, 24).join(' ') + '...';
                }
                return item.name;
              })()}</span>
            </div>
            {/* MOQ element */}
            <span
              style={{
                position: 'absolute',
                top: '52.76px',
                left: '119.77px',
                minWidth: '200px',
                height: '14.26px',
                opacity: 1,
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '17.11px',
                lineHeight: '130%',
                letterSpacing: 0,
                verticalAlign: 'middle',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                color: 'rgba(0, 0, 0, 0.66)',
                gap: '24px',
              }}
            >
              <span>MOQ: {item.moq ? item.moq : 'N/A'}</span>
              <span style={{ fontSize: '13px', color: '#2196f3', fontWeight: 500 }}>
                GST: {item.gstPercentage ? item.gstPercentage + '%' : '18%'}
              </span>
            </span>
            {/* Price element with new styles and position */}
            <span
              style={{
                position: 'absolute',
                top: '85.55px',
                left: '119.77px',
                width: '76.99px',
                height: '18.54px',
                opacity: 1,
                fontFamily: 'Anek Devanagari',
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: '22.81px',
                lineHeight: '130%',
                letterSpacing: 0,
                verticalAlign: 'middle',
                color: 'rgba(0, 0, 0, 1)',
                display: 'flex',
                alignItems: 'center',
              }}
            >{item.superPrice !== undefined && item.superPrice !== null ? item.superPrice : 'N/A'}</span>
            {/* Qty element remains as is */}
            <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', color: '#333', position: 'absolute', top: '85.55px', left: '210px' }}>Qty: {item.qty}</span>
            <div
              style={{
                position: 'absolute',
                top: '61.31px',
                left: '410.65px',
                width: '76px',
                height: '33px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#2196f3',
                borderRadius: '16px',
                boxShadow: '0 2px 8px rgba(33,150,243,0.15)',
                opacity: 1,
                padding: '0 10px',
                gap: '1px',
              }}
            >
              <button
                style={{
                  width: '28px',
                  height: '28px',
                  border: 'none',
                  background: 'transparent',
                  color: '#fff',
                  borderRadius: '6px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                onClick={async () => {
                  let updated = [...cartItems];
                  let itemToUpdate = updated[idx];
                  if (itemToUpdate.qty === 1) {
                    // Remove item and do not call backend for this item
                    updated.splice(idx, 1);
                    setCartItems(updated);
                    localStorage.setItem('cart', JSON.stringify(updated));
                    return;
                  } else {
                    itemToUpdate.qty = itemToUpdate.qty - 1;
                    updated[idx] = itemToUpdate;
                  }
                  // Ensure required fields for backend
                  updated = updated.map(item => ({
                    ...item,
                    name: item.name || '',
                    qty: item.qty || 1,
                    productId: item.productId || '',
                    variantId: item.variantId || ''
                  }));
                  setCartItems(updated);
                  localStorage.setItem('cart', JSON.stringify(updated));
                  // Wait 50ms before backend update
                  await new Promise(res => setTimeout(res, 50));
                  // Send only required fields to backend for the correct item
                  await updateCartItemQuantity(updated[idx], updated[idx]?.qty || 1);
                }}
              >-</button>
              <span style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: '#fff', minWidth: '18px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '28px' }}>{item.qty}</span>
              <button
                style={{
                  width: '28px',
                  height: '28px',
                  border: 'none',
                  background: 'transparent',
                  color: '#fff',
                  borderRadius: '6px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                onClick={async () => {
                  let updated = [...cartItems];
                  let itemToUpdate = updated[idx];
                  itemToUpdate.qty = itemToUpdate.qty + 1;
                  updated[idx] = itemToUpdate;
                  // Ensure required fields for backend
                  updated = updated.map(item => ({
                    ...item,
                    name: item.name || '',
                    qty: item.qty || 1,
                    productId: item.productId || '',
                    variantId: item.variantId || ''
                  }));
                  setCartItems(updated);
                  localStorage.setItem('cart', JSON.stringify(updated));
                  // Wait 50ms before backend update
                  await new Promise(res => setTimeout(res, 50));
                  // Send only required fields to backend for the correct item
                  await updateCartItemQuantity(updated[idx], updated[idx]?.qty || 1);
                }}
              >+</button>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          width: '505px',
          height: '458px',
          position: 'absolute',
          top: '260px',
          left: '835px',
          borderRadius: '20px',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'rgba(0, 0, 0, 0.1)',
          background: '#fff',
          opacity: 1,
          paddingTop: '20px',
          paddingRight: '24px',
          paddingBottom: '20px',
          paddingLeft: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: '179px',
            height: '32px',
            opacity: 1,
            fontFamily: 'Satoshi, Poppins, Arial, sans-serif',
            fontWeight: 700,
            fontStyle: 'Bold',
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: 0,
            verticalAlign: 'middle',
            color: 'rgba(0, 0, 0, 1)',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Order Summary
        </div>
        {/* Subtotal */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          {/* Subtotal Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                width: '72px',
                height: '27px',
                opacity: 1,
                fontFamily: 'Satoshi, Poppins, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: 0,
                verticalAlign: 'middle',
                color: 'rgba(0, 0, 0, 0.6)',
              }}
            >Subtotal</span>
            <span
              style={{
                fontFamily: 'Satoshi, Poppins, Arial, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                color: 'rgba(0, 0, 0, 0.8)',
              }}
            >
              {(() => {
                // Calculate subtotal from cartItems
                let subtotal = 0;
                cartItems.forEach(item => {
                  let price = 0;
                  if (item.superPrice) {
                    price = parseFloat(String(item.superPrice).replace(/[^\d.]/g, ''));
                  }
                  subtotal += price * (item.qty || 1);
                });
                return `₹${subtotal.toFixed(2)}`;
              })()}
            </span>
          </div>
          {/* Total GST Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                width: '143px',
                height: '27px',
                opacity: 1,
                fontFamily: 'Satoshi, Poppins, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: 0,
                verticalAlign: 'middle',
                color: 'rgba(0, 0, 0, 0.6)',
              }}
            >Total GST</span>
            <span
              style={{
                fontFamily: 'Satoshi, Poppins, Arial, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                color: 'rgba(0, 0, 0, 0.8)',
              }}
            >
              {(() => {
                // Calculate total GST from cartItems
                let totalGST = 0;
                cartItems.forEach(item => {
                  let price = 0;
                  let gstPerc = 0;
                  if (item.superPrice) {
                    price = parseFloat(String(item.superPrice).replace(/[^\d.]/g, ''));
                  }
                  if (item.gstPercentage) {
                    gstPerc = parseFloat(item.gstPercentage);
                  }
                  totalGST += price * (item.qty || 1) * gstPerc / 100;
                });
                return `₹${totalGST.toFixed(2)}`;
              })()}
            </span>
          </div>
          {/* Total Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                width: '42px',
                height: '27px',
                opacity: 1,
                fontFamily: 'Satoshi, Poppins, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: 0,
                verticalAlign: 'middle',
                color: 'rgba(0, 0, 0, 1)',
              }}
            >Total</span>
            <span
              style={{
                fontFamily: 'Satoshi, Poppins, Arial, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                color: 'rgba(0, 0, 0, 1)',
              }}
            >
              {(() => {
                // Calculate subtotal and total GST
                let subtotal = 0;
                let totalGST = 0;
                cartItems.forEach(item => {
                  let price = 0;
                  let gstPerc = 0;
                  if (item.superPrice) {
                    price = parseFloat(String(item.superPrice).replace(/[^\d.]/g, ''));
                  }
                  if (item.gstPercentage) {
                    gstPerc = parseFloat(item.gstPercentage);
                  }
                  subtotal += price * (item.qty || 1);
                  totalGST += price * (item.qty || 1) * gstPerc / 100;
                });
                return `₹${(subtotal + totalGST).toFixed(2)}`;
              })()}
            </span>
          </div>
          {/* Promocode Box */}
          <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '16px',
            marginBottom: '8px',
            padding: '10px 0',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #f5faff 0%, #e3f2fd 100%)',
            boxShadow: '0px 2px 8px rgba(33,150,243,0.07)',
          }}>
            <input
              type="text"
              placeholder="Enter promocode"
              value={promo}
              onChange={e => setPromo(e.target.value)}
              style={{
                width: '65%',
                height: '40px',
                border: '1px solid #90caf9',
                borderRadius: '8px',
                padding: '0 16px',
                fontFamily: 'Poppins',
                fontSize: '16px',
                outline: 'none',
                background: '#fff',
                marginRight: '12px',
                color: '#000', // Ensure entered text is black
              }}
            />
            <button
              style={{
                border: 'none',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #007BFF 0%, #0056B3 100%)',
                color: 'white',
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '16px',
                cursor: 'pointer',
                padding: '10px 24px',
                boxShadow: '0px 2px 6px rgba(0, 123, 255, 0.15)',
                transition: 'all 0.3s ease',
              }}
              type="button"
              onClick={() => {}} // Placeholder for promo logic
            >Apply</button>
          </div>
        </div>
        {/* Checkout Box inside Order Summary */}
        <div
          style={{
            width: '457px',
            height: '60px',
            opacity: 1,
            borderRadius: '62px',
            paddingTop: '16px',
            paddingRight: '54px',
            paddingBottom: '16px',
            paddingLeft: '54px',
            gap: '12px',
            color: 'rgba(0, 0, 0, 1)',
            background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 'auto',
            boxSizing: 'border-box',
          }}
        >
          <button
            style={{
              border: 'none',
              borderRadius: '32px',
              background: 'linear-gradient(135deg, #007BFF 0%, #0056B3 100%)',
              color: 'white',
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '18px',
              cursor: 'pointer',
              padding: '12px 32px',
              boxShadow: '0px 4px 8px rgba(0, 123, 255, 0.2)',
              transition: 'all 0.3s ease',
            }}
            type="button"
            onClick={handleCheckout}
          >Send for Approval</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;