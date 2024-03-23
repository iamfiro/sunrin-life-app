import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenHome from "./screens/home";
import ScreenArticle from "./screens/article";
import ScreenCompetitionList from "./screens/competition";
import ScreenArticleList from "./screens/articleList";
import ScreenMenu from "./screens/menu";
import ScreenWidgetSetting from "./screens/widgetSetting";
import ScreenCommunity from "./screens/community";
import ScreenWelcome from "./screens/welcome";
import * as Sentry from '@sentry/react-native';
import { useEffect } from "react";

const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  debug: false,
  integrations: [
    new Sentry.ReactNativeTracing({
      routingInstrumentation,
    }),
  ],
});

const Stack = createNativeStackNavigator();

function App() {
    const ref = useNavigationContainerRef();

    useEffect(() => {
        if (ref) {
            routingInstrumentation.registerNavigationContainer(ref);
        }
    }, [ref]);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="Home" component={ScreenHome} />
                <Stack.Screen name="WidgetSetting" component={ScreenWidgetSetting} />
                <Stack.Screen name="Article" component={ScreenArticle} />
                <Stack.Screen name="ArticleList" component={ScreenArticleList} />
                <Stack.Screen name="Menu" component={ScreenMenu} />
                <Stack.Screen name="Community" component={ScreenCommunity} />
                <Stack.Screen name="Competition" component={ScreenCompetitionList} />
                <Stack.Screen name="Welcome" component={ScreenWelcome} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Sentry.wrap(App)