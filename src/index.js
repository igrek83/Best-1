import {Social} from "./script/social.js";
import {Copyurl} from "./script/copyurl.js";
import {Video} from "./script/video.js";
import {Popup} from "./script/popup.js";
import {Schare} from "./script/schare.js";
import {Slider} from "./script/slider.js";
import "./style.css";
const popupHeader = new Popup(document.querySelector(".header__button"), document.querySelector(".popup"));
const popupFooter = new Popup(document.querySelector(".footer__button"), document.querySelector(".popup"));
const popupForm = document.forms.popupForm;   //форма из popup
const helpForm = document.forms.helpForm;     //встроенная форма
//чекбоксы
const popupCheckbox = popupForm.elements.agreements;
const helpCheckbox = helpForm.elements.agreement;
//кнопки форм
const popupMonthlyButton = document.querySelector("#popupMonthlyButton");
const popupOnceButton = document.querySelector("#popupOnceButton");
const helpMonthlyButton = document.querySelector("#helpMonthlyButton");
const helpOnceButton = document.querySelector("#helpOnceButton");
//закрыть после оплаты
const gratitudeClose = document.querySelector(".gratitude__close");
//инпуты с суммами
const popupSumma = document.querySelector("#popupRandomSumma");
const helpSumma = document.querySelector("#helpRandomSumma");

window.onscroll = function() {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;
    let block = document.querySelector(".donation").offsetTop;
    if (scroll > block) {
        document.querySelector(".header").classList.add("header_is_opened");    
    }
    if (scroll < block) {
        document.querySelector(".header").classList.remove("header_is_opened");    
    } 
}
//блокирование кнопок при отсутствии галочки в чекбоксе
const popupBlock = () => {
    if(popupCheckbox.checked) {
      popupMonthlyButton.classList.remove("disabled");
      popupOnceButton.classList.remove("disabled");
    }
    else {
      popupMonthlyButton.classList.add("disabled");
      popupOnceButton.classList.add("disabled");
    }
  };
  const helpBlock =() => {
    if(helpCheckbox.checked) {
      helpMonthlyButton.classList.remove("disabled");
      helpOnceButton.classList.remove("disabled");
    }
    else {
      helpMonthlyButton.classList.add("disabled");
      helpOnceButton.classList.add("disabled");
    }
  };
  function grClose() {
    document.querySelector(".gratitude").classList.remove("gratitude_is_opened");
  }
  function onclick(event) {
    let language = event.target.value;
    popupSumma.value = language;
  }
  for (let i = 0; i < 4; i++) {
    popupForm.summas[i].addEventListener("click", onclick);
  }
  function onclicked(event) {
    let language = event.target.value;
    helpSumma.value = language;
  }
  for (let i = 0; i < 4; i++) {
    helpForm.summa[i].addEventListener("click", onclicked);
  }
  //оплата
  function oncePay(email, amount) {
    const widget = new cp.CloudPayments();
      widget.charge({ // options
        publicId: 'test_api_00000000000000000000001',  //id из личного кабинета
        description: "Пожертвование в фонд BEST BUDDIES", //назначение
        amount: amount, //сумма
        currency: 'RUB', //валюта
        invoiceId: '1234567', //номер заказа  (необязательно)
        accountId: email, //идентификатор плательщика (необязательно)
        skin: "classic", //дизайн виджета
        data: {
          myProp: 'myProp value' //произвольный набор параметров
        }
      },
        function () {
          document.querySelector(".gratitude").classList.add("gratitude_is_opened");
          document.querySelector(".gratitude__title").textContent = "Спасибо, что вы помогаете ребятам с нарушением интеллекта заниматься спортом и развиваться.";       
        },
        function () {
            document.querySelector(".gratitude").classList.add("gratitude_is_opened");
            document.querySelector(".gratitude__title").textContent = "К сожалению, что-то пошло не так и вы не смогли помочь нашим ребятам. Попробуйте еще раз";   
        });
  };
  function monthPay(email, amount) {
    const widget = new cp.CloudPayments();
      const data = {};
      data.cloudPayments = {recurrent: { interval: 'Month', period: 1}}
      widget.charge({ // options
        publicId: 'test_api_00000000000000000000001',  //id из личного кабинета
        description: "Пожертвование в фонд BEST BUDDIES", //назначение
        amount: amount, //сумма
        currency: 'RUB', //валюта
        invoiceId: '1234567', //номер заказа  (необязательно)
        accountId: email, //идентификатор плательщика (необязательно)
        skin: "classic", //дизайн виджета
        data: data
      },
      function () {
        document.querySelector(".gratitude").classList.add("gratitude_is_opened");
        document.querySelector(".gratitude__title").textContent = "Спасибо, что вы помогаете ребятам с нарушением интеллекта заниматься спортом и развиваться.";   
      },
      function () {
        document.querySelector(".gratitude").classList.add("gratitude_is_opened");
        document.querySelector(".gratitude__title").textContent = "К сожалению, что-то пошло не так и вы не смогли помочь нашим ребятам. Попробуйте еще раз";   
    });
  };
  function popupOnceHelp(event) {
      event.preventDefault();
      let email = popupForm.elements.emails;
      let amount = popupForm.elements.popupRandomSumma;
      let amountNumber = Number.parseInt(amount.value);
      oncePay(email.value, amountNumber);
      popupForm.reset();
      popupHeader.close();
      popupFooter.close();
  };
  function popupMonthHelp(event) {
    event.preventDefault();
    let email = popupForm.elements.emails;
    let amount = popupForm.elements.popupRandomSumma;
    let amountNumber = Number.parseInt(amount.value);
    monthPay(email.value, amountNumber);
    popupForm.reset();
    popupHeader.close();
    popupFooter.close();
  };
  function helpOnceHelp(event) {
      event.preventDefault();
      let email = helpForm.elements.email;
      let amount = helpForm.elements.helpRandomSumma;
      let amountNumber = Number.parseInt(amount.value);
      oncePay(email.value, amountNumber);
      popupHeader.close();
      popupFooter.close();
      helpForm.reset();
      document.querySelector("#helpMonthlyButton").setAttribute("disabled", "true");
      document.querySelector("#helpOnceButton").setAttribute("disabled", "true");
  }
  function helpMonthHelp(event) {
    event.preventDefault();
    let email = helpForm.elements.email;
    let amount = helpForm.elements.helpRandomSumma;
    let amountNumber = Number.parseInt(amount.value);
    oncePay(email.value, amountNumber);
    popupHeader.close();
    popupFooter.close();
    helpForm.reset();
    document.querySelector("#helpMonthlyButton").setAttribute("disabled", "true");
    document.querySelector("#helpOnceButton").setAttribute("disabled", "true");
  }
  popupCheckbox.addEventListener("click", popupBlock);
  helpCheckbox.addEventListener("click", helpBlock);
  gratitudeClose.addEventListener("click", grClose);
  popupOnceButton.addEventListener("click", popupOnceHelp);
  popupMonthlyButton.addEventListener("click", popupMonthHelp);
  helpOnceButton.addEventListener("click", helpOnceHelp);
  helpMonthlyButton.addEventListener("click", helpMonthHelp);