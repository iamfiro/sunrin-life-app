import { Platform, SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import Header from './components/home/header';
import CompetitionButtton from './components/home/Button';
import OnboardWord from './components/home/onboardWord';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" animated={true} />
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
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight: 15,
    },
});
