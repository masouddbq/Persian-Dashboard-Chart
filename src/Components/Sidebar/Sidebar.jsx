import React from 'react'
import SideOptions from './SideOptions'

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 bg-slate-600 w-52 h-full rounded-e-md'>
        <SideOptions />
    </div>
  )
}

export default Sidebar