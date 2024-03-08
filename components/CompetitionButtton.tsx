import { View, Text, StyleSheet, Image } from "react-native";
import Trophy from '../assets/images/icons/trophy.png'
import { style } from "../lib/style";
import { AntDesign } from '@expo/vector-icons';

export default function CompetitionButtton() {

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.itemTitle}>곧 다가오는 경진 대회</Text>
                <Text style={styles.itemDescription}>곧 진행되는 경진 대회를 한 눈에 알려드립니다</Text>
            </View>
            <Image source={Trophy} style={styles.itemIcon} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: style.colors.gray050,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: style.colors.border,
    },
    left: {
        
    },
    itemIcon: {
        width: 50,
        height: 50,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: -1,
    },
    itemDescription: {
        fontSize: 13,
        color: style.colors.textTransparent,
        marginTop: 3,
    }
});