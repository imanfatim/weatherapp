import React from 'react'
import moment from "moment";

const WeatherCard = ({cityname, temp}) => {

  return (
     
     
      <div className=" card fullscreen-background flex  justify-center items-start sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
        
             <div className='block rounded-lg bg-blue-300 text-white mt-3 mx-44 py-10  '>
          
                     <h1 className='text-white text-center'> {cityname} </h1>
                     <div className='text-white text-center'> {temp}°C </div>
            </div>
        </div>
     
       
  )
}

export default WeatherCard