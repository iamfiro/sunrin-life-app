import { ScrollView, StatusBar, StyleSheet, View, Image, TouchableOpacity, ImageSourcePropType, ToastAndroid } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import Title from "../components/title";
import HomeSchoolDataList from "../components/home/schoolDataList";
import HomeArticleList from "../components/home/articleList";
import FilterSelectButton from "../components/filterSelectButton";
import Header from "../components/header";
import Banner from "../components/banner";
import TrophyImage from '../assets/icon/trophy.png';
import CalenderImage from '../assets/icon/calender.png';
import Divider from "../components/divider";

interface MenuItemProps {
	title: string;
	icon: ImageSourcePropType;
	onPress: () => void;
}

function MenuItem({ title, icon, onPress }: MenuItemProps) {
	return (
		<TouchableOpacity style={style.menuItem} onPress={onPress}>
			<Image source={icon} style={{ width: 40, height: 40 }} />
			<View style={{ height: 7 }} />
			<Title size={7} color="#000" weight="300">{title}</Title>
		</TouchableOpacity>
	);

}

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
			<ScrollView style={style.container} onLayout={onLayoutRootView} stickyHeaderIndices={[5]}>
				<Header type="president" grade={1} classNumber={4} />
				<Banner imgUrl="https://images.unsplash.com/photo-1709290649154-54c725bd4484?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				<View style={{ paddingHorizontal: 17.5, paddingVertical: 10, justifyContent: 'center', flexDirection: 'row' }}>
					<MenuItem title="대회 일정" icon={TrophyImage} onPress={() => { }} />
					<MenuItem title="학사 일정" icon={CalenderImage} onPress={() => { ToastAndroid.show('🛠️ 개발중인 구역입니다. 잠시만 이따 방문해주세요 🏃', ToastAndroid.SHORT); }} />
				</View>
				<HomeSchoolDataList navigation={navigation} />
				<View style={{ padding: 17.5, paddingTop: 30, paddingBottom: 10 }}>
					<Title size={4} color="#000" weight="400">최근에 올라온 공지</Title>
				</View>
				<View style={{ backgroundColor: "white" }}>
					<ScrollView style={style.ArticleFilterContainer} horizontal>
						<FilterSelectButton onPress={() => { }} selected={true}>🗂️  전체</FilterSelectButton>
						<FilterSelectButton onPress={() => { }} selected={false}>📢  공지</FilterSelectButton>
						<FilterSelectButton onPress={() => { }} selected={false}>📄  숙제</FilterSelectButton>
						<FilterSelectButton onPress={() => { }} selected={false}>❕  확인 안 됨</FilterSelectButton>
						<FilterSelectButton onPress={() => { }} selected={false}>👁️  확인됨</FilterSelectButton>
					</ScrollView>
				</View>
				<View style={{ paddingHorizontal: 17.5 }}>
					<HomeArticleList navigation={navigation} />
				</View>
				
				<View style={{ height: 50 }} />
			</ScrollView>
			<StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
		</>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: "#fff",

		paddingBottom: 150,
	},

	menuItem: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",

		height: 90,
		width: 85,

		padding: 10,

		borderRadius: 10,
	},

    section: {
        padding: 17.5,
        paddingTop: 30,
        paddingBottom: 30,
    },
    
    ArticleFilterContainer: {
		flexDirection: "row",
        marginVertical: 13,
    }
});
