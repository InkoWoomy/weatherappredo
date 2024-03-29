'use client';

import TextInput from "../Components/InputComponent";
import { IGeoItems } from "../Interfaces/weatherInterface";
import WeatherData from "../utils/weatherData.json";

export default function CityAndTemperature(){
    return (
        <div className="grid grid-cols-7 p-10 justify-center gap-4">
            <div className="bg-indigo-900 border-indigo-400 border-4 p-10 col-span-3 rounded-xl text-zinc-50">
                {/** Input and city */}  
                <TextInput/>  
            </div>
            <div className="bg-indigo-900 border-indigo-400 border-4  col-span-4 rounded-xl text-zinc-50">
                {/** Temperature and Weather*/}

                <div className="grid grid-cols-2 gap-10 px-8 py-1 justify-center">
                    {/** Temperature*/}
                    <div className="bg-indigo-400 border-indigo-100 border-8 rounded-full flex items-center justify-center text-zinc-50 size-96 justify-self-center">
                        <div className="text-9xl font-mono">
                                96
                        </div>
                    </div>
                    {/** Weather*/}
                    <div className="bg-indigo-400 border-indigo-100 border-8 rounded-full flex items-center justify-center text-zinc-50 size-96 justify-self-center">
                        <div className="text-9xl font-mono">
                                +
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        
    );
}
    

