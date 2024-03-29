import { StyleSheet, ScrollView, StatusBar, View, Text, Linking, Dimensions } from "react-native";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import { useEffect, useState } from "react";
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
    const [data, setData] = useState<CompetitionStateType | []>([]);
    var preventListDate: Date | null = null;

    useEffect(() => {
        // 더미 데이터
        setData([
            {
                title: "2024 선린 해커톤",
                date: new Date("2024-04-29"), // Update the date property to be of type Date
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

    return (
        <>
        <ScrollView style={style.container}>
            <NavigationButton onClick={() => navigation.pop()} text="다가오는 대회" />
            <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                {
                    data.map((item, index) => {
                        const isSameDate = preventListDate?.toString() === item.date?.toString();
                        preventListDate = item.date;

                        return (
                            <View key={Math.random()}>
                                {
                                    !isSameDate && (
                                        <View key={Math.random()}>
                                            {
                                                index !== 0 && <View style={{ height: 30 }} />
                                            }
                                            <Title size={5} color="#909090" weight="200" marginBottom={5}>{item.date.getFullYear()}년 {item.date.getMonth()}월 {item.date.getDay()}일</Title>
                                        </View>
                                    )
                                }
                                <TouchableOpacity style={style.competitionContainer} key={Math.random()}>
                                    <Title size={5} color="#000" weight="300" marginBottom={5}>{item.title}</Title>
                                    <Title size={7} color="#838383" weight="200" marginBottom={5}>{item.description}</Title>
                                    <Title size={7} color="#838383" weight="200">D - {Math.floor((item.date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) + 1}</Title>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
                <View style={{ height: 40 }} />
                <View style={{ marginTop: -20, marginBottom: 30 }}>
                    <Button type="white" text="올바른 정보가 아닌가요?" onClick={() => { Linking.openURL("https://www.instagram.com/sunrin_life")}} />
                </View>
            </View>
        </ScrollView>
        <StatusBar backgroundColor={"#F6F6F9"} barStyle={"dark-content"} />
        </>
    )
}

/* Styles for the competition screen. */
const style = StyleSheet.create({
    /* The main container style. */
    container: {
        flex: 1,
        
        width: Dimensions.get('window').width,
        maxWidth: 500,

        backgroundColor: "#F6F6F9",

        marginHorizontal: "auto",
    },
    /* The container style for the competition section. */
    competitionContainer: {
        backgroundColor: "#fff",

        borderRadius: 10,

        padding: 15,
        marginTop: 10,

        shadowColor: '#0000002d',
        elevation: 20,
    },

    section: {
        flexDirection: "row",
        alignItems: "center",

		backgroundColor: "#fff",

		padding: 20,

		borderRadius: 15,
    }
})