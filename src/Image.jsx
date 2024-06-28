import {ACCESSKEY} from "./keys.js";
import {useEffect, useState} from "react";
import {useSizeContext} from "./assets/SizeContextProvider.jsx";

export const Image = () => {
    const keyword = 'blue' //to be deleted
    const {size} = useSizeContext()
    const [data, setData] = useState({}) //to ve deleted
    const [url, setUrl] = useState('')

    // to be moved up
    const getData = async () => {
        const res = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${ACCESSKEY}`)
        const imgObjects = await res.json()
        setData(imgObjects.results[0])
    }

    const formUrl = () => {
        const newUrl= data.urls?.full.concat("", size.w ? "&w=" + size.w : "", "", size.h ? "&h=" + size.h : "")
        setUrl(newUrl)
    }

    //for set of photos, in th end data will be provided in props
    useEffect(() => {
        getData()
    }, []);

    //to leave
    useEffect(()=>{
        formUrl()
    }, [data, size])


    return <img src={url? url: null} alt='picture'/>
}

