import { View } from "react-native";
import { IDefaultScreenProps } from "../../types/screen";
import Article from "../article";
import Button from "../button";

export default function HomeArticleList({ navigation }: IDefaultScreenProps) {
    return (
        <View>
            <Article type="notice" title="영어 3245p 숙제" article="내일까지 영어 쌤이 프린트 250p 해오라고 하심" id="1-6-nwiusnwk" navigation={navigation} />
            <Article type="homework" title="영어 245p 숙제" article="내일까지 영어 쌤이 프린트 250p 해오라고 하심" id="1-6-nwiusnwk" navigation={navigation} />
            <Article type="notice" title="영어 245p 숙제" article="내일까지 영어 쌤이 프린트 250p 해오라고 하심" id="1-6-nwiusnwk" navigation={navigation} />
            <Article type="homework" title="영어 245p 숙제" article="내일까지 영어 쌤이 프린트 250p 해오라고 하심" id="1-6-nwiusnwk" navigation={navigation} />
            <Article type="notice" title="영어 245p 숙제" article="내일까지 영어 쌤이 프린트 250p 해오라고 하심" id="1-6-nwiusnwk" navigation={navigation} />
            <Article type="homework" title="영어 245p 숙제" article="내일까지 영어 쌤이 프린트 250p 해오라고 하심" id="1-6-nwiusnwk" navigation={navigation} />
            <Article type="notice" title="영어 245p 숙제" article="내일까지 영어 쌤이 프린트 250p 해오라고 하심" id="1-6-nwiusnwk" navigation={navigation} />
            <Article type="homework" title="영어 245p 숙제" article="내일까지 영어 쌤이 프린트 250p 해오라고 하심" id="1-6-nwiusnwk" navigation={navigation} />
            <Button text="공지 더보기" type="primary" onClick={() => { navigation.navigate("ArticleList") }} />
        </View>
    )
}