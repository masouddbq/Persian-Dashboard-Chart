import React, { useState } from 'react'

const initialComments = [
  { id: 1, user: 'Masoud', text: 'Everything looks great!', date: '2024-06-01' },
  { id: 2, user: 'Ali', text: 'Please add dark mode.', date: '2024-06-02' },
]

const Comments = () => {
  const [comments, setComments] = useState(initialComments)
  const [text, setText] = useState('')

  const addComment = () => {
    if (!text.trim()) return
    setComments((prev) => [
      ...prev,
      { id: prev.length + 1, user: 'Guest', text, date: new Date().toISOString().slice(0, 10) },
    ])
    setText('')
  }

  return (
    <div className="w-full px-8 py-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Comments</h2>
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex gap-2">
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a comment..." className="border rounded px-3 py-2 w-full" />
          <button onClick={addComment} className="bg-blue-800 hover:bg-blue-900 text-white px-4 rounded">Add</button>
        </div>
      </div>
      <div className="space-y-3">
        {comments.map((c) => (
          <div key={c.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between">
              <div className="font-semibold">{c.user}</div>
              <div className="text-gray-500 text-sm">{c.date}</div>
            </div>
            <p className="mt-2 text-gray-700">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comments


