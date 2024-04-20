import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';


const Home = () => {

  
  const [cityName,setCityName] = useState("");
  const [currentweather, setCurrentWeather]= useState(null);
  const [error, setError] = useState('');
  const SubmitHandler =async (e) =>{
    e.preventDefault()
    console.log('I am a function')

    try{
           let response = await 
           axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=15ad795a4a5de658bacd9b6460a8806a&units=metric `)
  
 setCurrentWeather(response.data)
  
    } 
    catch(error){
setError("error");
    }
  }
  return (
    <div  className='bg-black  '>
 <div className='fullscreen-background flex  justify-center items-start h-screen sm:border-lime-700 md:border-amber-400 lg:border-indigo-600'>
    <div class="bg-blue-300 left-0 absolute top-0 p-10 rounded-full rounded-t-lg rounded-bl fullscreen-background"></div>
    <div class="bg-blue-300 absolute top-0 right-0 p-10 rounded-full rounded-t-lg rounded-br fullscreen-background"></div>
         <div class="flex flex-col justify-center items-center mt-32 ">
              <h1 className='text-center font-bold mt-20 text-white text-3xl mb-5' >Weather App</h1>

              <form onSubmit={SubmitHandler} className="flex flex-col">
              <input className="bg-white mb-5 px-6 p-1 text-center rounded-lg" type='text'  onChange={(e) => setCityName(e.target.value)}/>

              <button type="submit" class="bg-blue-300 text-white text-2xl px-2 rounded-lg">Search</button>


               </form>
             

    <div className='mt-10 '> 
 
      {error && <p>{error}</p>}
      {currentweather && (
        <WeatherCard
        cityname={cityName}
        temp={currentweather.main.temp}
        />
      )}

</div>
</div>  
</div>
 </div>
  )
}

export default Home