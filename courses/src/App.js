
import Buttons from "./Buttons";
import Cards from "./Cards";
import { useEffect } from "react";
import { useState } from "react";
import data, { apiUrl, filterData } from "./data"
import Spinner from "./Spinner";
function App() {

  const [dataSet,setData] = useState(null)
  const[loading,setLoading] = useState(true);
  const[field,setField] = useState('All')

  function filter(field1){
      setField(field1);
      //console.log(field1)
  }


  async function fetchData (){
    setLoading(true)
    const set = await fetch(apiUrl);
    const set1 = await set.json();
    setData(set1.data);
    setLoading(false) 
  }

  useEffect(()=>{fetchData()},[])
  
  return (
   <div >
    <div className=" text-2xl text-white font-bold bg-slate-800 flex py-3 justify-center"> Top Courses</div>
    <div className="flex justify-center p-6 gap-4">
        <Buttons title={filterData[0].title} filter={filter}></Buttons>
        <Buttons title={filterData[1].title} filter={filter}></Buttons>
        <Buttons title={filterData[2].title} filter={filter}></Buttons>
        <Buttons title={filterData[3].title} filter={filter}></Buttons>
        <Buttons title={filterData[4].title} filter={filter}></Buttons>
    </div >
      
    <div className="px-20 flex items-center justify-center">
    {
        loading? (<Spinner/>):(<Cards course={dataSet} field = {field}/>) 
       }
    </div>
   </div>
  );
}

export default App;
