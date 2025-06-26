// orderManager.js
// 주문 관리 함수들

import { UserManager } from './userManager.js';
import { CartManager } from './cartManager.js';

// ==================== 주문 관리 함수들 ====================
export const OrderManager = {
    // 주문 생성
    createOrder: (orderData) => {
        try {
            const orders = JSON.parse(localStorage.getItem('orders') || '[]');
            const currentUser = UserManager.getCurrentUser();
            
            if (!currentUser) {
                return { success: false, message: '로그인이 필요합니다.' };
            }
            
            const newOrder = {
                id: 'ORDER_' + Date.now(),
                userId: currentUser.id,
                items: CartManager.getCart(),
                totalAmount: CartManager.getCartTotal(),
                ...orderData,
                status: 'pending',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            
            orders.push(newOrder);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // 주문 완료 후 장바구니 비우기
            CartManager.clearCart();
            
            return { success: true, order: newOrder };
        } catch (error) {
            console.error('주문 생성 오류:', error);
            return { success: false, message: '주문 처리 중 오류가 발생했습니다.' };
        }
    },
    
    // 사용자의 주문 목록 가져오기
    getUserOrders: (userId) => {
        try {
            const orders = JSON.parse(localStorage.getItem('orders') || '[]');
            return orders.filter(order => order.userId === userId)
                         .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } catch (error) {
            console.error('주문 목록 로드 오류:', error);
            return [];
        }
    },
    
    // 주문 상세 정보 가져오기
    getOrderById: (orderId) => {
        try {
            const orders = JSON.parse(localStorage.getItem('orders') || '[]');
            return orders.find(order => order.id === orderId);
        } catch (error) {
            console.error('주문 상세 정보 로드 오류:', error);
            return null;
        }
    },
    
    // 주문 상태 업데이트
    updateOrderStatus: (orderId, status) => {
        try {
            const orders = JSON.parse(localStorage.getItem('orders') || '[]');
            const orderIndex = orders.findIndex(order => order.id === orderId);
            
            if (orderIndex !== -1) {
                orders[orderIndex].status = status;
                orders[orderIndex].updatedAt = new Date().toISOString();
                localStorage.setItem('orders', JSON.stringify(orders));
                return { success: true, order: orders[orderIndex] };
            }
            
            return { success: false, message: '주문을 찾을 수 없습니다.' };
        } catch (error) {
            console.error('주문 상태 업데이트 오류:', error);
            return { success: false, message: '업데이트 중 오류가 발생했습니다.' };
        }
    }
};
