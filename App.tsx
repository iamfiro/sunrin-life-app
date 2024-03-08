import { Platform, SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import Header from './components/header';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" animated={true} />
            <Header />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight: 15,
    },
});
