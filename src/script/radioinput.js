export const popupArray = document.querySelectorAll(`[name="summas"]`);
export const popupRandomSumma = document.querySelector(".popup__random-summa-input");
export const helpArray = document.querySelectorAll(`[name="summa"]`);
export const helpRandomSumma = document.querySelector(".help__random-summa-input");

export class Radioinput {
    constructor(element) {
        this.element = element;
        this.element.addEventListener("click", this.switching);
    }
    switching() {
        if(popupRandomSumma.value > 0) {
          for (let i = 0; i < 4; i++) {
            popupArray[i].checked = false;
          }
          popupArray[4].checked = true;
          popupArray[4].value = popupRandomSumma.value;
        }
        if(helpRandomSumma.value > 0) {
          for (let i = 0; i < 4; i++) {
            helpArray[i].checked = false;
          }
          helpArray[4].checked = true;
          helpArray[4].value = helpRandomSumma.value;
        }
    }
}
export const popupAmount = (function() {
    for (let i = 0; i < popupArray.length; i++) {
      if(popupArray[i].checked) {
        if(document.querySelector("#popupRandom").checked) {
          popupArray[i].value = popupRandomSumma.value;
        }
       return popupArray[i].value;
      }
    }
}); 
export const helpAmount = (function() {
    for (let i = 0; i < helpArray.length; i++) {
      if(helpArray[i].checked) {
        if(document.querySelector("#helpRandom").checked) {
          helpArray[i].value = helpRandomSumma.value;
        }
       return helpArray[i].value;
      }
    }
});