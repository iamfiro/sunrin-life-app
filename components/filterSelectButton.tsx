import { ReactNode } from "react";
import { StyleSheet, Pressable, Text } from "react-native";

interface FilterSelectButtonProps {
    children?: ReactNode;
    onPress: () => void;
    selected: boolean;
}

export default function FilterSelectButton({ children, onPress, selected }: FilterSelectButtonProps) {
    return (
        <Pressable style={[style.button, selected ? style.buttonSelected : null]}>
            <Text style={[style.text, selected ? style.textSelected : null]}>
                {children}
            </Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',

        paddingVertical: 10,
        paddingHorizontal: 20,

        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#ededed",

        backgroundColor: 'white',

        marginLeft: 17.5,
        marginRight: -9.5,
    },
    buttonSelected: {
        backgroundColor: "#04C28F",
    },
    text: {
        color: 'black',
    },
    textSelected: {
        color: 'white',
    }
})