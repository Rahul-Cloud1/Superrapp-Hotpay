
import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

const sidebarLinks = [
  { name: "Dashboard", icon: "📊" },
  { name: "Orders", icon: "🛒" },
  { name: "Products", icon: "📦" },
  { name: "Category", icon: "🗂️" },
  { name: "Users", icon: "👥" },
  { name: "Reports", icon: "📈" },
  { name: "Settings", icon: "⚙️" },
  { name: "Logout", icon: "🚪" },
];

export default function AdminDashboard() {
  const [selectedSection, setSelectedSection] = useState('Dashboard');
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [productList, setProductList] = useState([
    { id: 1, name: 'Sample Product', price: 100 },
  ]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    quantity: '',
    description: '',
    category: '',
    subcategory: '',
    gst: '',
    variants: '',
    images: []
  });
  const [editProduct, setEditProduct] = useState(null);
  // Category state
  const [categoryList, setCategoryList] = useState([
    { id: 1, name: 'Sample Category' },
  ]);
  const [newCategory, setNewCategory] = useState({ name: '' });
  const [editCategory, setEditCategory] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  // Subcategory state (linked to category)
  const [subcategoryList, setSubcategoryList] = useState([
    { id: 1, name: 'Sample Subcategory', categoryId: 1 },
  ]);
  const [newSubcategory, setNewSubcategory] = useState({ name: '' });
  const [editSubcategory, setEditSubcategory] = useState(null);
  // Category handlers
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategory.name) return;
    const newId = Date.now();
    setCategoryList([
      ...categoryList,
      { id: newId, name: newCategory.name },
    ]);
    setNewCategory({ name: '' });
    setSelectedCategoryId(newId);
  };

  const handleDeleteCategory = (id) => {
    setCategoryList(categoryList.filter((c) => c.id !== id));
    setSubcategoryList(subcategoryList.filter((s) => s.categoryId !== id));
    if (selectedCategoryId === id && categoryList.length > 1) {
      setSelectedCategoryId(categoryList.find((c) => c.id !== id).id);
    }
  };

  const handleEditCategory = (category) => {
    setEditCategory(category);
    setSelectedSection('Update Category');
  };

  const handleUpdateCategory = (e) => {
    e.preventDefault();
    setCategoryList(categoryList.map((c) =>
      c.id === editCategory.id ? { ...editCategory } : c
    ));
    setEditCategory(null);
    setSelectedSection('Category');
  };

  // For subcategories, always use selectedCategoryId

  // Sidebar hover style
  const sidebarItemStyle = {
    padding: '12px 20px',
    borderRadius: '8px',
    margin: '6px 0',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
  };

  // Product management handlers
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.quantity || !newProduct.description || !newProduct.category || !newProduct.subcategory || !newProduct.gst) return;
    setProductList([
      ...productList,
      {
        id: Date.now(),
        name: newProduct.name,
        quantity: parseInt(newProduct.quantity),
        description: newProduct.description,
        category: newProduct.category,
        subcategory: newProduct.subcategory,
        gst: parseFloat(newProduct.gst),
        variants: newProduct.variants.split(',').map(v => v.trim()).filter(Boolean),
        images: newProduct.images
      },
    ]);
    setNewProduct({ name: '', quantity: '', description: '', category: '', subcategory: '', gst: '', variants: '', images: [] });
  };

  const handleDeleteProduct = (id) => {
    setProductList(productList.filter((p) => p.id !== id));
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
    setSelectedSection('Update Product');
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    setProductList(productList.map((p) =>
      p.id === editProduct.id ? { ...editProduct } : p
    ));
    setEditProduct(null);
    setSelectedSection('Products');
  };

  // Sidebar click handler
  const handleSidebarClick = (name) => {
    if (name === 'Products') {
      setProductsDropdown((prev) => !prev);
      setCategoryDropdown(false);
    } else if (name === 'Category') {
      setCategoryDropdown((prev) => !prev);
      setProductsDropdown(false);
    } else {
      setSelectedSection(name);
      setProductsDropdown(false);
      setCategoryDropdown(false);
    }
  };

  // Dropdown click handler
  const handleDropdownClick = (option) => {
    setSelectedSection(option);
  };

  // Subcategory handlers
  const handleAddSubcategory = (e) => {
    e.preventDefault();
    if (!newSubcategory.name) return;
    setSubcategoryList([
      ...subcategoryList,
      { id: Date.now(), name: newSubcategory.name, categoryId: selectedCategoryId },
    ]);
    setNewSubcategory({ name: '' });
  };

  const handleDeleteSubcategory = (id) => {
    setSubcategoryList(subcategoryList.filter((s) => s.id !== id));
  };

  const handleEditSubcategory = (subcategory) => {
    setEditSubcategory(subcategory);
    setSelectedSection('Update Subcategory');
  };

  const handleUpdateSubcategory = (e) => {
    e.preventDefault();
    setSubcategoryList(subcategoryList.map((s) =>
      s.id === editSubcategory.id ? { ...editSubcategory } : s
    ));
    setEditSubcategory(null);
    setSelectedSection('Category');
  };

  // Sidebar rendering
  const renderSidebarLinks = () =>
    sidebarLinks.map((link) => {
      if (link.name === 'Products') {
        return (
          <React.Fragment key={link.name}>
            <li
              style={sidebarItemStyle}
              onClick={() => handleSidebarClick(link.name)}
              onMouseOver={e => (e.currentTarget.style.background = '#e0e7ef')}
              onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span className="sidebar-icon" style={{ fontSize: 22, marginRight: 16 }}>{link.icon}</span>
              <span className="sidebar-text">{link.name}</span>
              <span style={{ marginLeft: 'auto', fontSize: 16 }}>{productsDropdown ? '▲' : '▼'}</span>
            </li>
            {productsDropdown && (
              <ul style={{ listStyle: 'none', paddingLeft: 30, margin: 0 }}>
                <li
                  style={{ ...sidebarItemStyle, background: selectedSection === 'Add Product' ? '#e0e7ef' : 'transparent', fontSize: 15 }}
                  onClick={() => handleDropdownClick('Add Product')}
                >Add Product</li>
                <li
                  style={{ ...sidebarItemStyle, background: selectedSection === 'Update Product' ? '#e0e7ef' : 'transparent', fontSize: 15 }}
                  onClick={() => handleDropdownClick('Update Product')}
                >Update Product</li>
                <li
                  style={{ ...sidebarItemStyle, background: selectedSection === 'Delete Product' ? '#e0e7ef' : 'transparent', fontSize: 15 }}
                  onClick={() => handleDropdownClick('Delete Product')}
                >Delete Product</li>
              </ul>
            )}
          </React.Fragment>
        );
      } else if (link.name === 'Category') {
        return (
          <React.Fragment key={link.name}>
            <li
              style={sidebarItemStyle}
              onClick={() => handleSidebarClick(link.name)}
              onMouseOver={e => (e.currentTarget.style.background = '#e0e7ef')}
              onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span className="sidebar-icon" style={{ fontSize: 22, marginRight: 16 }}>{link.icon}</span>
              <span className="sidebar-text">{link.name}</span>
              <span style={{ marginLeft: 'auto', fontSize: 16 }}>{categoryDropdown ? '▲' : '▼'}</span>
            </li>
            {categoryDropdown && (
              <ul style={{ listStyle: 'none', paddingLeft: 30, margin: 0 }}>
                <li
                  style={{ ...sidebarItemStyle, background: selectedSection === 'Add Category' ? '#e0e7ef' : 'transparent', fontSize: 15 }}
                  onClick={() => handleDropdownClick('Add Category')}
                >Add Category</li>
                <li
                  style={{ ...sidebarItemStyle, background: selectedSection === 'Update Category' ? '#e0e7ef' : 'transparent', fontSize: 15 }}
                  onClick={() => handleDropdownClick('Update Category')}
                >Update Category</li>
                <li
                  style={{ ...sidebarItemStyle, background: selectedSection === 'Delete Category' ? '#e0e7ef' : 'transparent', fontSize: 15 }}
                  onClick={() => handleDropdownClick('Delete Category')}
                >Delete Category</li>
                <li
                  style={{ ...sidebarItemStyle, background: selectedSection === 'Add Subcategory' ? '#e0e7ef' : 'transparent', fontSize: 15 }}
                  onClick={() => handleDropdownClick('Add Subcategory')}
                >Add Subcategory</li>
                <li
                  style={{ ...sidebarItemStyle, background: selectedSection === 'Update Subcategory' ? '#e0e7ef' : 'transparent', fontSize: 15 }}
                  onClick={() => handleDropdownClick('Update Subcategory')}
                >Update Subcategory</li>
                <li
                  style={{ ...sidebarItemStyle, background: selectedSection === 'Delete Subcategory' ? '#e0e7ef' : 'transparent', fontSize: 15 }}
                  onClick={() => handleDropdownClick('Delete Subcategory')}
                >Delete Subcategory</li>
              </ul>
            )}
          </React.Fragment>
        );
      } else {
        return (
          <li
            key={link.name}
            style={{ ...sidebarItemStyle, background: selectedSection === link.name ? '#e0e7ef' : 'transparent' }}
            onClick={() => handleSidebarClick(link.name)}
            onMouseOver={e => (e.currentTarget.style.background = '#e0e7ef')}
            onMouseOut={e => (e.currentTarget.style.background = selectedSection === link.name ? '#e0e7ef' : 'transparent')}
          >
            <span className="sidebar-icon" style={{ fontSize: 22, marginRight: 16 }}>{link.icon}</span>
            <span className="sidebar-text">{link.name}</span>
          </li>
        );
      }
    });

  // Main content rendering
  const renderMainContent = () => {
    // Products Section
    if (selectedSection === 'Add Product') {
      // Filter subcategories by selected category
      const filteredSubcategories = subcategoryList.filter(s => {
        const cat = categoryList.find(c => c.id === s.categoryId);
        return cat && cat.name === newProduct.category;
      });
      return (
        <div>
          <h2 style={{ color: '#2563eb' }}>Add Product</h2>
          <form onSubmit={handleAddProduct} style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
              style={{ padding: 8 }}
              required
            />
            <input
              type="number"
              placeholder="Quantity"
              value={newProduct.quantity}
              onChange={e => setNewProduct({ ...newProduct, quantity: e.target.value })}
              style={{ padding: 8 }}
              required
            />
            <textarea
              placeholder="Description"
              value={newProduct.description}
              onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
              style={{ padding: 8, minHeight: 60 }}
              required
            />
            <select
              value={newProduct.category}
              onChange={e => setNewProduct({ ...newProduct, category: e.target.value, subcategory: '' })}
              style={{ padding: 8 }}
              required
            >
              <option value="">Select Category</option>
              {categoryList.map(c => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>
            <select
              value={newProduct.subcategory}
              onChange={e => setNewProduct({ ...newProduct, subcategory: e.target.value })}
              style={{ padding: 8 }}
              required
              disabled={!newProduct.category}
            >
              <option value="">Select Subcategory</option>
              {filteredSubcategories.map(s => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
            </select>
            <input
              type="number"
              placeholder="GST Rate (%)"
              value={newProduct.gst}
              onChange={e => setNewProduct({ ...newProduct, gst: e.target.value })}
              style={{ padding: 8 }}
              required
              min="0"
              step="0.01"
            />
            <input
              type="text"
              placeholder="Variants (comma separated)"
              value={newProduct.variants}
              onChange={e => setNewProduct({ ...newProduct, variants: e.target.value })}
              style={{ padding: 8 }}
            />
            <input
              type="file"
              multiple
              onChange={e => setNewProduct({ ...newProduct, images: Array.from(e.target.files) })}
              style={{ padding: 8 }}
            />
            <button type="submit" style={{ padding: '8px 18px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6 }}>Add</button>
          </form>
          <div style={{ marginTop: 30 }}>
            <h4>Current Products:</h4>
            <ul>
              {productList.map(p => (
                <li key={p.id}>
                  {p.name} - Qty: {p.quantity} - {p.category} / {p.subcategory}
                  <br />Desc: {p.description}
                  <br />GST: {p.gst}%
                  <br />Variants: {Array.isArray(p.variants) ? p.variants.join(', ') : p.variants}
                  <br />Images: {p.images && p.images.length ? p.images.length + ' file(s)' : 'None'}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
    if (selectedSection === 'Update Product') {
      return (
        <div>
          <h2 style={{ color: '#2563eb' }}>Update Product</h2>
          {!editProduct ? (
            <ul style={{ marginTop: 20 }}>
              {productList.map(p => (
                <li key={p.id} style={{ marginBottom: 10 }}>
                  {p.name} - ${p.price}{' '}
                  <button onClick={() => handleEditProduct(p)} style={{ marginLeft: 10, padding: '4px 10px', borderRadius: 4, border: '1px solid #2563eb', color: '#2563eb', background: '#fff' }}>Edit</button>
                </li>
              ))}
            </ul>
          ) : (
            <form onSubmit={handleUpdateProduct} style={{ marginTop: 20 }}>
              <input
                type="text"
                value={editProduct.name}
                onChange={e => setEditProduct({ ...editProduct, name: e.target.value })}
                style={{ padding: 8, marginRight: 10 }}
                required
              />
              <input
                type="number"
                value={editProduct.price}
                onChange={e => setEditProduct({ ...editProduct, price: e.target.value })}
                style={{ padding: 8, marginRight: 10 }}
                required
              />
              <button type="submit" style={{ padding: '8px 18px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6 }}>Update</button>
              <button type="button" onClick={() => setEditProduct(null)} style={{ marginLeft: 10, padding: '8px 18px', background: '#e5e7eb', color: '#222', border: 'none', borderRadius: 6 }}>Cancel</button>
            </form>
          )}
        </div>
      );
    }
    if (selectedSection === 'Delete Product') {
      return (
        <div>
          <h2 style={{ color: '#2563eb' }}>Delete Product</h2>
          <ul style={{ marginTop: 20 }}>
            {productList.map(p => (
              <li key={p.id} style={{ marginBottom: 10 }}>
                {p.name} - ${p.price}{' '}
                <button onClick={() => handleDeleteProduct(p.id)} style={{ marginLeft: 10, padding: '4px 10px', borderRadius: 4, border: '1px solid #ef4444', color: '#ef4444', background: '#fff' }}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    // Category Section
    if (selectedSection === 'Add Category') {
      return (
        <div>
          <h2 style={{ color: '#2563eb' }}>Add Category</h2>
          <form onSubmit={handleAddCategory} style={{ marginTop: 20 }}>
            <input
              type="text"
              placeholder="Category Name"
              value={newCategory.name}
              onChange={e => setNewCategory({ ...newCategory, name: e.target.value })}
              style={{ padding: 8, marginRight: 10 }}
              required
            />
            <button type="submit" style={{ padding: '8px 18px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6 }}>Add</button>
          </form>
          <div style={{ marginTop: 30 }}>
            <h4>Current Categories:</h4>
            <ul>
              {categoryList.map(c => (
                <li key={c.id} style={{ marginBottom: 10 }}>
                  <span
                    style={{ cursor: 'pointer', color: selectedCategoryId === c.id ? '#2563eb' : '#222', fontWeight: selectedCategoryId === c.id ? 700 : 400 }}
                    onClick={() => setSelectedCategoryId(c.id)}
                  >
                    {c.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
    if (selectedSection === 'Update Category') {
      return (
        <div>
          <h2 style={{ color: '#2563eb' }}>Update Category</h2>
          {!editCategory ? (
            <ul style={{ marginTop: 20 }}>
              {categoryList.map(c => (
                <li key={c.id} style={{ marginBottom: 10 }}>
                  {c.name}{' '}
                  <button onClick={() => handleEditCategory(c)} style={{ marginLeft: 10, padding: '4px 10px', borderRadius: 4, border: '1px solid #2563eb', color: '#2563eb', background: '#fff' }}>Edit</button>
                </li>
              ))}
            </ul>
          ) : (
            <form onSubmit={handleUpdateCategory} style={{ marginTop: 20 }}>
              <input
                type="text"
                value={editCategory.name}
                onChange={e => setEditCategory({ ...editCategory, name: e.target.value })}
                style={{ padding: 8, marginRight: 10 }}
                required
              />
              <button type="submit" style={{ padding: '8px 18px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6 }}>Update</button>
              <button type="button" onClick={() => setEditCategory(null)} style={{ marginLeft: 10, padding: '8px 18px', background: '#e5e7eb', color: '#222', border: 'none', borderRadius: 6 }}>Cancel</button>
            </form>
          )}
        </div>
      );
    }
    if (selectedSection === 'Delete Category') {
      return (
        <div>
          <h2 style={{ color: '#2563eb' }}>Delete Category</h2>
          <ul style={{ marginTop: 20 }}>
            {categoryList.map(c => (
              <li key={c.id} style={{ marginBottom: 10 }}>
                {c.name}{' '}
                <button onClick={() => handleDeleteCategory(c.id)} style={{ marginLeft: 10, padding: '4px 10px', borderRadius: 4, border: '1px solid #ef4444', color: '#ef4444', background: '#fff' }}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    // Subcategory Section
    if (selectedSection === 'Add Subcategory') {
      return (
        <div>
          <h2 style={{ color: '#2563eb' }}>Add Subcategory</h2>
          <div style={{ marginBottom: 16 }}>
            <label style={{ marginRight: 8 }}>Category:</label>
            <select value={selectedCategoryId} onChange={e => setSelectedCategoryId(Number(e.target.value))} style={{ padding: 6 }}>
              {categoryList.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <form onSubmit={handleAddSubcategory} style={{ marginTop: 10 }}>
            <input
              type="text"
              placeholder="Subcategory Name"
              value={newSubcategory.name}
              onChange={e => setNewSubcategory({ ...newSubcategory, name: e.target.value })}
              style={{ padding: 8, marginRight: 10 }}
              required
            />
            <button type="submit" style={{ padding: '8px 18px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6 }}>Add</button>
          </form>
          <div style={{ marginTop: 30 }}>
            <h4>Current Subcategories:</h4>
            <ul>
              {subcategoryList.filter(s => s.categoryId === selectedCategoryId).map(s => (
                <li key={s.id}>{s.name}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
    if (selectedSection === 'Update Subcategory') {
      return (
        <div>
          <h2 style={{ color: '#2563eb' }}>Update Subcategory</h2>
          <div style={{ marginBottom: 16 }}>
            <label style={{ marginRight: 8 }}>Category:</label>
            <select value={selectedCategoryId} onChange={e => setSelectedCategoryId(Number(e.target.value))} style={{ padding: 6 }}>
              {categoryList.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          {!editSubcategory ? (
            <ul style={{ marginTop: 20 }}>
              {subcategoryList.filter(s => s.categoryId === selectedCategoryId).map(s => (
                <li key={s.id} style={{ marginBottom: 10 }}>
                  {s.name}{' '}
                  <button onClick={() => handleEditSubcategory(s)} style={{ marginLeft: 10, padding: '4px 10px', borderRadius: 4, border: '1px solid #2563eb', color: '#2563eb', background: '#fff' }}>Edit</button>
                </li>
              ))}
            </ul>
          ) : (
            <form onSubmit={handleUpdateSubcategory} style={{ marginTop: 20 }}>
              <input
                type="text"
                value={editSubcategory.name}
                onChange={e => setEditSubcategory({ ...editSubcategory, name: e.target.value })}
                style={{ padding: 8, marginRight: 10 }}
                required
              />
              <button type="submit" style={{ padding: '8px 18px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6 }}>Update</button>
              <button type="button" onClick={() => setEditSubcategory(null)} style={{ marginLeft: 10, padding: '8px 18px', background: '#e5e7eb', color: '#222', border: 'none', borderRadius: 6 }}>Cancel</button>
            </form>
          )}
        </div>
      );
    }
    if (selectedSection === 'Delete Subcategory') {
      return (
        <div>
          <h2 style={{ color: '#2563eb' }}>Delete Subcategory</h2>
          <div style={{ marginBottom: 16 }}>
            <label style={{ marginRight: 8 }}>Category:</label>
            <select value={selectedCategoryId} onChange={e => setSelectedCategoryId(Number(e.target.value))} style={{ padding: 6 }}>
              {categoryList.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <ul style={{ marginTop: 20 }}>
            {subcategoryList.filter(s => s.categoryId === selectedCategoryId).map(s => (
              <li key={s.id} style={{ marginBottom: 10 }}>
                {s.name}{' '}
                <button onClick={() => handleDeleteSubcategory(s.id)} style={{ marginLeft: 10, padding: '4px 10px', borderRadius: 4, border: '1px solid #ef4444', color: '#ef4444', background: '#fff' }}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    // Default dashboard content
    return (
      <>
        <h2 style={{ fontWeight: 700, fontSize: 28, color: '#2563eb', marginBottom: 12 }}>Welcome, Admin!</h2>
        <p style={{ fontSize: 18, color: '#374151', marginBottom: 32 }}>
          Select an option from the sidebar to manage your e-commerce platform.
        </p>
      </>
    );
  };
  return (
    <div
      className="admin-dashboard"
      style={{
        color: '#222',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
      }}
    >
      {/* Header */}
      <header
        className="admin-header"
        style={{
          background: 'rgba(255,255,255,0.95)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          height: 100,
        }}
      >
        <div className="admin-logo" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: 206,
              height: 92,
              opacity: 1,
              position: 'relative',
              top: 4,
              left: 9,
              transform: 'rotate(0deg)'
            }}
          />
          <span
            style={{
              fontWeight: 800,
              fontSize: 32,
              color: '#2563eb',
              letterSpacing: 1,
              textShadow: '0 2px 8px rgba(37,99,235,0.08)',
            }}
          >
            SuperApp Admin
          </span>
        </div>
        <div className="admin-header-right">
          {/* Placeholder for profile/user actions */}
          <span
            className="admin-avatar"
            style={{
              fontSize: 36,
              background: 'linear-gradient(135deg, #2563eb 40%, #60a5fa 100%)',
              color: '#fff',
              borderRadius: '50%',
              padding: '10px 16px',
              boxShadow: '0 2px 8px rgba(37,99,235,0.10)',
            }}
          >
            👤
          </span>
        </div>
      </header>

      <div className="admin-body" style={{ display: 'flex', minHeight: 'calc(100vh - 0px)', position: 'relative', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {/* Sidebar */}
        <aside
          className="admin-sidebar"
          style={{
            width: 260,
            background: '#fff',
            boxShadow: '0 8px 32px rgba(37,99,235,0.07)',
            borderRadius: 18,
            margin: 32,
            padding: '32px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            height: 'fit-content',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <nav>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {renderSidebarLinks()}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="admin-main-content" style={{ flex: 1, padding: '48px 40px', overflowY: 'auto' }}>
          {renderMainContent()}
        </main>
      </div>
      <style>{`
        .admin-body::-webkit-scrollbar, .admin-sidebar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

