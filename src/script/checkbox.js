export class Checkbox {
    constructor(element) {
      this.element = element;
      element.addEventListener("click", this.checkbox);
    }
    checkbox(event) {
      if (event.target.checked == true) {
        if (event.target.classList.contains("help__checkbox")) {
          helpMonthlyButton.classList.remove("disabled");
          helpOnceButton.classList.remove("disabled");
        }
        if (event.target.classList.contains("popup__checkbox")) {
          popupMonthlyButton.classList.remove("disabled");
          popupOnceButton.classList.remove("disabled");
        }
      } else {
        if (event.target.classList.contains("help__checkbox")) {
          helpMonthlyButton.classList.add("disabled");
          helpOnceButton.classList.add("disabled");
        }
        if (event.target.classList.contains("popup__checkbox")) {
          popupMonthlyButton.classList.add("disabled");
          popupOnceButton.classList.add("disabled");
        }
      }
    }
  }