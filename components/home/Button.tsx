import { View, Text, StyleSheet, Image } from "react-native";
import Trophy from '../../assets/images/icons/trophy.png'
import { style } from "../../lib/style";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import TouchableScale from 'react-native-touchable-scale';

export default function CompetitionButtton() {
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
        paddingTop: 15,
        paddingBottom: 15,

        borderRadius: 20,
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
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: -1,
    },
    itemDescription: {
        fontSize: 13,
        color: style.colors.textTransparent,
        fontWeight: '400',
        marginTop: 1,
        letterSpacing: -.5,
    },
    rightIcon: {
        marginLeft: 'auto',
    }
});