import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
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
       
        {/* Redirect root path to login */}
        
        
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  </StrictMode>
)
