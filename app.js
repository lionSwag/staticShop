// app.js
// 메인 애플리케이션 파일 - 전역 이벤트 리스너 및 초기화

import { UserManager } from './userManager.js';
import { CartManager } from './cartManager.js';

// ==================== 전역 이벤트 리스너 ====================
document.addEventListener('DOMContentLoaded', function() {
    // 장바구니 개수 업데이트
    const updateCartCount = () => {
        const cartCountElements = document.querySelectorAll('#cartCount, .cart-count');
        const count = CartManager.getCartCount();
        cartCountElements.forEach(element => {
            if (element) element.textContent = count;
        });
    };
    
    // 로그인 상태 업데이트
    const updateLoginStatus = () => {
        const isLoggedIn = UserManager.isLoggedIn();
        const currentUser = UserManager.getCurrentUser();
        
        // 로그인/로그아웃 링크 업데이트
        const loginLinks = document.querySelectorAll('.login-link');
        const logoutLinks = document.querySelectorAll('.logout-link');
        const userNameElements = document.querySelectorAll('.user-name');
        
        loginLinks.forEach(link => {
            link.style.display = isLoggedIn ? 'none' : 'block';
        });
        
        logoutLinks.forEach(link => {
            link.style.display = isLoggedIn ? 'block' : 'none';
        });
        
        userNameElements.forEach(element => {
            if (element && currentUser) {
                element.textContent = currentUser.name || currentUser.email;
            }
        });
    };
    
    // 초기 상태 설정
    updateCartCount();
    updateLoginStatus();
    
    // 스토리지 변경 감지
    window.addEventListener('storage', function(e) {
        if (e.key === 'cart') {
            updateCartCount();
        }
        if (e.key === 'currentUser') {
            updateLoginStatus();
        }
    });
});

// ==================== 전역 함수 내보내기 ====================
// 필요한 경우 전역 스코프에서 사용할 수 있도록 내보내기
window.updateCartCount = () => {
    const cartCountElements = document.querySelectorAll('#cartCount, .cart-count');
    const count = CartManager.getCartCount();
    cartCountElements.forEach(element => {
        if (element) element.textContent = count;
    });
};

window.updateLoginStatus = () => {
    const isLoggedIn = UserManager.isLoggedIn();
    const currentUser = UserManager.getCurrentUser();
    
    const loginLinks = document.querySelectorAll('.login-link');
    const logoutLinks = document.querySelectorAll('.logout-link');
    const userNameElements = document.querySelectorAll('.user-name');
    
    loginLinks.forEach(link => {
        link.style.display = isLoggedIn ? 'none' : 'block';
    });
    
    logoutLinks.forEach(link => {
        link.style.display = isLoggedIn ? 'block' : 'none';
    });
    
    userNameElements.forEach(element => {
        if (element && currentUser) {
            element.textContent = currentUser.name || currentUser.email;
        }
    });
