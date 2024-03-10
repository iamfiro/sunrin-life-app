import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Header } from './components/home/Header';
import { Button } from './components/home/Button';
import OnboardWord from './components/home/Title';
import { style } from './lib/style';
import { setCustomText } from 'react-native-global-props';

const customTextProps = {
    style: {
      fontFamily: 'WantedSans'
    }
};

export default function App() {
    setCustomText(customTextProps);
    
    return (
        <SafeAreaView style={styles.container}>
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
        paddingLeft: 15,
        paddingRight: 15,
    },
});
