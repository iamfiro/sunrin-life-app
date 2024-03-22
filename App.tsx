import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenSetting from "./screens/setting";
import ScreenHome from "./screens/home";
import ScreenArticle from "./screens/article";
import ScreenCompetitionList from "./screens/competition";
import ScreenArticleList from "./screens/articleList";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="Home" component={ScreenHome} />
                <Stack.Screen name="Setting" component={ScreenSetting} />
                <Stack.Screen name="Article" component={ScreenArticle} />
                <Stack.Screen name="ArticleList" component={ScreenArticleList} />
                <Stack.Screen name="Competition" component={ScreenCompetitionList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
