import { Dimensions, Image, ImageSourcePropType, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { IDefaultScreenProps } from "../types/screen";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import { useEffect, useState } from "react";
import { DummyWeather } from "../assets/dummy/weather";
import { IWeatherState, StateDefaultWeather, WeatherConditionCodeToIcon, WeatherConditionCodeToKorean } from "../types/weather";
import axios from "axios";
import ThermometerImage from '../assets/icon/weather/thermometer.png';
import HumidityImage from '../assets/icon/weather/humidity.png';
import SunriseImage from '../assets/icon/weather/sunrise.png';
import SunsetImage from '../assets/icon/weather/sunset.png';
import WindImage from '../assets/icon/weather/wind.png';

interface IWeatherProps {
    title: string;
    value: string;
    icon?: ImageSourcePropType;
}

function List({ title, value, icon }: IWeatherProps) {
    return (
        <View style={style.listContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Title size={4} color="#a2a2a2" weight="200">{title}</Title>
                <Image source={icon} style={{ width: 30, height: 30 }} />
            </View>
            <Title size={4} color="#000" weight="200">{value}</Title>
        </View>
    )
}

const Dimension = Dimensions.get('window');

/**
 * Renders the widget setting screen.
 * 
 * @returns The JSX element representing the widget setting screen.
 */
export default function ScreenWeather({ navigation }: IDefaultScreenProps) {
    const [data, setData] = useState<IWeatherState>(StateDefaultWeather);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            const sunrise = new Date(Number(DummyWeather.sun.sunrise) * 1000);
            const sunset = new Date(Number(DummyWeather.sun.sunset) * 1000);
            setData({
                weather: {
                    main: DummyWeather.weather.main,
                    conditionCode: DummyWeather.weather.conditionCode,
                    icon: DummyWeather.weather.icon
                },
                temperature: {
                    current: DummyWeather.temperature.current,
                    min: DummyWeather.temperature.min,
                    max: DummyWeather.temperature.max
                },
                humidity: DummyWeather.humidity,
                sun: {
                    sunrise: `${sunrise.getHours()}:${sunrise.getMinutes() < 10 ? `0${sunrise.getMinutes()}` : sunrise.getMinutes()}:${sunrise.getSeconds() < 10 ? `0${sunrise.getSeconds()}` : sunrise.getSeconds()} AM`,
                    sunset: `${sunset.getHours()}:${sunset.getMinutes() < 10 ? `0${sunset.getMinutes()}` : sunset.getMinutes()}:${sunset.getSeconds() < 10 ? `0${sunset.getSeconds()}` : sunset.getSeconds()} PM`,
                },
                windSpeed: Math.floor(DummyWeather.windSpeed),
            })
        })
    }, [])

    return (
        <>
            <ScrollView style={style.container}>
                <NavigationButton onClick={() => navigation.pop()} text="날씨" />
                <View style={{ paddingVertical: 25, marginHorizontal: 20, alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, shadowColor: '#0000002f', elevation: 20 }}>
                    <Image source={WeatherConditionCodeToIcon(data.weather.icon)} style={{ width: 90, height: 90, marginBottom: 10 }} />
                    <Title size={-10} color="#000" weight="200" marginBottom={10}>{data.temperature.current ? data.temperature.current : '--'}°</Title>
                    <Title size={3} color="#0274ff" weight="200" marginBottom={10}>{data.weather.conditionCode ? WeatherConditionCodeToKorean(data.weather.conditionCode) : '날씨 데이터를 불러오는 중'}</Title>
                </View>
                <View style={{ marginHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <List title="최저 / 최고" value={`${data.temperature.min ? data.temperature.min : '--'}°  /  ${data.temperature.max ? data.temperature.max : '--'}°`} icon={ThermometerImage} />
                    <List title="습도" value={`${data.humidity ? data.humidity : '--'}%`} icon={HumidityImage} />
                    <List title="일출 시간" value={data.sun.sunrise ? data.sun.sunrise : '--:--:-- -'} icon={SunriseImage} />
                    <List title="일몰 시간" value={data.sun.sunset ? data.sun.sunset : '--:--:-- -'} icon={SunsetImage} />
                    <List title="풍속" value={`${data.windSpeed ? data.windSpeed : '-'}m/s`} icon={WindImage} />
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <Title size={6} color="#b7b7b7" weight="200" marginBottom={30}>데이터 제공: OpenWeatherMaps API</Title>
                </View>
            </ScrollView>
            <StatusBar backgroundColor={"#F6F6F9"} barStyle={"dark-content"} />
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F9',
    },
    listContainer: {
        width: 180,
        height: 110,

        backgroundColor: '#fff',

        flexDirection: 'column',
        justifyContent: 'space-between',

		padding: 20,
        marginBottom: 15,

		borderRadius: 15,

        shadowColor: '#0000002d',
        elevation: 20,
    }
});