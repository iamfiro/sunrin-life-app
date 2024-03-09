import { View, Text, StyleSheet } from "react-native";
import { style } from "../../lib/style";
import { dateToString } from "../../lib/time";

interface TitleProps {
    type: 'main'
}

export default function Title({ type }: TitleProps) {
    const date = new Date();

    switch (type) {
        case 'main':
            return (
                <View style={styles.mainContainer}>
                    <Text style={styles.mainText}>졸음이 오는 오후{'\n'}마지막까지 우다다ㅏㄷㄱ 😎</Text>
                    <Text style={styles.mainCurrentDate}>{date.getFullYear()}년 {date.getMonth()}월 {date.getDate()}일 {dateToString(date)}</Text>
                </View>
            );
        default:
            return <Text>Error: Invalid Title type</Text>
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 20,
        paddingBottom: 20,

        justifyContent: 'center',
    },
    mainText: {
        fontSize: style.fontSize.DisplayXS_24,
        fontWeight: 'bold',
    },
    mainCurrentDate: {
        fontSize: style.fontSize.Text_16,
        color: style.colors.textTransparent,
        marginTop: 5,
    }
});