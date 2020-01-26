const paymentCallback = function (message) {
    document.querySelector(".gratitude").classList.add("gratitude_is_opened");
    document.querySelector(".gratitude__title").textContent = message;
  }
  //оплата
  export function oncePay(email, amount) {
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
      paymentCallback.bind(this, "Спасибо, что вы помогаете ребятам с нарушением интеллекта заниматься спортом и развиваться."),
      paymentCallback.bind(this, "К сожалению, что-то пошло не так и вы не смогли помочь нашим ребятам. Попробуйте еще раз")
      );
  }
   export function monthPay(email, amount) {
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
      paymentCallback.bind(this, "Спасибо, что вы помогаете ребятам с нарушением интеллекта заниматься спортом и развиваться."),
      paymentCallback.bind(this, "К сожалению, что-то пошло не так и вы не смогли помочь нашим ребятам. Попробуйте еще раз")
    );
  }