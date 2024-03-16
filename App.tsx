import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenSetting from "./screens/setting";
import ScreenHome from "./screens/home";
import ScreenArticle from "./screens/article";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={ScreenHome} />
                <Stack.Screen name="Setting" component={ScreenSetting} />
                <Stack.Screen name="Article" component={ScreenArticle} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
