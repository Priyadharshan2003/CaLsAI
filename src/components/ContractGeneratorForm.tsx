import React, { useState } from 'react'
import { FileText, Loader } from 'lucide-react'

const ContractGeneratorForm: React.FC = () => {
  const [formData, setFormData] = useState({
    contractType: '',
    partyA: '',
    partyB: '',
    keyTerms: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
    console.log('Contract generation request:', formData)
    // Here you would typically send the formData to your backend API
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="contractType" className="block text-sm font-medium text-gray-700">Contract Type</label>
        <select
          id="contractType"
          name="contractType"
          value={formData.contractType}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        >
          <option value="">Select a contract type</option>
          <option value="nda">Non-Disclosure Agreement</option>
          <option value="employment">Employment Contract</option>
          <option value="service">Service Agreement</option>
        </select>
      </div>
      <div>
        <label htmlFor="partyA" className="block text-sm font-medium text-gray-700">Party A</label>
        <input
          type="text"
          id="partyA"
          name="partyA"
          value={formData.partyA}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="partyB" className="block text-sm font-medium text-gray-700">Party B</label>
        <input
          type="text"
          id="partyB"
          name="partyB"
          value={formData.partyB}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="keyTerms" className="block text-sm font-medium text-gray-700">Key Terms</label>
        <textarea
          id="keyTerms"
          name="keyTerms"
          value={formData.keyTerms}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder="Enter key terms and conditions..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
            Generating...
          </>
        ) : (
          <>
            <FileText className="-ml-1 mr-2 h-5 w-5" />
            Generate Contract
          </>
        )}
      </button>
    </form>
  )
}

export default ContractGeneratorForm