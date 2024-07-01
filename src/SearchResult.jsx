import {useSizeContext} from "./assets/SizeContextProvider.jsx";
import {useEffect, useState} from "react";
import {Image} from "./Image.jsx";
import {Image2} from "./Image2.jsx";
import {useParams} from "react-router-dom";
import {SizeSetter} from "./SizeSetter.jsx";

export const SearchResult =()=> {
    const {size} = useSizeContext()
    const [data, setData] = useState([])
    const params = useParams()

    // to be moved up
    const getData = async () => {
        console.log(params.keyword)
        const res = await fetch(`https://api.unsplash.com/search/photos?query=${params.keyword}&client_id=${import.meta.env.VITE_ACCESS_KEY}`)
        const imgObjects = await res.json()
        setData(imgObjects.results)
    }

    useEffect(() => {
        getData()
        console.log(data)
    }, []);

    return (
        <>
            <SizeSetter/>
            <h1>{"Results by the key " + params.keyword}</h1>
            {data?.map((imageData)=> <Image2 key={imageData.id} data={imageData}/>)}
        </>
    )
}