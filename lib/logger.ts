import axios from "axios";
import { Ilogger } from "../types/logger";

export async function Logger({ eventType, eventName, content }: Ilogger) {
    return new Promise(async (resolve, reject) => {
        const json = {
            "content": null,
            "embeds": [
                {
                    "title": eventType === 'event' ? "이벤트 발생" : '오류 발생',
                    "color": eventType === 'event' ? 5814783 : 16734296,
                    "fields": [
                        {
                            "name": "이벤트 타입",
                            "value": `\`\`\`${eventName}\`\`\``
                        },
                        {
                            "name": "기타",
                            "value": `\`\`\`${content}\`\`\``
                        }
                    ]
                }
            ],
        }
        await axios.post("", json).then(() => {
            resolve(true)
        }).catch((e) => {
            console.error(e);
            reject(false);
        })
    })
}