import '@fontsource/poppins/400.css'; // Regular
import '@fontsource/poppins/600.css'; // Semi-bold
import '@fontsource/poppins/700.css'; // Bold
import '@fontsource/poppins/800.css'; // extraBold
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import VendorOrders from './VendorOrders.jsx'
import VendorApprovals from './VendorApprovals.jsx'
import SignUp from './SignUp.jsx'
import Login from './Login.jsx'
import Profile from './Profile.jsx'
import Orders from './Orders.jsx'
import Wallet from './wallet.jsx'
import Support from './Support.jsx'
import Approval from './Approval.jsx'
import Invoice from './Invoice.jsx'
import Miceform from './Miceform.jsx'
import Products from './Products.jsx'
import AdminDashboard from './admin.jsx'
import Cart from './Cart.jsx'
import Sidebar from './Sidebar.jsx'
import Vendorlogin from './vendorlogin.jsx'
import VendorDashboard from './vendordashboard.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/support" element={<Support />} />
        <Route path="/approval" element={<Approval />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/miceform" element={<Miceform />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/vendorlogin" element={<Vendorlogin />} />
        <Route path="/vendordashboard" element={<VendorDashboard />} />
        <Route path="/vendororders" element={<VendorOrders />} />
        <Route path="/vendorapprovals" element={<VendorApprovals />} />
       
         {/* Redirect root path to login */}
        
        
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  </StrictMode>
)
