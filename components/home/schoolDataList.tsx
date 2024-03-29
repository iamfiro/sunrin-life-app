import { View, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from "react-native";
import Title from "../title";
import { useEffect, useState } from "react";
import axios from "axios";
import { DayToKorean } from "../../types";

/* Props for the SchoolInfoComponent. */
interface SchoolInfoComponentProps {
    emoji: string;
    title: string;
    data: string;
}

const width = Dimensions.get('window').width > 500 ? 460 : Dimensions.get('window').width;

/**
 * Renders a component displaying school information.
 *
 * @param {SchoolInfoComponentProps} props - The component props.
 * @param {string} props.emoji - The emoji representing the school.
 * @param {string} props.title - The title of the school.
 * @param {string} props.data - The data related to the school.
 * @returns {JSX.Element} The rendered school information component.
 */
function SchoolInfoComponent({ emoji, title, data }: SchoolInfoComponentProps) {
    return (
        <View style={style.schoolInfoContainer}>
            <Title size={3} color="#000" weight="300" marginBottom={10}>{emoji}</Title>
            <Title size={6} color="#000000" weight="400" marginBottom={5}>{title}</Title>
            <Title size={6} color="#717171" weight="200">{data}</Title>
        </View>
    )
}

/**
 * Renders a list of school data in the home screen.
 * 
 * @param navigation - The navigation object for navigating between screens.
 * @returns The rendered school data list component.
 */
export default function HomeSchoolDataList() {
    const [foodData, setFoodData] = useState<string>("데이터 불러오는 중");
    const [timeData, setTimeData] = useState<string>("데이터 불러오는 중");

    useEffect(() => {
        axios.get("https://slunch.ny64.kr/api/meals").then((res: any) => {
            const date = new Date();
            const filter = res.data.filter((item: any) => {
                return item.date === `${date.getFullYear()}년 ${(date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}월 ${date.getDate()}일 ${DayToKorean(date)}`
            });

            setFoodData(filter[0].mealInfo.replaceAll(' ', '\n'));
        }).catch((err) => {
            setFoodData("급식 정보를 불러오는 중 오류가 발생했습니다.");
        })
    }, []);

    useEffect(() => {
        axios.get("https://api.ny64.kr/comcigan/1/4").then((res: any) => {
            const date = new Date();
            let data: string = '';

            res.data.data[date.getDay() - 1].map((item: any, idx: number) => {
                if(idx === 0) {
                    if(item.subject !== '') data += `${item.subject} - ${item.teacher}`;
                } else {
                    if(item.subject !== '') data += `\n${item.subject} - ${item.teacher}`;
                }
            });

            setTimeData(data);
        }).catch((err) => {
            setTimeData("시간표 정보를 불러오는 중 오류가 발생했습니다.");
        })
    }, [])

    return (
        <View style={style.section}>
            <SchoolInfoComponent emoji="🍽️" title="오늘의 급식" data={foodData} />
            <SchoolInfoComponent emoji="📅" title="오늘의 시간표" data={timeData} />
        </View>
    )
}


/* Represents the styles for the schoolDataList component. */
const style = StyleSheet.create({
    /* Represents the section style. */
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        width: width,

        paddingHorizontal: 20,
    },
    
    /* Represents the schoolInfoContainer style. */
    schoolInfoContainer: {
        backgroundColor: "#fff",
        
        width: (width / 2) - 25,

        borderWidth: 1,
        borderColor: "#f4f4f4",
        borderRadius: 10,

        padding: 17,
    },
});
