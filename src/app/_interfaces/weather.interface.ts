export interface LocationTarget {
    lat: number;
    lon: number;
}

export interface LocationTargetOptions {
    enableHighAccuracy: boolean;
    timeout: number;
    maximumAge: number;
}

export interface WeatherMain {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}

export interface WeatherSystem {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
}

export interface WeatherDescription {
    description: string;
    id: number;
    main: string;
}

export interface WeatherWind {
    deg: number;
    speed: number;
}

export interface Weather {
    base: string;
    clouds: {};
    cod: number;
    coord: LocationTarget;
    dt: number;
    id: number;
    main: WeatherMain;
    name: string;
    sys: WeatherSystem;
    timezone: number;
    visibility: number;
    weather: [WeatherDescription];
    wind: WeatherWind;
}
