import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Title from "./title";

/* Props for the ArticleReact component. */
interface ArticleReactProps {
    emoji: string;
    count: number;
    isClicked: boolean;
}

/**
 * Renders an article component in React.
 * 
 * @param {ArticleReactProps} props - The props for the component.
 * @param {string} props.emoji - The emoji to display.
 * @param {number} props.count - The count to display.
 * @param {boolean} props.isClicked - Indicates whether the article is clicked or not.
 * @returns {JSX.Element} The rendered article component.
 */
export function ArticleReact({ emoji, count, isClicked }: ArticleReactProps) {
    const backgroundColor = isClicked ? "#477AFF" : "#fff";
    return (
        <View style={propsStyle(backgroundColor).reactContainer}>
            <Title size={7} color={isClicked ? "#fff" : "#000"} weight="200" marginBottom={3}>{emoji}</Title>
            <Title size={7} color={isClicked ? "#fff" : "#000"} weight="200">{count}</Title>
        </View>
    )
}

/**
 * Returns the text and color based on the provided article type.
 * @param type - The type of the article.
 * @returns An object containing the text and color for the article type.
 */
function ArticleTypeData(type: ArticleProps['type']) {
    switch (type) {
        case "notice":
            return { text: "공지", color: '#8447ff'}
        case "homework":
            return { text: "숙제", color: '#F04438'}
    }
}

/* Represents the props for the Article component. */
interface ArticleProps {
    title: string;
    article: string;
    type: "notice" | "homework";
    id: string;
    navigation: any;
}

/**
 * Renders an article component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the article.
 * @param {string} props.article - The content of the article.
 * @param {string} props.type - The type of the article.
 * @param {string} props.id - The ID of the article.
 * @param {Object} props.navigation - The navigation object.
 * @returns {JSX.Element} The rendered article component.
 */
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
                    {/* TODO: 가운뎃 점 위치 변경 */}
                    {
                        type === "homework" && <Title size={7} color={ArticleTypeData(type).color} weight="200">2일 남음</Title>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

/**
 * Styles for the article component.
 */
const style = StyleSheet.create({
    /* Style for the container of the article. */
    container: {
        borderWidth: 1,
        borderColor: "#f4f4f4",
        borderRadius: 15,
        padding: 20,
        marginBottom: 15,
    },
    /* Style for the article type wrap. */
    articleTypeWrap: {
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

/**
 * Creates a StyleSheet object with styles for the article component.
 * 
 * @param backgroundColor - The background color for the article component.
 * @returns A StyleSheet object with styles for the article component.
 */
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

        borderColor: "#f4f4f4",
        borderWidth: backgroundColor === "04C28F" ? 0 : 1,
        borderRadius: 100,

        paddingVertical: 5,
        paddingHorizontal: 10,

        marginRight: 6,
    }
})