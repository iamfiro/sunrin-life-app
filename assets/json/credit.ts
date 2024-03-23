import { ImageSourcePropType } from "react-native";
import jwkwon0817Profile from "../credit/jwkwon0817.png";
import wntjd_0612Profile from "../credit/wntjd_0612.webp";
import iamfiroProfile from "../credit/iamfiro.webp";

interface IDeveloperCredit {
    name: string;
    image: ImageSourcePropType;
    part: string;
    description: string;
    instagram: string;
}

export const DeveloperCredit: IDeveloperCredit[] = [
    {
        name: "조성주",
        image: iamfiroProfile,
        part: "앱 개발 / 앱 디자인",
        description: "1-4 Sunrin SW 119th 프론트엔드 개발자",
        instagram: "tjdwn_.firo"
    },
    {
        name: "권지원",
        image: jwkwon0817Profile,
        part: '서버 개발',
        description: "관심 있으면 연락주세요 😎",
        instagram: "jwkwon0817",
    },
    {
        name: "김주성",
        image: wntjd_0612Profile,
        part: '서버 개발',
        description: "Sunrin SW 118th AnA 14th leader",
        instagram: "wntjd_0612"
    }
]