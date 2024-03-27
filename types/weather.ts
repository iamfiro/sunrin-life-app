import sun from '../assets/icon/weather/sun.png';
import cloud from '../assets/icon/weather/cloud.png';
import rain from '../assets/icon/weather/rain.png';
import snow from '../assets/icon/weather/snow.png';
import storm from '../assets/icon/weather/storm.png';
import fog from '../assets/icon/weather/fog.png';
import few_cloud from '../assets/icon/weather/few-cloud.png';
import light_rain from '../assets/icon/weather/light-rain.png';

/* Represents the state of a weather. */
export interface IWeatherState {
    weather: {
        main: string;
        conditionCode: number;
        icon: string;
    }
    temperature: {
        current: number;
        min: number;
        max: number;
    }
    humidity: number;
    sun: {
        sunrise: string;
        sunset: string;
    }
    windSpeed: number;
}

export const StateDefaultWeather: IWeatherState = {
    weather: {
        main: '',
        conditionCode: 0,
        icon: ''
    },
    temperature: {
        current: 0,
        min: 0,
        max: 0
    },
    humidity: 0,
    sun: {
        sunrise: '',
        sunset: ''
    },
    windSpeed: 0,
};

export function WeatherConditionCodeToKorean(code: number) {
    switch (code) {
        // Group 2xx: Thunderstorm
        case 200:
            return '천둥번개를 동반한 가벼운 비';
        case 201:
            return '천둥번개를 동반한 비';
        case 202:
            return '천둥번개를 동반한 강한 비';
        case 210:
            return '약한 천둥번개';
        case 211:
            return '천둥번개';
        case 212:
            return '강한 천둥번개';
        case 221:
            return '불규칙적인 천둥번개';
        case 230:
            return '약한 이슬비를 동반한 천둥번개';
        case 231:
            return '이슬비를 동반한 천둥번개';
        case 232:
            return '강한 이슬비를 동반한 천둥번개';
        // Group 3xx: Drizzle
        case 300:
            return '약한 이슬비';
        case 301:
            return '이슬비';
        case 302:
            return '강한 이슬비';
        case 310:
            return '약한 이슬비';
        case 311:
            return '이슬비';
        case 312:
            return '강한 이슬비';
        case 313:
            return '소나기와 이슬비';
        case 314:
            return '강한 소나기와 이슬비';
        case 321:
            return '소나기';
        // Group 5xx: Rain
        case 500:
            return '약한 비';
        case 501:
            return '비';
        case 502:
            return '강한 비';
        case 503:
            return '매우 강한 비';
        case 504:
            return '극심한 비';
        case 511:
            return '우박';
        case 520:
            return '약한 소나기 비';
        case 521:
            return '소나기 비';
        case 522:
            return '강한 소나기 비';
        case 531:
            return '불규칙적인 소나기 비';
        // Group 6xx: Snow
        case 600:
            return '약한 눈';
        case 601:
            return '눈';
        case 602:
            return '강한 눈';
        case 611:
            return '진눈깨비';
        case 612:
            return '소나기 진눈깨비';
        case 613:
            return '소나기 진눈깨비';
        case 615:
            return '약한 비와 눈';
        case 616:
            return '비와 눈';
        case 620:
            return '약한 소나기 눈';
        case 621:
            return '소나기 눈';
        case 622:
            return '강한 소나기 눈';
        // Group 7xx: Atmosphere
        case 701:
            return '박무';
        case 711:
            return '연기';
        case 721:
            return '연무';
        case 731:
            return '모래 먼지';
        case 741:
            return '안개';
        case 751:
            return '모래';
        case 761:
            return '먼지';
        case 762:
            return '화산재';
        case 771:
            return '돌풍';
        case 781:
            return '토네이도';
        // Group 800: Clear
        case 800:
            return '맑음';
        // Group 80x: Clouds
        case 801:
            return '약간 흐림';
        case 802:
            return '흐림';
        case 803:
            return '구름 많음';
        case 804:
            return '흐린 날씨';
        default:
            return '알 수 없음';
    }
}

export function WeatherConditionCodeToIcon(code: string) {
    switch (code) {
        case '01d':
            return sun;
        case '01n':
            return sun;
        case '02d':
            return few_cloud;
        case '02n':
            return few_cloud;
        case '03d':
            return cloud;
        case '03n':
            return cloud;
        case '04d':
            return cloud;
        case '04n':
            return cloud;
        case '09d':
            return light_rain;
        case '09n':
            return light_rain;
        case '10d':
            return rain;
        case '10n':
            return rain;
        case '11d':
            return storm;
        case '11n':
            return storm;
        case '13d':
            return snow;
        case '13n':
            return snow;
        case '50d':
            return fog;
        case '50n':
            return fog;
        default:
            return sun;
    }
}

export interface IWidgetWeatherState {
    status: 'loading' | 'success' | 'error';
    currentTemperature: number;
    conditionCode: number;
    icon: string;
}

export const StateDefaultWidgetWeather: IWidgetWeatherState = {
    status: 'loading',
    currentTemperature: 0,
    conditionCode: 0,
    icon: ''
};