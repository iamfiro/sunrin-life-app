import { View, StyleSheet, ToastAndroid, TouchableOpacity } from "react-native";
import Title from "./title";
import { UserRole, userRoleToKorean } from "../types";

/*
Represents the props for the Header component.
*/
interface HeaderProps {
    type: UserRole;
    grade: number;
    classNumber: number;
}

/**
 * Renders an account button component.
 *
 * @param type - The type of the header.
 * @param onClick - The function to be called when the button is clicked.
 */
const AccountButton = ({ type, onClick }: { type: HeaderProps['type'], onClick: () => void }) => (
    <TouchableOpacity style={{ backgroundColor: '#477AFF', borderRadius: 20, paddingHorizontal: 11, paddingVertical: 5, marginRight: 3 }} onPress={onClick}>
        <Title size={7} color="#ffffff" weight="300">{userRoleToKorean(type)} 계정</Title>
    </TouchableOpacity>
);

/**
 * ClassButton component.
 *
 * @component
 * @param {object} props - The component props.
 * @param {HeaderProps['grade']} props.grade - The grade of the class.
 * @param {HeaderProps['classNumber']} props.classNumber - The number of the class.
 * @param {() => void} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} The rendered ClassButton component.
 */
const ClassButton = ({ grade, classNumber, onClick }:  { grade: HeaderProps['grade'], classNumber: HeaderProps['classNumber'], onClick: () => void }) => (
    <TouchableOpacity style={{ borderRadius: 20, paddingHorizontal: 11, paddingVertical: 5, borderColor: '#e8e8e8', borderWidth: 1 }} onPress={onClick}>
        <Title size={7} color="#4f4f4f" weight="300">{grade}학년 {classNumber}반</Title>
    </TouchableOpacity>
);

/**
 * Renders the header component.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.type - The user type.
 * @param {number} props.classNumber - The class number.
 * @param {string} props.grade - The grade.
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header({ type, classNumber, grade }: HeaderProps) {
    const handleAccountClick = () => {
        ToastAndroid.show(`나눈 ${userRoleToKorean(type)}이닷! 뚜비두밥ㅂ \n╰(*°▽°*)╯`, ToastAndroid.SHORT);
        throw new Error('My first Sentry error!');
    };

    const handleClassClick = () => {
        ToastAndroid.show(`자랑스러운 우리 명예 ${classNumber}반 \nψ(｀∇´)ψ`, ToastAndroid.SHORT);
    };

    return (
        <View style={style.container}>
            <View style={{ marginBottom: 5 }}>
                <Title size={4} color="#000000" weight="400">선린라이프 β</Title>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AccountButton type={type} onClick={handleAccountClick} />
                <ClassButton grade={grade} classNumber={classNumber} onClick={handleClassClick} />
            </View>
        </View>
    )
}

/**
 * Styles for the header component.
 */
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