import { ScrollView, StatusBar, StyleSheet, View, Image, TouchableOpacity, ImageSourcePropType, ToastAndroid, Dimensions } from "react-native";
import Title from "../components/title";
import HomeSchoolDataList from "../components/home/schoolDataList";
import HomeArticleList from "../components/home/articleList";
import FilterSelectButton from "../components/filterSelectButton";
import Header from "../components/header";
import Banner from "../components/banner";
import TrophyImage from '../assets/icon/trophy.png';
import CalenderImage from '../assets/icon/calender.png';
import BottomNavigation from "../components/bottomNavigation";
import WeatherImage from '../assets/icon/weather/sun.png';
import FoodImage from '../assets/icon/menu/food.png';

/* Represents the props for a menu item. */
interface MenuItemProps {
	/* The title of the menu item. */
	title: string;
	/* The icon of the menu item. */
	icon: ImageSourcePropType;
	/* The callback function to be called when the menu item is pressed. */
	onPress: () => void;
}

/**
 * Renders a menu item with a title, icon, and onPress event handler.
 *
 * @param {MenuItemProps} props - The props object containing the title, icon, and onPress function.
 * @returns {JSX.Element} The rendered menu item component.
 */
function MenuItem({ title, icon, onPress }: MenuItemProps) {
	return (
		<TouchableOpacity style={style.menuItem} onPress={onPress}>
			<Image source={icon} style={{ width: 43, height: 43 }} />
			<Title size={7} color="#4c4c4c" weight="300" marginTop={7}>{title}</Title>
		</TouchableOpacity>
	);
}

/**
 * Renders the home screen.
 * 
 * @param navigation - The navigation object.
 * @returns The rendered home screen.
 */

export default function ScreenHome({ navigation }: any) {
	return (
		<>
			<ScrollView style={style.container} stickyHeaderIndices={[5]}>
				<Header type="president" grade={1} classNumber={4} />
				<Banner imgUrl="https://images.unsplash.com/photo-1709290649154-54c725bd4484?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				<View style={{ paddingHorizontal: 20, paddingVertical: 25, justifyContent: 'center', flexDirection: 'row' }}>
					<MenuItem title="대회 일정" icon={TrophyImage} onPress={() => { navigation.navigate("Competition") }} />
					<MenuItem title="학사 일정" icon={CalenderImage} onPress={() => { ToastAndroid.show('🛠️ 개발중인 구역입니다. 잠시만 이따 방문해주세요 🏃', ToastAndroid.SHORT); }} />
					<MenuItem title="학교 날씨" icon={WeatherImage} onPress={() => { navigation.navigate("Weather") }} />
					<MenuItem title="학교 급식" icon={FoodImage} onPress={() => { navigation.navigate("Food") }} />
				</View>
				<HomeSchoolDataList navigation={navigation} />
				<View style={{ padding: 20, paddingTop: 30, paddingBottom: 10 }}>
					<Title size={4} color="#000" weight="400" marginBottom={10}>최근에 올라온 공지</Title>
				</View>
				<View style={{ paddingHorizontal: 20, marginBottom: 100 }}>
					<HomeArticleList navigation={navigation} />
				</View>
			</ScrollView>
			<BottomNavigation pageName="Home" navigation={navigation} />
			<StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
		</>
	);
}

/* Styles for the home screen. */
const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
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
		padding: 20,
		paddingTop: 30,
		paddingBottom: 30,
	},

	/* Styles for the article filter container. */
	ArticleFilterContainer: {
		flexDirection: "row",
		marginVertical: 13,
	},
});
