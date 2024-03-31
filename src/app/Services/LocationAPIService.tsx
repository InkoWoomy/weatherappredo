import React from "react";
import { ILocationItems } from "../Interfaces/LocationInterface";

export default async function APILocationCall(city:string){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_MY_API_KEY}&units=imperial`);
    const data: ILocationItems = await promise.json();
    return data;
}   



