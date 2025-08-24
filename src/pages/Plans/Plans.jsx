import React from 'react'

const plans = [
  { name: 'Basic', price: '$9/mo', features: ['1 project', 'Email support'] },
  { name: 'Pro', price: '$29/mo', features: ['10 projects', 'Priority support', 'Analytics'] },
  { name: 'Enterprise', price: 'Contact us', features: ['Unlimited', 'Dedicated support', 'Custom SLAs'] },
]

const Plans = () => {
  return (
    <div className="w-full px-8 py-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">طرح‌ها</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.name} className="bg-white rounded-xl shadow p-6 border">
            <div className="text-xl font-bold mb-2">{p.name}</div>
            <div className="text-3xl font-extrabold text-blue-800 mb-4">{p.price}</div>
            <ul className="space-y-1 text-gray-600">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded transition">Choose</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans


