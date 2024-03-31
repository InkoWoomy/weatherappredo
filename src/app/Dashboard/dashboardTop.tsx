"use client";
import React, { useEffect, useState } from "react";
import { Button, TextInput } from "flowbite-react";
import APILocationCall from "../Services/LocationAPIService";
import { SearchLocation } from "../Components/InputComponent";
import { ILocationItems } from "../Interfaces/LocationInterface";
import APIReverseGeoCall from "../Services/RevGeoAPIService";

export default function CityAndTemperature() {
  const [location, setLocation] = useState<ILocationItems>();
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const locationData = async () => {
      const fetchedData = await APILocationCall("stockton");
      setLocation(fetchedData);
    };
    locationData();
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleOnClick = async () => {
    const fetchedData = await APILocationCall(input);
    setLocation(fetchedData);
  };

  const changeLocation = async () => {};

  return (
    <div>
    <div className="grid grid-cols-7 p-10 justify-center gap-4">
      <div className="bg-indigo-900 border-indigo-400 border-4 p-10 col-span-3 rounded-xl text-zinc-50">
        {/** Input and city */}
        <div className="flex gap-3">
          <SearchLocation onChange={handleOnChange} onClick={handleOnClick} />
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
              <img
                src={`https://openweathermap.org/img/wn/${location?.list[0]?.weather[0]?.icon}@2x.png`}
                alt="todaysweather"
                style={{ width: "400px", height: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
    <div>
    
    </div>
    </div>
    <div className="px-10 justify-center gap-4">
        <div className="grid grid-cols-5 bg-indigo-900 border-indigo-400 border-4 col-span-7 rounded-xl text-zinc-50 py-10 text-7xl">
          {/** 5-day forecast */}
          <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
            {location && Math.round(location.list[7].main.temp)}°F
            <img
              src={`https://openweathermap.org/img/wn/${location?.list[7]?.weather[0]?.icon}@2x.png`}
              alt="todaysweather"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
            {location && Math.round(location.list[14].main.temp)}°F
            <img
              src={`https://openweathermap.org/img/wn/${location?.list[14]?.weather[0]?.icon}@2x.png`}
              alt="todaysweather"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
            {location && Math.round(location.list[21].main.temp)}°F
            <img
              src={`https://openweathermap.org/img/wn/${location?.list[21]?.weather[0]?.icon}@2x.png`}
              alt="todaysweather"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
            {location && Math.round(location.list[24].main.temp)}°F
            <img
              src={`https://openweathermap.org/img/wn/${location?.list[24]?.weather[0]?.icon}@2x.png`}
              alt="todaysweather"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
            {location && Math.round(location.list[28].main.temp)}°F
            <img
              src={`https://openweathermap.org/img/wn/${location?.list[28]?.weather[0]?.icon}@2x.png`}
              alt="todaysweather"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        </div>
      </div>



    </div>
    
  );
}
