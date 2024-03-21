import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Title from "./title";

interface NavigationButtonProps {
    name: string;
}

export default function NavigationButton({ name }: NavigationButtonProps) {
    return (
        <TouchableOpacity style={style.container}>
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