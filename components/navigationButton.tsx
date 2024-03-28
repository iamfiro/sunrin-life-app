import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Title from "./title";

/**
 * Props for the NavigationButton component.
 */
interface NavigationButtonProps {
    onClick: () => void;
    text?: string;
}

/**
 * Renders a navigation button component.
 *
 * @param onClick - The function to be called when the button is clicked.
 * @returns The rendered navigation button component.
 */
export default function NavigationButton({ onClick, text }: NavigationButtonProps) {
    return (
        <TouchableOpacity style={style.container} onPress={() => onClick()}>
            <Icon name="left" size={25} color="#797979" />
            <View style={{ width: 15 }} />
            <Title size={4} color="#000000" weight="300">{text}</Title>
        </TouchableOpacity>
    )
}

/**
 * Styles for the navigation button container.
 */
const style = StyleSheet.create({
    container: {
        borderColor: "#f4f4f4",
        // borderBottomWidth: 1,

        height: 70,

        alignItems: "center",

        paddingHorizontal: 20,

        flexDirection: "row",
    }
})