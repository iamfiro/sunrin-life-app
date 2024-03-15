import { View, TouchableOpacity, StyleSheet } from "react-native";
import Title from "../title";
import { IDefaultScreenProps } from "../../types/screen";

export default function HomearticleList({ navigation }: IDefaultScreenProps) {
    return (
        <View style={style.section}>
            <Title size={4} color="#000" weight="300">지금 선린고는..? 🏫</Title>
        </View>
    )
}

const style = StyleSheet.create({
    section: {
        padding: 17.5,
        paddingTop: 0,
        paddingBottom: 30,
    }
})