/**
 * Renders a button component based on the specified type.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the button ('primary' or 'secondary').
 * @param {string} props.text - The text to display on the button.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} The rendered button component.
 */

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Title from "./title";

interface ButtonProps {
    type: 'primary' | 'secondary';
    text: string;
    onClick: () => void;
}

export default function Button({ type, text, onClick }: ButtonProps) {
    const { buttonStyle, titleColor } = buttonStyles[type] || {};

    if (!buttonStyle || !titleColor) {
        return <Text>Invalid Button Type</Text>;
    }

    return (
        <TouchableOpacity style={buttonStyle} onPress={onClick}>
            <Title size={5} color={titleColor} weight="300">{text}</Title>
        </TouchableOpacity>
    );
}

/**
 * Styles for the button component.
 */
const style = StyleSheet.create({
    /**
     * Styles for the primary button.
     */
    primaryButton: {
        width: "100%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#477AFF",
        borderRadius: 10,
    },
    /**
     * Styles for the secondary button.
     */
    secondaryButton: {
        width: "100%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
    }
});

const buttonStyles = {
    primary: {
        buttonStyle: style.primaryButton,
        titleColor: "#ffffff"
    },
    secondary: {
        buttonStyle: style.secondaryButton,
        titleColor: "#50545C"
    }
};