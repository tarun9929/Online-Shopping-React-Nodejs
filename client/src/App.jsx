import React from 'react'
import Login from './Components/Login'
import Register from './Components/Register';
import { useEffect } from 'react';
import axios from './Utils/Axios';
import useApiData from './Hooks/useApiData';
import Spinner from './Components/Spinner';



function App() {


  const { data, loading } = useApiData(async () => {
    const response = await axios.get("/api/v1/test", { withCredentials: true })

    return response.data;
  })

  console.log(data);

  return (
    <>
          {

            loading ? <Spinner styles={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} /> : <Register />
          }
    </>

  )
}

export default App;

