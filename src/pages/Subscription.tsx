import React from 'react'
import { Check } from 'lucide-react'

const PricingPlan: React.FC<{ title: string; price: string; features: string[]; recommended?: boolean }> = ({ title, price, features, recommended }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${recommended ? 'border-4 border-blue-500' : ''}`}>
    {recommended && <div className="bg-blue-500 text-white text-center py-2 font-semibold">Recommended</div>}
    <div className="p-6">
      <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>
      <div className="text-center mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="p-6 bg-gray-50">
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
        Choose Plan
      </button>
    </div>
  </div>
)

const Subscription: React.FC = () => {
  const plans = [
    {
      title: 'Basic',
      price: '$49',
      features: [
        '5 AI-generated contracts per month',
        'Basic compliance alerts',
        'Email support'
      ]
    },
    {
      title: 'Pro',
      price: '$99',
      features: [
        '20 AI-generated contracts per month',
        'Advanced compliance monitoring',
        'Priority email & chat support',
        'Custom contract templates'
      ],
      recommended: true
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited AI-generated contracts',
        'Real-time compliance monitoring',
        '24/7 phone & email support',
        'Dedicated account manager',
        'API access'
      ]
    }
  ]

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Subscription