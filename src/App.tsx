import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import ContractGenerator from './pages/ContractGenerator.tsx'
import ContractDetail from './pages/ContractDetail.tsx'
import ComplianceMonitoring from './pages/ComplianceMonitoring.tsx'
import Subscription from './pages/Subscription.tsx'
import OrderHistory from './pages/OrderHistory.tsx'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate-contract" element={<ContractGenerator />} />
            <Route path="/contract/:id" element={<ContractDetail />} />
            <Route path="/compliance-monitoring" element={<ComplianceMonitoring />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/order-history" element={<OrderHistory />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App