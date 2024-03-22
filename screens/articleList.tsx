import { StyleSheet, ScrollView, StatusBar, View, Text } from "react-native";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import Badge from "../components/badge";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import BottomNavigation from "../components/bottomNavigation";
import FilterSelectButton from "../components/filterSelectButton";
import HomeArticleList from "../components/home/articleList";

export default function ScreenArticleList({ route, navigation }: any) {
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
            <NavigationButton onClick={() => navigation.pop()} />
            <View style={{ paddingHorizontal: 17.5, marginTop: 10 }}>
                <Title size={2} color="#000" weight="300">📢  공지 리스트</Title>
                <View style={{ height: 10 }} />
            </View>
            <View style={style.ArticleFilterContainer}>
                <FilterSelectButton onPress={() => { }} selected={true}>🗂️  전체</FilterSelectButton>
                <FilterSelectButton onPress={() => { }} selected={false}>📢  공지</FilterSelectButton>
                <FilterSelectButton onPress={() => { }} selected={false}>📄  숙제</FilterSelectButton>
            </View>
            <View style={{ paddingHorizontal: 17.5 }}>
                <HomeArticleList navigation={navigation} />
            </View>
            <View style={{ height: 70 }} />
        </ScrollView>
        <BottomNavigation pageName="ArticleList" navigation={navigation} />
        <StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: "#fff",
    },

    ArticleFilterContainer: {
		flexDirection: "row",

        marginVertical: 13,
        marginLeft: 17.5,

        backgroundColor: "white",
    }
})