import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Header } from './components/Header';
import { Button } from './components/Button';
import OnboardWord from './components/Title';
import { style } from './lib/style';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

export default function App() {
    SplashScreen.preventAutoHideAsync();

    const [fontsLoaded, fontError] = useFonts({
        'Wanted Sans ExtraBlack': require('./assets/fonts/WantedSans-ExtraBlack.otf'),
        'Wanted Sans Black': require('./assets/fonts/WantedSans-Black.otf'),
        'Wanted Sans ExtraBold': require('./assets/fonts/WantedSans-ExtraBold.otf'),
        'Wanted Sans Bold': require('./assets/fonts/WantedSans-Bold.otf'),
        'Wanted Sans SemiBold': require('./assets/fonts/WantedSans-SemiBold.otf'),
        'Wanted Sans Medium': require('./assets/fonts/WantedSans-Medium.otf'),
        'Wanted Sans Regular': require('./assets/fonts/WantedSans-Regular.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <StatusBar backgroundColor={style.colors.white} barStyle="dark-content" animated={true} />
            <Header type='main' />
            <OnboardWord type='main' />
            <Button />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: style.colors.white,
        paddingLeft: 17.5,
        paddingRight: 17.5,
    },
});
