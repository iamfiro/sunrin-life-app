import { StyleSheet, ScrollView, StatusBar, View, Text } from "react-native";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import Badge from "../components/badge";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

export default function ScreenArticle({ route, navigation }: any) {
    // if(!route.params) return navigation.navigate("Home");
    // const { id } = route.params;

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

	if (!fontsLoaded && !fontError) {
		return null;
	}

    return (
        <>
        <ScrollView style={style.container} onLayout={onLayoutRootView}>
            <NavigationButton name="홈" />
            <View style={{ paddingHorizontal: 17.5, marginTop: 10 }}>
                <Title size={6} color="#000000" weight="200">📄  숙제</Title>
                <View style={{ height: 10 }} />
                <Title size={3} color="#000" weight="300">영어 3245p 숙제</Title>
                <Text style={{ fontSize: 16, color: '#585858', fontFamily: 'Wanted Sans Regular', lineHeight: 23, marginTop: 15 }}>국어 전공관련책 2권읽기(8.15){'\n\n'}영어 멘토멘티 최대한 해오기{'\n\n'}컴시일 캔바를이용하여 교과서 한단원 정리후 제출하기(3.18){'\n'}디일 스프링무선노트 가져오기(3.18){'\n\n'}반장 찬양하고 잠들기{'\n\n'}가정통신문{'\n'}-행정정보 공동이용서{'\n'}-방과후 신청서{'\n\n'}급식{'\n'}-후리카케작은밥(?)어묵국{'\n'}국물떡볶이{'\n'}찐순대{'\n'}분식튀김(만두,어묵,김말이){'\n'}단무지{'\n'}복숭아에이드(오우예ㅔㅔ){'\n'}대체찬(백미밥)</Text>
                <View style={{ marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Title size={6} color="#7a7a7a" weight="200">10413 이태겸</Title>
                        <View style={{ width: 5 }} />
                        <Badge type="president" />
                    </View>
                    <View style={{ height: 7 }} />
                    <Title size={6} color="#838383" weight="200">2024-03-15  ·  23명 조회함</Title>
                </View>
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
})