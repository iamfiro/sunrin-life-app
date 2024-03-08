import { View, Text, StyleSheet, Image } from "react-native";
import Logo from '../assets/images/sunrin-logo.png'
import { style } from "../lib/style";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function Header() {

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.schoolIcon} />
            <Text style={styles.schoolName}>선린인터넷고등학교</Text>
            <Text style={styles.schoolClass}>1학년 6반</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        flexDirection: 'row',
    },
    schoolIcon: {
        width: 30,
        height: 30,
        marginTop: 3,
    },
    schoolName: {
        fontSize: 20,
        fontWeight: '800',
        letterSpacing: -1,
        marginLeft: 5,
    },
    schoolClass: {
        fontSize: 20,
        fontWeight: '500',
        letterSpacing: -1,
        marginLeft: 5,
        color: style.colors.textTransparent,
    }
});