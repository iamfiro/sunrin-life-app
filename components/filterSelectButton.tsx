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

/**
 * Styles for the filter select button component.
 */
const style = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',

        paddingVertical: 8,
        paddingHorizontal: 15,

        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ededed",

        backgroundColor: 'white',

        marginRight: 8,
        // marginRight: -9.5,
    },
    buttonSelected: {
        backgroundColor: "#477AFF",
    },
    text: {
        color: 'black',

        fontSize: 13,
    },
    textSelected: {
        color: 'white',
    }
})