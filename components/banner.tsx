import { View, StyleSheet, Image } from "react-native";

interface BannerProps {
    imgUrl: string;
}

export default function Banner({ imgUrl }: BannerProps) {
    return (
        <View style={style.container}>
            <Image source={{ uri: imgUrl }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
        </View>
    )
}

const style = StyleSheet.create({
	container: {
        flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",

		height: 150,

        backgroundColor: "#dadada",

        marginHorizontal: 17.5,

        borderRadius: 10,
	},
})