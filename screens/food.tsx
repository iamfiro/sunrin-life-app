import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { IDefaultScreenProps } from "../types/screen";

/**
 * Renders the widget setting screen.
 * 
 * @returns The JSX element representing the widget setting screen.
 */
export default function ScreenFood({ navigation }: IDefaultScreenProps) {
    return (
        <>
            <ScrollView style={style.container}>
                
            </ScrollView>
            <StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});