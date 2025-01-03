import axios from "axios"
import { useState } from "react";

const useRequestData = () => {
    // Tilstande til API-Kaldet
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null); 

    const makeRequest = async (url, method = "GET", headers = {}, body = null, params = null) => {
        setIsLoading(true); // Start loading
        setError(null);
    
        try {
            const config = {
                method,
                url,
                headers,
                params,
                data: body,
            };
    
            // Debugging - log request information
            console.log("Sending request with config: ", config);
    
            const response = await axios(config);
    
            // Opdater data-tilstanden med resultatet
            console.log("API Response: ", response.data);
            setData(response.data);
        } catch (err) {
            setError(err); // Gem fejl
            setData(null);
            console.error("Fejl i API-forespørgsel:", err);
        } finally {
            setIsLoading(false);
        }
    };
    

    //Returnér funktioner og tilstande
    return { makeRequest, isLoading, data, error };
};

export default useRequestData;