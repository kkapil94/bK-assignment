import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Analytics from './Analytics'

export default function Dashboard() {
  return (
    <>
        <Navbar/>
        <div className='grid grid-cols-5'>
          <div className=' col-start-1 col-end-2'>
            <Sidebar/>
          </div>
          <div className='col-start-2 col-end-6'>
            <Analytics/>
          </div>

        </div>
    </>
  )
}
