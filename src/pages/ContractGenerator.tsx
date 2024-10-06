import React from 'react'
import ContractGeneratorForm from '../components/ContractGeneratorForm'

const ContractGenerator: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Generate AI-Powered Contract</h1>
      <ContractGeneratorForm />
    </div>
  )
}

export default ContractGenerator