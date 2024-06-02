import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { appData } from '../Context/ApplicationData'
export default function WeatherResult() {

    let {weatherData} = useContext(appData);
    console.log(weatherData)


  return (
    <div className='max-w-screen flex justify-center'>
    <div className='max-w-xl w-[440px] flex flex-col text-orange-300 items-center min-h-32 bg-orange-100  mt-4  rounded-2xl py-2 '>
      <h1 className='my-2 text-2xl font-serif font-bold  '>Today</h1>
      <div className='max-w-full flex items-center  '>
        {
          weatherData?.imageUrl && (
            <img src={weatherData?.imageUrl} className='w-[100px] h-auto' alt='weather-icon' />
          )
        }
  
            <h1 className=' text-5xl font-mono font-bold'>{weatherData?.temperature?.temp}</h1>
      </div>
      <h2 className='text-2xl font-serif  '>{weatherData.weather?.[0].main}</h2>
        
        <p className='text-xs  tracking-wider'>{weatherData?.weather?.[0]?.description}</p>
        <h1 className='text-lg tracking-wide ' >{weatherData?.name}</h1>
        <h2 className='font-semibold'>{new Date(weatherData?.createdAt).toLocaleDateString()}</h2>
        <h2><span>Feels like {weatherData?.temperature?.feels_like} </span>&nbsp;|&nbsp;<span>Sunset {weatherData?.sunTimeDetails?.sunset} </span></h2>    
        <Link to="/weather/history" className='text-blue-400 text-xs tracking-wider '>Weather History</Link>
    </div>
    </div>

  )
}
