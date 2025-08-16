import React from 'react'

const issues = [
  { id: 101, title: 'Image upload not working', severity: 'High', status: 'Open' },
  { id: 102, title: 'Slow page load on /products', severity: 'Medium', status: 'Investigating' },
  { id: 103, title: 'Typos in pricing page', severity: 'Low', status: 'Resolved' },
]

const Badge = ({ children, color }) => (
  <span className={`px-2 py-0.5 rounded text-white text-xs ${color}`}>{children}</span>
)

const Breakdowns = () => {
  return (
    <div className="w-full px-8 py-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Breakdowns</h2>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Severity</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((i) => (
              <tr key={i.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-4">{i.id}</td>
                <td className="py-3 px-4">{i.title}</td>
                <td className="py-3 px-4">
                  <Badge color={i.severity === 'High' ? 'bg-red-600' : i.severity === 'Medium' ? 'bg-yellow-500' : 'bg-gray-500'}>
                    {i.severity}
                  </Badge>
                </td>
                <td className="py-3 px-4">
                  <Badge color={i.status === 'Open' ? 'bg-blue-600' : i.status === 'Investigating' ? 'bg-indigo-600' : 'bg-green-600'}>
                    {i.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Breakdowns


