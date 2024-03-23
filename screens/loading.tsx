import { Image, StatusBar, StyleSheet, View } from "react-native";
import SmurfLogo from '../assets/loading/smurf.png'
import Title from "../components/title";
import { FontList } from ".";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { IDefaultScreenProps } from "../types/screen";

/**
 * Renders the widget setting screen.
 * 
 * @returns The JSX element representing the widget setting screen.
 */
export default function ScreenLoading({ navigation }: IDefaultScreenProps) {
    const [text, setText] = useState("오늘 급식 알아보는 중...");
    const [fontsLoaded, fontError] = useFonts(FontList);

    useEffect(() => {
        SplashScreen.preventAutoHideAsync();
        
        if (fontsLoaded || fontError) {
			navigation.navigate('Home');
		};

        setInterval(() => {
            const textArr = [
                '급식에 스테이크 나올 때까지 존버중',
                '체육시간만 기다리는 중',
                '나는야 모범생',
                '열차가 지연중 입니다',
                '이번역은~ 남영 남영 역입니다',
                '기숙사 건설까지 존버중...',
                '오늘 급식 기대하는 중',
                '이차함수가 뭐지?!',
                '지각 변명 찾는 중...',
                '태정태세문단세... 뭐더라',
                '오늘도 ㄴr는 Com퓨터를 킨ㄷr...',
                '아.. 나도.. 맥북 사고 싶다',
                '남아서 야자 하는 중',
                '이거 끝나면 뭐하지?',
                '오늘이 빨간 날이었으면...',
                '체육대회가 언제였더라',
                '집 가고 싶다',
                '으아악! 교과서 두고왔다...ㅠ',
            ];
            const random = Math.floor(Math.random() * textArr.length);
            setText(textArr[random]);
        }, 2000)
    }, [fontsLoaded, fontError]);

    return (
        <>
            <View style={style.container}>
                <Image source={SmurfLogo} style={{ width: 70, height: 70 }} />
                <Title size={6} color="#979797" weight="200" marginTop={20}>{text}</Title>
            </View>
            <StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",

        alignItems: 'center',
        justifyContent: 'center',
    }
})