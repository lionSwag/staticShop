// productManager.js
// 상품 관리 함수들

import { PRODUCTS_DATA, CATEGORIES } from './data.js';

// ==================== 상품 관리 함수들 ====================
export const ProductManager = {
    // 모든 상품 가져오기
    getAllProducts: () => [...PRODUCTS_DATA],
    
    // ID로 상품 찾기
    getProductById: (id) => {
        return PRODUCTS_DATA.find(product => product.id === parseInt(id));
    },
    
    // 카테고리별 상품 가져오기
    getProductsByCategory: (category) => {
        if (category === "전체" || category === "all") {
            return [...PRODUCTS_DATA];
        }
        return PRODUCTS_DATA.filter(product => 
            product.category === category || 
            (category === "전자제품" && product.category === "전자제품") ||
            (category === "컴퓨터" && product.category === "컴퓨터")
        );
    },
    
    // 인기 상품 가져오기
    getFeaturedProducts: () => {
        return PRODUCTS_DATA.filter(product => product.featured);
    },
    
    // 상품 검색
    searchProducts: (keyword) => {
        if (!keyword || keyword.trim() === '') {
            return [...PRODUCTS_DATA];
        }
        
        const lowerKeyword = keyword.toLowerCase().trim();
        return PRODUCTS_DATA.filter(product => 
            product.name.toLowerCase().includes(lowerKeyword) ||
            product.description.toLowerCase().includes(lowerKeyword) ||
            product.category.toLowerCase().includes(lowerKeyword)
        );
    },
    
    // 가격 범위로 필터링
    getProductsByPriceRange: (minPrice, maxPrice) => {
        return PRODUCTS_DATA.filter(product => 
            product.price >= (minPrice || 0) && 
            product.price <= (maxPrice || Infinity)
        );
    },
    
    // 평점순 정렬
    getProductsByRating: (ascending = false) => {
        return [...PRODUCTS_DATA].sort((a, b) => 
            ascending ? a.rating - b.rating : b.rating - a.rating
        );
    },
    
    // 가격순 정렬
    getProductsByPrice: (ascending = true) => {
        return [...PRODUCTS_DATA].sort((a, b) => 
            ascending ? a.price - b.price : b.price - a.price
        );
    },
    
    // 인기순 정렬 (리뷰 수 기준)
    getProductsByPopularity: () => {
        return [...PRODUCTS_DATA].sort((a, b) => b.reviews - a.reviews);
    },
    
    // 재고 확인
    isInStock: (productId) => {
        const product = ProductManager.getProductById(productId);
        return product && product.stock > 0;
    },
    
    // 카테고리 목록 가져오기
    getCategories: () => [...CATEGORIES]
};
