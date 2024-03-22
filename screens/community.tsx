import { StatusBar, View, StyleSheet, Image } from "react-native";
import BottomNavigation from "../components/bottomNavigation";
import { IDefaultScreenProps } from "../types/screen";
import FrogImage from '../assets/icon/frog.png'
import Title from "../components/title";

export default function ScreenCommunity({ navigation }: IDefaultScreenProps) {
    return (
        <>
        <View style={style.container}>
            <Image source={FrogImage} style={{ width: 70, height: 70 }} />
            <View style={{ height: 20 }} />
            <Title size={5} color="#000" weight="200" textAlign="center">커뮤니티를 활성화 하기에는{'\n'}아직 개구리가 울지 않았어요 (...)</Title>
            <View style={{ height: 10 }} />
            <Title size={5} color="#a1a1a1" weight="200">다른 학급 친구들에게 선린라이프를 많이 알려주세요!</Title>
        </View>
        <BottomNavigation pageName="Community" navigation={navigation} />
		<StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        
        justifyContent: 'center',
        alignItems: 'center',
    }
})