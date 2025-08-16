import React from 'react'

const partners = [
  { id: 1, name: 'Acme Inc.', contact: 'acme@example.com' },
  { id: 2, name: 'Globex', contact: 'globex@example.com' },
  { id: 3, name: 'Initech', contact: 'initech@example.com' },
]

const Cooperation = () => {
  return (
    <div className="w-full px-8 py-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Cooperation</h2>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Contact</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-4">{p.id}</td>
                <td className="py-3 px-4">{p.name}</td>
                <td className="py-3 px-4">{p.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cooperation


