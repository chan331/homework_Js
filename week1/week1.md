# 🗓️1주차 과제 및 회고

  - [변수, 상수 작성](#⌨️변수-상수-작성)
  - [함수 작성](#⚙️함수-작성)


## ⌨️변수, 상수 작성

```javascript
//1. 사용자 이름을 저장할 변수를 선언하고 "자신의 이름"을 할당하세요.
const userName = "HWC"

//2. "절대 영도(온도의 최저 한계)인 -273.15°C"를 담을 상수를 선언하세요.
const ABSOLUTE_ZERO = -273.15;

//3. "로그인 여부"를 확인하는 불리언 타입 변수을 선언하고 적절한값을 할당하세요.
let isLoggedIn = true;

//4. "사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.
const userAge = 22;

//5. "상품 가격(예: 39,900원)"을 담는 변수를 작성하세요.
const productPrice =  7700;

//6. 웹 페이지의 "배경색"을 담는 상수를 작성하고 적절한 값을 할당하세요.
let bgColor = "red";

//7. 사용자가 작성한 "댓글 수(예: 12)"를 담는 변수를 선언하고 값을 할당하세요.
const totalComments = 12;

//8. "현재 페이지 번호(예: 3)"를 담는 변수를 작성하고 적절한 값을 할당하세요.
let pageNum = 3;

//9. "회원 등급('VIP', '골드', '실버' 중 하나)"을 담는 변수를 작성해보세요.
const userGrade = 'VIP';

//10. "버튼이 클릭되었는지 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let isClicked = true;
```

<br>

## ⚙️함수 작성

```javascript
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
```

## 🤔1주차 회고

이번 1주차에는 자바스크립트의 생태계부터 변수, 함수, 객체에 이르기까지 생각보다 넓은 범위를 배우고 익혔습니다. 방대한 내용이었지만, 강사님께서 차근차근 이해하기 쉽게 설명해주신 덕분에 큰 어려움 없이 따라갈 수 있었습니다.

특히 인상 깊었던 점은, 학습자의 입장을 깊이 고려해주시는 강사님의 배려였습니다. 학습 주제에 대해 지금 당장 필요한 지식과 앞으로 차차 알아가도 될 지식을 시기적절하게 구분하여 설명해주셔서, 쏟아지는 지식 속에서 길을 잃지 않고 중요한 핵심에 집중할 수 있었고 배우는 사람의 눈높이를 맞춰주시는 모습에서 참된 교육자의 면모를 느낄 수 있었습니다.

'자바스크립트를 이해하는 것이 곧 웹을 이해하는 길'이라는 생각과 함께, 배움에 대한 즐거움과 열망이 더욱 커지는 한 주였습니다. 이번 학습을 통해 기본기를 다시 한번 점검하고, 비어 있던 지식의 구멍들을 채울 수 있었습니다. 이 좋은 시작을 발판 삼아, 앞으로는 초석을 더욱 단단히 다지기 위해 보다 적극적으로 학습에 임하고자 합니다.

