import React, { useState } from 'react'
import Search from './components/Search'
import Result from './components/Result'
import "./App.css"
import axios from 'axios';

const App = () => {
  const [search,setSearch]=useState("");
  const [weatherData,setWeatherData]=useState([]);
  const [history,setHistory]=useState([]);

  const searchHandler=(value)=>{
     setSearch(value);
  }

  const searchWeatherHandler=async()=>{
   
  if(search!=""){
    try {
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ab552a523de244e321c74371578156bc`)
      setWeatherData(response.data);
      if(history.indexOf(search)===-1){
        setHistory(
          [
            ...history,
            search
          ]
        )
      }
      console.log(response);
   } catch (error) {
     console.error(error);
     console.log('Failed to fetch data');
   }
 }
  }

  const historySearchHander= async(data)=>{
        setSearch(data);
        if(data!=""){
          try {
            const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=ab552a523de244e321c74371578156bc`)
            setWeatherData(response.data);
            if(history.indexOf(data)===-1){
              setHistory(
                [
                  ...history,
                  data
                ]
              )
            }
            console.log(response);
         } catch (error) {
           console.error(error);
           console.log('Failed to fetch data');
         }
       }
  }

  
  return (
    <div className='container'>
      <h1>Weather Teller</h1>
      <Search  search={search} eventHandler={searchHandler} searchWeatherHandler={searchWeatherHandler}/>
      <Result weatherData={weatherData} historyData={history} historyHandler={historySearchHander}/>
      
    </div>
  )
}

export default App
