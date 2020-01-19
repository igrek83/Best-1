const popupInputName = document.querySelector(`.popup__about-input[name="names"]`);
const popupInputEmail = document.querySelector(`.popup__about-input[name="emails"]`);
const helpInputName = document.querySelector(`.help__about-input[name="name"]`);
const helpInputEmail = document.querySelector(`.help__about-input[name="email"]`);
//валидация инпутов
export class Validate {
  constructor(input) {
    this.input = input;
    this.input.addEventListener(`input`, this.handleValidate.bind(this));
  }
  validate() {
    if (!this.input.checkValidity()) {
      this.errorMessage();
      this.input.classList.add("color-error");
      if (!popupInputName.checkValidity() || !popupInputEmail.checkValidity()) {
        popupMonthlyButton.setAttribute("disabled", "true");
        popupOnceButton.setAttribute("disabled", "true");
      }
      if (!helpInputName.checkValidity() || !helpInputEmail.checkValidity()) {
        helpMonthlyButton.setAttribute("disabled", "true");
        helpOnceButton.setAttribute("disabled", "true");
      }
    }
    if(this.input.checkValidity()) {
      this.resetError();
      this.input.classList.remove("color-error");
      if (popupInputName.checkValidity() && popupInputEmail.checkValidity()) {
        popupMonthlyButton.removeAttribute("disabled");
        popupOnceButton.removeAttribute("disabled");
      }
      if (helpInputName.checkValidity() && helpInputEmail.checkValidity()) {
        helpMonthlyButton.removeAttribute("disabled");
        helpOnceButton.removeAttribute("disabled");
      }
    }
  }
  errorMessage() {
    let element = this.input;
    let error = element.nextElementSibling;
    error.classList.add(`popup__about-error_is_opened`);
    if (element.validity.valueMissing === true) {
      error.textContent = "Пожалуйста, заполните поле";
    }
    if ((!popupInputEmail.checkValidity() && element.name === `emails`) || (!helpInputEmail.checkValidity() && element.name === `email`)) {
      error.textContent = "Адрес почты указан в неверном формате";
    }
  }
  resetError() {
    this.input.nextElementSibling.classList.remove(`popup__about-error_is_opened`);
    this.input.nextElementSibling.texcontent = "";
  }
  handleValidate(event) {
    this.validate(event.target);
  }
}
export {popupInputName, popupInputEmail, helpInputName, helpInputEmail};