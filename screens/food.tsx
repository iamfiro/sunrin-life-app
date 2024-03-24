import { Image, Linking, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { IDefaultScreenProps } from "../types/screen";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import FoodIcon from '../assets/icon/menu/food.png'
import Button from "../components/button";
import { FoodStateType } from "../types/food";
import { useEffect, useState } from "react";
import { DayToKorean } from "../types";
/**
 * Renders the widget setting screen.
 * 
 * @returns The JSX element representing the widget setting screen.
 */
export default function ScreenFood({ navigation }: IDefaultScreenProps) {
    const [data, setData] = useState<FoodStateType | []>([]);

    useEffect(() => {
        setData([
            {
                data: "차조밥/짬뽕만두국/도토리묵야채무침/돼지불고기/배추김치/다코야키",
                date: new Date("2024-03-24")
            },
            {
                data: "차조밥/짬뽕만두국/도토리묵야채무침/돼지불고기/배추김치/다코야키",
                date: new Date("2024-03-26")
            },
            {
                data: "차조밥/짬뽕만두국/도토리묵야채무침/돼지불고기/배추김치/다코야키",
                date: new Date("2024-03-27")
            },
        ])
    }, []);

    return (
        <>
            <ScrollView style={style.container}>
                <NavigationButton onClick={() => navigation.navigate("Menu")} />
                <View style={{ paddingHorizontal: 17.5, marginTop: 0 }}>
                    <Title size={2} color="#000" weight="300" marginBottom={30}>🍤  선린인터넷고등학교</Title>
                    {
                        data.map((item, index) => {
                            return (
                                <View key={index} style={{ paddingBottom: 20, marginBottom: 20, borderColor: '#f4f4f4', borderBottomWidth: 1 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Title size={4} color="#000000" weight="200" marginBottom={8}>{item.date.getFullYear()}. {item.date.getMonth() + 1}. {item.date.getDate()} {DayToKorean(item.date)}</Title>
                                        {
                                            item.date.toDateString() === new Date().toDateString() ? 
                                                <View style={{ backgroundColor: '#477AFF', paddingHorizontal: 7, paddingVertical: 5, borderRadius: 5, marginLeft: 10, marginBottom: 8 }}>
                                                    <Title size={8} weight="200" color="#fff">오늘</Title>
                                                </View> : null
                                        }
                                    </View>
                                    <Title size={5} color="#919191" weight="200">차조밥{'\n'}짬뽕만두국{'\n'}도토리묵야채무침{'\n'}돼지불고기{'\n'}배추김치{'\n'}다코야키</Title>
                                </View>
                            )
                        })
                    }
                    <Button onClick={() => Linking.openURL("https://www.instagram.com/sunrin_life")} text="급식 정보에 문제가 있나요?" type="secondary" />
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