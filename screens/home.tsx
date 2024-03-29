import { ScrollView, StatusBar, StyleSheet, View, Image, TouchableOpacity, ImageSourcePropType, Linking } from "react-native";
import Title from "../components/title";
import HomeSchoolDataList from "../components/home/schoolDataList";
import HomeArticleList from "../components/home/articleList";
import Header from "../components/header";
import Banner from "../components/banner";
import SchoolImage from "../assets/icon/school.png";
import TrophyImage from "../assets/icon/trophy.png";
import CalendarImage from "../assets/icon/calender.png";
import WeatherImage from "../assets/icon/weather/few-cloud.png";
import ArticleImage from '../assets/icon/navigation/article.png';
import FoodImage from '../assets/icon/menu/food.png';
import InstagramImage from '../assets/icon/menu/instagram.png';
import ServiceNotification from "../components/notification";
import Toast from "../lib/toast";

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
			<Title size={5} color="#000000" weight="400" marginTop={7}>{title}</Title>
			<Image source={icon} style={{ width: 35, height: 35, marginLeft: 'auto' }} />
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
			<ScrollView style={style.container}>
				<Header navigation={navigation} />
				<ServiceNotification text="공지 테스트" />
				<View style={style.section}>
					<Image source={SchoolImage} style={{ width: 42, height: 42 }} />
					<View style={{ flexDirection: "column", marginLeft: 15 }}>
						<Title size={7} color="#94929E" weight="200" marginBottom={3}>선린인터넷고등학교</Title>
						<Title size={4} color="#000000" weight="400">조성주</Title>
					</View>
					<View style={{ flexDirection: "column", marginLeft: 'auto', alignItems: 'flex-end', marginRight: 10 }}>
						<Title size={7} color="#94929E" weight="200" marginBottom={3}>학급</Title>
						<Title size={5} color="#000000" weight="400">1학년 4반</Title>
					</View>
				</View>
				<View style={{ height: 15 }} />
				<HomeSchoolDataList />
				<View style={{ height: 15 }} />
				<Banner imgUrl="https://images.unsplash.com/photo-1709290649154-54c725bd4484?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				<View style={{ height: 15 }} />
				<View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
					<MenuItem title="공지" icon={ArticleImage} onPress={() => navigation.navigate("ArticleList")} />
					<MenuItem title="대회정보" icon={TrophyImage} onPress={() => navigation.navigate("Competition")} />
					<MenuItem title="학사일정" icon={CalendarImage} onPress={() => Toast("🛠️ 아직 개발중인 기능입니다")} />
				</View>
				<View style={{ height: 15 }} />
				<View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
					<MenuItem title="날씨" icon={WeatherImage} onPress={() => navigation.navigate("Weather")} />
					<MenuItem title="급식" icon={FoodImage} onPress={() => navigation.navigate("Food")} />
					<MenuItem title="문의하기" icon={InstagramImage} onPress={() => Linking.openURL(`https://www.instagram.com/sunrin_life`)} />
				</View>
				<View style={{ padding: 20, paddingTop: 30, paddingBottom: 5 }}>
					<Title size={4} color="#000" weight="400" marginBottom={10}>최근에 올라온 공지</Title>
				</View>
				<View style={{ paddingHorizontal: 20, marginBottom: 100 }}>
					<HomeArticleList navigation={navigation} />
				</View>
			</ScrollView>
			<StatusBar backgroundColor={"#F6F6F9"} barStyle={"dark-content"} />
		</>
	);
}

/* Styles for the home screen. */
const style = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: "#F6F6F9",

		maxWidth: 500,

		marginHorizontal: "auto",

		overflow: 'hidden',
	},

	menuItem: {
		backgroundColor: "#fff",

		flexDirection: "column",
		justifyContent: "space-between",
		
		height: 115,
		width: 115,

		padding: 15,
		paddingTop: 10,

		borderRadius: 10,
	},

	section: {
		flexDirection: "row",
		justifyContent: "center",

		backgroundColor: "#fff",

		marginHorizontal: 20,
		paddingVertical: 20,
		paddingHorizontal: 20,

		borderRadius: 15,
	},

	/* Styles for the article filter container. */
	ArticleFilterContainer: {
		flexDirection: "row",
		marginVertical: 13,
	},
});
