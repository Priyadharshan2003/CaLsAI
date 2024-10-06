import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContractGenerator from './pages/ContractGenerator'
import ContractDetail from './pages/ContractDetail'
import ComplianceMonitoring from './pages/ComplianceMonitoring'
import Subscription from './pages/Subscription'
import OrderHistory from './pages/OrderHistory'

function App() {
  return (
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
  )
}

export default App