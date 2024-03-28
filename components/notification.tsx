import { StyleSheet, TouchableOpacity, View } from "react-native";
import Title from "./title";

interface NotificationProps {
    text: string;
}

export default function ServiceNotification({ text }: NotificationProps) {
    return (
        <View style={style.container}>
            <View style={style.badge}>
                <Title size={7} color="#e61919" weight="400">공지</Title>
            </View>
            <Title size={6} color="#000000" weight="200">{text}</Title>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",

        height: 50,

		backgroundColor: "#fff",

		marginHorizontal: 20,
        marginBottom: 15,
		paddingVertical: 10,
		paddingHorizontal: 15,

		borderRadius: 15,
    },
    badge: {
        backgroundColor: "#ff000013",

        height: 25,
        width: 40,

        alignItems: "center",
        justifyContent: "center",

        marginRight: 10,

        borderRadius: 5,
    }
})