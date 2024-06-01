import './App.css';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './Router/router';
function App() {
  return (
    <>
    <RouterProvider router={appRouter} />

    
    </>
  );
}

export default App;
