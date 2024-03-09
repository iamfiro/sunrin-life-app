import { View, Text, StyleSheet } from "react-native";
import { style } from "../../lib/style";
import { dateToString } from "../../lib/time";

export default function OnboardWord() {
    const date = new Date();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>졸음이 오는 오후{'\n'}마지막까지 우다다ㅏㄷㄱ 😎</Text>
            <Text style={styles.time}>{date.getFullYear()}년 {date.getMonth()}월 {date.getDate()}일 {dateToString(date)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,

        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 17,
        color: style.colors.textTransparent,
        marginTop: 5,
    }
});