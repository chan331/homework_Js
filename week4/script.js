document.addEventListener("DOMContentLoaded", function () {
  // GSAP 타임라인 생성
  const tl = gsap.timeline();

  // 1. 페이지 로드시 초기 애니메이션
  function initAnimations() {
    // 왼쪽 컨텐츠 애니메이션
    tl.from(".label", {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power2.out",
    })
      .from(
        ".title-line",
        {
          duration: 1,
          y: 50,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        ".description",
        {
          duration: 0.8,
          y: 30,
          opacity: 0,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        ".btn",
        {
          duration: 0.6,
          y: 20,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .from(
        ".shape",
        {
          duration: 0.6,
          opacity: 0,
          scale: 0.8,
          stagger: {
            amount: 1.5,
            from: "random",
          },
          ease: "back.out(1.7)",
        },
        "-=0.8"
      )
      .from(
        ".center-portrait",
        {
          duration: 1.2,
          scale: 0,
          rotation: 180,
          opacity: 0,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      .to(
        ".geometric-container",
        {
          duration: 1.5,
          "--grid-opacity": 1,
          "--grid-scale": 1,
          ease: "power2.out",
        },
        "-=0.3"
      );
  }

  // 2. 텍스트 타이핑 애니메이션
  function typewriterEffect() {
    const titleLines = document.querySelectorAll(".title-line");

    titleLines.forEach((line, index) => {
      const text = line.textContent;
      line.textContent = "";

      // 각 글자를 span으로 감싸기
      const chars = text.split("");
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.opacity = "0";
        line.appendChild(span);
      });

      gsap.to(line.children, {
        duration: 0.05,
        opacity: 1,
        stagger: 0.05,
        delay: index * 0.5,
        ease: "power2.out",
      });
    });
  }

  // 모든 애니메이션 순서 배치치
  function init() {
    initAnimations();
    typewriterEffect();
  }

  // 애니메이션 시작
  init();
});
