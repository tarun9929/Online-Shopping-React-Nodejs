import axios from "../Utils/Axios";
import { useState , useEffect } from "react";

export default function useApiData(callback) {
    const [data, setData] = useState();
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await callback();
    
                setData(response);
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        })()
    } , [])

    return {data , loading};
}