import { ImageSourcePropType, Linking, ScrollView, StyleSheet, View, Image, TouchableOpacity, StatusBar, Dimensions } from "react-native";
import { IDefaultScreenProps } from "../types/screen";
import NavigationButton from "../components/navigationButton";
import Title from "../components/title";
import { DeveloperCredit } from "../assets/json/credit";
import Button from "../components/button";
import BottomNavigation from "../components/bottomNavigation";

interface IDeveloper {
    name: string;
    description: string;
    image: ImageSourcePropType;
    part: string;
    instagram: string;
}

function Developer({ name, description, instagram, image, part }: IDeveloper) {
    return (
        <View style={style.developerContainer}>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                <View>
                    <Title size={3} color="#000" weight="300" marginBottom={5}>{name}</Title>
                    <Title size={5} color="#8d8d8d" weight="200" marginBottom={10}>{part}</Title>
                    <Title size={5} color="#477AFF" weight="200" marginBottom={20}>{description}</Title>
                </View>
                <Image source={image} style={style.image} />
            </View>
            <Button text={`인스타그램`} type="secondary" onClick={() => Linking.openURL(`https://www.instagram.com/${instagram}`)} />
        </View>
    )
}

/**
 * Renders the widget setting screen.
 * 
 * @returns The JSX element representing the widget setting screen.
 */
export default function ScreenCredit({ navigation }: IDefaultScreenProps) {
    return (
        <>
            <ScrollView style={style.container}>
                <NavigationButton onClick={() => navigation.pop()} />
                <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                    <Title size={2} color="#000" weight="300" marginBottom={10}>😺  개발자 정보</Title>
                    {
                        DeveloperCredit.map((developer, index) => {
                            return (
                                <Developer key={index} image={developer.image} name={developer.name} description={developer.description} instagram={developer.instagram} part={developer.part} />
                            )
                        })
                    }
                </View>
            </ScrollView>
		    <StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </>
    )
}

/* Styles for the ArticleList screen. */
const style = StyleSheet.create({
    container: {
        flex: 1,
        
        width: Dimensions.get('window').width,
        maxWidth: 500,

        backgroundColor: "#F6F6F9",

        marginHorizontal: "auto",
    },
    developerContainer: {
        marginTop: 30,
        paddingBottom: 15,
    },
    image: {
        width: 65,
        height: 65,
        borderRadius: 50,
        marginLeft: "auto",
    },
})