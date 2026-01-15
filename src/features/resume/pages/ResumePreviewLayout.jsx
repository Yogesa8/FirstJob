import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../../../components/common/Header'

const Layout = () => {
  return (
    <div>
      <div className='min-h-screen bg-gray-50'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout