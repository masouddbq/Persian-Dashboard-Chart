import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => navigate('/'), 800)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <div className="w-full px-8 py-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-2">Logging out...</h2>
      <p className="text-gray-600">This is a mock page. You will be redirected to Home.</p>
    </div>
  )
}

export default Logout


