import { ActivityIndicator, Image, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { IDefaultScreenProps } from "../types/screen";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import Button from "../components/button";
import { FoodStateType } from "../types/food";
import { useEffect, useState } from "react";
import { DayToKorean } from "../types";
import axios from "axios";
import FoodImage from '../assets/icon/menu/food.png'
import Toast from "../lib/toast";

/**
 * Renders the widget setting screen.
 * 
 * @returns The JSX element representing the widget setting screen.
 */
export default function ScreenFood({ navigation }: IDefaultScreenProps) {
    const [data, setData] = useState<FoodStateType | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const date = new Date();
    useEffect(() => {
        axios.get("https://slunch.ny64.kr/api/meals").then((res: any) => {
            const date = new Date();
            const filter = res.data.filter((item: any) => {
                return item.date === `${date.getFullYear()}년 ${(date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}월 ${date.getDate()}일 ${DayToKorean(date)}`
            });
            const mealArray = res.data.filter((item: any) => {
                return item.id >= filter[0].id;
            });

            const mealData = mealArray.map((item: any) => {
                return {
                    mealInfo: item.mealInfo,
                    date: new Date(`${item.date.split(' ')[0].replace('년', '')}-${item.date.split(' ')[1].replace('월', '')}-${item.date.split(' ')[2].replace('일', '')}`).toDateString()
                }
            });

            setData(mealData);
            setIsLoading(false);
        }).catch((err) => {
            Toast("데이터를 불러오는 중 오류가 발생했습니다.");
        })
    }, []);

    return (
        <>
            <ScrollView style={style.container}>
                <NavigationButton onClick={() => navigation.pop()} text="급식" />
                    {
                        isLoading ? (
                            <View style={{ marginTop: 100 }}>
                                <ActivityIndicator size="large" color="#000" />
                                <Title size={6} color="#b7b7b7" weight="200" marginTop={20} marginBottom={40} textAlign="center">데이터를 불러오는 중입니다...</Title>
                            </View>
                        ) : (
                            <>
                                <View style={style.section}>
                                    <Image source={FoodImage} style={{ width: 60, height: 60, marginLeft: -5 }} />
                                    <Title size={4} color="#52585a" weight="200" marginTop={20} marginBottom={20}>{data[0].mealInfo.replaceAll(' ', '\n')}</Title>
                                    <Title size={5} color="#7e7e7e" weight="300">{date.getFullYear()}년 {date.getMonth()}월 {date.getDate()}일</Title>
                                </View>
                                <View style={{ height: 30 }} />
                                <View style={{ padding: 20, marginHorizontal: 20, backgroundColor: '#fff', borderRadius: 15 }}>
                                    {
                                        data.map((item, index) => {
                                            const itemDate = new Date(item.date);
                                            if(index === 0) return null;
                                            return (
                                                <View key={index} style={{ flexDirection: 'row' }}>
                                                    <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 25 }}>
                                                        <Title size={6} color="#9e9e9e" weight="200">{itemDate.getMonth() + 1}월</Title>
                                                        <Title size={2} color="#000000" weight="300" marginBottom={8}>{itemDate.getDate()}</Title>
                                                    </View>
                                                    <Title size={5} color="#919191" weight="200">{item.mealInfo.replaceAll(' ', '\n')}</Title>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                                <Title size={6} color="#b7b7b7" weight="200" marginTop={10} marginBottom={40}>데이터 제공: slunch.ny64.kr</Title>
                            </>
                        )
                    }
            </ScrollView>
            <StatusBar backgroundColor={"#F6F6F9"} barStyle={"dark-content"} />
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6F6F9",
    },
    section: {
        flexDirection: "column",

		backgroundColor: "#fff",

		padding: 20,
        marginHorizontal: 20,

		borderRadius: 15,
    }
});