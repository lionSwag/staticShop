// userManager.js
// 사용자 관리 함수들

// ==================== 사용자 관리 함수들 ====================
export const UserManager = {
    // 현재 로그인된 사용자 가져오기
    getCurrentUser: () => {
        try {
            return JSON.parse(localStorage.getItem('currentUser') || 'null');
        } catch (error) {
            console.error('사용자 정보 로드 오류:', error);
            return null;
        }
    },
    
    // 로그인
    login: (email, password) => {
        try {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                // 비밀번호 정보는 저장하지 않음
                const userInfo = { ...user };
                delete userInfo.password;
                
                localStorage.setItem('currentUser', JSON.stringify(userInfo));
                return { success: true, user: userInfo };
            }
            return { success: false, message: '이메일 또는 비밀번호가 올바르지 않습니다.' };
        } catch (error) {
            console.error('로그인 오류:', error);
            return { success: false, message: '로그인 중 오류가 발생했습니다.' };
        }
    },
    
    // 회원가입
    register: (userData) => {
        try {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            // 이메일 중복 체크
            if (users.find(u => u.email === userData.email)) {
                return { success: false, message: '이미 존재하는 이메일입니다.' };
            }
            
            const newUser = {
                id: Date.now(),
                ...userData,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            return { success: true, message: '회원가입이 완료되었습니다.' };
        } catch (error) {
            console.error('회원가입 오류:', error);
            return { success: false, message: '회원가입 중 오류가 발생했습니다.' };
        }
    },
    
    // 로그아웃
    logout: () => {
        try {
            localStorage.removeItem('currentUser');
            return true;
        } catch (error) {
            console.error('로그아웃 오류:', error);
            return false;
        }
    },
    
    // 로그인 여부 확인
    isLoggedIn: () => {
        return UserManager.getCurrentUser() !== null;
    },
    
    // 사용자 정보 업데이트
    updateUser: (updatedData) => {
        try {
            const currentUser = UserManager.getCurrentUser();
            if (!currentUser) return { success: false, message: '로그인이 필요합니다.' };
            
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            
            if (userIndex !== -1) {
                users[userIndex] = { 
                    ...users[userIndex], 
                    ...updatedData, 
                    updatedAt: new Date().toISOString() 
                };
                localStorage.setItem('users', JSON.stringify(users));
                
                // 현재 사용자 정보도 업데이트
                const updatedUser = { ...users[userIndex] };
                delete updatedUser.password;
                localStorage.setItem('currentUser', JSON.stringify(updatedUser));
                
                return { success: true, user: updatedUser };
            }
            
            return { success: false, message: '사용자를 찾을 수 없습니다.' };
        } catch (error) {
            console.error('사용자 정보 업데이트 오류:', error);
            return { success: false, message: '업데이트 중 오류가 발생했습니다.' };
        }
    }
};
