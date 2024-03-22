import { View, StyleSheet } from "react-native";
import Title from "./title";

interface BottomNavigationProps {
    pageName: string;
}

export default function BottomNavigation({ pageName }: BottomNavigationProps) {
    return (
        <View style={style.container}>
        </View>
    )
}

const style = StyleSheet.create({
	container: {

	},
})