import { StatusBar, Text } from "react-native";
import BottomNavigation from "../components/bottomNavigation";
import { IDefaultScreenProps } from "../types/screen";

export default function ScreenCommunity({ navigation }: IDefaultScreenProps) {
    return (
        <>
        <Text>Community</Text>
        <BottomNavigation pageName="Community" navigation={navigation} />
		<StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </>
    )
}