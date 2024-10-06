import React from 'react'
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react'

interface ComplianceAlertProps {
  title: string
  description: string
  severity: 'low' | 'medium' | 'high'
  date: string
}

const ComplianceAlertCard: React.FC<ComplianceAlertProps> = ({ title, description, severity, date }) => {
  const severityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  }

  const severityIcons = {
    low: <CheckCircle className="h-5 w-5 text-green-500" />,
    medium: <AlertCircle className="h-5 w-5 text-yellow-500" />,
    high: <XCircle className="h-5 w-5 text-red-500" />
  }

  return (
    <div className={`rounded-lg p-4 mb-4 ${severityColors[severity]}`}>
      <div className="flex items-center">
        {severityIcons[severity]}
        <h3 className="ml-2 text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-2">{description}</p>
      <div className="mt-2 text-sm opacity-75">Date: {date}</div>
    </div>
  )
}

export default ComplianceAlertCard