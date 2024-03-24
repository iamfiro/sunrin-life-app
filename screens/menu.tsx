import { StatusBar, Text, StyleSheet, ScrollView, View, TouchableOpacity, Image, ImageSourcePropType, Linking } from "react-native";
import BottomNavigation from "../components/bottomNavigation";
import { IDefaultScreenProps } from "../types/screen";
import Title from "../components/title";
import NavigationButton from "../components/navigationButton";
import Icon from "react-native-vector-icons/AntDesign";
import WidgetImage from '../assets/icon/menu/widget.png';
import InstagramImage from '../assets/icon/menu/instagram.png';
import DeveloperImage from '../assets/icon/menu/developer.png';
import Button from "../components/button";

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
 * Renders a menu item component.
 *
 * @param {MenuItemProps} props - The props for the menu item.
 * @param {string} props.title - The title of the menu item.
 * @param {ImageSourcePropType} props.icon - The icon for the menu item.
 * @param {() => void} props.onPress - The function to be called when the menu item is pressed.
 * @returns {JSX.Element} The rendered menu item component.
 */
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
    return (
        <>
        <ScrollView style={style.container}>
            <NavigationButton onClick={() => navigation.navigate("Home")} />
            <View style={{ paddingHorizontal: 17.5, marginTop: 10 }}>
                <Title size={3} color="#000000" weight="400" marginBottom={20}>기본 설정</Title>
                <MenuItem title="메인 화면 위젯 설정" icon={WidgetImage} onPress={() => navigation.navigate("WidgetSetting")} />
                <Title size={3} color="#000000" weight="400" marginBottom={20} marginTop={20}>기타</Title>
                <MenuItem title="공식 인스타그램" icon={InstagramImage} onPress={() => Linking.openURL("https://www.instagram.com/sunrin_life")} />
                <MenuItem title="개발자 정보" icon={DeveloperImage} onPress={() => navigation.navigate("Credit")} />
                <View style={{ height: 20 }} />
                <Button type="primary" text="문의하기" onClick={() => { Linking.openURL("https://www.instagram.com/sunrin_life")}} />
                <View style={{ height: 5 }} />
                <Button type="secondary" text="앱 로그아웃" onClick={() => { }} />
                <Title size={6} color="#9d9d9d" weight="200" marginTop={20}>애플리케이션 버전 1.0.0</Title>
            </View>
        </ScrollView>
        <BottomNavigation pageName="Menu" navigation={navigation} />
		<StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </>
    )
}

/* Styles for the menu screen. */
const style = StyleSheet.create({
    /* The container style for the menu screen. */
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    /* The container style for each menu item. */
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    /* The style for the left side of each menu item. */
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    /* The container style for the menu item image. */
    imageContainer: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    /* The style for the menu item image. */
    itemImage: {
        width: 25,
        height: 25,
    }
})