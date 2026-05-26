// 모든 건물의 상세 공간 데이터를 한곳에서 관리합니다.
const campusData = [
    {
        id: "electronics",
        name: "전자정보대학관",
        icon: "💻",
        // 각 건물 아래에 'floors' 배열을 만들어 층별 정보를 트리 구조로 저장합니다.
        floors: [
            {
                floorName: "1층 로비",
                image: "images/elec_1f.png", // 추후 직접 그릴 도면 이미지 경로
                location: "전자정보대학관 1층 정문 진입 후 우측",
                seats: "원형 테이블 4개 (약 16석)",
                plug: "🔌 있음 (벽면 기둥 2곳)",
                features: "유동 인구가 많아 백색소음이 있음. 팀플 회의나 가벼운 작업에 적합."
            },
            {
                floorName: "3층 휴게실",
                image: "images/elec_3f.png",
                location: "3층 엘리베이터 하차 후 좌측 복도 끝",
                seats: "소파 및 개인 좌석 (약 8석)",
                plug: "🔌 있음 (개별 좌석마다 배치)",
                features: "비교적 조용한 편이며, 창밖 경치가 좋아 집중하기 좋음."
            }
        ]
    },
    {
        id: "applied_science",
        name: "응용과학대학관",
        icon: "🔬",
        floors: [
            {
                floorName: "1층 매점 앞",
                image: "images/applied_1f.png",
                location: "응용과학대학관 1층 매점 맞은편",
                seats: "사각 테이블 3개 (12석)",
                plug: "❌ 없음",
                features: "쉬는 시간이나 공강 때 가볍게 대화 나누며 공부하기 좋음."
            }
        ]
    },
    { id: "intl_studies", name: "국제학관", icon: "🌍", floors: [] },
    { id: "library", name: "중앙도서관", icon: "🏛️", url: "https://lib.khu.ac.kr/", floors: [] },
    { id: "intl_business", name: "국제경영대학관", icon: "💼", floors: [] },
    { id: "life_science", name: "생명과학대학관", icon: "🌱", floors: [] },
    { id: "seonseung", name: "선승관", icon: "🥋", floors: [] },
    { id: "multimedia", name: "멀티미디어교육관", icon: "🎬", floors: [] },
    { id: "physical_edu", name: "체육대학관", icon: "⚽", floors: [] },
    { id: "engineering", name: "공과대학관", icon: "⚙️", floors: [] },
    { id: "foreign_lang", name: "외국어대학", icon: "🗣️", floors: [] },
    { id: "woojungwon", name: "우정원", icon: "🏢", floors: [] }
];