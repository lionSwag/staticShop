// data.js
// 쇼핑몰 기본 데이터 (상품, 카테고리)

// ==================== 상품 데이터 ====================
const PRODUCTS_DATA = [
    {
        id: 1,
        name: "프리미엄 스마트워치",
        price: 299000,
        category: "전자제품",
        image: "📱",
        description: "최신 기술이 집약된 스마트워치입니다. 건강 관리부터 스마트 알림까지 모든 기능을 제공합니다. 방수 기능과 긴 배터리 수명을 자랑합니다.",
        stock: 50,
        featured: true,
        rating: 4.8,
        reviews: 127
    },
    {
        id: 2,
        name: "무선 이어폰",
        price: 159000,
        category: "전자제품",
        image: "🎧",
        description: "노이즈 캔슬링 기능이 탑재된 고음질 무선 이어폰입니다. 최대 24시간 연속 재생이 가능하며, 빠른 충전을 지원합니다.",
        stock: 30,
        featured: true,
        rating: 4.6,
        reviews: 89
    },
    {
        id: 3,
        name: "노트북 스탠드",
        price: 45000,
        category: "컴퓨터",
        image: "💻",
        description: "인체공학적으로 설계된 알루미늄 노트북 스탠드입니다. 각도 조절이 가능하며, 방열 설계로 노트북 온도를 낮춰줍니다.",
        stock: 100,
        featured: false,
        rating: 4.4,
        reviews: 52
    },
    {
        id: 4,
        name: "휴대용 충전기",
        price: 35000,
        category: "전자제품",
        image: "🔋",
        description: "20000mAh 대용량 휴대용 배터리입니다. PD 고속충전을 지원하며, 동시에 3개 기기를 충전할 수 있습니다.",
        stock: 75,
        featured: true,
        rating: 4.5,
        reviews: 143
    },
    {
        id: 5,
        name: "블루투스 스피커",
        price: 89000,
        category: "전자제품",
        image: "🔊",
        description: "IPX7 방수 기능이 있는 포터블 블루투스 스피커입니다. 360도 사운드와 12시간 연속 재생이 가능합니다.",
        stock: 25,
        featured: false,
        rating: 4.3,
        reviews: 67
    },
    {
        id: 6,
        name: "무선 마우스",
        price: 25000,
        category: "컴퓨터",
        image: "🖱️",
        description: "인체공학적 디자인의 무선 마우스입니다. 정밀한 센서와 긴 배터리 수명으로 업무와 게임 모두에 적합합니다.",
        stock: 60,
        featured: false,
        rating: 4.2,
        reviews: 38
    },
    {
        id: 7,
        name: "기계식 키보드",
        price: 120000,
        category: "컴퓨터",
        image: "⌨️",
        description: "RGB 백라이트가 탑재된 기계식 게이밍 키보드입니다. 청축 스위치로 뛰어난 타이핑감을 제공합니다.",
        stock: 40,
        featured: true,
        rating: 4.7,
        reviews: 91
    },
    {
        id: 8,
        name: "4K 웹캠",
        price: 55000,
        category: "컴퓨터",
        image: "📹",
        description: "4K 해상도를 지원하는 고화질 웹캠입니다. 자동 초점과 노이즈 제거 마이크가 내장되어 있습니다.",
        stock: 35,
        featured: false,
        rating: 4.1,
        reviews: 29
    },
    {
        id: 9,
        name: "27인치 4K 모니터",
        price: 250000,
        category: "컴퓨터",
        image: "🖥️",
        description: "27인치 4K UHD 모니터입니다. IPS 패널로 정확한 색재현이 가능하며, 다양한 연결 포트를 지원합니다.",
        stock: 20,
        featured: false,
        rating: 4.6,
        reviews: 73
    },
    {
        id: 10,
        name: "태블릿",
        price: 450000,
        category: "전자제품",
        image: "📱",
        description: "10.1인치 고해상도 태블릿입니다. 강력한 프로세서와 긴 배터리 수명으로 업무와 엔터테인먼트 모두 완벽합니다.",
        stock: 30,
        featured: true,
        rating: 4.5,
        reviews: 108
    },
    {
        id: 11,
        name: "무선 충전 패드",
        price: 30000,
        category: "전자제품",
        image: "🔌",
        description: "Qi 무선충전을 지원하는 고속 무선 충전 패드입니다. LED 인디케이터로 충전 상태를 확인할 수 있습니다.",
        stock: 80,
        featured: false,
        rating: 4.0,
        reviews: 45
    },
    {
        id: 12,
        name: "USB-C 허브",
        price: 40000,
        category: "컴퓨터",
        image: "🔗",
        description: "7-in-1 USB-C 멀티포트 허브입니다. HDMI, USB 3.0, SD카드 리더 등 다양한 포트를 제공합니다.",
        stock: 65,
        featured: false,
        rating: 4.3,
        reviews: 34
    }
];

// ==================== 카테고리 데이터 ====================
export const CATEGORIES = [
    { id: "all", name: "전체", icon: "🛍️" },
    { id: "electronics", name: "전자제품", icon: "📱" },
    { id: "computer", name: "컴퓨터", icon: "💻" }
];
