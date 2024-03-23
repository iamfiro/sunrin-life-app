import { NavigationContainer } from "@react-navigation/native";
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
import ScreenCredit from "./screens/credit";
import { useCallback } from "react";
import { FontList } from "./screens";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

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

    SplashScreen.preventAutoHideAsync();

	const [fontsLoaded, fontError] = useFonts(FontList);

	useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		} else return null;
	}, [fontsLoaded, fontError]);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Credit">
                <Stack.Screen name="Home" component={ScreenHome} />
                <Stack.Screen name="WidgetSetting" component={ScreenWidgetSetting} />
                <Stack.Screen name="Article" component={ScreenArticle} />
                <Stack.Screen name="ArticleList" component={ScreenArticleList} />
                <Stack.Screen name="Menu" component={ScreenMenu} />
                <Stack.Screen name="Community" component={ScreenCommunity} />
                <Stack.Screen name="Competition" component={ScreenCompetitionList} />
                <Stack.Screen name="Welcome" component={ScreenWelcome} />
                <Stack.Screen name="Credit" component={ScreenCredit} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Sentry.wrap(App)