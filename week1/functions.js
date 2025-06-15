//1. 사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성합니다.
function greetUser (username) {
  return `안녕하세요! ${username}님. 좋은 하루되세요!`
}

//2. 판매가를 입력 받아 원가를 계산하는 함수를 작성합니다.
function calculateOriginalPrice (priceWithTax) {
    const TAX_RATE = 3.3;

    return Math.trunc(priceWithTax / (1 + (TAX_RATE / 100)));
}

//3. 신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성합니다.
const canSellAlcohol = (registrationCard) => {
    const minAge =  19;

    if(!registrationCard.age || registrationCard.age <= 0) return false;

    return registrationCard.age >= minAge;
}

//4. 판매가와 할인 비율(%)을 입력 받아, 할인가를 반환하는 함수를 작성합니다.
function getDiscountedPrice (originalPrice, discountPercent) {
    if(discountPercent > 100) return
    
    return originalPrice * (1 - (discountPercent / 100) );
}

//5. 점수를 전달받아 점수, 등급과 설명을 포함한 객체를 반환하는 함수를 작성합니다.
function convertScoreToGrade(score) {
  let grade;
  let description;

  if (score >= 90) {
    grade = 'A';
    description = '매우 우수';

  } else if (score >= 80) {
    grade = 'B';
    description = '우수';

  } else if (score >= 70) {
    grade = 'C';
    description = '보통';

  } else if (score >= 60) {
    grade = 'D';
    description = '미달, 통과 기준 근접';

  } else {
    grade = 'F';
    description = '낙제';
  }

  return {
    score,
    grade,
    description,
  };
}

