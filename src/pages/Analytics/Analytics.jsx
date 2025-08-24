import React from 'react'
import Chart from '../../Components/Chart/Chart'
import xAxisData from '../../datas'

const Analytics = () => {
  return (
    <div className="w-full px-8 py-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">تحلیل‌ها</h2>
      <div className="bg-white rounded-lg shadow p-4">
        <Chart grid title="نمای کلی ترافیک" data={xAxisData} dataKey="sale" />
      </div>
    </div>
  )
}

export default Analytics


