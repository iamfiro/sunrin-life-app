import { StatusBar, Text, StyleSheet, ScrollView, View, TouchableOpacity, Image, ImageSourcePropType, Linking } from "react-native";
import BottomNavigation from "../components/bottomNavigation";
import { IDefaultScreenProps } from "../types/screen";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import Title from "../components/title";
import NavigationButton from "../components/navigationButton";
import Icon from "react-native-vector-icons/AntDesign";
import WidgetImage from '../assets/icon/menu/widget.png';
import Button from "../components/button";
import { FontList } from ".";

interface MenuItemProps {
    title: string;
    icon: ImageSourcePropType;
    onPress: () => void;
}

function MenuItem({ title, icon, onPress }: MenuItemProps) {
    return (
        <TouchableOpacity style={style.itemContainer} onPress={() => onPress()}>
            <View style={style.itemLeft}>
                <View style={style.imageContainer}>
                    <Image source={icon} style={style.itemImage} />
                </View>
                <View style={{ width: 15 }} />
                <Title size={4} color="#5a5a5a" weight="200">{title}</Title>
            </View>
            <Icon name="right" size={20} color="#797979" />
        </TouchableOpacity>
    )
}

/**
 * Renders the menu screen.
 * @param {IDefaultScreenProps} navigation - The navigation object.
 * @returns {JSX.Element} The rendered menu screen.
 */
export default function ScreenMenu({ navigation }: IDefaultScreenProps) {
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
            <NavigationButton onClick={() => navigation.navigate("Home")} />
            <View style={{ paddingHorizontal: 17.5, marginTop: 10 }}>
                <Title size={3} color="#000000" weight="400">기본 설정</Title>
                <View style={{ height: 20 }} />
                <MenuItem title="메인 화면 위젯 설정" icon={WidgetImage} onPress={() => navigation.navigate("ArticleList")} />
                <MenuItem title="메인 화면 위젯 설정" icon={WidgetImage} onPress={() => navigation.navigate("ArticleList")} />
                <View style={{ height: 20 }} />
                <Button type="primary" text="문의하기" onClick={() => { Linking.openURL("https://www.instagram.com/sunrin_life")}} />
                <View style={{ height: 5 }} />
                <Button type="secondary" text="앱 로그아웃" onClick={() => { Linking.openURL("https://www.instagram.com/sunrin_life")}} />
                <View style={{ height: 20 }} />
                <Title size={3} color="#000000" weight="400"></Title>
            </View>
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
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        marginBottom: 15,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        width: 40,
        height: 40,

        borderRadius: 10,

        backgroundColor: '#f5f5f5',

        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImage: {
        width: 25,
        height: 25,
    }
})