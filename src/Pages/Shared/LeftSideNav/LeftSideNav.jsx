import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
  const [catagories, setcatagories] = useState([]);

  useEffect(() => {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setcatagories(data))

  },[]);
  return (
    <div>
      <button className='w-full text-center btn'>National News</button>
      {
        catagories.map(catagory => <Link to={`/catgory/${catagory.id}`} key={catagory.id} className='block  my-6 ml-10'>{catagory.name}</Link>)
      }
    </div>
  )
}

export default LeftSideNav