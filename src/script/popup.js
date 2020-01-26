import {Validate, popupInputName, popupInputEmail, helpInputName, helpInputEmail} from "./validate.js";
const popupInputValidate = new Validate(popupInputName);
const popupEmailValidate = new Validate(popupInputEmail);
const helpInputValidate = new Validate(helpInputName);
const helpEmailValidate = new Validate(helpInputEmail);
//открытиие-закрытие формы
export class Popup {
    constructor(activButton, popup) {
      this.activButton = activButton;
      this.popup = popup;
      this.activButton.addEventListener("click", this.open);
      this.popup.querySelector(`.popup__close`).addEventListener(`click`, this.close);
    }
    open(event) {
      document.querySelector('.header').classList.add("header_is_opened");  
      if(event.target.classList.contains("header__button") || event.target.classList.contains("footer__button")) {
        document.querySelector(".popup").classList.add("popup_is_opened");
      }
    }
    close() {
      document.querySelector(".popup").classList.remove("popup_is_opened");
      document.querySelector('.header').classList.remove("header_is_opened");
      popupForm.reset();
      popupInputValidate.resetError();
      popupEmailValidate.resetError();
      helpInputValidate.resetError();
      helpEmailValidate.resetError();
    }
}