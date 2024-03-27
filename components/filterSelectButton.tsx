import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

/**
 * Props for the FilterSelectButton component.
 */
interface FilterSelectButtonProps {
    children?: ReactNode;
    onPress: () => void;
    selected: boolean;
}

/**
 * A button component used for filtering and selecting options.
 *
 * @param children - The content of the button.
 * @param onPress - The function to be called when the button is pressed.
 * @param selected - A boolean value indicating whether the button is selected or not.
 * @returns The rendered button component.
 */
export default function FilterSelectButton({ children, onPress, selected }: FilterSelectButtonProps) {
    return (
        <TouchableOpacity style={[style.button, selected ? style.buttonSelected : null]}>
            <Text style={[style.text, selected ? style.textSelected : null]}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

/**
 * Styles for the filter select button component.
 */
const style = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',

        paddingVertical: 9,
        paddingHorizontal: 17,

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

        fontSize: 14,
    },
    textSelected: {
        color: 'white',
    }
})