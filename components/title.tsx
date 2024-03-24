import { ReactNode } from "react";
import { Text } from "react-native";

/**
 * Props for the Title component.
 */
interface TitleProps {
    size: -10 |-3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    color: string;
    weight: '100' | '200' | '300' | '400' | '500' | '600' | '700';
    children?: ReactNode;
    textAlign?: 'left' | 'center' | 'right';
    marginTop?: number;
    marginBottom?: number;
}

/**
 * Converts the weight value to the corresponding font weight.
 * @param weight - The weight value to convert.
 * @returns The corresponding font weight.
 */
function weightToFontWeight(weight: TitleProps['weight']) {
    switch (weight) {
        case '100':
            return 'Wanted Sans Regular'
        case '200':
            return 'Wanted Sans Medium'
        case '300':
            return 'Wanted Sans SemiBold'
        case '400':
            return 'Wanted Sans Bold'
        case '500':
            return 'Wanted Sans ExtraBold'
        case '600':
            return 'Wanted Sans Black'
        case "700":
            return 'Wanted Sans ExtraBlack'
        default:
            return 'Wanted Sans Regular'
    }
}

/**
 * Converts a size value to a corresponding font size.
 * @param size - The size value to convert.
 * @returns The corresponding font size.
 */
function sizeToFontSize(size: TitleProps['size']) {
    switch (size) {
        case -10:
            return 60
        case -3:
            return 54
        case -2:
            return 48
        case -1:
            return 36
        case 0:
            return 32
        case 1:
            return 27
        case 2:
            return 24
        case 3:
            return 21
        case 4:
            return 18
        case 5:
            return 15
        case 6:
            return 14
        case 7:
            return 12
        case 8:
            return 10
    }
}

/**
 * Renders a title component with customizable size, color, weight, and alignment.
 *
 * @param {Object} props - The component props.
 * @param {number} props.size - The font size of the title.
 * @param {string} props.color - The color of the title.
 * @param {string} props.weight - The font weight of the title.
 * @param {string} props.textAlign - The alignment of the title. Defaults to 'left'.
 * @param {number} props.marginBottom - The margin bottom of the title.
 * @param {number} props.marginTop - The margin top of the title.
 * @param {ReactNode} props.children - The content to be displayed within the title.
 * @returns {JSX.Element} The rendered title component.
 */
export default function Title({ size, color, weight, children, textAlign, marginBottom, marginTop }: TitleProps) {
    return (
        <Text style={{
            color,
            fontSize: sizeToFontSize(size), 
            fontFamily: weightToFontWeight(weight), 
            letterSpacing: -0.5, 
            textAlign: textAlign ?? 'left',
            marginTop,
            marginBottom
        }}>{children}</Text>
    )
}