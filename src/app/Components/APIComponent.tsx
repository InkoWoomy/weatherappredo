import React from "react";
import apikey from "../utils/dataservices";

export default async function APICall(){
    const locationPromise = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=stockton,california&appid=${apikey}`);
    console.log(locationPromise);
    const locationData = await locationPromise.json();
    return locationData;
}   