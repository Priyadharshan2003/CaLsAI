import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Bell, CreditCard } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to CaLsAI</h1>
          <p className="text-xl mb-8">AI-powered legal services and compliance automation</p>
          <Link to="/generate-contract" className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300">
            Get Started
          </Link>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FileText className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Generated Contracts</h3>
              <p className="text-gray-600">Create custom legal documents tailored to your needs in minutes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Bell className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compliance Monitoring</h3>
              <p className="text-gray-600">Stay up-to-date with the latest regulatory changes affecting your business.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CreditCard className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Subscriptions</h3>
              <p className="text-gray-600">Choose a plan that fits your needs and budget.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to streamline your legal processes?</h2>
          <Link to="/subscription" className="bg-blue-600 text-white py-3 px-8 rounded-full font-bold hover:bg-blue-700 transition duration-300">
            View Pricing Plans
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home