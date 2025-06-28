document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const carousel = document.querySelector('.carousel');
  
    let direction = -1;
    let autoplay = setInterval(nextPlay, 3000);
  
    const dot1 = document.querySelector('.dot-1');
    const dot2 = document.querySelector('.dot-2');
    const dot3 = document.querySelector('.dot-3');
    const dot4 = document.querySelector('.dot-4');
    const dot5 = document.querySelector('.dot-5');
  
    let dotList = [dot1, dot2, dot3, dot4, dot5];
    let currentDot = 1;
    let currentDirect = 'right';
  
    left.addEventListener('click', () => {
      currentDirect = 'left';
      if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
        direction = 1;
      }
      carousel.style.justifyContent = 'flex-end';
      slider.style.transform = 'translate(20%)';
      pausePlay();
    });
  
    right.addEventListener('click', () => {
      currentDirect = 'right';
      setTimeout(() => nextPlay());
      pausePlay();
    });
  
    slider.addEventListener('transitionend', () => {
      if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
      } else if (direction === 1) {
        slider.prepend(slider.lastElementChild);
      }
      slider.style.transition = 'none';
      slider.style.transform = 'translate(0)';
      setTimeout(() => {
        slider.style.transition = 'all 0.5s';
      });
      if (currentDirect === 'right') {
        setCurrentSlide();
      } else {
        setPreviousSlide();
      }
    });
  
    function nextPlay() {
      currentDirect = 'right';
      if (direction === 1) {
        slider.prepend(slider.lastElementChild);
        direction = -1;
      }
      carousel.style.justifyContent = 'flex-start';
      slider.style.transform = 'translate(-20%)';
    }
  
    function pausePlay() {
      clearInterval(autoplay);
      autoplay = setInterval(nextPlay, 3000);
    }
  
    function setCurrentSlide() {
      dotList[currentDot - 1].style.backgroundColor = 'transparent';
      if (dotList[currentDot]) dotList[currentDot].style.backgroundColor = 'black';
      if (currentDot === 5) {
        dotList[0].style.backgroundColor = 'black';
        currentDot = 1;
      } else {
        currentDot += 1;
      }
    }
  
    function setPreviousSlide() {
      if (currentDot === 1) {
        dotList[4].style.backgroundColor = 'black';
        dotList[0].style.backgroundColor = 'transparent';
        currentDot = 5;
      } else {
        currentDot -= 1;
      }
      if (dotList[currentDot]) dotList[currentDot].style.backgroundColor = 'transparent';
      if (dotList[currentDot - 1]) dotList[currentDot - 1].style.backgroundColor = 'black';
    }
  
    dotList[0].style.backgroundColor = 'black';
  
    dotList.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        clearInterval(autoplay);
        dotList.forEach((d, i) => {
          d.style.backgroundColor = i === index ? 'black' : 'transparent';
        });
        const slideDifference = index - (currentDot - 1);
        if (slideDifference > 0) {
          for (let i = 0; i < slideDifference; i++) {
            slider.appendChild(slider.firstElementChild);
          }
        } else if (slideDifference < 0) {
          for (let i = 0; i < Math.abs(slideDifference); i++) {
            slider.prepend(slider.lastElementChild);
          }
        }
        slider.style.transition = 'all 0.5s';
        slider.style.transform = 'translate(0)';
        setTimeout(() => {
          slider.style.transition = 'all 0.5s';
        });
        currentDot = index + 1;
        autoplay = setInterval(nextPlay, 3000);
      });
    });
  });
  