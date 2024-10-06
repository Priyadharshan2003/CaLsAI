import React from 'react'
import ComplianceAlertCard from '../components/ComplianceAlertCard'

const ComplianceMonitoring: React.FC = () => {
  const alerts = [
    {
      title: 'GDPR Update',
      description: 'New guidelines for data processing agreements have been released.',
      severity: 'high',
      date: '2024-03-15'
    },
    {
      title: 'California Privacy Rights Act',
      description: 'Reminder: CPRA enforcement begins July 1, 2024.',
      severity: 'medium',
      date: '2024-03-10'
    },
    {
      title: 'ISO 27001 Certification',
      description: 'Your annual audit is due in 60 days.',
      severity: 'low',
      date: '2024-03-05'
    }
  ] as const

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Compliance Monitoring Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alerts.map((alert, index) => (
          <ComplianceAlertCard key={index} {...alert} />
        ))}
      </div>
    </div>
  )
}

export default ComplianceMonitoring