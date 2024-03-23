import { View, StyleSheet, Text, Image, ImageSourcePropType } from "react-native";
import HomeIcon from "../assets/icon/navigation/home.png";
import HomeGrayIcon from "../assets/icon/navigation/home-gray.png";
import MenuIcon from "../assets/icon/navigation/menu.png";
import MenuGrayIcon from "../assets/icon/navigation/menu-gray.png";
import CommunityIcon from "../assets/icon/navigation/community.png";
import CommunityGrayIcon from "../assets/icon/navigation/community-gray.png";
import ArticleIcon from "../assets/icon/navigation/article.png";
import ArticleGrayIcon from "../assets/icon/navigation/article-gray.png";
import { TouchableOpacity } from "react-native";

/**
 * Represents the props for a menu item in the bottom navigation.
 */
interface MenuItemProps {
    /* The title of the menu item. */
    title: string;
    /* The icon(s) for the menu item. */
    icon: ImageSourcePropType[];
    /* The callback function to be called when the menu item is pressed. */
    onPress: () => void;
    /* Indicates whether the menu item is currently selected. */
    isSelected: boolean;
}

/**
 * Renders a menu item with a title, icon, and onPress event handler.
 *
 * @param {MenuItemProps} props - The props for the MenuItem component.
 * @param {string} props.title - The title of the menu item.
 * @param {Array<ImageSourcePropType>} props.icon - The icons for the menu item. The first icon is used when the item is selected, and the second icon is used when it's not selected.
 * @param {() => void} props.onPress - The event handler for when the menu item is pressed.
 * @param {boolean} props.isSelected - Indicates whether the menu item is currently selected.
 * @returns {JSX.Element} The rendered MenuItem component.
 */
function MenuItem({ title, icon, onPress, isSelected }: MenuItemProps) {
    return (
        <TouchableOpacity style={style(isSelected).itemContainer} onPress={() => onPress()}>
            <Image source={isSelected ? icon[0] : icon[1]} style={style(isSelected).image} />
            <Text style={style(isSelected).title}>{title}</Text>
        </TouchableOpacity>
    )
}

/**
 * Props for the BottomNavigation component.
 */
interface BottomNavigationProps {
    pageName: string;
    navigation: any;
}

/**
 * Renders the bottom navigation component.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.pageName - The name of the current page.
 * @param {Object} props.navigation - The navigation object.
 * @returns {JSX.Element} The rendered bottom navigation component.
 */
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

/**
 * Returns the style object for the bottom navigation component.
 * @param selected - Indicates whether the item is selected or not.
 * @returns The style object.
 */
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