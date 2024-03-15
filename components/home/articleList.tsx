import { View, StyleSheet, ScrollView } from "react-native";
import Title from "../title";
import { IDefaultScreenProps } from "../../types/screen";
import FilterSelectButton from "../filterSelectButton";

export default function HomeArticleList({ navigation }: IDefaultScreenProps) {
    return (
        <View style={style.section}>
            <Title size={4} color="#000" weight="300">최근에 올라온 공지</Title>
            <ScrollView style={style.filterContainer} horizontal>
                <FilterSelectButton onPress={() => { }} selected={true}>🗂️  전체</FilterSelectButton>
                <FilterSelectButton onPress={() => { }} selected={false}>📢  공지</FilterSelectButton>
                <FilterSelectButton onPress={() => { }} selected={false}>📄  숙제</FilterSelectButton>
                <FilterSelectButton onPress={() => { }} selected={false}>❕  확인 안 됨</FilterSelectButton>
                <FilterSelectButton onPress={() => { }} selected={false}>✅  확인됨</FilterSelectButton>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    section: {
        padding: 17.5,
        paddingTop: 0,
        paddingBottom: 30,
    },
    filterContainer: {
        flexDirection: "row",
        marginTop: 15,
    }
})