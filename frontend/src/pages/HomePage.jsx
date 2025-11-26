import React from 'react'
import Home from './Home'
import Compare from './compare/Compare'
import Explore from './Explore'
import Analytics from './Analytics'
import AQIInfo from './aqiInfo/AQIInfo'

export default function HomePage() {
  return (
    <>
        <Home/>
        <Compare/>
        <Explore/>
        <Analytics/>
        <AQIInfo/>

    </>
  )
}
