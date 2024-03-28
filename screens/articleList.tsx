import { StyleSheet, ScrollView, StatusBar, View, Text, TextInput } from "react-native";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import FilterSelectButton from "../components/filterSelectButton";
import HomeArticleList from "../components/home/articleList";

/**
 * Renders the screen for the article list.
 * 
 * @param {object} route - The route object containing navigation information.
 * @param {object} navigation - The navigation object for navigating between screens.
 * @returns {JSX.Element} The rendered article list screen.
 */

export default function ScreenArticleList({ route, navigation }: any) {
    return (
        <>
        <ScrollView style={style.container}>
            <NavigationButton onClick={() => navigation.pop()} text="공지 리스트" />
            <View style={style.ArticleSearchContainer}>
                <TextInput style={style.input} placeholder="검색어를 입력하세요" />
            </View>
            <ScrollView style={style.ArticleFilterContainer} horizontal>
                <FilterSelectButton onPress={() => { }} selected={true}>🗂️  전체</FilterSelectButton>
                <FilterSelectButton onPress={() => { }} selected={false}>📢  공지</FilterSelectButton>
                <FilterSelectButton onPress={() => { }} selected={false}>📄  숙제</FilterSelectButton>
            </ScrollView>
            <View style={{ paddingHorizontal: 20 }}>
                <HomeArticleList navigation={navigation} />
            </View>
            <View style={{ height: 70 }} />
        </ScrollView>
        <StatusBar backgroundColor={"#F6F6F9"} barStyle={"dark-content"} />
        </>
    )
}

/* Styles for the ArticleList screen. */
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6F6F9",
    },

    /* Styles for the article search container. */
    ArticleSearchContainer: {
        flexDirection: "row",
        
        marginBottom: 15,
        marginHorizontal: 20,
    },

    /* Styles for the input field in the article search container. */
    input: {
        width: "100%",

        backgroundColor: "#fff",
        
        borderColor: '#f4f4f4',
        borderWidth: 1,
        borderRadius: 13,

        paddingHorizontal: 15,
        paddingVertical: 10,

        fontSize: 15,
        fontFamily: 'Wanted Sans Medium',

        shadowColor: '#0000002d',
        elevation: 20,
    },

    /* Styles for the article filter container. */
    ArticleFilterContainer: {
        flexDirection: "row",
        marginVertical: 13,
        marginLeft: 20,
        marginTop: 0,
    }
})