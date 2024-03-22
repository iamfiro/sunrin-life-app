import { StatusBar, Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Title from "../components/title";
import { IDefaultScreenProps } from "../types/screen";

export default function ScreenWelcome({ navigation }: IDefaultScreenProps) {
    return (
        <>
        <View style={style.container}>
            <View style={{ width: 100, height: 40, backgroundColor: '#e1e1e1', borderRadius: 8, marginBottom: 15 }} />
            <Title size={1} color="#000000" weight="300">선린라이프에 오신것을{'\n'}환영합니다 🖐️</Title>
            <View style={{ flex: 1, justifyContent: 'center', opacity: 0.35 }}>
                <Title size={2} color="#000000" weight="300">📢  공지</Title>
                <View style={{ height: 30 }} />
                <Title size={2} color="#000000" weight="300">🗨️  커뮤니티</Title>
                <View style={{ height: 30 }} />
                <Title size={2} color="#000000" weight="300">🍤  급식</Title>
                <View style={{ height: 30 }} />
                <Title size={2} color="#000000" weight="300">📅  시간표</Title>
                <View style={{ height: 30 }} />
                <Title size={2} color="#000000" weight="300">🏆  대회 일정</Title>
                <View style={{ height: 30 }} />
                <Title size={2} color="#000000" weight="300">📆  학사 일정</Title>
                <View style={{ height: 30 }} />
                <Title size={2} color="#000000" weight="300">등등 ...</Title>
            </View>
            <TouchableOpacity style={style.googleButton} onPress={() => navigation.navigate("Home")}>
                <Title size={5} color="#ffffff" weight="300">학교 이메일로 로그인</Title>
            </TouchableOpacity>
        </View>
		<StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",

        paddingHorizontal: 17.5,
        paddingVertical: 30,
    },
    googleButton: {
        width: "100%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#477AFF",
        borderRadius: 10,
    }
})