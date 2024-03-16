import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Title from "./title";

interface ArticleReactProps {
    emoji: string;
    count: number;
    isClicked: boolean;
}

export function ArticleReact({ emoji, count, isClicked }: ArticleReactProps) {
    const backgroundColor = isClicked ? "#04C28F" : "#fff";
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
            return { text: "📢  공지", color: '#8447ff'}
        case "homework":
            return { text: "📄  숙제", color: '#F04438'}
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
            <View style={style.articleTypeWrap}>
                <View style={propsStyle(ArticleTypeData(type).color).container}>
                    <Title size={7} color="#fff" weight="400">{ArticleTypeData(type).text}</Title>
                </View>
                {
                    type === "homework" && <Title size={5} color={ArticleTypeData(type).color} weight="300">2일 남음</Title>
                }
            </View>
            <View>
                <Title size={4} color="#000" weight="300">{title}</Title>
                <View style={{ marginTop: 7 }} />
                <Title size={6} color="#838383" weight="200">{article}</Title>
            </View>
            <View style={{ height: 15 }} />
            <Title size={7} color="#838383" weight="200">2024-03-15</Title>
            <View style={{ flexDirection: "row", marginTop: 9 }}>
                <ArticleReact emoji="👍" count={5} isClicked={true} />
                <ArticleReact emoji="👎" count={0} isClicked={false} />
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#ededed",

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
        width: 71,
        
        backgroundColor: backgroundColor,
        
        paddingHorizontal: 13,
        paddingVertical: 8,

        borderRadius: 8,
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