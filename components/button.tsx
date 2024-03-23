import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Title from "./title";

/**
 * Represents the props for the Button component.
 */
interface ButtonProps {
    type: 'primary' | 'secondary';
    text: string;
    onClick: () => void;
}

/**
 * Renders a button component.
 *
 * @param {ButtonProps} props - The button props.
 * @param {string} props.type - The type of the button.
 * @param {string} props.text - The text to display on the button.
 * @param {() => void} props.onClick - The function to call when the button is clicked.
 * @returns {JSX.Element} The rendered button component.
 */
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

/**
 * Styles for different types of buttons.
 */
const buttonStyles = {
    /**
     * Styles for primary buttons.
     */
    primary: {
        buttonStyle: style.primaryButton,
        titleColor: "#ffffff"
    },
    /**
     * Styles for secondary buttons.
     */
    secondary: {
        buttonStyle: style.secondaryButton,
        titleColor: "#50545C"
    }
};