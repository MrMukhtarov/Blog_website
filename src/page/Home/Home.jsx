import React from 'react'
import Subscribe from '../../components/Subscribe/Subscribe'
import Trending from '../../components/Trending/Trending'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Trending/>
        <Subscribe/>
    </div>
  )
}

export default Home