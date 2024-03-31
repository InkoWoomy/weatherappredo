import React from "react";
import apikey from "../utils/dataservices";
import { ILocationItems } from "../Interfaces/LocationInterface";

export default async function APILocationCall(city:string){
    const promise = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=imperial`);
    const data: ILocationItems = await promise.json();
    return data;
}   



