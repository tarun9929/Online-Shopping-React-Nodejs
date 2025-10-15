import axios from "../Utils/Axios";
import { useState , useEffect } from "react";

export default function useApiData(callback) {
    const [data, setData] = useState();

    useEffect(() => {
        (async () => {
            try {
                const response = await callback();
    
                setData(response);
            } catch (error) {
                console.log(error);
            }
        })()
    } , [])

    return data;
}