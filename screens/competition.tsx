import { StyleSheet, ScrollView, StatusBar, View, Text, Linking } from "react-native";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import Badge from "../components/badge";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback, useEffect, useState } from "react";
import Button from "../components/button";
import { CompetitionStateType } from "../types/competition";
import { TouchableOpacity } from "react-native";

/**
 * Renders the screen for the competition list.
 * 
 * @param {object} route - The route object.
 * @param {object} navigation - The navigation object.
 * @returns {JSX.Element} The competition list screen component.
 */

export default function ScreenCompetitionList({ route, navigation }: any) {
	SplashScreen.preventAutoHideAsync();

	const [fontsLoaded, fontError] = useFonts({
		"Wanted Sans ExtraBlack": require("../assets/fonts/WantedSans-ExtraBlack.otf"),
		"Wanted Sans Black": require("../assets/fonts/WantedSans-Black.otf"),
		"Wanted Sans ExtraBold": require("../assets/fonts/WantedSans-ExtraBold.otf"),
		"Wanted Sans Bold": require("../assets/fonts/WantedSans-Bold.otf"),
		"Wanted Sans SemiBold": require("../assets/fonts/WantedSans-SemiBold.otf"),
		"Wanted Sans Medium": require("../assets/fonts/WantedSans-Medium.otf"),
		"Wanted Sans Regular": require("../assets/fonts/WantedSans-Regular.otf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

    const [data, setData] = useState<CompetitionStateType | []>([]);
    var preventListDate: Date | null = null;

    useEffect(() => {
        setData([
            {
                title: "2024 선린 해커톤",
                date: new Date("2025-03-15"), // Update the date property to be of type Date
                url: "https://www.instagram.com/sunrin_life",
                description: '선린인터넷고등학교에서 주최하는 코딩경진대회입니다. 많은 참여 부탁드립니다!'
            },
            {
                title: "제 1회 선린인터넷고등학교 코딩경진대회2",
                date: new Date("2025-03-15"), // Update the date property to be of type Date
                url: "https://www.instagram.com/sunrin_life",
                description: '선린인터넷고등학교에서 주최하는 코딩경진대회입니다. 많은 참여 부탁드립니다!'
            },
            {
                title: "제 1회 선린인터넷고등학교 코딩경진대회3",
                date: new Date("2025-03-12"), // Update the date property to be of type Date
                url: "https://www.instagram.com/sunrin_life",
                description: '선린인터넷고등학교에서 주최하는 코딩경진대회입니다. 많은 참여 부탁드립니다!'
            },{
                title: "제 1회 선린인터넷고등학교 코딩경진대회4",
                date: new Date("2025-03-18"), // Update the date property to be of type Date
                url: "https://www.instagram.com/sunrin_life",
                description: '선린인터넷고등학교에서 주최하는 코딩경진대회입니다. 많은 참여 부탁드립니다!'
            }
        ]);
    }, []);

    if (!fontsLoaded && !fontError) {
		return null;
	}

    return (
        <>
        <ScrollView style={style.container} onLayout={onLayoutRootView}>
            <NavigationButton onClick={() => navigation.navigate("Home")} />
            <View style={{ paddingHorizontal: 17.5, marginTop: 10 }}>
                <Title size={2} color="#000" weight="300">🏆  다가오는 대회</Title>
                <View style={{ height: 40 }} />
                {
                    data.map((item, index) => {
                        const isSameDate = preventListDate?.toString() === item.date?.toString();
                        preventListDate = item.date;

                        return (
                            <>
                                {
                                    !isSameDate && (
                                        <View key={Math.random()}>
                                            {
                                                index !== 0 && <View style={{ height: 30 }} />
                                            }
                                            <Title size={5} color="#909090" weight="200">{item.date.getFullYear()}년 {item.date.getMonth()}월 {item.date.getDay()}일</Title>
                                            <View style={{ height: 5 }} />
                                        </View>
                                    )
                                }
                                <TouchableOpacity style={style.competitionContainer} key={Math.random()}>
                                    <Title size={5} color="#000" weight="300">{item.title}</Title>
                                    <View style={{ height: 5 }} />
                                    <Title size={7} color="#838383" weight="200">{item.description}</Title>
                                    <View style={{ height: 5 }} />
                                    <Title size={7} color="#838383" weight="200">D - {Math.floor((item.date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}</Title>
                                </TouchableOpacity>
                            </>
                        )
                    })
                }
                <View style={{ height: 40 }} />
                <Button type="secondary" text="올바른 정보가 아닌가요?" onClick={() => { Linking.openURL("https://www.instagram.com/sunrin_life")}} />
                <View style={{ height: 30 }} />
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
    competitionContainer: {
        borderRadius: 10,

        padding: 15,
        marginTop: 10,

        borderColor: "#ededed",
        borderWidth: 1,
    }
})