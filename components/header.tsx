import { View, StyleSheet, ToastAndroid, TouchableOpacity } from "react-native";
import Title from "./title";
import { UserRole } from "../types";

interface HeaderProps {
    type: UserRole;
    grade: number;
    classNumber: number;
}

function typeToKorean(type: HeaderProps['type']) {
    switch (type) {
        case 'teacher':
            return '선생님';
        case 'president':
            return '회장';
        case 'twoPresident':
            return '부회장';
        case 'admin':
            return '관리자';
    }
}

const AccountButton = ({ type, onClick }: { type: HeaderProps['type'], onClick: () => void }) => (
    <TouchableOpacity style={{ backgroundColor: '#477AFF', borderRadius: 20, paddingHorizontal: 11, paddingVertical: 5, marginRight: 3 }} onPress={onClick}>
        <Title size={7} color="#ffffff" weight="300">{typeToKorean(type)} 계정</Title>
    </TouchableOpacity>
);

const ClassButton = ({ grade, classNumber, onClick }:  { grade: HeaderProps['grade'], classNumber: HeaderProps['classNumber'], onClick: () => void }) => (
    <TouchableOpacity style={{ borderRadius: 20, paddingHorizontal: 11, paddingVertical: 5, borderColor: '#e8e8e8', borderWidth: 1 }} onPress={onClick}>
        <Title size={7} color="#4f4f4f" weight="300">{grade}학년 {classNumber}반</Title>
    </TouchableOpacity>
);

export default function Header({ type, classNumber, grade }: HeaderProps) {
    const handleAccountClick = () => {
        ToastAndroid.show(`나눈 ${typeToKorean(type)}이닷! 뚜비두밥ㅂ \n╰(*°▽°*)╯`, ToastAndroid.SHORT);
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