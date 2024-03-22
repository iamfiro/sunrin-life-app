import { View, StyleSheet, Text, Image, ImageSourcePropType } from "react-native";
import Title from "./title";
import HomeIcon from "../assets/icon/home.png";
import HomeGrayIcon from "../assets/icon/home-gray.png";
import MenuIcon from "../assets/icon/menu.png";
import MenuGrayIcon from "../assets/icon/menu-gray.png";
import CommunityIcon from "../assets/icon/community.png";
import CommunityGrayIcon from "../assets/icon/community-gray.png";
import ArticleIcon from "../assets/icon/article.png";
import ArticleGrayIcon from "../assets/icon/article-gray.png";
import { TouchableOpacity } from "react-native";

interface MenuItemProps {
    title: string;
    icon: ImageSourcePropType[];
    onPress: () => void;
    isSelected: boolean;
}

function MenuItem({ title, icon, onPress, isSelected }: MenuItemProps) {
    return (
        <TouchableOpacity style={style(isSelected).itemContainer} onPress={() => onPress()}>
            <Image source={isSelected ? icon[0] : icon[1]} style={style(isSelected).image} />
            <Text style={style(isSelected).title}>{title}</Text>
        </TouchableOpacity>
    )
}

interface BottomNavigationProps {
    pageName: string;
    navigation: any;
}

export default function BottomNavigation({ pageName, navigation }: BottomNavigationProps) {
    return (
        <View style={style(false).container}>
            <MenuItem title="홈" icon={[HomeIcon, HomeGrayIcon]} onPress={() => { navigation.navigate("Home") }} isSelected={pageName === 'Home'} />
            <MenuItem title="공지" icon={[ArticleIcon, ArticleGrayIcon]} onPress={() => { navigation.navigate("ArticleList") }} isSelected={pageName === 'ArticleList'} />
            <MenuItem title="커뮤니티" icon={[CommunityIcon, CommunityGrayIcon]} onPress={() => { navigation.navigate("Community") }} isSelected={pageName === 'Community'} />
            <MenuItem title="메뉴" icon={[MenuIcon, MenuGrayIcon]} onPress={() => { navigation.navigate("Menu") }} isSelected={pageName === 'Menu'} />
        </View>
    )
}

const style = (selected: boolean) => StyleSheet.create({
    container: {
        height: 65,
        width: '100%',

        position: 'absolute',
        bottom: 0,
        left: 0,

        backgroundColor: '#ffffff',

        borderColor: '#ededed',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
	},

    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 32,
        height: 32,

        marginBottom: 3,
    },
    title: {
        fontSize: 11,
        fontFamily: 'Wanted Sans SemiBold',

        color: selected ? '#000000' : '#9e9e9e',
    }
})