import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Title from "./title";

interface NavigationButtonProps {
    name: string;
}

export default function NavigationButton({ name }: NavigationButtonProps) {
    return (
        <TouchableOpacity style={style.container}>
            <Icon name="left" size={20} color="#000" />
            <View style={{ width: 10 }} />
            <Title size={5} color="#000" weight="300">{name}</Title>
            <Title size={5} color="#9f9f9f" weight="300">으로 이동하기</Title>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        borderColor: "#ededed",
        borderBottomWidth: 1,

        height: 50,

        alignItems: "center",

        paddingHorizontal: 17.5,

        flexDirection: "row",
    }
})