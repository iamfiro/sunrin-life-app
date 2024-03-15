import { View, TouchableOpacity, StyleSheet } from "react-native";
import Title from "../title";
import { IDefaultScreenProps } from "../../types/screen";

interface SchoolInfoComponentProps {
    emoji: string;
    title: string;
    data: string;
}

function SchoolInfoComponent({ emoji, title, data }: SchoolInfoComponentProps) {
    return (
        <View style={style.schoolInfoContainer}>
            <Title size={0} color="#000" weight="300">{emoji}</Title>
            <View style={{ marginLeft: 15}}>
                <Title size={5} color="#000" weight="400">{title}</Title>
                <View style={{ marginTop: 3 }} />
                <Title size={5} color="#838383" weight="200">{data}</Title>
            </View>
        </View>
    )
}

export default function HomeSchoolDataList({ navigation }: IDefaultScreenProps) {
    return (
        <View style={style.section}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Title size={4} color="#000" weight="300">지금 선린고는..? 🏫</Title>
                <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
                    <Title size={5} color="#979797" weight="200">위젯 편집하기</Title>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15 }}>
                <SchoolInfoComponent emoji="🍽️" title="오늘의 급식" data="차조밥
짬뽕만두국
도토리묵야채무침
돼지불고기(키위함유)
배추김치
다코야끼" />
                <SchoolInfoComponent emoji="📅" title="오늘의 시간표" data="프밍
프밍
통사C
체육
국어A
자율" />
                <SchoolInfoComponent emoji="⛅" title="날씨" data="맑음 (1°C)" />
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    section: {
        padding: 17.5,
        paddingTop: 25,
        paddingBottom: 20,
    },
    
    schoolInfoContainer: {
        flexDirection: "row",

        borderWidth: 1,
        borderColor: "#ededed",
        borderRadius: 10,

        padding: 17.5,
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 10,
    },
});
