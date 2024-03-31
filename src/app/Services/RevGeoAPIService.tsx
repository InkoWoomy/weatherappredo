import apikey from "../utils/dataservices";
import { ILocationItems } from "../Interfaces/LocationInterface";
import APILocationCall from "./LocationAPIService";


export default async function APIReverseGeoCall(latitude:number, longitude:number){
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apikey}`);
    const data = await promise.json();
    return data;
}