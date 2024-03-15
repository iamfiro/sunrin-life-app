import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import Title from "../components/title";
import HomeSchoolDataList from "../components/home/schoolDataList";
import HomearticleList from "../components/home/articleList";

export default function ScreenHome({ navigation }: any) {
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
				<View style={{ backgroundColor: '#04C28F' }}>
					<View style={style.top}>
                    <Title size={5} color="#ffffff" weight="300">1학년 6반</Title>
					</View>
					<View style={{ paddingLeft: 17.5, paddingRight: 17.5 }}>
                        <Title size={1} color="#ffffffad" weight="300">졸음이 오는 오후</Title>
                        <Title size={1} color="#fff" weight="500">마지막까지 우다다ㅏㄷㄱ 😎</Title>
					</View>
                    <View style={style.bottom}>
                        <View style={style.progressDataContainer}>
                            <Title size={5} color="#ffffffe0" weight="200">1교시 쉬는시간 🏃</Title>
                            <Title size={5} color="#ffffffe0" weight="200">🕐 32분 남음</Title>
                        </View>
                        <View style={style.progressContainer}>
                            <View style={{ backgroundColor: "#ffffffd0", height: 18, width: '50%', borderRadius: 100 }} />
                        </View>
                    </View>
				</View>
                <HomeSchoolDataList navigation={navigation} />
				<HomearticleList navigation={navigation} />
			</ScrollView>
			<StatusBar backgroundColor={"#04C28F"} barStyle={"light-content"} />
		</>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: "#fff",

		paddingBottom: 100,
	},

	top: {
		height: 50,

		justifyContent: "center",

		paddingLeft: 17.5,
		paddingRight: 17.5,
	},

    bottom: {
        height: 110,

        paddingLeft: 17.5,
		paddingRight: 17.5,
		paddingBottom: 23,

        justifyContent: "flex-end",
    },

    progressDataContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        
        marginBottom: 12,
    },
    progressContainer: {
        backgroundColor: "#00906a",

        height: 25,
        width: '100%',

        borderRadius: 100,

        padding: 3,

        justifyContent: "center",
    },

    section: {
        padding: 17.5,
        paddingTop: 30,
        paddingBottom: 30,
    },
    
    editButton: {

    }
});
