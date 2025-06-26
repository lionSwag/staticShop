// cartManager.js
// 장바구니 관리 함수들

import { ProductManager } from './productManager.js';

// ==================== 장바구니 관리 함수들 ====================
export const CartManager = {
    // 장바구니 가져오기
    getCart: () => {
        try {
            return JSON.parse(localStorage.getItem('cart') || '[]');
        } catch (error) {
            console.error('장바구니 데이터 로드 오류:', error);
            return [];
        }
    },
    
    // 장바구니에 상품 추가
    addToCart: (productId, quantity = 1) => {
        try {
            const cart = CartManager.getCart();
            const product = ProductManager.getProductById(productId);
            
            if (!product) {
                console.error('상품을 찾을 수 없습니다:', productId);
                return false;
            }
            
            if (!ProductManager.isInStock(productId)) {
                alert('품절된 상품입니다.');
                return false;
            }
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ 
                    ...product, 
                    quantity: quantity,
                    addedAt: new Date().toISOString()
                });
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            return true;
        } catch (error) {
            console.error('장바구니 추가 오류:', error);
            return false;
        }
    },
    
    // 장바구니에서 상품 제거
    removeFromCart: (productId) => {
        try {
            const cart = CartManager.getCart();
            const updatedCart = cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return true;
        } catch (error) {
            console.error('장바구니 제거 오류:', error);
            return false;
        }
    },
    
    // 장바구니 수량 업데이트
    updateCartQuantity: (productId, quantity) => {
        try {
            if (quantity <= 0) {
                return CartManager.removeFromCart(productId);
            }
            
            const cart = CartManager.getCart();
            const item = cart.find(item => item.id === productId);
            
            if (item) {
                item.quantity = quantity;
                localStorage.setItem('cart', JSON.stringify(cart));
                return true;
            }
            return false;
        } catch (error) {
            console.error('장바구니 수량 업데이트 오류:', error);
            return false;
        }
    },
    
    // 장바구니 비우기
    clearCart: () => {
        try {
            localStorage.removeItem('cart');
            return true;
        } catch (error) {
            console.error('장바구니 초기화 오류:', error);
            return false;
        }
    },
    
    // 장바구니 총 개수
    getCartCount: () => {
        const cart = CartManager.getCart();
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    
    // 장바구니 총 금액
    getCartTotal: () => {
        const cart = CartManager.getCart();
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    
    // 장바구니 상품 개수
    getCartItemCount: () => {
        return CartManager.getCart().length;
    }
};
