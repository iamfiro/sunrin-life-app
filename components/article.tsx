import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Title from "./title";

interface ArticleReactProps {
    emoji: string;
    count: number;
    isClicked: boolean;
}

export function ArticleReact({ emoji, count, isClicked }: ArticleReactProps) {
    const backgroundColor = isClicked ? "#477AFF" : "#fff";
    return (
        <View style={propsStyle(backgroundColor).reactContainer}>
            <Title size={7} color={isClicked ? "#fff" : "#000"} weight="200">{emoji}</Title>
            <View style={{ width: 3 }} />
            <Title size={7} color={isClicked ? "#fff" : "#000"} weight="200">{count}</Title>
        </View>
    )
}

function ArticleTypeData(type: ArticleProps['type']) {
    switch (type) {
        case "notice":
            return { text: "공지", color: '#8447ff'}
        case "homework":
            return { text: "숙제", color: '#F04438'}
    }
}

interface ArticleProps {
    title: string;
    article: string;
    type: "notice" | "homework";
    id: string;
    navigation: any;
}

export default function Article({ title, article, type, id, navigation }: ArticleProps) {
    return (
        <TouchableOpacity style={style.container} onPress={() => navigation.navigate("Article", { id })}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <Title size={5} color="#000" weight="300">{title}</Title>
                <View style={propsStyle(`${ArticleTypeData(type).color}15`).container}>
                    <Title size={8} color={ArticleTypeData(type).color} weight="400">{ArticleTypeData(type).text}</Title>
                </View>
            </View>
            <View style={{ marginTop: 5 }} />
            <Title size={7} color="#838383" weight="200">{article}</Title> 
            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <View style={{ flexDirection: "row", marginTop: 9, alignItems: 'center' }}>
                    <Title size={7} color="#b1b1b1" weight="200">좋아요 23개  ·  2024-03-15  ·  </Title>
                    {
                        type === "homework" && <Title size={7} color={ArticleTypeData(type).color} weight="200">2일 남음</Title>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#f4f4f4",

        borderRadius: 15,

        padding: 20,

        marginBottom: 15,
    },
    articleTypeWrap: {
        marginBottom: 12,

        flexDirection: "row",
        justifyContent: "space-between",
    },
});

const propsStyle = (backgroundColor: string) => StyleSheet.create({
    container: {
        backgroundColor: backgroundColor,
        
        paddingHorizontal: 10,
        paddingVertical: 5,

        borderRadius: 6,
    },
    reactContainer: {
        flexDirection: "row",
        alignItems: "center",

        backgroundColor: backgroundColor,

        borderColor: "#ededed",
        borderWidth: backgroundColor === "04C28F" ? 0 : 1,
        borderRadius: 100,

        paddingVertical: 5,
        paddingHorizontal: 10,

        marginRight: 6,
    }
})