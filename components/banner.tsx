import { View, StyleSheet, Image } from "react-native";

/* Props for the Banner component. */
interface BannerProps {
    imgUrl: string;
}

/**
 * Renders a banner component with an image.
 *
 * @param {string} imgUrl - The URL of the image to be displayed in the banner.
 * @returns {JSX.Element} The rendered banner component.
 */
export default function Banner({ imgUrl }: BannerProps) {
    return (
        <View style={style.container}>
            <Image source={{ uri: imgUrl }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
        </View>
    )
}

/* Styles for the banner component. */
const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        height: 110,

        backgroundColor: "#dadada",

        marginHorizontal: 20,

        borderRadius: 10,
    },
});
