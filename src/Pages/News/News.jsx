import React from 'react'
import RightSideNav from '../Shared/RightSideNav/RightSideNav'
import Header from '../Shared/Header/Header'
import Navber from '../Shared/Navber/Navber'
import { useSearchParams } from 'react-router-dom'

const News = ({news}) => {
    const { id } = useSearchParams();
    console.log(id);
  return (
    <div>
        <Header></Header>
        <Navber></Navber>
        <div className="grid md:grid-cols-4">
            <div className='col-span-3'>
              This Is News
              {id}
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    </div>
  )
}

export default News