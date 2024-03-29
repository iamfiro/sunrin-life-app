import { StyleSheet, ScrollView, StatusBar, View, Text, TouchableOpacity, Dimensions } from "react-native";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import Badge from "../components/badge";

/* Represents the props for the ArticleReact component. */
interface ArticleReactProps {
    emoji: string;
    count: number;
    isClicked: boolean;
}

/**
 * Renders a React button component for reacting to an article.
 *
 * @param {ArticleReactProps} props - The props for the ReactButton component.
 * @returns {JSX.Element} The rendered ReactButton component.
 */
function ReactButton({ emoji, count, isClicked }: ArticleReactProps) {
    const handlePress = () => {

    };

    return (
        <TouchableOpacity style={propsStyle(isClicked).reactContainer} onPress={handlePress}>
            <Title size={5} color="#000" weight="200">{emoji}</Title>
            <View style={{ width: 3 }} />
            <Title size={5} color={isClicked ? '#fff' : '#ccc'} weight="200">{count}</Title>
        </TouchableOpacity>
    )
}

interface ArticleAnalyticsProps {

}

// 선생님, 회장, 부회장, 관리자 전용 게시물 통계 컴포넌트
function AdminAnalytics() {
    return (
        <>
        <View style={style.analyticsContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Title size={4} color="#000" weight="300">📊 관리자 전용 도구</Title>
                <Title size={7} color="#727272" weight="200" textAlign="right">선생님, 회장, 부회장만{'\n'}볼 수 있습니다</Title>
            </View>
            <TouchableOpacity style={style.deleteButton}>
                <Title size={6} color="#ffffff" weight="200">게시글 삭제</Title>
            </TouchableOpacity>
            <Title size={5} color="#727272" weight="200" marginTop={20}>조회함</Title>
            <Title size={5} color="#000" weight="200" marginTop={5}>16명</Title>
            <Title size={5} color="#727272" weight="200" marginTop={20} marginBottom={10}>조회한 사람</Title>
            <Title size={5} color="#000" weight="200">10401 강성영후</Title>
            <Title size={5} color="#000" weight="200">10402 곽원영</Title>
            <Title size={5} color="#000" weight="200">10403 권동규</Title>
            <Title size={5} color="#000" weight="200">10404 권지원</Title>
            <Title size={5} color="#000" weight="200">10405 김민겸</Title>
            <Title size={5} color="#000" weight="200">10406 김성호</Title>
            <Title size={5} color="#000" weight="200">10401 강성영후</Title>
            <Title size={5} color="#000" weight="200">10402 곽원영</Title>
            <Title size={5} color="#000" weight="200">10403 권동규</Title>
            <Title size={5} color="#000" weight="200">10404 권지원</Title>
            <Title size={5} color="#000" weight="200">10405 김민겸</Title>
            <Title size={5} color="#000" weight="200">10406 김성호</Title>
            <Title size={5} color="#727272" weight="200" marginBottom={10} marginTop={20}>게시글에 반응한 사람</Title>
            <Title size={5} color="#000" weight="200">10401 강성영후</Title>
            <Title size={5} color="#000" weight="200">10402 곽원영</Title>
            <Title size={5} color="#000" weight="200">10403 권동규</Title>
            <Title size={5} color="#000" weight="200">10404 권지원</Title>
            <Title size={5} color="#000" weight="200">10405 김민겸</Title>
            <Title size={5} color="#000" weight="200">10406 김성호</Title>
            <Title size={5} color="#000" weight="200">10401 강성영후</Title>
            <Title size={5} color="#000" weight="200">10402 곽원영</Title>
            <Title size={5} color="#000" weight="200">10403 권동규</Title>
            <Title size={5} color="#000" weight="200">10404 권지원</Title>
            <Title size={5} color="#000" weight="200">10405 김민겸</Title>
            <Title size={5} color="#000" weight="200">10406 김성호</Title>
        </View>
        </>
    )
}

/**
 * Renders the article screen.
 * 
 * @param {Object} route - The route object containing navigation parameters.
 * @param {Object} navigation - The navigation object for navigating between screens.
 * @returns {JSX.Element} The rendered article screen.
 */

export default function ScreenArticle({ navigation }: any) {
    return (
        <>
        <ScrollView style={style.container}>
            <NavigationButton onClick={() => navigation.navigate("ArticleList")} text="공지" />
            <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                <Title size={6} color="#000000" weight="200">📄  숙제</Title>
                <View style={{ height: 10 }} />
                <Title size={3} color="#000" weight="300">영어 3245p 숙제</Title>
                <Text style={{ fontSize: 16, color: '#585858', fontFamily: 'Wanted Sans Regular', lineHeight: 23, marginTop: 15 }}>국어 전공관련책 2권읽기(8.15){'\n\n'}영어 멘토멘티 최대한 해오기{'\n\n'}컴시일 캔바를이용하여 교과서 한단원 정리후 제출하기(3.18){'\n'}디일 스프링무선노트 가져오기(3.18){'\n\n'}반장 찬양하고 잠들기{'\n\n'}가정통신문{'\n'}-행정정보 공동이용서{'\n'}-방과후 신청서{'\n\n'}급식{'\n'}-후리카케작은밥(?)어묵국{'\n'}국물떡볶이{'\n'}찐순대{'\n'}분식튀김(만두,어묵,김말이){'\n'}단무지{'\n'}복숭아에이드(오우예ㅔㅔ){'\n'}대체찬(백미밥)</Text>
                <ReactButton emoji="👍" count={32} isClicked={false} />
                <View style={{ marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Title size={6} color="#7a7a7a" weight="200">10413 이태겸</Title>
                        <View style={{ width: 5 }} />
                        <Badge type="president" />
                    </View>
                    <View style={{ height: 7 }} />
                    <Title size={6} color="#838383" weight="200">2024-03-15  ·  23명 조회함</Title>
                </View>
                <AdminAnalytics />
                <View style={{ height: 30 }} />
            </View>
        </ScrollView>
        <StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </>
    )
}

/* Styles for the article screen. */
const style = StyleSheet.create({
    /* The main container style. */
    container: {
        flex: 1,

        width: Dimensions.get('window').width,
        maxWidth: 500,

        backgroundColor: "#F6F6F9",

        marginHorizontal: "auto",
    },
    /* The container style for analytics. */
    analyticsContainer: {
        marginTop: 30,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    deleteButton: {
        height: 35,
        width: 100,

        backgroundColor: "#ff4848",

        borderRadius: 8,
        
        marginTop: 20,

        alignItems: 'center',
        justifyContent: 'center',
    },
})

/**
 * Returns the style object for the reactContainer component.
 * @param isClicked - A boolean value indicating whether the component is clicked or not.
 * @returns The style object for the reactContainer component.
 */
const propsStyle = (isClicked: boolean) => StyleSheet.create({
    reactContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        width: 80,
        height: 40,

        backgroundColor: isClicked ? '#477AFF' : '#fff',

        borderColor: "#f4f4f4",
        borderWidth: isClicked ? 0 : 1,
        borderRadius: 100,

        paddingVertical: 5,
        paddingHorizontal: 10,

        marginTop: 15,
    }
})