import React from 'react'

const goods = [
  { id: 1, name: 'USB Cable', tag: 'common', stock: 120 },
  { id: 2, name: 'Charger', tag: 'common', stock: 45 },
  { id: 3, name: 'Headphone', tag: 'common', stock: 80 },
]

const CommonGoods = () => {
  return (
    <div className="w-full px-8 py-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">کالاهای عمومی</h2>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-3 px-4">شناسه</th>
              <th className="py-3 px-4">نام</th>
              <th className="py-3 px-4">برچسب</th>
              <th className="py-3 px-4">موجودی</th>
            </tr>
          </thead>
          <tbody>
            {goods.map((g) => (
              <tr key={g.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-4">{g.id}</td>
                <td className="py-3 px-4">{g.name}</td>
                <td className="py-3 px-4">{g.tag}</td>
                <td className="py-3 px-4">{g.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CommonGoods


