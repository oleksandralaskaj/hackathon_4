import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {Home} from './Home.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {SizeContextProvider} from "./assets/SizeContextProvider.jsx";
import {SizeSetter} from "./SizeSetter.jsx";
import {SearchResult} from "./SearchResult.jsx";
import {Home} from "./Home.jsx";
import {AuthorDetail} from "./AuthorDetail.jsx";

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
            path: "/author/:id",
            element: <AuthorDetail />,
        }
    ])
;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SizeContextProvider>
            <RouterProvider router={router}/>
        </SizeContextProvider>
    </React.StrictMode>,
)
