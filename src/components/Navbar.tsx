import React from 'react'
import { Link } from 'react-router-dom'
import { Scale, FileText, Bell, CreditCard, History } from 'lucide-react'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Scale className="mr-2" />
          CaLsAI
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/generate-contract" className="flex items-center">
              <FileText className="mr-1" size={18} />
              Contracts
            </Link>
          </li>
          <li>
            <Link to="/compliance-monitoring" className="flex items-center">
              <Bell className="mr-1" size={18} />
              Compliance
            </Link>
          </li>
          <li>
            <Link to="/subscription" className="flex items-center">
              <CreditCard className="mr-1" size={18} />
              Subscribe
            </Link>
          </li>
          <li>
            <Link to="/order-history" className="flex items-center">
              <History className="mr-1" size={18} />
              History
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar