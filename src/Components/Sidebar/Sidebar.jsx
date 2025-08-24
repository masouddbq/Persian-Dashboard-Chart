import React from 'react'
import SideOptions from './SideOptions'

const Sidebar = () => {
  return (
    <div className='fixed top-0 right-0 bg-slate-600 w-52 h-full rounded-s-md'>
        <SideOptions />
    </div>
  )
}

export default Sidebar