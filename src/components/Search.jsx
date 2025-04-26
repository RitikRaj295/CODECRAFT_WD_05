import React from 'react'
import style from '../css/Search.module.css'
import { useRef } from 'react'

const Search = (props) => {
  const searchInput = useRef();
  return (
    <div className={style.container}>
      <input type="text" value={props.search} placeholder='enter location' ref={searchInput} onChange={()=>{props.eventHandler(searchInput.current.value)}}/>
      <button onClick={props.searchWeatherHandler}>Search</button>
    </div>
  )
}

export default Search


