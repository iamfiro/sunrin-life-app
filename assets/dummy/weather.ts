import { IWeatherState } from "../../types/weather";

export const DummyWeather: IWeatherState = {
    weather: {
        main: 'Rain',
        conditionCode: 500,
        icon: '10d'
    },
    temperature: {
        current: 9,
        min: 8,
        max: 8
    },
    humidity: 81,
    sun: {
        sunrise: '1711315688',
        sunset: '1711360072'
    },
    windSpeed: 5.14,
}