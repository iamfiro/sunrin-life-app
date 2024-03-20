import { ReactNode } from "react";
import { Text } from "react-native";

interface TitleProps {
    size: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    color: string;
    weight: '100' | '200' | '300' | '400' | '500' | '600' | '700';
    children?: ReactNode;
}

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

function sizeToFontSize(size: TitleProps['size']) {
    switch (size) {
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

export default function Title({ size, color, weight, children }: TitleProps) {
    return (
        <Text style={{ color, fontSize: sizeToFontSize(size), fontFamily: weightToFontWeight(weight), letterSpacing: -0.5 }}>{children}</Text>
    )
}