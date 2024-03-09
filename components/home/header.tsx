import { View, Text, StyleSheet, Image } from "react-native";
import Logo from '../../assets/images/sunrin-logo.png'
import { style } from "../../lib/style";

export default function Header() {

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.schoolIcon} />
            <View style={styles.schoolDataContainer}>
                <Text style={styles.schoolClass}>1학년 6반</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,

        backgroundColor: '#ffffff',

        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    schoolIcon: {
        width: 30,
        height: 30,
        marginTop: 3,
    },
    schoolDataContainer: {
        flexDirection: 'row',
    },
    schoolClass: {
        fontSize: 16,
        letterSpacing: -1,

        marginLeft: 5,

        color: style.colors.textTransparent,
    }
});