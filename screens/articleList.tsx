import { StyleSheet, ScrollView, StatusBar, View, Text, TextInput } from "react-native";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import BottomNavigation from "../components/bottomNavigation";
import FilterSelectButton from "../components/filterSelectButton";
import HomeArticleList from "../components/home/articleList";
import { FontList } from ".";

/**
 * Renders the screen for the article list.
 * 
 * @param {object} route - The route object containing navigation information.
 * @param {object} navigation - The navigation object for navigating between screens.
 * @returns {JSX.Element} The rendered article list screen.
 */

export default function ScreenArticleList({ route, navigation }: any) {
	SplashScreen.preventAutoHideAsync();

	const [fontsLoaded, fontError] = useFonts(FontList);

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
            <View style={style.ArticleSearchContainer}>
                <TextInput style={style.input} placeholder="검색어를 입력하세요" />
            </View>
            <ScrollView style={style.ArticleFilterContainer} horizontal>
                <FilterSelectButton onPress={() => { }} selected={true}>🗂️  전체</FilterSelectButton>
                <FilterSelectButton onPress={() => { }} selected={false}>📢  공지</FilterSelectButton>
                <FilterSelectButton onPress={() => { }} selected={false}>📄  숙제</FilterSelectButton>
            </ScrollView>
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

    ArticleSearchContainer: {
		flexDirection: "row",

        marginVertical: 13,
        marginHorizontal: 17.5,

        backgroundColor: "white",
    },

    input: {
        width: "100%",

        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 13,

        paddingHorizontal: 15,
        paddingVertical: 10,

        fontSize: 15,
        fontFamily: 'Wanted Sans Medium',
    },

    ArticleFilterContainer: {
		flexDirection: "row",
        
        marginVertical: 13,
        marginLeft: 17.5,
        marginTop: 0,
    }
})