import React, { useEffect, useState } from "react";

const Tempapp=()=>{
    const[data,setData]=useState();
    const[search,setSearch]=useState("Agra");

    const getWeatherData= async()=>{
      const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7e231cb76dd69bb9d358ed89387a6bf4`);
      const actualData=await res.json();
      console.log(actualData);
      setData(actualData.main)}

    useEffect(()=>{
       
   
    getWeatherData();
    },[search])
    return(
        <>
        <div className="box">
           <div className="inputData">
           <input type="search" className="inputField" onChange={(event)=>{
     setSearch(event.target.value)
           }}/>
           </div>
           {
             !data?(
               <p>No Data Found</p>
             ):(
               <>
                   <div className="info">
         <h2 className="location">
         <i className="fas fa-street-view"></i>{search}
         </h2>
         <h1 className="temp">{data.temp}Kelvin </h1>
         <h3 className="tempmin_max">Min:{data.temp_min}Kelvin | Max:{data.temp_min}Kelvin  </h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three">
        </div>
               </>
             )
           }
     
    
        </div>
        </>
    )
}
export default Tempapp;