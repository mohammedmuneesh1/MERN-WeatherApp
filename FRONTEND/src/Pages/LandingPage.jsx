import React, { useContext, useState } from 'react'
import WeatherSearch from '../Components/WeatherSearch'
import WeatherResult from '../Components/WeatherResult'
import bg from "../Assets/bg.jpg"
import { appData } from '../Context/ApplicationData'
export default function LandingPage() {
    console.log(process.env.REACT_APP_BASE_URL) 
    const {showResult} = useContext(appData)

  return (
    <div className='max-w-screen min-h-screen pt-12 bg-app-bg bg-cover bg-no-repeat'>
    <WeatherSearch/>
    {
    showResult && 
    <WeatherResult/>

    }
    </div>
  )
}

