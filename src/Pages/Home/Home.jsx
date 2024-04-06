import React from 'react'
import Header from '../Shared/Header/Header'
import Navber from '../Shared/Navber/Navber'
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav'
import RightSideNav from '../Shared/RightSideNav/RightSideNav'
import BreakingNews from './BreakingNews'
import {useLoaderData} from "react-router-dom";
import NewsCard from './NewsCard'

const Home = () => {

  const news = useLoaderData()
  console.log(news);

  return (
    <div className='font-poppins '>
      <Header/>
      <BreakingNews/>
      <Navber/>
        <h1>This is Home</h1>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-6'>
          <div className=''>
            <LeftSideNav></LeftSideNav>
          </div>
          <div className='col-span-2'>
            {news.map(Anews => <NewsCard key={Anews._id} news={Anews}></NewsCard>)}
          </div>
          <div className=''>
            <RightSideNav></RightSideNav>
          </div>
        </div>
    </div>
  )
}

export default Home