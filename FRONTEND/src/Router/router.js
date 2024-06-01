import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import WeatherHistoryPage from "../Pages/WeatherHistoryPage";


export const appRouter = createBrowserRouter([
    {path:"/", element:<LandingPage/>},
    {path:"/weather/history",element:<WeatherHistoryPage/>}
    
])