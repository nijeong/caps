// clothes.js
const icons = {
  "(울)코트코트": require('../assets/clothes/(울)코트코트.png'),
  "7부 바지": require('../assets/clothes/7부 바지.png'),
  "가디건": require('../assets/clothes/가디건.png'),
  "가죽 재킷": require('../assets/clothes/가죽 재킷.png'),
  "기모 후드티": require('../assets/clothes/기모 후드티.png'),
  "긴팔 티셔츠": require('../assets/clothes/긴팔 티셔츠.png'),
  "긴내복": require('../assets/clothes/내복.png'),
  "누빔": require('../assets/clothes/누빔.png'),
  "니트": require('../assets/clothes/니트.png'),
  "두꺼운 코트": require('../assets/clothes/두꺼운 코트.png'),
  "레깅스": require('../assets/clothes/레깅스.png'),
  "린넨 재질 옷": require('../assets/clothes/린넨 재질 옷.png'),
  "맨투맨": require('../assets/clothes/맨투맨.png'),
  "면바지": require('../assets/clothes/면바지.png'),
  "목도리": require('../assets/clothes/목도리.png'),
  "민소매 원피스": require('../assets/clothes/민소매 원피스.png'),
  "민소매": require('../assets/clothes/민소매.png'),
  "반바지(핫팬츠)": require('../assets/clothes/반바지(핫팬츠).png'),
  "반바지": require('../assets/clothes/반바지.png'),
  "반팔 티셔츠": require('../assets/clothes/반팔 티셔츠.png'),
  "블라우스": require('../assets/clothes//블라우스.png'),
  "셔츠": require('../assets/clothes/셔츠.png'),
  "스카프": require('../assets/clothes/스카프.png'),
  "스키니진": require('../assets/clothes/스키니진.png'),
  "스타킹": require('../assets/clothes/스타킹.png'),
  "슬랙스": require('../assets/clothes/슬랙스.png'),
  "야상": require('../assets/clothes/야상.png'),
  "얇은 가디건": require('../assets/clothes/얇은 가디건.png'),
  "얇은 긴팔 티셔츠": require('../assets/clothes/얇은 긴팔 티셔츠.png'),
  "얇은 니트": require('../assets/clothes/얇은 니트.png'),
  "얇은 셔츠": require('../assets/clothes/얇은 셔츠.png'),
  "얇은 재킷": require('../assets/clothes/얇은 재킷.png'),
  "장갑": require('../assets/clothes/장갑.png'),
  "재킷": require('../assets/clothes/재킷.png'),
  "점퍼": require('../assets/clothes/점퍼.png'),
  "짧은 치마": require('../assets/clothes/짧은 치마.png'),
  "청바지": require('../assets/clothes/청바지.png'),
  "트렌치 코트": require('../assets/clothes/트렌치 코트.png'),
  "패딩": require('../assets/clothes/패딩.png'),
  "플리스": require('../assets/clothes/플리스.png'),
  "후드티": require('../assets/clothes/후드티.png'),
};

// 기온대별 옷차림 정보
const outfits = {
  "28+": {
    outerwear: { names: ["-"], icons: [] },
    top: { names: ["민소매", "반팔 티셔츠"], icons: [icons["민소매"], icons["반팔 티셔츠"]] },
    bottom: { names: ["반바지(핫팬츠)", "짧은 치마"], icons: [icons["반바지(핫팬츠)"], icons["짧은 치마"]] },
    other: { names: ["민소매 원피스", "린넨 재질 옷"], icons: [icons["민소매 원피스"], icons["린넨 재질 옷"]] }
  },
  "23-27": {
    outerwear: { names: ["-"], icons: [] },
    top: { names: ["반팔 티셔츠", "얇은 셔츠", "얇은 긴팔 티셔츠"], icons: [icons["반팔 티셔츠"], icons["얇은 셔츠"], icons["얇은 긴팔 티셔츠"]] },
    bottom: { names: ["반바지", "면바지"], icons: [icons["반바지"], icons["면바지"]] },
    other: { names: ["-"], icons: [] }
  },
  "20-22": {
    outerwear: { names: ["얇은 가디건"], icons: [icons["얇은 가디건"]] },
    top: { names: ["긴팔 티셔츠", "셔츠", "블라우스", "후드티"], icons: [icons["긴팔 티셔츠"], icons["셔츠"], icons["블라우스"], icons["후드티"]] },
    bottom: { names: ["면바지", "슬랙스", "7부 바지", "청바지"], icons: [icons["면바지"], icons["슬랙스"], icons["7부 바지"], icons["청바지"]] },
    other: { names: ["-"], icons: [] }
  },
  "17-19": {
    outerwear: { names: ["얇은 니트", "얇은 가디건", "얇은 재킷", "바람막이"], icons: [icons["얇은 니트"], icons["얇은 가디건"], icons["얇은 재킷"]] },
    top: { names: ["후드티", "맨투맨"], icons: [icons["후드티"], icons["맨투맨"]] },
    bottom: { names: ["긴바지", "청바지", "슬랙스", "스키니진"], icons: [icons["청바지"], icons["청바지"], icons["슬랙스"], icons["스키니진"]] },
    other: { names: ["-"], icons: [] }
  },
  "12-16": {
    outerwear: { names: ["재킷", "가디건", "야상"], icons: [icons["재킷"], icons["가디건"], icons["야상"]] },
    top: { names: ["스웨트 셔츠(맨투맨)", "셔츠", "기모 후드티"], icons: [icons["맨투맨"], icons["셔츠"], icons["기모 후드티"]] },
    bottom: { names: ["청바지", "면바지"], icons: [icons["청바지"], icons["면바지"]] },
    other: { names: ["스타킹", "니트"], icons: [icons["스타킹"], icons["니트"]] }
  },
  "9-11": {
    outerwear: { names: ["재킷", "야상", "점퍼", "트렌치 코트"], icons: [icons["재킷"], icons["야상"], icons["점퍼"], icons["트렌치 코트"]] },
    top: { names: ["-"], icons: [] },
    bottom: { names: ["청바지", "면바지", "검은색 스타킹", "기모 바지", "레이어드"], icons: [icons["청바지"], icons["면바지"], icons["스타킹"]] },
    other: { names: ["니트"], icons: [icons["니트"]] }
  },
  "5-8": {
    outerwear: { names: ["(울)코트코트", "가죽 재킷"], icons: [icons["(울)코트코트"], icons["가죽 재킷"]] },
    top: { names: ["-"], icons: [] },
    bottom: { names: ["레깅스", "청바지", "두꺼운 바지", "기모"], icons: [icons["레깅스"], icons["청바지"]] },
    other: { names: ["스카프", "플리스", "내복", "니트"], icons: [icons["스카프"], icons["플리스"], icons["내복"], icons["니트"]] }
  },
  "~4": {
    outerwear: { names: ["패딩", "두꺼운 코트"], icons: [icons["패딩"], icons["두꺼운 코트"]] },
    top: { names: ["-"], icons: [] },
    bottom: { names: ["-"], icons: [] },
    other: { names: ["누빔", "내복", "목도리", "장갑", "기모", "방한용품"], icons: [icons["누빔"], icons["내복"], icons["목도리"], icons["장갑"]] }
  }
};

// 기온에 따른 옷차림 반환 함수
export const getOutfitForTemperature = (temperature) => {
  let outfit = null;
  Object.keys(outfits).forEach((range) => {
    const [min, max] = range.split("-");
    if ((min === '28+' && temperature >= 28) || (temperature >= parseInt(min) && temperature <= parseInt(max))) {
      outfit = outfits[range];
    }
  });
  return outfit;
};

export default outfits;