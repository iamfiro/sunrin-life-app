import { StatusBar, Text, StyleSheet, ScrollView, View, TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import BottomNavigation from "../components/bottomNavigation";
import { IDefaultScreenProps } from "../types/screen";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import Title from "../components/title";
import NavigationButton from "../components/navigationButton";
import Icon from "react-native-vector-icons/AntDesign";
import WidgetImage from '../assets/icon/menu/widget.png';

interface MenuItemProps {
    title: string;
    icon: ImageSourcePropType;
    onPress: () => void;
}

function MenuItem({ title, icon, onPress }: MenuItemProps) {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <Image source={icon} />
            <Text>{title}</Text>
            <Icon name="left" size={25} color="#797979" />
        </TouchableOpacity>
    )
}

export default function ScreenMenu({ navigation }: IDefaultScreenProps) {
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
                <Title size={2} color="#000" weight="300">🔨  메뉴</Title>
                <View style={{ height: 10 }} />
            </View>
            <MenuItem title="공지 리스트" icon={WidgetImage} onPress={() => navigation.navigate("ArticleList")} />
        </ScrollView>
        <BottomNavigation pageName="Menu" navigation={navigation} />
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