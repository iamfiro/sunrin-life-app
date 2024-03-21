import { StyleSheet, ScrollView, StatusBar, View, Text } from "react-native";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import Badge from "../components/badge";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

export default function ScreenCompetitionList({ route, navigation }: any) {
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
            <NavigationButton onClick={() => navigation.navigate("Home")} />
            <View style={{ paddingHorizontal: 17.5, marginTop: 10 }}>
                <Title size={2} color="#000" weight="300">🏆  다가오는 대회</Title>
            </View>
        </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: "#fff",
    },
})