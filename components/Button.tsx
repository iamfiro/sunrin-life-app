import { View, Text, StyleSheet, Image } from "react-native";
import Trophy from '../assets/images/icons/trophy.png'
import { style } from "../lib/style";
import { AntDesign } from '@expo/vector-icons';
import TouchableScale from 'react-native-touchable-scale';

export function Button() {
    return (
        <TouchableScale style={styles.container}  activeScale={0.97}>
            <Image source={Trophy} style={styles.itemIcon} />
            <View style={styles.left}>
                <Text style={styles.itemTitle}>다가오는 대회 보기 🏆</Text>
                <Text style={styles.itemDescription}>이번엔 우승 기기?</Text>
            </View>
            <AntDesign name="right" size={22} color={style.colors.gray200} style={styles.rightIcon} />
        </TouchableScale>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',

        padding: 15,

        borderRadius: style.radius.button,
        borderWidth: 1,
        borderColor: style.colors.border,
    },
    left: {
        marginLeft: 10,
    },
    itemIcon: {
        width: 50,
        height: 50,
    },
    itemTitle: {
        fontSize: style.fontSize.Text_16,
        fontFamily: style.font.WantedSans600,
        letterSpacing: style.letterSpacing.big,
    },
    itemDescription: {
        color: style.colors.textTransparent,

        fontFamily: style.font.WantedSans400,
        fontSize: style.fontSize.Text_14,

        marginTop: 1,

        letterSpacing: style.letterSpacing.small,
    },
    rightIcon: {
        marginLeft: 'auto',
    }
});