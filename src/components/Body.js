import React, { useEffect } from 'react'
import {createBrowserRouter} from "react-router-dom";
import Login from './Login'
import Browse from './Browse'
import {RouterProvider} from "react-router-dom";
import MoviePage from './MoviePage';
import ForgotPage from './ForgotPage';


const Body = () => {
    const appRouter= createBrowserRouter([

        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/browse",
            element:<Browse/>,
        },
        {
            path:"/browse/moviePage/:id",
            element:<MoviePage/>
        },
        {
            path:"/forgotPage",
            element:<ForgotPage/>
        },
    ]);


  
  return (
    <>
<div>
    <RouterProvider router={appRouter}/>
</div>
    </>

)
}

export default Body;