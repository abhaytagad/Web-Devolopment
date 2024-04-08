import axios from "axios";
import {  createContext, useState } from "react";
const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs"

export const APIcontext = createContext();

function ContextProvider({children}){

    const[loading,setLoading] = useState(true);
    const[pages, setPages] = useState('')
    const[pageNumber,setPageNumber] = useState(1);
    const[data,setData] = useState([]);
    const[preHide,setPreHide] = useState(true);
    const[nextHide,setNextHide] = useState(true);
    const[category,setCategory] = useState('')
    const[tag,setTag] = useState('');

    
    async function fetchData(number,category1,tag1){
       let url;
        console.log(tag1)
        if (category1 != '' && category1 != category){
            setCategory(category1);
            url = `${baseUrl}?page=${number}&&category=${category1}`
        }
        else if(tag1 != ''  ){
            setTag(tag1)
            url = `${baseUrl}?page=${number}&&tag=${tag1}`
            
        }
        else{
            url = `${baseUrl}?page=${number}&&category=${category}&&tag=${tag}`
        }
   
        try{
            setLoading(true)
            console.log(url)
            const result = await axios(url)
            setData(result.data.posts)
            setPages(result.data.totalPages)
            setPageNumber(result.data.page)
            setLoading(false)
            if (number == 1){
                if (number != pages){
                    setPreHide(false)
                    setNextHide(true)
                }
                
                
            }
            else if(number == pages && number != 1){
                setPreHide(true)
                setNextHide(false)
            }
            else{
                setPreHide(true)
                setNextHide(true)
            }
        }
        catch(e){
            console.log("error occured")
        }
    }

    function clickHandler(number,category1,tag1){
        fetchData(number,category1,tag1)
    }

    const value = {
        loading,
        pages,
        pageNumber,
        data,
        setPageNumber,
        setLoading,
        fetchData,
        preHide,
        nextHide,
        clickHandler,
        setCategory,
        category,
        tag,
        setTag
        
    }

    
    return <APIcontext.Provider value={value}>
        {children}
    </APIcontext.Provider>
    

}

export default ContextProvider;