export interface ILocationItems {
    cod: string;
    message: number;
    cnt: number;
    list: List[];
    city: City;
}

export type City = {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export type Coord = {
    lat: number;
    lon: number;
}

export type List = {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    rain?: Rain;
    sys: Sys;
    dt_txt: string;
}

export type Main = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export type Rain = {
    "3h": number;
}

export type Sys = {
    pod: Pod;
}

export type Weather = {
    id: number;
    main: MainEnum;
    description: Description;
    icon: string;
}

export type Clouds = {
    all: number;
}

export type Wind = {
    speed: number;
    deg: number;
    gust: number;
}

export enum Pod {
    D = "d",
    N = "n",
}

export enum Description {
    BrokenClouds = "broken clouds",
    ClearSky = "clear sky",
    FewClouds = "few clouds",
    LightRain = "light rain",
    OvercastClouds = "overcast clouds",
    ScatteredClouds = "scattered clouds",
}

export enum MainEnum {
    Clear = "Clear",
    Clouds = "Clouds",
    Rain = "Rain",
}
