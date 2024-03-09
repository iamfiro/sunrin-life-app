import { Platform, SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import Header from './components/home/header';
import CompetitionButtton from './components/home/Button';
import OnboardWord from './components/home/onboardWord';
import { style } from './lib/style';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={style.colors.white} barStyle="dark-content" animated={true} />
            <Header />
            <OnboardWord />
            <CompetitionButtton />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: style.colors.white,
        paddingLeft: 15,
        paddingRight: 15,
    },
});
