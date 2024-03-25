import { Image, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { IDefaultScreenProps } from "../types/screen";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import { useEffect, useState } from "react";
import { DummyWeather } from "../assets/dummy/weather";
import { IWeatherState, StateDefaultWeather, WeatherConditionCodeToIcon, WeatherConditionCodeToKorean } from "../types/weather";
import axios from "axios";

interface IWeatherProps {
    title: string;
    value: string;
}

function List({ title, value }: IWeatherProps) {
    return (
        <View style={style.listContainer}>
            <Title size={4} color="#a2a2a2" weight="200">{title}</Title>
            <Title size={4} color="#000" weight="200">{value}</Title>
        </View>
    )

}


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
                <NavigationButton onClick={() => navigation.navigate("Menu")} />
                <View style={{ paddingHorizontal: 17.5, marginTop: 40, alignItems: 'center' }}>
                    <Image source={WeatherConditionCodeToIcon(data.weather.icon)} style={{ width: 90, height: 90, marginBottom: 10 }} />
                    <Title size={-10} color="#000" weight="200" marginBottom={10}>{data.temperature.current ? data.temperature.current : '--'}°</Title>
                    <Title size={3} color="#0274ff" weight="200" marginBottom={30}>{data.weather.conditionCode ? WeatherConditionCodeToKorean(data.weather.conditionCode) : '날씨 데이터를 불러오는 중'}</Title>
                </View>
                <View style={{ height: 40 }} />
                <List title="최저 / 최고" value={`${data.temperature.min ? data.temperature.min : '--'}°  /  ${data.temperature.max ? data.temperature.max : '--'}°`} />
                <List title="습도" value={`${data.humidity ? data.humidity : '--'}%`} />
                <List title="일출 시간" value={data.sun.sunrise ? data.sun.sunrise : '--:--:-- -'} />
                <List title="일몰 시간" value={data.sun.sunset ? data.sun.sunset : '--:--:-- -'} />
                <List title="풍속" value={`${data.windSpeed ? data.windSpeed : '-'}m/s`} />
                <View style={{ paddingHorizontal: 17.5, marginTop: 40 }}>
                    <Title size={6} color="#b7b7b7" weight="200" marginBottom={30}>데이터 제공: OpenWeatherMaps API</Title>
                </View>
            </ScrollView>
            <StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#ffffff',
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        paddingBottom: 15,
        marginVertical: 10,
        marginHorizontal: 40,

        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4'
    }
});