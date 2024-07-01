import {ACCESSKEY} from "./keys.js";
import {useEffect, useState} from "react";
import {useSizeContext} from "./assets/SizeContextProvider.jsx";
import {Link} from "react-router-dom";

export const Image2 = ({data}) => {
    const {size} = useSizeContext()
    const [url, setUrl] = useState('')


    const formUrl = () => {
        const newUrl = data.urls?.full.concat("", size.w ? "&w=" + size.w : "", "", size.h ? "&h=" + size.h : "")
        setUrl(newUrl)
    }

    //to leave
    useEffect(() => {
        formUrl()
    }, [data, size])


    return (
        <div>
            <img src={url ? url : null} alt='picture'/>
            <Link to={`author/${data.user.id} }`}><p>{data ? data.user.name : ""}</p></Link>
        </div>
    )
}

