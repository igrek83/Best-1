//работа кнопок влево/вправо слайдера
  export class Slider {
      constructor(element) {
          this.element = element;
          this.element.addEventListener("click", this.arrow);
      }
      arrow(event) {
        const sliderArray = document.querySelectorAll(`[name="slider"]`);
        const arrowRight = document.querySelector(".description__arrow_theme_right");
        if(event.target.classList.contains("description__arrow_theme_left")) {
            for (let i = 0; i < sliderArray.length; i++) {
                if (sliderArray[i].checked) {
                  sliderArray[i].removeAttribute("checked");
                  if (i > 0) {
                    sliderArray[i].previousElementSibling.setAttribute("checked", "true");
                    return;
                  }
                  if (i == 0) {
                    sliderArray[4].setAttribute("checked", "true");
                    return;
                  }
                }
              }
        }
        if(event.target.classList.contains("description__arrow_theme_right")) {
            for (let i = 0; i < sliderArray.length; i++) {
                if (sliderArray[i].checked) {
                  sliderArray[i].removeAttribute("checked");
                  if (i < 4) {
                    sliderArray[i].nextElementSibling.setAttribute("checked", "true");
                    return;
                  }
                  if (i > 3) {
                    sliderArray[0].setAttribute("checked", "true");
                    return;
                  }
                }
              }
        }
      }
  }
  const right = new Slider(document.querySelector(".description__arrow_theme_right"));
  const left = new Slider(document.querySelector(".description__arrow_theme_left"));