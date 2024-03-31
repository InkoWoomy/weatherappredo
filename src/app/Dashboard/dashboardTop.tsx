'use client';
import React, { useEffect, useState } from "react";
import { Button, TextInput } from "flowbite-react";
import APILocationCall from "../Services/LocationAPIService";
import { SearchLocation } from "../Components/InputComponent";
import { ILocationItems } from "../Interfaces/LocationInterface";
import APIReverseGeoCall from "../Services/RevGeoAPIService";


export default function CityAndTemperature(){


   

    const [location, setLocation] = useState<ILocationItems>();

    useEffect(() => {
      const locationData = async () => {
        const fetchedData = await APILocationCall('stockton');
        setLocation(fetchedData);
      }
        locationData();
    }, []);




    console.log(location)
  

   
    
   
    const changeLocation = async () => {
        
    }

    return (
        <div className="grid grid-cols-7 p-10 justify-center gap-4">
            <div className="bg-indigo-900 border-indigo-400 border-4 p-10 col-span-3 rounded-xl text-zinc-50">
                {/** Input and city */}  
                <div className="flex gap-3">
                    <SearchLocation/>
                </div>


                <div className="text-6xl text-center font-mono py-5">
                    {location?.city?.name},{location?.city?.country}
                </div>
            </div>
            <div className="bg-indigo-900 border-indigo-400 border-4 col-span-4 rounded-xl text-zinc-50">
                {/** Temperature and Weather*/}

                <div className="grid grid-cols-2 gap-10 px-8 py-5 justify-center">
                    {/** Temperature*/}
                    <div className="bg-indigo-400 border-indigo-100 border-8 rounded-full flex items-center justify-center text-zinc-50 md:size-40 lg:size-96 justify-self-center">
                        <div className="md:text-5xl lg:text-9xl font-mono">
                                {location && Math.round(location.list[0].main.temp)}°F
                            </div>
                    </div>
                    {/** Weather*/}
                     <div className="bg-indigo-400 border-indigo-100 border-8 rounded-full flex items-center justify-center text-zinc-50 md:size-40 lg:size-96 justify-self-center">
                        <div className="md:text-5xl lg:text-9xl font-mono">
                                <img src={`https://openweathermap.org/img/wn/${location?.list[0]?.weather[0]?.icon}@2x.png`} alt='todaysweather' style={{ width: '400px', height: '400px' }}/>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        
    );
}
    

    