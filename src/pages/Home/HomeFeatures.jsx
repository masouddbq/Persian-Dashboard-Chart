import React from 'react'
import StraightIcon from '@mui/icons-material/Straight';

const HomeFeatures = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center m-5'>
        <div className='flex-col items-center justify-center p-8 shadow-slate-200 shadow-lg h-40 w-52 md:w-64 lg:w-80 rounded-lg border-t border-b border-slate-300'>
            <h2 className='font-bold'>Total cash</h2>
            <div className='flex items-center justify-between'>
                <span className='font-extrabold text-3xl'>$2875</span>
                <span className='text-lg'>+11.6% <StraightIcon className='text-green-500' /></span>
            </div>
            <p className='text-gray-500'>Perfect</p>
        </div>
        <div className='flex-col items-center justify-center p-8 shadow-slate-200 shadow-lg h-40 w-52 md:w-64 lg:w-80 rounded-lg border-t border-b border-slate-300'>
            <h2 className='font-bold'>Total cost</h2>
            <div className='flex items-center justify-between'>
                <span className='font-extrabold text-3xl'>$1290</span>
                <span className='text-lg'>+3.1% <StraightIcon className='text-green-500' /></span>
            </div>
            <p className='text-gray-500'>Good</p>
        </div>
        <div className='flex-col items-center justify-center p-8 shadow-slate-200 shadow-lg h-40 w-52 md:w-64 lg:w-80 rounded-lg border-t border-b border-slate-300'>
            <h2 className='font-bold'>Grow</h2>
            <div className='flex items-center justify-center'>
                <span className='text-lg'>+1.9% <StraightIcon className='text-green-500' /></span>
            </div>
            <p className='text-gray-500'>Normal</p>
        </div>
    </div>
  )
}

export default HomeFeatures