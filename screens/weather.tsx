import { Image, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { IDefaultScreenProps } from "../types/screen";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import FoodIcon from '../assets/icon/menu/food.png';
import { FoodStateType } from "../types/food";
import { useState } from "react";

import sun from '../assets/icon/weather/sun.png';
import cloud from '../assets/icon/weather/cloud.png';
import rain from '../assets/icon/weather/rain.png';
import snow from '../assets/icon/weather/snow.png';
import storm from '../assets/icon/weather/storm.png';
import fog from '../assets/icon/weather/fog.png';
import dust from '../assets/icon/weather/dust.png';
import few_cloud from '../assets/icon/weather/few-cloud.png';
import light_rain from '../assets/icon/weather/light-rain.png';
import tornado from '../assets/icon/weather/tornado.png';
import wind_speed from '../assets/icon/weather/wind-speed.png';

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
    const [data, setData] = useState<FoodStateType | []>([]);

    return (
        <>
            <View style={style.container}>
                <NavigationButton onClick={() => navigation.navigate("Menu")} />
                <View style={{ paddingHorizontal: 17.5, marginTop: 40, alignItems: 'center' }}>
                    <Image source={rain} style={{ width: 90, height: 90, marginBottom: 10 }} />
                    <Title size={-10} color="#000" weight="200" marginBottom={10}>17°</Title>
                    <Title size={3} color="#0274ff" weight="200" marginBottom={30}>비가 오고 있어요</Title>
                </View>
                <View style={{ height: 40 }} />
                <List title="최저 / 최고" value="13°  /  20°" />
                <List title="습도" value="80%" />
                <List title="일출 시간" value="6:23:17 AM" />
                <List title="일몰 시간" value="7:01:23 PM" />
                <List title="풍속" value="2m/s" />
                <View style={{ paddingHorizontal: 17.5, marginTop: 40 }}>
                    <Title size={6} color="#b7b7b7" weight="200" marginBottom={30}>데이터 제공: OpenWeatherMaps API</Title>
                </View>
            </View>
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