import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Home} from './Home.jsx'
//import search result
//import author component
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/search/:keyword",
            element: <SearchResult/>,
        },
        {
            path: "/author/:name",
            element: <AuthorDetail />,
        }
    ])
;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
