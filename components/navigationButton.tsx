import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

interface NavigationButtonProps {
    onClick: () => void;
}

/**
 * Renders a navigation button component.
 *
 * @param onClick - The function to be called when the button is clicked.
 * @returns The rendered navigation button component.
 */
export default function NavigationButton({ onClick }: NavigationButtonProps) {
    return (
        <TouchableOpacity style={style.container} onPress={() => onClick()}>
            <Icon name="left" size={25} color="#797979" />
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        borderColor: "#ededed",
        // borderBottomWidth: 1,

        height: 70,

        alignItems: "center",

        paddingHorizontal: 17.5,

        flexDirection: "row",
    }
})