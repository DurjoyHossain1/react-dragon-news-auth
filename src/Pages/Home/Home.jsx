import React from 'react'
import Header from '../Shared/Header/Header'
import Navber from '../Shared/Navber/Navber'
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav'
import RightSideNav from '../Shared/RightSideNav/RightSideNav'
import BreakingNews from './BreakingNews'

const Home = () => {
  return (
    <div className='font-poppins '>
      <Header/>
      <BreakingNews/>
      <Navber/>
        <h1>This is Home</h1>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-6'>
          <div className='border'>
            <LeftSideNav></LeftSideNav>
          </div>
          <div className='col-span-2 border'>

          </div>
          <div className='border'>
            <RightSideNav></RightSideNav>
          </div>
        </div>
    </div>
  )
}

export default Home