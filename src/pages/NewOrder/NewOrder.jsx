import React, { useState } from 'react'

const NewOrder = () => {
  const [form, setForm] = useState({ customer: '', product: '', quantity: 1 })

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const submit = (e) => {
    e.preventDefault()
    alert(`سفارش ایجاد شد (نمونه): ${form.customer} -> ${form.product} ×${form.quantity}`)
  }

  return (
    <div className="w-full px-8 py-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">سفارش جدید</h2>
      <form onSubmit={submit} className="bg-white rounded-lg shadow p-6 max-w-xl space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">مشتری</label>
          <input value={form.customer} onChange={(e) => update('customer', e.target.value)} className="border rounded px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">محصول</label>
          <input value={form.product} onChange={(e) => update('product', e.target.value)} className="border rounded px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">تعداد</label>
          <input type="number" min="1" value={form.quantity} onChange={(e) => update('quantity', Number(e.target.value))} className="border rounded px-3 py-2 w-full" />
        </div>
        <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded transition">ایجاد</button>
      </form>
    </div>
  )
}

export default NewOrder


