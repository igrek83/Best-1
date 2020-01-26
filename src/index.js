import {Radioinput, popupAmount, helpAmount, popupRandomSumma, helpRandomSumma, popupArray, helpArray} from "./script/radioinput.js";
import {oncePay, monthPay} from "./script/finance.js";
import {Checkbox} from "./script/checkbox.js";
import {Social} from "./script/social.js";
import {Copyurl} from "./script/copyurl.js";
import {Video} from "./script/video.js";
import {Popup} from "./script/popup.js";
import {Schare} from "./script/schare.js";
import {Slider} from "./script/slider.js";
import "./style.css";
const popupHeader = new Popup(document.querySelector(".header__button"), document.querySelector(".popup"));
const popupFooter = new Popup(document.querySelector(".footer__button"), document.querySelector(".popup"));
const helpCheckbox = new Checkbox(document.querySelector(".help__checkbox"));
const popupCheckbox = new Checkbox(document.querySelector(".popup__checkbox"));
const popupRadio = new Radioinput(popupRandomSumma);
const helpRadio = new Radioinput(helpRandomSumma);
const popupForm = document.forms.popupForm; //форма из popup
const helpForm = document.forms.helpForm; //встроенная форма
//кнопки форм
const popupMonthlyButton = document.querySelector("#popupMonthlyButton");
const popupOnceButton = document.querySelector("#popupOnceButton");
const helpMonthlyButton = document.querySelector("#helpMonthlyButton");
const helpOnceButton = document.querySelector("#helpOnceButton");
//закрыть после оплаты
const gratitudeClose = document.querySelector(".gratitude__close");
//скролл до блока со сметой
window.onscroll = function () {
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
  let block = document.querySelector(".donation").offsetTop;
  const header = document.querySelector(".header");
  if (scroll > block) {
    header.classList.add("header_is_opened");
  }
  if (scroll < block) {
    header.classList.remove("header_is_opened");
  }
}
function grClose() {
  document.querySelector(".gratitude").classList.remove("gratitude_is_opened");
}
function popupCheckeds() {
  for (let i = 0; i < 4; i++) {
    if(popupArray[i].checked) {
      document.querySelector(".popup__random-summa-input").value = "";
      popupArray[4].checked = false;
    }
  }
}
function helpCheckeds() {
  for (let i = 0; i < 4; i++) {
    if(helpArray[i].checked) {
      document.querySelector(".help__random-summa-input").value = "";
      helpArray[4].checked = false;
    }
  }
}
function popupOnceHelp(event) {
  event.preventDefault();
  let email = popupForm.elements.emails;
  let amount = popupAmount();
  let amountNumber = Number.parseInt(amount);
  popupForm.reset();
  oncePay(email.value, amountNumber);
  popupHeader.close();
  popupFooter.close();
  popupMonthlyButton.setAttribute("disabled", "true");
  popupOnceButton.setAttribute("disabled", "true");
};
function popupMonthHelp(event) {
  event.preventDefault();
  let email = popupForm.elements.emails;
  let amount = popupAmount();
  let amountNumber = Number.parseInt(amount);
  monthPay(email.value, amountNumber);
  popupForm.reset();
  popupHeader.close();
  popupFooter.close();
  popupOnceButton.setAttribute("disabled", "true");
  popupMonthlyButton.setAttribute("disabled", "true");
};
function helpOnceHelp(event) {
  event.preventDefault();
  let email = helpForm.elements.email;
  let amount = helpAmount();
  let amountNumber = Number.parseInt(amount);
  oncePay(email.value, amountNumber);
  popupHeader.close();
  popupFooter.close();
  helpForm.reset();
  helpOnceButton.setAttribute("disabled", "true");
  helpMonthHelp.setAttribute("disabled", "true");
}
function helpMonthHelp(event) {
  event.preventDefault();
  let email = helpForm.elements.email;
  let amount = helpAmount();
  let amountNumber = Number.parseInt(amount);
  oncePay(email.value, amountNumber);
  popupHeader.close();
  popupFooter.close();
  helpForm.reset();
  helpMonthHelp.setAttribute("disabled", "true");
  helpOnceButton.setAttribute("disabled", "true");
}
gratitudeClose.addEventListener("click", grClose);
popupOnceButton.addEventListener("click", popupOnceHelp);
popupMonthlyButton.addEventListener("click", popupMonthHelp);
helpOnceButton.addEventListener("click", helpOnceHelp);
helpMonthlyButton.addEventListener("click", helpMonthHelp);
popupArray[0].addEventListener("click", popupCheckeds);
popupArray[1].addEventListener("click", popupCheckeds);
popupArray[2].addEventListener("click", popupCheckeds);
popupArray[3].addEventListener("click", popupCheckeds);
helpArray[0].addEventListener("click", helpCheckeds);
helpArray[1].addEventListener("click", helpCheckeds);
helpArray[2].addEventListener("click", helpCheckeds);
helpArray[3].addEventListener("click", helpCheckeds);