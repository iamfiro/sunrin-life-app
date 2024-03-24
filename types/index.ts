export type UserRole = 'teacher' | 'president' | 'twoPresident' | 'admin';

export function userRoleToKorean(type: UserRole) {
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

export function DayToKorean(date: Date) {
    switch (date.getDay()) {
        case 0:
            return '일요일';
        case 1:
            return '월요일';
        case 2:
            return '화요일';
        case 3:
            return '수요일';
        case 4:
            return '목요일';
        case 5:
            return '금요일';
        case 6:
            return '토요일';
    }
}