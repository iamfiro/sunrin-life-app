import { ActivityIndicator, Linking, ScrollView, StatusBar, StyleSheet, ToastAndroid, View } from "react-native";
import { IDefaultScreenProps } from "../types/screen";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import Button from "../components/button";
import { FoodStateType } from "../types/food";
import { useEffect, useState } from "react";
import { DayToKorean } from "../types";
import axios from "axios";
/**
 * Renders the widget setting screen.
 * 
 * @returns The JSX element representing the widget setting screen.
 */
export default function ScreenFood({ navigation }: IDefaultScreenProps) {
    const [data, setData] = useState<FoodStateType | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

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
            ToastAndroid.show("데이터를 불러오는 중 오류가 발생했습니다.", ToastAndroid.SHORT);
        })
    }, []);

    return (
        <>
            <ScrollView style={style.container}>
                <NavigationButton onClick={() => navigation.pop()} />
                <View style={{ paddingHorizontal: 20, marginTop: 0 }}>
                    <Title size={2} color="#000" weight="300" marginBottom={30}>🍤  선린인터넷고등학교</Title>
                    {
                        isLoading && (
                            <View style={{ marginTop: 100 }}>
                                <ActivityIndicator size="large" color="#000" />
                                <Title size={6} color="#b7b7b7" weight="200" marginTop={20} marginBottom={40} textAlign="center">데이터를 불러오는 중입니다...</Title>
                            </View>
                        )
                    }
                    {
                        data.map((item, index) => {
                            const itemDate = new Date(item.date);
                            return (
                                <View key={index} style={{ paddingBottom: 20, marginBottom: 20, borderColor: '#f4f4f4', borderBottomWidth: 1, flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 25 }}>
                                        <Title size={6} color="#9e9e9e" weight="200">{itemDate.getMonth() + 1}월</Title>
                                        <Title size={2} color="#000000" weight="300" marginBottom={8}>{itemDate.getDate()}</Title>
                                        {
                                            itemDate.toDateString() === new Date().toDateString() ? 
                                                <View style={{ backgroundColor: '#477AFF', paddingHorizontal: 7, paddingVertical: 5, borderRadius: 5 }}>
                                                    <Title size={8} weight="200" color="#fff">오늘</Title>
                                                </View> : null
                                        }
                                    </View>
                                    <Title size={5} color="#919191" weight="200">{item.mealInfo.replaceAll(' ', '\n')}</Title>
                                </View>
                            )
                        })
                    }
                    {
                        !isLoading && <Title size={6} color="#b7b7b7" weight="200" marginTop={10} marginBottom={40}>데이터 제공: slunch.ny64.kr</Title>
                    }
                </View>
            </ScrollView>
            <StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});