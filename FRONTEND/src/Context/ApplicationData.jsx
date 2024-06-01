import { createContext, useState } from "react";

export const appData = createContext();


export default function ApplicationData({children}) {
    const [weatherData,setWeatherData] = useState({});
    const [showResult,setShowResult] = useState(false);
    const [weatherHistory,setWeatherHistory]= useState([])
    const [historyQuery,setHistoryQuery] = useState({
      page:null,
      location:null,
    })
  return (
    <appData.Provider value={{weatherData,setWeatherData,showResult,setShowResult,historyQuery,setHistoryQuery,weatherHistory,setWeatherHistory}}>
        {children}
    </appData.Provider>
  )
}
