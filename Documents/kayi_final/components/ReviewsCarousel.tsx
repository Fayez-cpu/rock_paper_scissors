'use client';

import Script from 'next/script';
import styles from './ReviewsCarousel.module.css';

export default function ReviewsCarousel() {
  return (
    <>
      <Script id="carousel-script" strategy="afterInteractive">
        {`
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
              } else {
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
        `}
      </Script>

      <div className={styles.carouselWrapper}>
        <div className={`${styles.carousel} carousel`}>
          <div className={`${styles.slider} slider`}>
            {/* Slide 1 */}
            <div className={`${styles.slide} slide`}>
              <div className={styles.review}>
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjVMeddJxthZuH5mDn67UaeGlYyZDZVVMV1WfIiFCq1B1TRei_CoJw=w60-h60-p-rp-mo-ba5-br100"
                  className={styles.reviewIcon}
                  alt="review icon"
                />
                <p className={styles.reviewText}>
                  Had the most amazing cheese Kunafa and baklava... so so happy! The food was just delicious!
                </p>
              </div>
            </div>
            {/* Slide 2 */}
            <div className={`${styles.slide} slide`}>
              <div className={styles.review}>
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjWNXd1Zn_jZGpaS8kOdZ2KsgmKFK23mGmCY-raG4vmzFtz-18vvrg=w60-h60-p-rp-mo-br100"
                  className={styles.reviewIcon}
                  alt="review icon"
                />
                <p className={styles.reviewText}>
                  Best knafa and baklava. Tastes really good and not very sugary, just what I was looking for!
                </p>
              </div>
            </div>
            {/* Slide 3 */}
            <div className={`${styles.slide} slide`}>
              <div className={styles.review}>
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjUIRhoI9NmZ8aYHVIKpFyJcGDvLbJtd3vRs6HIJJK-mwzMuSGg=w60-h60-p-rp-mo-ba4-br100"
                  className={styles.reviewIcon}
                  alt="review icon"
                />
                <p className={styles.reviewText}>Incredible home-made Arabic sweets!!</p>
              </div>
            </div>
            {/* Slide 4 */}
            <div className={`${styles.slide} slide`}>
              <div className={styles.review}>
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJS8qw8_wLHjEOK6po9AWSVt2vVIO-_geGLRYv09NqXhSLQkQ=w60-h60-p-rp-mo-ba3-br100"
                  className={styles.reviewIcon}
                  alt="review icon"
                />
                <p className={styles.reviewText}>
                  Having just had baklava and Kunafa in the Middle East, I ordered the same from Damascus Rose. It
                  is wonderfully authentic and not overly sweetened. Highly recommended!
                </p>
                <img
                  src="https://lh5.googleusercontent.com/p/AF1QipO9oD-jWyZrmtHQWZq-am45uXFTgxswngbKFues=w600-h321-p-k-no"
                  className={styles.imgReview}
                  alt="review image"
                />
              </div>
            </div>
            {/* Slide 5 */}
            <div className={`${styles.slide} slide`}>
              <div className={styles.review}>
                <img
                  src="https://lh3.googleusercontent.com/a-/ALV-UjUYZoI0voMx9BES-X3VCRgEEP9zw41P7ZW97gnrsXtEOrOMBkBK=w60-h60-p-rp-mo-ba4-br100"
                  className={styles.reviewIcon}
                  alt="review icon"
                />
                <p className={styles.reviewText}>
                  I ordered Kunafa and Ech el Bolbol, and it was amazing! Incredibly delicious and so light, you
                  can't get enough of it. The service was also really fast. Great prices, I'll definitely order again!
                </p>
                <img
                  src="https://lh5.googleusercontent.com/p/AF1QipO9oD-jWyZrmtHQWZq-am45uXFTgxswngbKFues=w600-h321-p-k-no"
                  className={styles.imgReview}
                  alt="review image"
                />
              </div>
            </div>
          </div>

          <div className={styles.controls}>
            <span className="arrow left">{'<'}</span>
            <span className="arrow right">{'>'}</span>
          </div>
        </div>

        <div className={styles.dots}>
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
        </div>
      </div>
    </>
  );
}
