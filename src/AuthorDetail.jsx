import {useParams} from "react-router-dom";

export const AuthorDetail= ()=> {
    const params = useParams()
    return (<p>{params.id}</p>)
}