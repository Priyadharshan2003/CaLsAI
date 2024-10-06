import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CaLsAI</h3>
            <p className="text-sm">AI-powered legal services and compliance automation for modern businesses.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/generate-contract" className="hover:text-blue-300">Generate Contract</a></li>
              <li><a href="/compliance-monitoring" className="hover:text-blue-300">Compliance Monitoring</a></li>
              <li><a href="/subscription" className="hover:text-blue-300">Subscription Plans</a></li>
              <li><a href="/order-history" className="hover:text-blue-300">Order History</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@calsai.com" className="hover:text-blue-300">info@calsai.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-blue-300">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>123 Legal Street, Tech City, 12345</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p>&copy; 2024 CaLsAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer