'use client';
import React, { useEffect, useState,  } from "react";
import APILocationCall from "../Services/LocationAPIService";
import { SearchLocation } from "../Components/InputComponent";
import { ILocationItems } from "../Interfaces/LocationInterface";
import APIReverseGeoCall from "../Services/RevGeoAPIService";


export default function FiveDay(){

    const [location, setLocation] = useState<ILocationItems>();
    useEffect(() => {
      const locationData = async () => {
        const fetchedData = await APILocationCall('stockton');
        setLocation(fetchedData);
      }
        locationData();
    }, []);


    console.log(location)

    return (
        <div className="px-10 justify-center gap-4">
            <div className="grid grid-cols-5 bg-indigo-900 border-indigo-400 border-4 col-span-7 rounded-xl text-zinc-50 py-10 text-7xl">
                {/** 5-day forecast */}  
                <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
                {location && Math.round(location.list[7].main.temp)}°F
                    <img src={`https://openweathermap.org/img/wn/${location?.list[7]?.weather[0]?.icon}@2x.png`} alt='todaysweather' style={{ width: '100px', height: '100px' }}/>
                </div>
                <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
                {location && Math.round(location.list[14].main.temp)}°F
                    <img src={`https://openweathermap.org/img/wn/${location?.list[14]?.weather[0]?.icon}@2x.png`} alt='todaysweather' style={{ width: '100px', height: '100px' }}/>
                </div>
                <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
                {location && Math.round(location.list[21].main.temp)}°F
                    <img src={`https://openweathermap.org/img/wn/${location?.list[21]?.weather[0]?.icon}@2x.png`} alt='todaysweather' style={{ width: '100px', height: '100px' }}/>
                </div>
                <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
                {location && Math.round(location.list[24].main.temp)}°F
                    <img src={`https://openweathermap.org/img/wn/${location?.list[24]?.weather[0]?.icon}@2x.png`} alt='todaysweather' style={{ width: '100px', height: '100px' }}/>
                </div>
                <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
                {location && Math.round(location.list[28].main.temp)}°F
                    <img src={`https://openweathermap.org/img/wn/${location?.list[28]?.weather[0]?.icon}@2x.png`} alt='todaysweather' style={{ width: '100px', height: '100px' }}/>
                </div>
            </div>
        </div>
    )
}

