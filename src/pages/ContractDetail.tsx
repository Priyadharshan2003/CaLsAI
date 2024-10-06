import React from 'react'
import { useParams } from 'react-router-dom'
import { FileText, Download, Printer } from 'lucide-react'

const ContractDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // Mock contract data (in a real app, you'd fetch this from an API)
  const contract = {
    id,
    title: 'Non-Disclosure Agreement',
    parties: ['Acme Corp', 'XYZ Ltd'],
    createdDate: '2024-03-15',
    status: 'Active',
    content: `This Non-Disclosure Agreement (the "Agreement") is entered into as of [DATE] by and between:

1. [PARTY A NAME], with its principal place of business at [PARTY A ADDRESS] ("Disclosing Party"), and

2. [PARTY B NAME], with its principal place of business at [PARTY B ADDRESS] ("Receiving Party").

WHEREAS, in connection with a potential business relationship (the "Purpose"), the Disclosing Party may disclose Confidential Information to the Receiving Party. The parties agree as follows:

1. Definition of Confidential Information...

2. Obligations of Receiving Party...

3. Term...

4. Return of Materials...

5. No Obligation...

6. No Warranty...

7. Miscellaneous...

IN WITNESS WHEREOF, the parties hereto have executed this Non-Disclosure Agreement as of the date first above written.

[PARTY A NAME]
By: ____________________
Name:
Title:

[PARTY B NAME]
By: ____________________
Name:
Title:`
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 flex items-center">
            <FileText className="h-8 w-8 text-blue-500 mr-3" />
            {contract.title}
          </h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-600">Contract ID</p>
              <p className="font-semibold">{contract.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Created Date</p>
              <p className="font-semibold">{contract.createdDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Parties</p>
              <p className="font-semibold">{contract.parties.join(', ')}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <p className="font-semibold text-green-600">{contract.status}</p>
            </div>
          </div>
          <div className="mb-6 flex space-x-4">
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </button>
            <button className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-300">
              <Printer className="h-5 w-5 mr-2" />
              Print
            </button>
          </div>
          <div className="border rounded p-4 bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">Contract Content</h2>
            <pre className="whitespace-pre-wrap font-mono text-sm">{contract.content}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContractDetail