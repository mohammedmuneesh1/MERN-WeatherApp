import React, { useContext } from 'react'
import { appData } from '../Context/ApplicationData';
import { Axios } from '../Axios/axios';
import Swal from 'sweetalert2';
export default function WeatherSearch() {

    const {setWeatherData,setShowResult} = useContext(appData);
    const fetchWeather =async (e)=>{
        try{
            e.preventDefault();
            const cityName = e.target.q.value;
            console.log(cityName)
            const data = await Axios.post("/details",{cityName})
            console.log(data)
            if(data.status === 200){
                setShowResult(true)
               return  setWeatherData(data.data.data)
            }
        

        }
        catch(error){
            setShowResult(false)
            if(error.response.status === 404){
                return Swal.fire({
                    text: error.response.data.message,
                    icon: "error"
                })

            }
            return Swal.fire({
                text:"network issue. Please try after sometime.",
                icon:"error",
            })
        }
    
        



    }

  return (
    <div className=' mx-auto flex justify-center'>
            <form onSubmit={fetchWeather} className="max-w-[480px] w-full px-4">
                <div className="relative">
                    <input 
                        type="text" 
                        name="q" 
                        autoComplete='off'
                        className="w-full  h-12 shadow p-4 rounded-full dark:text-gray-800 " 
                        placeholder="Explore Weather Based on City" 
                    />
                    <button type="submit" className="absolute top-3.5 right-3">
                        <svg 
                            className="text-teal-400 h-5 w-5 fill-current "
                            xmlns="http://www.w3.org/2000/svg" 
                            xmlnsXlink="http://www.w3.org/1999/xlink" 
                            version="1.1"
                            x="0px" 
                            y="0px" 
                            viewBox="0 0 56.966 56.966"
                            style={{ enableBackground: 'new 0 0 56.966 56.966' }} 
                            xmlSpace="preserve"
                        >
                            <path
                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                            />
                        </svg>
                    </button>
                </div>
            </form>

    </div>
  )
}
