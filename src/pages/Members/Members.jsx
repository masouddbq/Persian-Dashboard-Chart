import React from 'react'

const mockMembers = [
  { id: 1, name: 'Sara Ahmadi', role: 'Admin', avatar: '/user.jpg' },
  { id: 2, name: 'Ali Rezaei', role: 'Moderator', avatar: '/user.jpg' },
  { id: 3, name: 'Neda Karimi', role: 'Member', avatar: '/user.jpg' },
  { id: 4, name: 'Hossein Z.', role: 'Member', avatar: '/user.jpg' },
]

const Members = () => {
  return (
    <div className="w-full px-8 py-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">اعضا</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mockMembers.map((m) => (
          <div key={m.id} className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
            <img src={m.avatar} alt={m.name} className="w-12 h-12 rounded-full object-cover border" />
            <div>
              <div className="font-semibold">{m.name}</div>
              <div className="text-gray-500 text-sm">{m.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Members


