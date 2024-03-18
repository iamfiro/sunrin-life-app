import { View, StyleSheet } from "react-native";
import Title from "./title";

interface BadgeProps {
    type: 'teacher' | 'president' | 'twoPresident';
}

export default function Badge({ type }: BadgeProps) {
    switch (type) {
        case "teacher":
            return (
                <View style={{ backgroundColor: '#ffa303', paddingHorizontal: 7, paddingVertical: 4, borderRadius: 5 }}>
                    <Title size={8} color="#000000" weight="300">선생님</Title>
                </View>
            )
        case "president":
            return (
                <View style={{ backgroundColor: '#04C28F', paddingHorizontal: 7, paddingVertical: 4, borderRadius: 5 }}>
                    <Title size={8} color="#ffffff" weight="300">반장</Title>
                </View>
            )
        case "twoPresident":
            return (
                <View style={{ backgroundColor: '#ff03dd', paddingHorizontal: 7, paddingVertical: 4, borderRadius: 5 }}>
                    <Title size={8} color="#ffffff" weight="300">부반장</Title>
                </View>
            )
    }
}