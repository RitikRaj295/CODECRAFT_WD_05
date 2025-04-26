import React from "react";
import style from "../css/Result.module.css";
import Cards from "./Cards";

const Result = ({ weatherData,historyData,historyHandler}) => {
  
  const historyItems=historyData.map((items,index)=>{
    return (<li onClick={()=>historyHandler(items)} key={index}>{items}</li>)
  })

  return (
    <div className={style.container}>


      {
        historyData.length!=0 ? <>
        <div className={style.history}>
        <h4>History</h4>
       <ul className={style.historyList}>
        {historyItems}
       </ul>
      </div>


        </>: null
      }
      



      {weatherData.name != undefined ? (
        <div className={style.weatherData}>
          <div className={style.city}>{weatherData.name}</div>
          <div className={style.details}>
            <div className={style.card}>
              <Cards heading="temp" data={weatherData.main.temp} />{" "}
            </div>
            <div className={style.card}>
             
              <Cards heading="temp_min" data={weatherData.main.temp_min} />
            </div>
            <div className={style.card}>
              <Cards heading="temp_max" data={weatherData.main.temp_max} />
            </div>
            <div className={style.card}>
              <Cards
                heading="weather"
                data={weatherData.weather[0].description}
              />
            </div>
           <div className={style.card}>
           <Cards heading="longitude" data={weatherData.coord.lon} />
           </div>
           <div className={style.card}>
           <Cards heading="latitude" data={weatherData.coord.lat} />
           </div>
            <div className={style.card}>
              <Cards heading="wind speed" data={weatherData.wind.speed} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <h3 className={style.message}>Please enter city name</h3>
        </>
      )}
    </div>
  );
};

export default Result;
