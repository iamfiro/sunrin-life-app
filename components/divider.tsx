import { View, StyleSheet } from "react-native";

export default function Divider() {
    return (
        <View style={style.container} />
    )
}

const style = StyleSheet.create({
	container: {
        height: 8,

        backgroundColor: "#fafafa",
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderColor: "#ededed",
	},
})