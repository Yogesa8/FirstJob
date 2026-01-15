import React from 'react'
import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Testimonial from '../components/home/Testimonial'
import Deliver from '../components/home/Deliver'
import TopBtn from '../components/ui/TopBtn'
import { Outlet } from 'react-router-dom'

const Resume = () => {
     return (
          <div className='bg-gray-50'>
               <Banner />
               <Hero />
               <Features />
               <Testimonial />
               <Deliver />
               <TopBtn />
               <Outlet />
          </div>

     )
}

export default Resume