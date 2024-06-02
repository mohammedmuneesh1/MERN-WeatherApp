import React, { useContext, useEffect, useState } from 'react'
import { appData } from '../Context/ApplicationData';
import { Axios } from '../Axios/axios';
import { Pagination } from "flowbite-react";
import Swal from 'sweetalert2';


export default function WeatherHistoryPage() {

    let {historyQuery,setHistoryQuery,weatherHistory,setWeatherHistory} = useContext(appData)
    const onPageChange = (page) => {
        setHistoryQuery((prev)=>({...prev,page}))
    } 

    useEffect(()=>{
        const fetchWeatherHistory = async ()=>{
            try {
                let url = "/history"
                let  queryParams=[];
                 if (historyQuery?.page) {
                     queryParams.push(`page=${historyQuery.page}`);
                 }
             
                 if (historyQuery.location !==null) {
                     queryParams.push(`location=${encodeURIComponent(historyQuery.location)}`);
                 }
             
                 if (queryParams.length > 0) {
                     url += `?${queryParams.join('&')}`;
                 }
                 const data = await Axios.get(url)
                 setWeatherHistory(data.data.data)
                
            } catch (error) {
                return Swal.fire({
                    icon:'error',
                    text:"There's a network issue. Please try again after sometimes."
                })
                
            }
           
        }
         fetchWeatherHistory()
    },[historyQuery])

    const selectLocationFn = (e)=>{
        let place = e.target.value;
        setHistoryQuery(prev=> ({...prev,page:1}))
        if (place !== "All") {
            return setHistoryQuery(prevState => ({ ...prevState, location: place }));
        } else {
            return setHistoryQuery(prevState => ({ ...prevState, location: null }));
        }        
    }

  return (
    <div className='max-w-screen min-h-screen bg-gray-500'>
     <section className="  p-3 sm:p-5">
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
        
                    <div className="flex items-center space-x-3 w-full md:w-auto">
                        <select  onChange={selectLocationFn} className='w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
                            <option selected>All</option>
                            <option >Chennai</option>
                            <option >New York</option>
                            <option >Riyadh</option>
                            <option >Paris</option>
                        </select>
                       
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">Location</th>
                            <th scope="col" className="px-4 py-3">Date</th>
                            <th scope="col" className="px-4 py-3">Temperature</th>
                            <th scope="col" className="px-4 py-3">Feels_like</th>
                            <th scope="col" className="px-4 py-3">Climate</th>
                            <th scope="col" className="px-4 py-3">Description</th>
                            <th scope="col" className="px-4 py-3">Min Temperature</th>
                            <th scope="col" className="px-4 py-3">Max Temperature</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weatherHistory && weatherHistory.map((value)=>(
                            <>
                                           <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{value?.name}</th>
                            <td className="px-4 py-3">{value?.temperature?.temp}</td>
                            <td className="px-4 py-3">{new Date(value?.createdAt).toLocaleDateString()}</td>
                            <td className="px-4 py-3">{value?.temperature?.feels_like}°C</td>
                            <td className="px-4 py-3">{value?.weather?.[0]?.main}</td>
                            <td className="px-4 py-3">{value?.weather?.[0]?.description}</td>
                            <td className="px-4 py-3">{value?.temperature?.temp_min}°C</td>
                            <td className="px-4 py-3">{value?.temperature?.temp_max}°C</td>
                        </tr>       
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
            <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Showing
                    <span className="font-semibold text-gray-900 dark:text-white mx-1">{historyQuery.page || 1}</span>
                    of
                    <span className="font-semibold text-gray-900 dark:text-white mx-1">100</span>
                </span>
                <div className="flex overflow-x-auto sm:justify-center">
      <Pagination currentPage={historyQuery.page} totalPages={100} onPageChange={onPageChange} />
    </div>
           
              

            </nav>

        </div>
    </div>
    </section>




        </div>
  )
}
