import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {Home} from './Home.jsx'
//import search result
//import author component
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {SizeContextProvider} from "./assets/SizeContextProvider.jsx";
import {SizeSetter} from "./SizeSetter.jsx";

const router = createBrowserRouter([
        {
            path: "/",
            element: <p>there we gonna have the rest</p>,
        },
        // {
        //     path: "/search/:keyword",
        //     element: <SearchResult/>,
        // },
        // {
        //     path: "/author/:name",
        //     element: <AuthorDetail />,
        // }
    ])
;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SizeContextProvider>
            <SizeSetter/>
            <RouterProvider router={router}/>
        </SizeContextProvider>
    </React.StrictMode>,
)
