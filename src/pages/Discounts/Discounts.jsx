import React from 'react'

const discounts = [
  { code: 'OFF10', percent: 10, usage: 23, active: true },
  { code: 'SPRING20', percent: 20, usage: 5, active: true },
  { code: 'VIP30', percent: 30, usage: 1, active: false },
]

const Discounts = () => {
  return (
    <div className="w-full px-8 py-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Discounts</h2>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-3 px-4">Code</th>
              <th className="py-3 px-4">Percent</th>
              <th className="py-3 px-4">Usage</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {discounts.map((d) => (
              <tr key={d.code} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-4 font-mono">{d.code}</td>
                <td className="py-3 px-4">{d.percent}%</td>
                <td className="py-3 px-4">{d.usage}</td>
                <td className="py-3 px-4">
                  <span className={d.active ? 'text-green-600 font-semibold' : 'text-gray-400 font-semibold'}>
                    {d.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Discounts


