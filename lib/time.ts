export function dateToString(date: Date) {
    const day = date.getDay();
    const dayList = ['일', '월', '화', '수', '목', '금', '토'];
    return `${dayList[day]}요일`;
}