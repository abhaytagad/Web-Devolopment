import axios from "axios";
import { useEffect, useState } from "react";

const url = `https://api.giphy.com/v1/gifs/random?api_key=jIOcFCWVCYNYDtL07ssTygyn6wt8xOLo&tag=&rating=g`
function useApi(tag){
    const[gif,setGif] = useState('');
    const[loading,setLoading] = useState(true);
    
    async function fetchData(tag){
        setLoading(true)
        let {data}= await axios.get(tag? `https://api.giphy.com/v1/gifs/random?api_key=jIOcFCWVCYNYDtL07ssTygyn6wt8xOLo&tag=${tag}&rating=g`:url );
        setGif(data.data.images.original.url )
        setLoading(false);
    }

    useEffect(()=>{
        fetchData('')
    },[])
    return{ gif,loading,fetchData};
}

export default useApi;