import { View, Text, StyleSheet, Image } from "react-native";
import Logo from '../../assets/images/sunrin-logo.png'
import { style } from "../../lib/style";

interface HeaderProps {
    type: 'main'
}

export function Header({ type }: HeaderProps) {
    switch (type) {
        case 'main':
            return (
                <View style={styles.mainContainer}>
                    <Image source={Logo} style={styles.mainSchoolIcon} />
                    <Text style={styles.mainSchoolClass}>1학년 6반</Text>
                </View>
            );
        default:
            return <Text>Error: Invalid Header type</Text>
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 60,

        backgroundColor: style.colors.white,

        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    mainSchoolIcon: {
        width: 40,
        height: 40,
        marginTop: 3,
    },
    mainSchoolClass: {
        fontSize: 16,
        letterSpacing: style.letterSpacing.big,

        marginLeft: 5,

        color: style.colors.textTransparent,
    }
});