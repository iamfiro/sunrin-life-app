import { Platform, ToastAndroid } from "react-native";
import  * as MultiPlatformToast from 'react-native-root-toast';

export default function Toast( text: string ) {
    switch (Platform.OS) {
        case 'android':
            ToastAndroid.show(text, ToastAndroid.SHORT);
            break;
        default:
            MultiPlatformToast.default.show(text, { duration: MultiPlatformToast.default.durations.SHORT })

    }
}