let slides = [
  {
    url: "#",
    background: "./assets/games/bg_1.png",
    character: "./assets/games/ch_1.png",
    title: "크로노 오디세이",
    subtitle: "멈춰 있던 시간이 흐른다",
    genre: "MMORPG",
  },
  {
    url: "#",
    background: "./assets/games/bg_2.png",
    character: "./assets/games/ch_2.png",
    title: "아키에이지 워",
    subtitle: "시대의 전설을 향해",
    genre: "MMORPG",
  },
  {
    url: "#",
    background: "./assets/games/bg_3.png",
    character: "./assets/games/ch_3.png",
    title: "패스 오브 엑자일 2",
    subtitle: "얼리 엑세스 오픈!",
    genre: "핵앤슬래시",
  },
  {
    url: "#",
    background: "./assets/games/bg_4.png",
    character: "./assets/games/ch_4.png",
    title: "오딘 : 발할라 라이징",
    subtitle: "신의 영역을 차지하라",
    genre: "MMORPG",
  },
  {
    url: "#",
    background: "./assets/games/bg_5.png",
    character: "./assets/games/ch_5.png",
    title: "롬: 리멤버 오브 마제스티",
    subtitle: "세계는 하나의 전장이 된다",
    genre: "MMORPG",
  },
  {
    url: "#",
    background: "./assets/games/bg_6.png",
    character: "./assets/games/ch_6.png",
    title: "배틀그라운드",
    subtitle: "최후까지 생존하라!",
    genre: "MMORPG",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const slider = document.querySelector(".carousel-slider");
  const prevButton = document.querySelector(".carousel-button-prev");
  const nextButton = document.querySelector(".carousel-button-next");
  const pageNumber = document.querySelector(".carousel-slide-number");

  let currentIndex = 0;
  const SLIDE_PER_PAGE = 1;
  const totalSlides = slides.length;
  const totalPages = Math.ceil(totalSlides / SLIDE_PER_PAGE);

  // 슬라이드 및 레이아웃 크기 상수
  const SLIDE_WIDTH = 160; 
  const SLIDE_GAP = 16;    
  const CONTAINER_MARGIN = 24; 

  // 캐러셀 전체 너비를 동적으로 계산하고 설정
  function setCarouselWidth() {
    const viewportWidth = (SLIDE_PER_PAGE * SLIDE_WIDTH) + ((SLIDE_PER_PAGE - 1) * SLIDE_GAP);
    const totalCarouselWidth = viewportWidth + (CONTAINER_MARGIN * 2);
    carousel.style.width = `${totalCarouselWidth}px`;
  }

  function renderAllSlides() {
    slider.innerHTML = slides.map(createSlide).join("");
    updatePageNumber();
  }

  function createSlide(slide) {
    return `
          <div class="carousel-slide">
            <a href="${slide.url}" class="carousel-slide-link">
              <div class="carousel-slide-img">
                <img src="${slide.background}" alt="${slide.title} 게임 배경 이미지" class="carousel-slide-img-bg" />
                <img src="${slide.character}" alt="${slide.title} 캐릭터 이미지" class="carousel-slide-img-character" />
              </div>
              <div class="carousel-slide-description">
                <h2>${slide.title}</h2>
                <p class="carousel-slide-description-subtitle">${slide.subtitle}</p>
                <p class="carousel-slide-description-genre">${slide.genre}</p>
              </div>
            </a>
          </div>
        `;
  }

  function moveSlider() {
    const slideElements = slider.querySelectorAll(".carousel-slide");
    if (slideElements.length === 0) return;

    const targetSlide = slideElements[currentIndex];
    if (!targetSlide) return;

    const firstSlideRect = slideElements[0].getBoundingClientRect();
    const targetSlideRect = targetSlide.getBoundingClientRect();

    const moveDistance = targetSlideRect.left - firstSlideRect.left;

    slider.style.transform = `translateX(-${moveDistance}px)`;
    updatePageNumber();
    updateSlideFocus();
  }

  function updatePageNumber() {
    const currentPage = Math.floor(currentIndex / SLIDE_PER_PAGE) + 1;
    pageNumber.textContent = `${currentPage} / ${totalPages}`;
  }

  function updateSlideFocus() {
    const slideLinks = slider.querySelectorAll(".carousel-slide-link");
    slideLinks.forEach((link, index) => {
      const isVisible = index >= currentIndex && index < currentIndex + SLIDE_PER_PAGE;
      link.setAttribute("tabindex", isVisible ? "0" : "-1");
      link.closest('.carousel-slide').setAttribute("aria-hidden", !isVisible);
    });
  }

  nextButton.addEventListener("click", () => {
    const isAtEnd = currentIndex + SLIDE_PER_PAGE >= totalSlides;
    slider.style.transition = "transform 0.3s ease-in-out";

    if (isAtEnd) {
      currentIndex = 0;
      slider.style.transition = "none";
      moveSlider();
      
    } else {
      currentIndex += SLIDE_PER_PAGE;
      moveSlider();
    }
  });

  prevButton.addEventListener("click", () => {
    const isAtStart = currentIndex === 0;
    slider.style.transition = "transform 0.3s ease-in-out";

    if (isAtStart) {
      const lastPageFirstIndex = (totalPages - 1) * SLIDE_PER_PAGE;
      currentIndex = lastPageFirstIndex < totalSlides ? lastPageFirstIndex : 0;

      slider.style.transition = "none";
      moveSlider();

    } else {
      currentIndex -= SLIDE_PER_PAGE;
      moveSlider();
    }
  });

  setCarouselWidth();
  renderAllSlides();
  updateSlideFocus();
});
