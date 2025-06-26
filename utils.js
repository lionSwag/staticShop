// utils.js
// 유틸리티 함수들

// ==================== 유틸리티 함수들 ====================
export const Utils = {
    // 가격 포맷팅
    formatPrice: (price) => {
        return new Intl.NumberFormat('ko-KR').format(price) + '원';
    },
    
    // 날짜 포맷팅
    formatDate: (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    },
    
    // 별점 표시
    formatRating: (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '★'.repeat(fullStars);
        if (hasHalfStar) stars += '☆';
        stars += '☆'.repeat(5 - Math.ceil(rating));
        return stars;
    },
    
    // 디바운스 함수
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // 로컬스토리지 데이터 초기화 (개발용)
    resetAllData: () => {
        if (confirm('모든 데이터를 초기화하시겠습니까?')) {
            localStorage.clear();
            location.reload();
        }
    }
};
