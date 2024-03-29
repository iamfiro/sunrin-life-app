import { StatusBar, Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import Title from "../components/title";
import { IDefaultScreenProps } from "../types/screen";

/**
 * Renders the welcome screen.
 *
 * @param {IDefaultScreenProps} navigation - The navigation object.
 * @returns {JSX.Element} The rendered welcome screen.
 */
export default function ScreenWelcome({ navigation }: IDefaultScreenProps) {
    const handleLogin = () => {
        navigation.navigate("Home")
    };

    return (
        <>
        <View style={style.container}>
            <View style={{ width: 100, height: 40, backgroundColor: '#e1e1e1', borderRadius: 8, marginBottom: 15 }} />
            <Title size={1} color="#000000" weight="400">선린라이프에 오신것을{'\n'}환영합니다 🖐️</Title>
            <View style={{ flex: 1, justifyContent: 'center', opacity: 0.35 }}>
                <Title size={3} color="#000000" weight="300" marginBottom={25}>📢  공지</Title>
                <Title size={3} color="#000000" weight="300" marginBottom={25}>🗨️  커뮤니티</Title>
                <Title size={3} color="#000000" weight="300" marginBottom={25}>🍤  급식</Title>
                <Title size={3} color="#000000" weight="300" marginBottom={25}>📅  시간표</Title>
                <Title size={3} color="#000000" weight="300" marginBottom={25}>🏆  대회 일정</Title>
                <Title size={3} color="#000000" weight="300" marginBottom={25}>📆  학사 일정</Title>
                <Title size={3} color="#000000" weight="300" marginBottom={25}>등등 ...</Title>
            </View>
            <TouchableOpacity style={style.loginButton} onPress={() => handleLogin()}>
                <Title size={5} color="#ffffff" weight="300">학교 이메일로 로그인</Title>
            </TouchableOpacity>
            <View style={{ height: 15 }} />
            <Title size={6} color="#a1a1a1" weight="300" marginTop={15}>학교 이메일은 @sunrint.hs.kr로 끝나요!{'\n'}신원 확인을 위해 학교 이메일로 로그인 부탁드려요 👏</Title>
        </View>
		<StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </>
    )
}

/* Styles for the Welcome screen. */
const style = StyleSheet.create({
    /* Container style for the Welcome screen. */
    container: {
        flex: 1,
        
        width: Dimensions.get('window').width,
        maxWidth: 500,

        backgroundColor: "#F6F6F9",

        marginHorizontal: "auto",
        
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    /* Style for the Login button. */
    loginButton: {
        width: "100%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#477AFF",
        borderRadius: 10,
    }
})