import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Title from "../title";
import { IDefaultScreenProps } from "../../types/screen";

/* Props for the SchoolInfoComponent. */
interface SchoolInfoComponentProps {
    emoji: string;
    title: string;
    data: string;
}

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
            <Title size={3} color="#000" weight="300">{emoji}</Title>
            <View style={{ marginTop: 10 }} />
            <Title size={6} color="#000" weight="400">{title}</Title>
            <View style={{ marginTop: 5 }} />
            <Title size={6} color="#838383" weight="200">{data}</Title>
        </View>
    )
}

/**
 * Renders a list of school data in the home screen.
 * 
 * @param navigation - The navigation object for navigating between screens.
 * @returns The rendered school data list component.
 */
export default function HomeSchoolDataList({ navigation }: IDefaultScreenProps) {
    return (
        <View style={style.section}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Title size={4} color="#000" weight="300"></Title>
                <TouchableOpacity onPress={() => navigation.navigate("WidgetSetting")} style={{ marginRight: 17.5 }}>
                    <Title size={7} color="#979797" weight="200">위젯 편집하기</Title>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal style={{ marginTop: 5, paddingRight: 17.5 }}>
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
            </ScrollView>
        </View>
    )
}


/* Represents the styles for the schoolDataList component. */
const style = StyleSheet.create({
    /* Represents the section style. */
    section: {
        paddingBottom: 25,
    },
    
    /* Represents the schoolInfoContainer style. */
    schoolInfoContainer: {
        minWidth: 210,

        borderWidth: 1,
        borderColor: "#ededed",
        borderRadius: 15,

        padding: 17,
        marginBottom: 10,
        marginLeft: 17.5,
        marginRight: -7.5,
    },
});
