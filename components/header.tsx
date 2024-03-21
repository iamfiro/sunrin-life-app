import { View, StyleSheet } from "react-native";
import Title from "./title";

interface HeaderProps {
    type: 'teacher' | 'president' | 'twoPresident';
    grade: number;
    classNumber: number;
}

function typeToKorean(type: HeaderProps['type']) {
    switch (type) {
        case 'teacher':
            return '선생님';
        case 'president':
            return '반장';
        case 'twoPresident':
            return '부반장';
    }

}

/**
 * Renders the header component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the account.
 * @param {number} props.classNumber - The class number.
 * @param {number} props.grade - The grade level.
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header({ type, classNumber, grade }: HeaderProps) {
    return (
        <View style={style.container}>
            <View style={{ marginBottom: 5 }}>
                <Title size={4} color="#000000" weight="400">선린라이프 β</Title>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ backgroundColor: '#477AFF', borderRadius: 20, paddingHorizontal: 11, paddingVertical: 5, marginRight: 3 }}>
                    <Title size={7} color="#ffffff" weight="300">{typeToKorean(type)} 계정</Title>
                </View>
                <View style={{ borderRadius: 20, paddingHorizontal: 11, paddingVertical: 5, borderColor: '#e8e8e8', borderWidth: 1 }}>
                    <Title size={7} color="#4f4f4f" weight="300">{grade}학년 {classNumber}반</Title>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
	container: {
        flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",

		height: 60,

		paddingLeft: 17.5,
		paddingRight: 17.5,
	},
})