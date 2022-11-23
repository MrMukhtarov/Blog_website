import React from 'react'
import Advertisement from '../../components/Advertisement/Advertisement'
import Categories from '../../components/Categories/Categories'
import Grid from '../../components/Grid/Grid'
import Marqueee from '../../components/Marqueee/Marqueee'
import Spotlight from '../../components/Spotlight/Spotlight'
import Subscribe from '../../components/Subscribe/Subscribe'
import Trending from '../../components/Trending/Trending'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Trending/>
        <Subscribe/>
        <Grid/>
        <Spotlight/>
        <Advertisement/>
        <Categories/>
        <Marqueee/>
    </div>
  )
}

export default Home