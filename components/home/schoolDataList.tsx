import { View, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from "react-native";
import Title from "../title";
import { IDefaultScreenProps } from "../../types/screen";

/* Props for the SchoolInfoComponent. */
interface SchoolInfoComponentProps {
    emoji: string;
    title: string;
    data: string;
}

const width = Dimensions.get('window').width;

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
            <Title size={7} color="#717171" weight="200">{data}</Title>
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

        paddingBottom: 25,
        paddingHorizontal: 17.5,
    },
    
    /* Represents the schoolInfoContainer style. */
    schoolInfoContainer: {
        width: (width / 2) - 22.5,

        borderWidth: 1,
        borderColor: "#ededed",
        borderRadius: 10,

        padding: 17,
        marginHorizontal: 'auto',
        marginBottom: 10,
    },
});
