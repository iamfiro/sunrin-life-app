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