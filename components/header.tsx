import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { IDefaultScreenProps } from "../types/screen";

/**
 * Renders the header component.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.type - The user type.
 * @param {number} props.classNumber - The class number.
 * @param {string} props.grade - The grade.
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header({ navigation }: IDefaultScreenProps) {
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                <Icon name="menu" size={35} color="#94929E" />
            </TouchableOpacity>
        </View>
    )
}

/**
 * Styles for the header component.
 */
const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        height: 80,
        paddingLeft: 20,
        paddingRight: 20,
    },
})